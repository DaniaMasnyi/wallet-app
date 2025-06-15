import React from "react";
import { CardBalance } from "@/components/blocks/card-balance/card-balance";
import { NoPaymentDue } from "@/components/blocks/no-payment-due/no-payment-due";
import { DailyPoints } from "@/components/blocks/daily-points/daily-points";
import { TransactionsList } from "@/components/blocks/transactions-list/transactions-list";
import { getWalletData } from "@/lib/data/wallet-service";

export default async function HomePage(): Promise<React.ReactElement> {
  const walletData = await getWalletData();

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-6 h-56">
        <CardBalance balance={walletData.cardBalance} />
        <NoPaymentDue />
        <DailyPoints />
      </div>

      <TransactionsList transactions={walletData.transactions} />
    </div>
  );
}
