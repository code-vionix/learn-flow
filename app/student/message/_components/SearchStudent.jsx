"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import useDebounce from "@/hooks/useDebounce";

const SearchStudent = () => {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const [query, setQuery] = useState(searchParams.get("query") || "");

  // // Debounced function to update the router
  // const debouncedSearch = useDebounce((value) => {
  //   const params = new URLSearchParams(searchParams);
  //   if (value) {
  //     params.set("query", value);
  //   } else {
  //     params.delete("query");
  //   }

  //   router.push(`?${params.toString()}`, { scroll: false });
  // }, 500); // Adjust delay as needed

  // const handleSearch = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);
  //   debouncedSearch(value);
  // };
  return (
    <div className="relative">
      <Input
        placeholder="Search"
        // onChange = {handleSearch}
        //  value = {query}
        className="mt-4 px-10 py-6"
      />
      <Search className="absolute opacity-70 left-[12px] top-[14px] text-primary-400" />
    </div>
  );
};

export default SearchStudent;
