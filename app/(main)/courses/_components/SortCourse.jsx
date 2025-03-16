"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SortCourse = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="self-end">
      <Select onValueChange={handleSortChange}>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="trending">Trending</SelectItem>
          <SelectItem value="recent">Recent</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortCourse;
