import type { ImagePreview } from './types/file';
import type { TweetCard, TweetReplySetting } from './types/tweet';

export type TweetDraftType = 'tweet' | 'reply' | 'quote';

export type TweetDraftScope = {
  userId: string;
  type: TweetDraftType;
  parentId?: string | null;
  parentUsername?: string | null;
  quoteTweetId?: string | null;
};

export type LocalTweetDraft = {
  id: string;
  userId: string;
  type: TweetDraftType;
  text: string;
  replySetting: TweetReplySetting;
  gifCard: TweetCard | null;
  gifPreview: ImagePreview | null;
  updatedAt: number;
  parentId?: string | null;
  parentUsername?: string | null;
  quoteTweetId?: string | null;
};

type SaveTweetDraftInput = {
  text: string;
  replySetting: TweetReplySetting;
  gifCard: TweetCard | null;
  gifPreview: ImagePreview | null;
};

const tweetDraftsKey = 'not-twitter:tweet-drafts:v1';

export const tweetDraftsChangedEvent = 'not-twitter:tweet-drafts-changed';

function getDraftContextId({
  type,
  parentId,
  quoteTweetId
}: TweetDraftScope): string {
  if (type === 'reply') return parentId ?? 'unknown-reply';
  if (type === 'quote') return quoteTweetId ?? 'unknown-quote';

  return 'new';
}

function isLocalTweetDraft(value: unknown): value is LocalTweetDraft {
  if (!value || typeof value !== 'object') return false;

  const draft = value as Partial<LocalTweetDraft>;

  return (
    typeof draft.id === 'string' &&
    typeof draft.userId === 'string' &&
    typeof draft.type === 'string' &&
    typeof draft.text === 'string' &&
    typeof draft.updatedAt === 'number'
  );
}

function getStoredDrafts(): LocalTweetDraft[] {
  if (typeof window === 'undefined') return [];

  try {
    const parsed = JSON.parse(
      localStorage.getItem(tweetDraftsKey) ?? '[]'
    ) as unknown;

    return Array.isArray(parsed) ? parsed.filter(isLocalTweetDraft) : [];
  } catch {
    return [];
  }
}

function writeStoredDrafts(drafts: LocalTweetDraft[]): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(tweetDraftsKey, JSON.stringify(drafts));
    window.dispatchEvent(new Event(tweetDraftsChangedEvent));
  } catch {
    // Drafts are best-effort local state; composing should never fail on quota.
  }
}

export function getTweetDraftId(scope: TweetDraftScope): string {
  return [scope.userId, scope.type, getDraftContextId(scope)].join(':');
}

export function getTweetDraft(scope: TweetDraftScope): LocalTweetDraft | null {
  const draftId = getTweetDraftId(scope);

  return getStoredDrafts().find(({ id }) => id === draftId) ?? null;
}

export function getTweetDraftsForUser(
  userId: string,
  type?: TweetDraftType
): LocalTweetDraft[] {
  return getStoredDrafts()
    .filter(
      (draft) => draft.userId === userId && (!type || draft.type === type)
    )
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

export function saveTweetDraft(
  scope: TweetDraftScope,
  { text, replySetting, gifCard, gifPreview }: SaveTweetDraftInput
): LocalTweetDraft | null {
  const hasText = !!text.trim();
  const hasGif = !!gifCard && !!gifPreview;

  if (!hasText && !hasGif) {
    deleteTweetDraft(scope);
    return null;
  }

  const draft: LocalTweetDraft = {
    id: getTweetDraftId(scope),
    userId: scope.userId,
    type: scope.type,
    parentId: scope.parentId ?? null,
    parentUsername: scope.parentUsername ?? null,
    quoteTweetId: scope.quoteTweetId ?? null,
    text,
    replySetting,
    gifCard: hasGif ? gifCard : null,
    gifPreview: hasGif ? gifPreview : null,
    updatedAt: Date.now()
  };
  const drafts = getStoredDrafts().filter(({ id }) => id !== draft.id);

  writeStoredDrafts([draft, ...drafts]);

  return draft;
}

export function deleteTweetDraft(scopeOrId: TweetDraftScope | string): void {
  const draftId =
    typeof scopeOrId === 'string' ? scopeOrId : getTweetDraftId(scopeOrId);
  const nextDrafts = getStoredDrafts().filter(({ id }) => id !== draftId);

  writeStoredDrafts(nextDrafts);
}
