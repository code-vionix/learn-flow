import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <div className="flex justify-between items-center container mx-auto px-10 mt-10">
      <div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} - Eduguard. Designed by
          <span className="font-semibold text-gray-900">
            Templatecookie.
          </span>{" "}
          All rights reserved
        </p>
      </div>
      <div className="text-gray-600 text-sm font-normal flex gap-4">
        <Link href="#" className="hover:underline">
          FAQs
        </Link>
        <Link href="#" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:underline">
          Terms & Condition
        </Link>
      </div>
    </div>
  );
};

export default DashboardFooter;
