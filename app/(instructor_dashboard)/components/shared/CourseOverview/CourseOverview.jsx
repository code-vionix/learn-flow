"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";

import { viewsEnrollmentsData } from "@/data/demoData";
import CustomChart from "../CustomChart";
import TimeframeSelect from "./TimeframeSelect";
export default function CourseOverview() {
  const [timeframe, setTimeframe] = useState("week");
  const currentData = viewsEnrollmentsData[timeframe];
  return (
    <div className="w-full  h-[30rem] bg-white ">
      <div className="flex items-center justify-between border-b py-4 px-4">
        <h2 className="text-lg font-semibold text-gray-900">Course Overview</h2>
        <TimeframeSelect value={timeframe} onChange={setTimeframe} />
      </div>
      <Card className="p-4 h-[25rem]">
        <CustomChart
          data={currentData}
          xAxisKey="day"
          yAxisDomain={["auto", "auto"]}
          areas={[
            { key: "views", color: "#6366f1" },
            { key: "enrollments", color: "#f97316" },
          ]}
          tickFormatterX={(value) => value}
          tickFormatterY={(value) => value}
        />
      </Card>
    </div>
  );
}
