import LeftStudentBar from "@/app/(main)/student/message/_components/LeftStudentBar";
import { students } from "@/data/student";
import React from "react";

const DashboardMessageLayout = ({ children }) => {
  return (
    <div className="flex gap-5">
      <div className=" lg:basis-[35%] lg:block hidden">
        <LeftStudentBar isDash={true} students={students} />
      </div>
      <div className="lg:basis-[65%] basis-full">{children}</div>
    </div>
  );
};

export default DashboardMessageLayout;
