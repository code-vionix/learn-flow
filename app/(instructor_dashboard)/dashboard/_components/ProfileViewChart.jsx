"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Dropdown from "../../components/shared/Dropdown";

const generateData = (period) => {
  switch (period) {
    case "Today":
      return Array.from({ length: 10 }, (_, i) => ({
        date: `Hour ${i + 1}`,
        value: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
      }));
    case "This Week":
      return Array.from({ length: 7 }, (_, i) => ({
        date: `Day ${i + 1}`,
        value: Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000,
      }));
    case "This Month":
      return Array.from({ length: 30 }, (_, i) => ({
        date: `Day ${i + 1}`,
        value: Math.floor(Math.random() * (20000 - 7000 + 1)) + 7000,
      }));
    default:
      return [];
  }
};

const formatValue = (value) => `$${value.toLocaleString()}`;

export default function ProfileViewChart() {
  const [period, setPeriod] = React.useState("Today");
  const [data, setData] = React.useState(generateData("Today"));

  const handleFilterChange = (newPeriod) => {
    setPeriod(newPeriod);
    setData(generateData(newPeriod));
  };

  return (
    <div className="bg-white h-[26.5rem] w-full ">
      <div className="flex items-center justify-between border-b">
        <h2 className="text-lg font-medium px-4 py-4 text-gray-700">
          Profile View
        </h2>
        <Dropdown
          data={["Today", "This Week", "This Month"]}
          period={period}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="w-full h-4/6 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: "#E1F7E3" }}
              contentStyle={{ backgroundColor: "#E1F7E3", border: "none" }}
              formatter={(value) => `$${value}`}
            />

            <Bar
              dataKey="value"
              fill="#22C55E"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="px-4 ">
        <p className="text-2xl font-semibold">
          {/* {formatValue(data.reduce((sum, d) => sum + d.value, 0))} */} $4207
        </p>
        <p className="text-xs text-gray-500">USD Dollar you earned.</p>
      </div>
    </div>
  );
}
