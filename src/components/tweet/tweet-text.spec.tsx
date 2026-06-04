jest.mock('@atproto/syntax', () => ({
  ensureValidDid: (input: string): void => {
    if (!/^did:[a-z]+:[a-zA-Z0-9._:%-]*[a-zA-Z0-9._-]$/.test(input))
      throw new Error('Invalid DID');
    if (input.length > 2048) throw new Error('Invalid DID');
  },
  isValidHandle: (input: string): boolean =>
    /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/.test(
      input
    )
}));

import { render, screen } from '@testing-library/react';
import { ThemeContext } from '@lib/context/theme-context';
import { TweetText } from './tweet-text';
import type { ComponentProps } from 'react';

const themeValue = {
  theme: 'dark',
  accent: 'blue',
  fontSize: 'md',
  hideBskySocialSuffix: false,
  squareProfilePictures: false,
  changeTheme: jest.fn(),
  changeAccent: jest.fn(),
  changeFontSize: jest.fn(),
  toggleColorScheme: jest.fn(),
  toggleHideBskySocialSuffix: jest.fn(),
  toggleSquareProfilePictures: jest.fn()
} as const;

function renderTweetText(
  text: string,
  props?: Partial<Omit<ComponentProps<typeof TweetText>, 'text'>>
): void {
  render(
    <ThemeContext.Provider value={themeValue}>
      <TweetText text={text} {...props} />
    </ThemeContext.Provider>
  );
}

describe('TweetText', () => {
  it('keeps entities accented when links are disabled', () => {
    renderTweetText('@gork.bluesky.bot is this true #NotTwitter example.com', {
      disableLinks: true
    });

    const mention = screen.getByText('@gork.bluesky.bot');
    const hashtag = screen.getByText('#NotTwitter');
    const url = screen.getByText('example.com');

    expect(mention.className).toContain('text-main-accent');
    expect(hashtag.className).toContain('text-main-accent');
    expect(url.className).toContain('text-main-accent');
    expect(mention.closest('a')).toBeNull();
    expect(hashtag.closest('a')).toBeNull();
    expect(url.closest('a')).toBeNull();
  });
});
