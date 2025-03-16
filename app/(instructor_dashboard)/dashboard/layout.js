import React from "react";
import "../../globals.css";
import Logo from "./_components/Logo";
import DashboardNavbar from "./_components/DashboardNavbar";

const InstructorDashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-72 relative bg-gray-900 flex flex-col">
        <div className="w-full h-[1px] top-[80px] left-0 bg-white/30 absolute"></div>
        <Logo />
        <DashboardNavbar />
      </aside>
      <div className="flex flex-col w-full ">
        <div className="bg-white w-full px-10 h-20"></div>
        <div className="mt-10 container px-10 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default InstructorDashboardLayout;
