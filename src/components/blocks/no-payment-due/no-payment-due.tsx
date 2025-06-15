import React, { memo } from "react";
import { Card } from "@/components/ui/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function NoPaymentDueComponent(): React.ReactElement {
  return (
    <Card className="p-5 col-span-1 row-span-2 h-full">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className="text-sm font-semibold text-black mb-2">
            No Payment Due
          </div>
          <div className="text-sm text-gray-500 leading-tight">
            You&apos;ve paid your September balance.
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} className="w-7 h-7 text-black" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export const NoPaymentDue = memo(NoPaymentDueComponent);
