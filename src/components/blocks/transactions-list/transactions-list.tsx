import React from "react";
import { TransactionItem } from "@/components/blocks/transaction-item/transaction-item";
import { Transaction } from "@/types/wallet";

interface TransactionsListProps {
  transactions: Transaction[];
  onTransactionClick: (transaction: Transaction) => void;
}

export function TransactionsList({
  transactions,
  onTransactionClick,
}: TransactionsListProps): React.ReactElement {
  const displayTransactions = transactions.slice(0, 10);

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-black mb-4">
          Latest Transactions
        </h2>
      </div>

      <div className="space-y-2">
        {displayTransactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onClick={() => onTransactionClick(transaction)}
          />
        ))}
      </div>
    </div>
  );
}
