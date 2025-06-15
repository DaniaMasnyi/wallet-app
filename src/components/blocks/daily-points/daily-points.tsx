import React from "react";
import { Card } from "@/components/ui/card/card";
import { calculateDailyPoints } from "@/lib/utils/points";

export function DailyPoints(): React.ReactElement {
  const { displayPoints } = calculateDailyPoints();

  return (
    <Card className="p-5 h-full flex flex-col justify-center">
      <div className="text-sm text-gray-500 mb-1 font-medium">Daily Points</div>
      <div className="text-2xl font-bold text-black">{displayPoints}</div>
    </Card>
  );
}
