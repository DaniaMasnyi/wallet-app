export const WALLET_CONSTANTS = {
  MAX_CARD_LIMIT: 1500,
  POINTS_THRESHOLD: 1000,
  INITIAL_SEASON_POINTS: 2,
  SECOND_DAY_POINTS: 3,
  POINTS_MULTIPLIERS: {
    PREVIOUS: 0.6,
    DAY_BEFORE_PREVIOUS: 1.0,
  },
} as const;

export const SEASON_DATES = {
  SPRING: { month: 3, day: 1 },
  SUMMER: { month: 6, day: 1 },
  AUTUMN: { month: 9, day: 1 },
  WINTER: { month: 12, day: 1 },
} as const;

export const TRANSACTION_TYPES = {
  CREDIT: "Credit",
} as const;
