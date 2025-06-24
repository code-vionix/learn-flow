import Copyright from "@/app/(main)/components/shared/Footer/Copyright";
import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <div className="flex justify-between items-center container mx-auto px-10 mt-10">
      <div>
        <Copyright className="text-black" />
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
