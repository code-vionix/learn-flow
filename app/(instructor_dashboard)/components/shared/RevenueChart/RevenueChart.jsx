"use client";

import { useMemo, useState } from "react";

import { valueChartData } from "@/data/demoData";
import { formatDate, formatValue } from "@/lib/formatters";

import CustomChart from "../CustomChart";
import TimeframeSelect from "./TimeframeSelect";

export default function RevenueChart() {
  const [period, setPeriod] = useState("This month");

  const filteredData = useMemo(() => {
    if (period === "Last 3 months") {
      return valueChartData.slice(0, 7);
    } else if (period === "Last month") {
      return valueChartData.slice(0, 4);
    }
    return valueChartData;
  }, [period]);

  return (
    <div className="bg-white w-full h-full">
      <div className="flex items-center justify-between border-b py-4 px-4">
        <h2 className="text-lg font-semibold text-gray-900">Revenue</h2>
        <TimeframeSelect period={period} setPeriod={setPeriod} />
      </div>
      <div className="w-full h-[25rem] ">
        <CustomChart
          data={filteredData}
          xAxisKey="date"
          yAxisDomain={[0, 50000]}
          areas={[{ key: "value", color: "#5B5FEF" }]}
          referenceLine="2024-08-10"
          tickFormatterX={(value) => formatDate(value)}
          tickFormatterY={(value) => formatValue(value)}
        />
      </div>
    </div>
  );
}
