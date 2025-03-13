import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <Input
        type="text"
        placeholder="UI/UX Design"
        className="pl-10 w-72 border-gray-300 placeholder:text-black"
      />
    </div>
  );
};

export default SearchBar;
