import React, { memo, useMemo } from "react";
import { Card } from "@/components/ui/card/card";
import { calculateDailyPoints } from "@/lib/utils/points";

function DailyPointsComponent(): React.ReactElement {
  const pointsData = useMemo(() => calculateDailyPoints(), []);

  return (
    <Card className="p-5 h-full flex flex-col justify-center">
      <div className="text-sm text-gray-500 mb-1 font-medium">Daily Points</div>
      <div className="text-2xl font-bold text-black">
        {pointsData.displayPoints}
      </div>
    </Card>
  );
}

export const DailyPoints = memo(DailyPointsComponent);
