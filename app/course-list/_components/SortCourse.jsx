import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const SortCourse = () => {
  return (
    <div className="self-end">
      <Select>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Trending</SelectItem>
          <SelectItem value="option2">Recent</SelectItem>
          <SelectItem value="option3">Most Popular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortCourse;
