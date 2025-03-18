"use client";
import {
  ChartNoAxesColumnIncreasing,
  CirclePlus,
  CreditCard,
  Layers,
  MessageCircleMore,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardNavbar = () => {
  const pathname = usePathname().toLowerCase();

  return (
    <div>
      <nav className="flex mt-3 flex-col justify-center text-gray-500 items-center">
        <Link
          href="/dashboard"
          className={`py-3 text-sm transition-all px-5 w-full flex items-center gap-2 ${
            pathname === "/dashboard"
              ? "bg-primary-500 text-white"
              : "hover:bg-primary-500 hover:text-white"
          }`}
        >
          <ChartNoAxesColumnIncreasing />
          Dashboard
        </Link>
        <Link
          href="#"
          className={`py-3 text-sm transition-all px-5 w-full flex items-center gap-2 ${
            pathname === "/create"
              ? "bg-primary-500 text-white"
              : "hover:bg-primary-500 hover:text-white"
          }`}
        >
          <CirclePlus /> Create New Course
        </Link>
        <Link
          href="#"
          className={`py-3 text-sm transition-all px-5 w-full flex items-center gap-2 ${
            pathname === "/create"
              ? "bg-primary-500 text-white"
              : "hover:bg-primary-500 hover:text-white"
          }`}
        >
          <Layers /> My Courses
        </Link>
        <Link
          href="/dashboard/earning"
          className={`py-3 text-sm transition-all px-5 w-full flex items-center gap-2 ${
            pathname === "/earning"
              ? "bg-primary-500 text-white"
              : "hover:bg-primary-500 hover:text-white"
          }`}
        >
          <CreditCard /> Earning
        </Link>
        <Link
          href="#"
          className={`py-3 text-sm relative transition-all px-5 w-full flex items-center gap-2 ${
            pathname === "/create"
              ? "bg-primary-500 text-white"
              : "hover:bg-primary-500 hover:text-white"
          }`}
        >
          <MessageCircleMore /> Message
          <span className="w-5 h-5 text-center py-0.5 rounded-full bg-primary-500 text-xs absolute right-5 top-1/4 text-white">
            3
          </span>
        </Link>
        <Link
          href="#"
          className={`py-3 text-sm transition-all px-5 w-full flex items-center gap-2 ${
            pathname === "/create"
              ? "bg-primary-500 text-white"
              : "hover:bg-primary-500 hover:text-white"
          }`}
        >
          <Settings /> Setting
        </Link>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
