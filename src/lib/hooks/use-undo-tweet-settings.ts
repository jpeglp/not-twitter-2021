import { useCallback, useEffect, useMemo, useState } from 'react';

export const undoTweetIntervals = [5, 10, 20, 30, 60] as const;
export const undoTweetKinds = [
  'tweet',
  'reply',
  'quote',
  'thread'
] as const;

export type UndoTweetInterval = typeof undoTweetIntervals[number];
export type UndoTweetKind = typeof undoTweetKinds[number];

export type UndoTweetSettings = {
  enabled: boolean;
  intervalSeconds: UndoTweetInterval;
  kinds: Record<UndoTweetKind, boolean>;
};

const undoTweetSettingsKey = 'not-twitter:undo-tweet-settings:v1';
const undoTweetSettingsChangedEvent = 'not-twitter:undo-tweet-settings-changed';

export const defaultUndoTweetSettings: UndoTweetSettings = {
  enabled: false,
  intervalSeconds: 20,
  kinds: {
    tweet: true,
    reply: true,
    quote: true,
    thread: true
  }
};

function isUndoTweetInterval(value: unknown): value is UndoTweetInterval {
  return (
    typeof value === 'number' &&
    undoTweetIntervals.includes(value as UndoTweetInterval)
  );
}

function readUndoTweetSettings(): UndoTweetSettings {
  if (typeof window === 'undefined') return defaultUndoTweetSettings;

  try {
    const storedValue = localStorage.getItem(undoTweetSettingsKey);
    if (!storedValue) return defaultUndoTweetSettings;

    const parsed = JSON.parse(storedValue) as Partial<UndoTweetSettings>;
    const parsedKinds: Partial<Record<UndoTweetKind, boolean>> =
      parsed.kinds ?? {};

    return {
      enabled: parsed.enabled === true,
      intervalSeconds: isUndoTweetInterval(parsed.intervalSeconds)
        ? parsed.intervalSeconds
        : defaultUndoTweetSettings.intervalSeconds,
      kinds: {
        tweet:
          typeof parsedKinds.tweet === 'boolean'
            ? parsedKinds.tweet
            : defaultUndoTweetSettings.kinds.tweet,
        reply:
          typeof parsedKinds.reply === 'boolean'
            ? parsedKinds.reply
            : defaultUndoTweetSettings.kinds.reply,
        quote:
          typeof parsedKinds.quote === 'boolean'
            ? parsedKinds.quote
            : defaultUndoTweetSettings.kinds.quote,
        thread:
          typeof parsedKinds.thread === 'boolean'
            ? parsedKinds.thread
            : defaultUndoTweetSettings.kinds.thread
      }
    };
  } catch {
    return defaultUndoTweetSettings;
  }
}

function writeUndoTweetSettings(settings: UndoTweetSettings): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(undoTweetSettingsKey, JSON.stringify(settings));
  window.dispatchEvent(new Event(undoTweetSettingsChangedEvent));
}

export function useUndoTweetSettings(): {
  undoTweetSettings: UndoTweetSettings;
  setUndoTweetEnabled: (enabled: boolean) => void;
  setUndoTweetIntervalSeconds: (intervalSeconds: UndoTweetInterval) => void;
  setUndoTweetKindEnabled: (kind: UndoTweetKind, enabled: boolean) => void;
} {
  const [undoTweetSettings, setUndoTweetSettings] = useState(
    defaultUndoTweetSettings
  );

  useEffect(() => {
    const refresh = (): void => setUndoTweetSettings(readUndoTweetSettings());

    refresh();
    window.addEventListener('storage', refresh);
    window.addEventListener(undoTweetSettingsChangedEvent, refresh);

    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener(undoTweetSettingsChangedEvent, refresh);
    };
  }, []);

  const updateUndoTweetSettings = useCallback(
    (updater: (settings: UndoTweetSettings) => UndoTweetSettings): void => {
      const nextSettings = updater(readUndoTweetSettings());

      setUndoTweetSettings(nextSettings);
      writeUndoTweetSettings(nextSettings);
    },
    []
  );

  const setUndoTweetEnabled = useCallback(
    (enabled: boolean): void =>
      updateUndoTweetSettings((settings) => ({ ...settings, enabled })),
    [updateUndoTweetSettings]
  );

  const setUndoTweetIntervalSeconds = useCallback(
    (intervalSeconds: UndoTweetInterval): void =>
      updateUndoTweetSettings((settings) => ({ ...settings, intervalSeconds })),
    [updateUndoTweetSettings]
  );

  const setUndoTweetKindEnabled = useCallback(
    (kind: UndoTweetKind, enabled: boolean): void =>
      updateUndoTweetSettings((settings) => ({
        ...settings,
        kinds: { ...settings.kinds, [kind]: enabled }
      })),
    [updateUndoTweetSettings]
  );

  return useMemo(
    () => ({
      undoTweetSettings,
      setUndoTweetEnabled,
      setUndoTweetIntervalSeconds,
      setUndoTweetKindEnabled
    }),
    [
      setUndoTweetEnabled,
      setUndoTweetIntervalSeconds,
      setUndoTweetKindEnabled,
      undoTweetSettings
    ]
  );
}

export function shouldUseUndoTweet(
  settings: UndoTweetSettings,
  kind: UndoTweetKind
): boolean {
  return settings.enabled && settings.kinds[kind];
}
