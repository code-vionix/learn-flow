"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  // Debounced function to update the router
  const debouncedSearch = useDebounce((value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }, 500); // Adjust delay as needed

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
console.log(query)
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <Input
        type="text"
        placeholder="UI/UX Design"
        value={query}
        onChange={handleSearch}
        className="pl-10 w-72 border-gray-300 placeholder:text-black"
      />
    </div>
  );
};

export default SearchBar;
