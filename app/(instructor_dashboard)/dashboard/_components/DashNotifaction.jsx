import { BellDot } from "lucide-react";
import React from "react";

const DashNotifaction = () => {
  return (
    <div className="bg-gray-50 w-12 py-3 cursor-pointer relative px-3 h-12 ">
      <BellDot />
      <span className="w-[10px] h-[10px] border-2 border-white absolute top-[15px] right-[12px] bg-primary-500 rounded-full"></span>
    </div>
  );
};

export default DashNotifaction;
