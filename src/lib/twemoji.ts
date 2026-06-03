import twemoji from '@twemoji/api';
import type { TwemojiOptions } from '@twemoji/api';

export const twemojiOptions: TwemojiOptions = {
  folder: 'svg',
  ext: '.svg',
  className: 'not-twitter-twemoji',
  attributes: () => ({
    draggable: 'false',
    decoding: 'async',
    loading: 'lazy'
  })
};

export function parseTwemojiNode(node: HTMLElement): void {
  twemoji.parse(node, twemojiOptions);
}

export function getTwemojiSvgUrl(emoji: string): string {
  const codepoint = twemoji.convert.toCodePoint(emoji).replace(/-fe0f/g, '');

  return `${twemoji.base}svg/${codepoint}.svg`;
}
