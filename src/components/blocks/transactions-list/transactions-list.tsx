import React, { memo, useMemo } from "react";
import { TransactionItem } from "@/components/blocks/transaction-item/transaction-item";
import { Transaction } from "@/types/wallet";

interface TransactionsListProps {
  transactions: Transaction[];
}

function TransactionsListComponent({
  transactions,
}: TransactionsListProps): React.ReactElement {
  const displayTransactions = useMemo(
    () => transactions.slice(0, 10),
    [transactions],
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-black mb-4">
          Latest Transactions
        </h2>
      </div>

      <div className="space-y-2">
        {displayTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export const TransactionsList = memo(TransactionsListComponent);
