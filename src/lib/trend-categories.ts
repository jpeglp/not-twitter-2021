type TrendTopicForCategory = {
  topic: string;
  displayName?: string;
  description?: string;
  [key: string]: unknown;
};

type TrendCategoryRule = {
  category: string;
  keywords: readonly string[];
};

const PROVIDED_CATEGORY_KEYS = ['category', 'categoryName', 'topicCategory'];

const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  ai: 'Technology',
  arts: 'Arts',
  'arts/culture': 'Arts',
  'arts culture': 'Arts',
  business: 'Business',
  entertainment: 'Entertainment',
  elections: 'Elections',
  events: 'Events',
  feeds: 'Feeds',
  gaming: 'Gaming',
  lifestyle: 'Lifestyle',
  movies: 'Entertainment',
  music: 'Entertainment',
  news: 'News',
  politics: 'Politics',
  science: 'Science',
  sports: 'Sports',
  technology: 'Technology',
  world: 'World'
};

const TREND_CATEGORY_OVERRIDES: Record<string, string> = {
  'andy burnham': 'Politics',
  'ben palmer': 'Politics',
  'bari weiss': 'Politics',
  'backrooms': 'Entertainment',
  'bfc registration': 'Events',
  'blue sky art show': 'Arts',
  'bluesky art show': 'Arts',
  'canadian gp': 'Sports',
  'colbert show': 'Entertainment',
  'digital art': 'Entertainment',
  'desantis': 'Politics',
  'epstein files': 'Politics',
  'epstein scandals': 'Politics',
  'eugene vindman': 'Politics',
  'trey gowdy': 'Politics',
  'european cities': 'World',
  'euphoria': 'Entertainment',
  'god of war': 'Gaming',
  'jack quaid': 'Entertainment',
  'james bond': 'Entertainment',
  'state of play': 'Entertainment',
  'formula 1': 'Sports',
  'gop bill delay': 'Politics',
  'marco rubio': 'Politics',
  'sara jacobs': 'Politics',
  'mette frederiksen': 'Politics',
  'medicaid funding': 'Politics',
  'hull fc': 'Sports',
  'ice protests': 'Politics',
  'indie games': 'Gaming',
  'knicks': 'Sports',
  'kesari': 'Entertainment',
  'missile threat': 'World',
  'nba playoffs': 'Sports',
  'royals': 'Sports',
  'stephen colbert': 'Entertainment',
  'svengoolie': 'Entertainment',
  'tall photography': 'Arts',
  'the archers': 'Sports',
  'wcws': 'Sports',
  'texier': 'Sports',
  'the mandalorian': 'Entertainment',
  'trans rights': 'Culture/Politics',
  'transgender awareness month': 'Culture',
  'pride month': 'Culture',
  'pride events': 'Culture',
  'black history month': 'Culture',
  'taylor swift': 'Music',
  'slayyyter': 'Music',
  'mina the hollower': 'Gaming',
  'underscores': 'Music',
  'scott pelley': 'Entertainment',
  'kim petras': 'Music',
  'beyonce': 'Music',
  'drake': 'Music',
  'kendrick lamar': 'Music',
  'billie eilish': 'Music',
  'bts': 'Music',
  'blackpink': 'Music',
  'kpop': 'Music',
  'spotify wrapped': 'Music',
  'grammys': 'Music'
};

const TREND_CATEGORY_RULES: readonly TrendCategoryRule[] = [
  {
    category: 'World',
    keywords: [
      'conflict',
      'diplomacy',
      'relations',
      'israel',
      'foreign policy',
      'geopolitics',
      'global',
      'iran',
      'middle east',
      'missile',
      'nato',
      'nuclear',
      'palestine',
      'russia',
      'treaty',
      'ukraine',
      'war',
      'world'
    ]
  },
  {
    category: 'Politics',
    keywords: [
      'administration',
      'biden',
      'bill',
      'cabinet',
      'civil rights',
      'congress',
      'Candidacy',
      'court',
      'democrat',
      'democratic',
      'gop',
      'government',
      'governor',
      'harris',
      'human rights',
      'ice',
      'immigration',
      'lgbtq',
      'bessent',
      'minister',
      'obama',
      'parliament',
      'party',
      'policy',
      'politics',
      'president',
      'prime minister',
      'protest',
      'republican',
      'redistricting',
      'senate',
      'scandal',
      'supreme court',
      'transgender',
      'trump',
      'white house',
      'voting',
      'iowa',
      'votes'
    ]
  },
  {
    category: 'Sports',
    keywords: [
      'arsenal',
      'baseball',
      'basketball',
      'champions league',
      'championship',
      'f1',
      'fc',
      'football',
      'grand prix',
      'golf',
      'hockey',
      'mariners',
      'manchester united',
      'mlb',
      'nba',
      'aew',
      'nfl',
      'ufc',
      'nhl',
      'wwe',
      'olympics',
      'spurs',
      'playoffs',
      'rugby',
      'soccer',
      'sports',
      'uefa',
      'uwcl',
      'USMNT',
      'wrestling',
      'wnba',
      'world cup'
    ]
  },
  {
    category: 'Entertainment',
    keywords: [
      'album',
      'anime',
      'art',
      'artist',
      'celebrity',
      'cinema',
      'comedian',
      'comedy',
      'horror'
      'film',
      'films',
      'mando',
      'movie',
      'music',
      'movies',
      'book',
      'books',
      'song',
      'songs',
      'oscars',
      'pop culture',
      'review',
      'show',
      'star wars',
      'television',
      'love island',
      'tv'
    ]
  },
  {
    category: 'Gaming',
    keywords: [
      'game dev',
      'game development',
      'gaming',
      'games',
      'indie games',
      'nintendo',
      'playstation',
      'steam',
      'video game',
      'xbox',
      'esports',
      'gta 6'
    ]
  },
  {
    category: 'Technology',
    keywords: [
      'ai',
      'android',
      'apple',
      'api',
      'bluesky',
      'coding',
      'cybersecurity',
      'developer',
      'developers',
      'github',
      'google',
      'ios',
      'linux',
      'macos',
      'meta',
      'facebook',
      'whatsapp',
      'openai',
      'chatgpt',
      'claude',
      'grok',
      'microsoft',
      'programming',
      'software',
      'tech',
      'technology',
      'technological'
      'twitter',
      'threads',
      'web dev',
      'instagram',
      'windows'
    ]
  },
  {
    category: 'Business',
    keywords: [
      'business',
      'inflation',
      'crypto',
      'economy',
      'market',
      'stock',
      'stocks',
      'tariff',
      'tariffs'
    ]
  },
  {
    category: 'Arts',
    keywords: [
      'art show',
      'books',
      'painting',
      'photo',
      'photography',
      'pixelart',
      'watercolor'
    ]
  },
  {
    category: 'Events',
    keywords: ['conference', 'convention', 'event', 'events', 'festival', 'tickets']
  },
    {
    category: 'Elections',
    keywords: ['election', 'elections', 'vote','voting', 'primary','primaries','mayor race']
  },
  {
    category: 'Science',
    keywords: ['climate', 'nasa', 'science', 'space']
  },
  {
    category: 'Lifestyle',
    keywords: ['beauty', 'fashion', 'fitness', 'food', 'gardening', 'health']
  },
  {
    category: 'News',
    keywords: ['breaking news', 'headline', 'news', 'journalism', 'report']
  }
] as const;

function normalizeCategoryText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[#_]+/g, ' ')
    .replace(/[^a-z0-9&/ ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatProvidedCategory(value: string): string | null {
  const normalizedCategory = normalizeCategoryText(value);

  if (!normalizedCategory) return null;

  return (
    CATEGORY_DISPLAY_NAMES[normalizedCategory] ??
    normalizedCategory.replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
}

function getProvidedTrendCategory(topic: TrendTopicForCategory): string | null {
  for (const key of PROVIDED_CATEGORY_KEYS) {
    const value = topic[key];

    if (typeof value === 'string') return formatProvidedCategory(value);
  }

  return null;
}

function containsCategoryKeyword(value: string, keyword: string): boolean {
  const normalizedKeyword = normalizeCategoryText(keyword);
  const escapedKeyword = normalizedKeyword.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&'
  );

  return new RegExp(`(^|[^a-z0-9])${escapedKeyword}([^a-z0-9]|$)`).test(value);
}

export function getTrendCategory(topic: TrendTopicForCategory): string | null {
  const providedCategory = getProvidedTrendCategory(topic);

  if (providedCategory) return providedCategory;

  const normalizedTopic = normalizeCategoryText(topic.topic);
  const override = TREND_CATEGORY_OVERRIDES[normalizedTopic];

  if (override) return override;

  const searchableText = normalizeCategoryText(
    `${topic.topic} ${topic.displayName ?? ''} ${topic.description ?? ''}`
  );
  const matchingRule = TREND_CATEGORY_RULES.find(({ keywords }) =>
    keywords.some((keyword) => containsCategoryKeyword(searchableText, keyword))
  );

  return matchingRule?.category ?? null;
}
