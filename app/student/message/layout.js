import React from "react";
import LeftStudentBar from "./_components/LeftStudentBar";
import { students } from "@/data/student";

const StudentChatLayout = ({ children }) => {
  return (
    <div className="flex gap-5">
      <div className=" lg:basis-[35%] lg:block hidden">
        <LeftStudentBar students={students} />
      </div>
      <div className="lg:basis-[65%] basis-full">{children}</div>
    </div>
  );
};

export default StudentChatLayout;
