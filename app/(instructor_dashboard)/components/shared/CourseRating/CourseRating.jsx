"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import RatingBreakdown from "./RatingBreakdown";
import RatingChart from "./RatingChart";
import RatingOverview from "./RatingOverview";
import { demoData } from "./demoData";

export default function CourseRating() {
  const [timeframe, setTimeframe] = useState("week");

  const currentData = demoData[timeframe];

  return (
    <div
      className="w-full h-[30rem]  bg-white
     py-2 px-0 p-0 "
    >
      <div className="flex justify-between items-center mb-4 border-b  ">
        <h2 className="text-lg font-semibold px-4 py-4">
          Overall Course Rating
        </h2>
        <Select
          value={timeframe}
          onValueChange={setTimeframe}
          className="px-4 py-4"
        >
          <SelectTrigger className="w-[130px] border-none">
            <SelectValue placeholder="This week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This week</SelectItem>
            <SelectItem value="month">This month</SelectItem>
            <SelectItem value="quarter">This quarter</SelectItem>
            <SelectItem value="year">This year</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 ">
        <RatingOverview overallRating={currentData.overallRating} />
        <RatingChart chartData={currentData.chartData} />
      </div>

      <RatingBreakdown ratingData={currentData.ratingData} />
    </div>
  );
}
