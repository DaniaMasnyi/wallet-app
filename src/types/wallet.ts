export interface Transaction {
  id: string;
  type: "Credit";
  amount: number;
  name: string;
  description: string;
  date: string;
  pending?: boolean;
  authorizedUser?: string;
  icon: string;
}

export interface WalletData {
  cardBalance: number;
  transactions: Transaction[];
}

export interface CardBalanceInfo {
  balance: number;
  limit: number;
  available: number;
}

export interface DailyPointsInfo {
  points: number;
  displayPoints: string;
}
