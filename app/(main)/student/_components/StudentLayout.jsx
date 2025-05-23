"use client";

import { useGetUserInfoQuery } from "@/store/api/userApi";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const StudentLayout = () => {
  const pathname = usePathname();
  const { data } = useGetUserInfoQuery();
  const navLinks = [
    { href: "/student", label: "Dashboard" },
    { href: "/student/courses", label: "Courses" },
    { href: "/student/teachers", label: "Teachers" },
    { href: "/student/message", label: "Message" },
    { href: "/student/wishlist", label: "Wishlist" },
    { href: "/student/purchase-history", label: "Purchase History" },
    { href: "/student/settings", label: "Settings" },
  ];

  return (
    <div className="w-full h-60 bg-[#FFEEE8] relative">
      <div className="container mx-auto absolute top-3/4 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border-b border-primary-200">
          <div className="py-6 px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={data?.imageUrl}
                alt={data.firstName}
                width={400}
                height={400}
                className="rounded-full w-20 h-20 object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {data.firstName + " " + data.lastName}
                </h1>
                <p className="text-gray-600">
                 {data?.title}
                </p>
              </div>
            </div>
            <Link
              href="/become-instructor"
              className="mt-4 md:mt-0 flex items-center gap-2 bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors px-6 py-3 rounded-md"
            >
              <span>Become Instructor</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <nav className="flex w-full justify-between overflow-x-auto border-t border-primary-200 font-bold">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 transition-all ${
                  pathname === href
                    ? "border-[#FF6636] text-gray-900"
                    : "border-transparent"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
