"use client";

import React, { memo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faWifi,
  faBatteryFull,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "@/lib/utils/points";
import { Transaction } from "@/types/wallet";

interface TransactionDetailsProps {
  transaction: Transaction;
}

function TransactionDetailsComponent({
  transaction,
}: TransactionDetailsProps): React.ReactElement {
  const router = useRouter();

  const handleBack = useCallback((): void => {
    router.back();
  }, [router]);

  const formattedDate = new Date(transaction.date).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center px-6 py-3 text-black">
        <div className="font-semibold">10:48</div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faSignal} className="w-4 h-4" />
          <FontAwesomeIcon icon={faWifi} className="w-4 h-4" />
          <FontAwesomeIcon icon={faBatteryFull} className="w-5 h-3" />
        </div>
      </div>

      <div className="px-4 py-2">
        <button className="p-2" onClick={handleBack}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="w-6 h-6 text-blue-500"
          />
        </button>
      </div>

      <div className="px-6 pt-8">
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-black mb-3">
            {formatCurrency(transaction.amount)}
          </div>
          <div className="text-lg text-gray-500 font-medium mb-1">
            {transaction.name}
          </div>
          <div className="text-base text-gray-500">{formattedDate}</div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border-0 overflow-hidden">
          <div className="p-5">
            <div className="text-base font-semibold text-black mb-1">
              Status: Approved
            </div>
            <div className="text-sm text-gray-500">RBC Bank Debit Card</div>
          </div>

          <div className="border-t border-gray-100"></div>

          <div className="p-5">
            <div className="flex justify-between items-center">
              <div className="text-base font-semibold text-black">Total</div>
              <div className="text-base font-semibold text-black">
                {formatCurrency(transaction.amount)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
}

export const TransactionDetails = memo(TransactionDetailsComponent);
