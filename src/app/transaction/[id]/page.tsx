import React from "react";
import { notFound } from "next/navigation";
import { TransactionDetails } from "@/components/blocks/transaction-details/transaction-details";
import { getTransactionById } from "@/lib/data/wallet-service";

interface TransactionDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TransactionDetailPage({
  params,
}: TransactionDetailPageProps): Promise<React.ReactElement> {
  const { id } = await params;
  const transaction = await getTransactionById(id);

  if (!transaction) {
    notFound();
  }

  return <TransactionDetails transaction={transaction} />;
}
