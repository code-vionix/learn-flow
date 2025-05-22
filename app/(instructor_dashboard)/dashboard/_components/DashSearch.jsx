import { setSearch } from "@/store/slice/searchSlice";
import { Search } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const DashSearch = () => {
  const dispatch=useDispatch()
  return (
    <div className="w-[312px] bg-gray-50 px-3 py-3 h-12">
      <Search className="inline-block ml-1" />
      <input
        className="bg-transparent outline-none border-none px-5"
        type="text"
        placeholder="Search"
        onChange={(e)=>dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default DashSearch;
