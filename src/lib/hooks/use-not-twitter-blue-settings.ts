import { useCallback, useEffect, useMemo, useState } from 'react';

const notTwitterBlueSettingsKey = 'not-twitter:blue-settings:v1';
const notTwitterBlueSettingsChangedEvent =
  'not-twitter:blue-settings-changed';

export type NotTwitterBlueSettings = {
  readerMode: boolean;
  readerTextSize: 'small' | 'medium' | 'large';
};

export const defaultNotTwitterBlueSettings: NotTwitterBlueSettings = {
  readerMode: false,
  readerTextSize: 'medium'
};

export const readerTextSizes: NotTwitterBlueSettings['readerTextSize'][] = [
  'small',
  'medium',
  'large'
];

function isReaderTextSize(
  value: unknown
): value is NotTwitterBlueSettings['readerTextSize'] {
  return (
    typeof value === 'string' &&
    readerTextSizes.includes(
      value as NotTwitterBlueSettings['readerTextSize']
    )
  );
}

function readNotTwitterBlueSettings(): NotTwitterBlueSettings {
  if (typeof window === 'undefined') return defaultNotTwitterBlueSettings;

  try {
    const storedValue = localStorage.getItem(notTwitterBlueSettingsKey);
    if (!storedValue) return defaultNotTwitterBlueSettings;

    const parsed = JSON.parse(storedValue) as Partial<NotTwitterBlueSettings>;

    return {
      readerMode:
        typeof parsed.readerMode === 'boolean'
          ? parsed.readerMode
          : defaultNotTwitterBlueSettings.readerMode,
      readerTextSize: isReaderTextSize(parsed.readerTextSize)
        ? parsed.readerTextSize
        : defaultNotTwitterBlueSettings.readerTextSize
    };
  } catch {
    return defaultNotTwitterBlueSettings;
  }
}

function writeNotTwitterBlueSettings(settings: NotTwitterBlueSettings): void {
  localStorage.setItem(notTwitterBlueSettingsKey, JSON.stringify(settings));
  window.dispatchEvent(new Event(notTwitterBlueSettingsChangedEvent));
}

export function useNotTwitterBlueSettings(): {
  notTwitterBlueSettings: NotTwitterBlueSettings;
  setReaderModeEnabled: (enabled: boolean) => void;
  setReaderTextSize: (
    readerTextSize: NotTwitterBlueSettings['readerTextSize']
  ) => void;
} {
  const [notTwitterBlueSettings, setNotTwitterBlueSettings] = useState(
    defaultNotTwitterBlueSettings
  );

  useEffect(() => {
    const refresh = (): void =>
      setNotTwitterBlueSettings(readNotTwitterBlueSettings());

    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener(notTwitterBlueSettingsChangedEvent, refresh);

    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener(notTwitterBlueSettingsChangedEvent, refresh);
    };
  }, []);

  const setReaderModeEnabled = useCallback((readerMode: boolean): void => {
    const nextSettings = {
      ...readNotTwitterBlueSettings(),
      readerMode
    };
    setNotTwitterBlueSettings(nextSettings);
    writeNotTwitterBlueSettings(nextSettings);
  }, []);

  const setReaderTextSize = useCallback(
    (readerTextSize: NotTwitterBlueSettings['readerTextSize']): void => {
      const nextSettings = {
        ...readNotTwitterBlueSettings(),
        readerTextSize
      };
      setNotTwitterBlueSettings(nextSettings);
      writeNotTwitterBlueSettings(nextSettings);
    },
    []
  );

  return useMemo(
    () => ({
      notTwitterBlueSettings,
      setReaderModeEnabled,
      setReaderTextSize
    }),
    [notTwitterBlueSettings, setReaderModeEnabled, setReaderTextSize]
  );
}
