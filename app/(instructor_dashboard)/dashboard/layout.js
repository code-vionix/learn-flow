import React from "react";
import "../../globals.css";
import Logo from "./_components/Logo";
import DashboardNavbar from "./_components/DashboardNavbar";
import DashboardHeader from "./_components/DashboardHeader";

const InstructorDashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-72 relative bg-gray-900 flex flex-col">
        <div className="w-full h-[1px] top-[80px] left-0 bg-white/30 absolute"></div>
        <Logo />
        <DashboardNavbar />
      </aside>
      <div className="flex flex-col w-full ">
        <div className="bg-white w-full">
          <DashboardHeader />
        </div>
        <div className="mt-6 container px-10 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default InstructorDashboardLayout;
