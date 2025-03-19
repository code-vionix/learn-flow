"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StudentLayout = () => {
  const pathname = usePathname();

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
    <div className="w-full h-40 bg-primary-900 relative">
      <div className="container mx-auto absolute top-3/4 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border-b border-primary-200">
          <div className="py-6 px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile picture"
                width={96}
                height={96}
                className="rounded-full w-20 h-20 object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Kevin Gilbert
                </h1>
                <p className="text-gray-600">
                  Web Designer & Best-Selling Instructor
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
                    ? "border-primary-500 text-gray-900"
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
