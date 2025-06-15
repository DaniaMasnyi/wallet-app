import { WalletData } from "@/types/wallet";
import walletData from "@/data/wallet-data.json";

export async function getWalletData(): Promise<WalletData> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return walletData as WalletData;
}

export async function getTransactionById(id: string) {
  const data = await getWalletData();
  return data.transactions.find((transaction) => transaction.id === id) || null;
}
