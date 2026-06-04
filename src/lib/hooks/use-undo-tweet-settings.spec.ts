import {
  shouldUseUndoTweet,
  type UndoTweetSettings
} from './use-undo-tweet-settings';

const enabledSettings: UndoTweetSettings = {
  enabled: true,
  intervalSeconds: 20,
  kinds: {
    tweet: true,
    reply: true,
    quote: true,
    thread: true,
    poll: true
  }
};

describe('Undo Tweet settings', () => {
  it('is disabled globally when the main toggle is off', () => {
    expect(
      shouldUseUndoTweet({ ...enabledSettings, enabled: false }, 'tweet')
    ).toBe(false);
  });

  it('respects per-surface toggles when enabled', () => {
    const settings: UndoTweetSettings = {
      ...enabledSettings,
      kinds: {
        tweet: true,
        reply: false,
        quote: true,
        thread: true,
        poll: true
      }
    };

    expect(shouldUseUndoTweet(settings, 'tweet')).toBe(true);
    expect(shouldUseUndoTweet(settings, 'reply')).toBe(false);
    expect(shouldUseUndoTweet(settings, 'quote')).toBe(true);
  });
});
