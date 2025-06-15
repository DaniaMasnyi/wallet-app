import React, { memo, useMemo } from "react";
import { Card } from "@/components/ui/card/card";
import { formatCurrency } from "@/lib/utils/points";
import { WALLET_CONSTANTS } from "@/lib/constants/wallet";

interface CardBalanceProps {
  balance: number;
}

function CardBalanceComponent({
  balance,
}: CardBalanceProps): React.ReactElement {
  const formattedBalance = useMemo(() => formatCurrency(balance), [balance]);

  const availableAmount = useMemo(() => {
    const available = WALLET_CONSTANTS.MAX_CARD_LIMIT - balance;
    return formatCurrency(available);
  }, [balance]);

  return (
    <Card className="p-5 h-full flex flex-col justify-center">
      <div className="text-sm text-gray-500 mb-1 font-medium">Card Balance</div>
      <div className="text-3xl font-bold text-black mb-1">
        {formattedBalance}
      </div>
      <div className="text-sm text-gray-400">{availableAmount} Available</div>
    </Card>
  );
}

export const CardBalance = memo(CardBalanceComponent);
