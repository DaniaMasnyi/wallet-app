import { SEASON_DATES, WALLET_CONSTANTS } from "@/lib/constants/wallet";

type Season = "SPRING" | "SUMMER" | "AUTUMN" | "WINTER";

function getCurrentSeason(date: Date): Season {
  const month = date.getMonth() + 1;

  if (month >= 3 && month < 6) return "SPRING";
  if (month >= 6 && month < 9) return "SUMMER";
  if (month >= 9 && month < 12) return "AUTUMN";
  return "WINTER";
}

function getSeasonStartDate(season: Season, year: number): Date {
  const seasonDate = SEASON_DATES[season];
  return new Date(year, seasonDate.month - 1, seasonDate.day);
}

function getDayOfSeason(date: Date): number {
  const season = getCurrentSeason(date);
  const year = date.getFullYear();
  const seasonStart = getSeasonStartDate(season, year);

  const diffTime = date.getTime() - seasonStart.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1;
}

function calculatePointsForDay(dayOfSeason: number): number {
  if (dayOfSeason === 1) {
    return WALLET_CONSTANTS.INITIAL_SEASON_POINTS;
  }

  if (dayOfSeason === 2) {
    return WALLET_CONSTANTS.SECOND_DAY_POINTS;
  }

  const pointsYesterday = calculatePointsForDay(dayOfSeason - 1);
  const pointsDayBeforeYesterday = calculatePointsForDay(dayOfSeason - 2);

  const result =
    pointsDayBeforeYesterday *
      WALLET_CONSTANTS.POINTS_MULTIPLIERS.DAY_BEFORE_PREVIOUS +
    pointsYesterday * WALLET_CONSTANTS.POINTS_MULTIPLIERS.PREVIOUS;

  return Math.round(result);
}

export function calculateDailyPoints(): {
  points: number;
  displayPoints: string;
} {
  const today = new Date();
  const dayOfSeason = getDayOfSeason(today);
  const points = calculatePointsForDay(dayOfSeason);

  const displayPoints =
    points > WALLET_CONSTANTS.POINTS_THRESHOLD
      ? `${Math.round(points / 1000)}K`
      : points.toString();

  return { points, displayPoints };
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const today = new Date();
  const diffTime = today.getTime() - date.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 7) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }

  return date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });
}
