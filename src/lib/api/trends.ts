import useSWR from 'swr';
import { getTrendCategory } from '@lib/trend-categories';
import type { SWRConfiguration } from 'swr';
import type {
  FilteredTrends,
  SuccessResponse,
  Trend
} from '@lib/types/place';

type BskyTrendingTopic = {
  topic: string;
  displayName?: string;
  description?: string;
  link: string;
  category?: string;
  postCount?: number;
};

type BskyTrendingTopicsResponse = {
  trends?: BskyTrendingTopic[];
};

type SwrHooksReturn = {
  loading: boolean;
  error: Error | undefined;
};

type UseTrendsReturn = SwrHooksReturn & {
  data: SuccessResponse | undefined;
};

type FilteredSuccessResponse = Omit<SuccessResponse, 'trends'> & {
  trends: FilteredTrends;
};

type FilteredUseTrendsReturn = SwrHooksReturn & {
  data: FilteredSuccessResponse | undefined;
};

const BSKY_TRENDS_ENDPOINT =
  'https://public.api.bsky.app/xrpc/app.bsky.unspecced.getTrends';
const MAX_TRENDS_LIMIT = 25;

function clampLimit(limit?: number): number {
  if (!limit || Number.isNaN(limit)) return 10;

  return Math.min(Math.max(limit, 1), MAX_TRENDS_LIMIT);
}

function toInternalBskyPath(link: string): string {
  if (link.startsWith('https://bsky.app')) return new URL(link).pathname;
  if (link.startsWith('/')) return link;

  return `/${link}`;
}

function formatTrendCategory(category?: string): string | undefined {
  const normalizedCategory = category?.trim();
  if (!normalizedCategory) return undefined;

  return normalizedCategory.replace(/\b[a-z]/g, (character) =>
    character.toUpperCase()
  );
}

function mapTopic(
  topic: BskyTrendingTopic,
  kind: Trend['kind'],
  rank: number
): Trend {
  return {
    kind,
    rank,
    name: topic.topic,
    query: topic.topic,
    displayName: topic.displayName ?? topic.topic,
    description: topic.description ?? null,
    category:
      kind === 'topic'
        ? formatTrendCategory(topic.category) ?? getTrendCategory(topic)
        : 'Feeds',
    promoted_content: null,
    tweet_volume: null,
    url: toInternalBskyPath(topic.link)
  };
}

async function fetchBlueskyTrends(url: string): Promise<SuccessResponse> {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error('Sorry, we could not load Bluesky trends right now.');

  const data = (await response.json()) as BskyTrendingTopicsResponse;
  const limit = clampLimit(Number(new URL(url).searchParams.get('limit')));
  const trends = (data.trends ?? [])
    .map((topic, index) => mapTopic(topic, 'topic', index + 1))
    .slice(0, limit);

  return { trends, location: 'Bluesky' };
}

export function useTrends(
  id: number,
  limit?: undefined,
  config?: SWRConfiguration
): UseTrendsReturn;

export function useTrends(
  id: number,
  limit: number,
  config?: SWRConfiguration
): FilteredUseTrendsReturn;

export function useTrends(
  id: number,
  limit?: number,
  config?: SWRConfiguration
): UseTrendsReturn | FilteredUseTrendsReturn {
  const params = new URLSearchParams();

  void id;

  params.set('limit', String(clampLimit(limit)));

  const { data, error } = useSWR<SuccessResponse, Error>(
    `${BSKY_TRENDS_ENDPOINT}?${params.toString()}`,
    fetchBlueskyTrends,
    config
  );

  return {
    data,
    error: error,
    loading: !error && !data
  };
}
