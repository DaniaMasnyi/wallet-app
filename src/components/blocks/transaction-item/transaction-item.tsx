import React, { memo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faBullseye } from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faAmazon,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { formatCurrency, formatDate } from "@/lib/utils/points";
import { Transaction } from "@/types/wallet";

interface TransactionItemProps {
  transaction: Transaction;
}

function getIconComponent(iconName: string): React.ReactElement {
  switch (iconName) {
    case "apple":
      return (
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
          <FontAwesomeIcon icon={faApple} className="w-6 h-6 text-white" />
        </div>
      );
    case "amazon":
      return (
        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
          <FontAwesomeIcon icon={faAmazon} className="w-6 h-6 text-white" />
        </div>
      );
    case "google":
      return (
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
          <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 text-white" />
        </div>
      );
    case "microsoft":
      return (
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <FontAwesomeIcon icon={faMicrosoft} className="w-6 h-6 text-white" />
        </div>
      );
    case "ikea":
      return (
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-sm">IKEA</span>
        </div>
      );
    case "target":
      return (
        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
          <FontAwesomeIcon icon={faBullseye} className="w-6 h-6 text-white" />
        </div>
      );
    case "starbucks":
      return (
        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-xs">ST</span>
        </div>
      );
    case "netflix":
      return (
        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-xs">NE</span>
        </div>
      );
    case "mcdonalds":
      return (
        <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-xs">MC</span>
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-xs">
            {iconName.slice(0, 2).toUpperCase()}
          </span>
        </div>
      );
  }
}

function TransactionItemComponent({
  transaction,
}: TransactionItemProps): React.ReactElement {
  const amountDisplay = formatCurrency(transaction.amount);
  const formattedDate = formatDate(transaction.date);

  return (
    <Link href={`/transaction/${transaction.id}`}>
      <div className="p-4 bg-white rounded-2xl shadow-sm border-0 mb-2 cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {getIconComponent(transaction.icon)}
            <div>
              <div className="font-semibold text-black text-base">
                {transaction.name}
              </div>
              <div className="text-sm text-gray-500">
                {transaction.pending && "Pending - "}
                {transaction.description}
              </div>
              <div className="text-sm text-gray-400">
                {transaction.authorizedUser &&
                  `${transaction.authorizedUser} - `}
                {formattedDate}
              </div>
            </div>
          </div>
          <div className="text-right flex items-center">
            <div>
              <div className="font-semibold text-black text-base">
                {amountDisplay}
              </div>
              <div className="text-sm text-gray-400">3%</div>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-5 h-5 text-gray-300 ml-2"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export const TransactionItem = memo(TransactionItemComponent);
