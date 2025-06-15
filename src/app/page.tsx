"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CardBalance } from "@/components/blocks/card-balance/card-balance";
import { NoPaymentDue } from "@/components/blocks/no-payment-due/no-payment-due";
import { DailyPoints } from "@/components/blocks/daily-points/daily-points";
import { TransactionsList } from "@/components/blocks/transactions-list/transactions-list";
import { WalletData, Transaction } from "@/types/wallet";

export default function HomePage(): React.ReactElement {
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadWalletData(): Promise<void> {
      try {
        const response = await fetch("/api/wallet-data");
        if (!response.ok) {
          throw new Error("Failed to fetch wallet data");
        }
        const data: WalletData = await response.json();
        setWalletData(data);
      } catch (error) {
        console.error("Error loading wallet data:", error);
      }
    }

    loadWalletData();
  }, []);

  const handleTransactionClick = (transaction: Transaction): void => {
    router.push(`/transaction/${transaction.id}`);
  };

  if (!walletData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-6 h-56">
        <CardBalance balance={walletData.cardBalance} />
        <NoPaymentDue />
        <DailyPoints />
      </div>

      <TransactionsList
        transactions={walletData.transactions}
        onTransactionClick={handleTransactionClick}
      />
    </div>
  );
}
