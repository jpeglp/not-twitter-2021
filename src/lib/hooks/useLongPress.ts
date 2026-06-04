import { useCallback, useEffect, useRef } from 'react';
import type { MouseEvent, PointerEvent } from 'react';

type LongPressOptions = {
  delay?: number;
  onLongPress: () => void;
  onPress: () => void;
};

type LongPressHandlers = {
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onContextMenu: (event: MouseEvent<HTMLElement>) => void;
  onPointerCancel: () => void;
  onPointerDown: (event: PointerEvent<HTMLElement>) => void;
  onPointerLeave: () => void;
  onPointerUp: () => void;
};

export function useLongPress({
  delay = 520,
  onLongPress,
  onPress
}: LongPressOptions): LongPressHandlers {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );
  const didLongPressRef = useRef(false);

  const clearTimer = useCallback((): void => {
    if (!timeoutRef.current) return;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = undefined;
  }, []);

  const runLongPress = useCallback((): void => {
    didLongPressRef.current = true;
    onLongPress();
  }, [onLongPress]);

  useEffect(() => clearTimer, [clearTimer]);

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLElement>): void => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;

      clearTimer();
      didLongPressRef.current = false;
      timeoutRef.current = setTimeout(runLongPress, delay);
    },
    [clearTimer, delay, runLongPress]
  );

  const onClick = useCallback(
    (event: MouseEvent<HTMLElement>): void => {
      if (didLongPressRef.current) {
        event.preventDefault();
        event.stopPropagation();
        didLongPressRef.current = false;
        return;
      }

      onPress();
    },
    [onPress]
  );

  const onContextMenu = useCallback(
    (event: MouseEvent<HTMLElement>): void => {
      event.preventDefault();
      clearTimer();

      if (didLongPressRef.current) return;

      runLongPress();
    },
    [clearTimer, runLongPress]
  );

  return {
    onClick,
    onContextMenu,
    onPointerCancel: clearTimer,
    onPointerDown,
    onPointerLeave: clearTimer,
    onPointerUp: clearTimer
  };
}
