import React from "react";
import { Card } from "@/components/ui/card/card";
import { formatCurrency } from "@/lib/utils/points";
import { WALLET_CONSTANTS } from "@/lib/constants/wallet";

interface CardBalanceProps {
  balance: number;
}

export function CardBalance({ balance }: CardBalanceProps): React.ReactElement {
  const available = WALLET_CONSTANTS.MAX_CARD_LIMIT - balance;

  return (
    <Card className="p-5 h-full flex flex-col justify-center">
      <div className="text-sm text-gray-500 mb-1 font-medium">Card Balance</div>
      <div className="text-3xl font-bold text-black mb-1">
        {formatCurrency(balance)}
      </div>
      <div className="text-sm text-gray-400">
        {formatCurrency(available)} Available
      </div>
    </Card>
  );
}
