import { useCallback, useEffect, useMemo, useState } from 'react';

const notTwitterBlueSettingsKey = 'not-twitter:blue-settings:v1';
const notTwitterBlueSettingsChangedEvent =
  'not-twitter:blue-settings-changed';

export type NotTwitterBlueSettings = {
  readerMode: boolean;
};

export const defaultNotTwitterBlueSettings: NotTwitterBlueSettings = {
  readerMode: false
};

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
          : defaultNotTwitterBlueSettings.readerMode
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

  return useMemo(
    () => ({ notTwitterBlueSettings, setReaderModeEnabled }),
    [notTwitterBlueSettings, setReaderModeEnabled]
  );
}
