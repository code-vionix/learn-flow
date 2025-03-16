import {
  ChartNoAxesColumnIncreasing,
  CirclePlus,
  CreditCard,
  Layers,
  MessageCircleMore,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div>
      <nav className="flex mt-3 flex-col justify-center text-gray-500 items-center">
        <Link
          href="#"
          className=" py-3 text-sm hover:bg-primary-500 hover:text-white transition-all px-5 w-full"
        >
          <ChartNoAxesColumnIncreasing className="inline-block mr-2" />
          Dashboard
        </Link>
        <Link
          href="#"
          className=" py-3 text-sm hover:bg-primary-500 hover:text-white transition-all px-5 w-full"
        >
          <CirclePlus className="inline-block mr-2" /> Create New Course
        </Link>
        <Link
          href="#"
          className=" py-3 text-sm hover:bg-primary-500 hover:text-white transition-all px-5 w-full"
        >
          <Layers className="inline-block mr-2" /> My Courses
        </Link>
        <Link
          href="#"
          className=" py-3 text-sm hover:bg-primary-500 hover:text-white transition-all px-5 w-full"
        >
          <CreditCard className="inline-block mr-2" />
          Earning
        </Link>
        <Link
          href="#"
          className=" py-3 relative text-sm hover:bg-primary-500 hover:text-white transition-all px-5 w-full"
        >
          <MessageCircleMore className="inline-block mr-2" />
          Message
          <span className="w-5 h-5 text-center py-0.5 rounded-full bg-primary-500 text-xs absolute right-5 top-1/4 text-white">
            3{/* add message notifiction */}
          </span>
        </Link>
        <Link
          href="#"
          className=" py-3 text-sm hover:bg-primary-500 hover:text-white transition-all px-5 w-full"
        >
          <Settings className="inline-block mr-2" /> Setting
        </Link>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
