import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import React from "react";

const FilterToggleButton = ({ showFilters, setShowFilters }) => {
  return (
    <Button
      variant="outline"
      className="flex items-center border-primary-200 gap-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setShowFilters(!showFilters)}
    >
      <SlidersHorizontal className="w-4 h-4" />
      Filter
      <Badge className="ml-1 bg-primary-500 text-white rounded-none text-[10px]">
        3
      </Badge>
    </Button>
  );
};

export default FilterToggleButton;
