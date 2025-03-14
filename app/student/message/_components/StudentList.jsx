import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="mt-4 space-y-2 overflow-y-auto h-[80%]">
      {students.map((student) => (
        <div
          key={student.id}
          className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200"
        >
          <Avatar className="w-10 h-10 relative overflow-visible ">
            <Image
              width={20}
              height={20}
              src={student.avatar}
              alt={student.name}
              className="w-full h-full rounded-full"
            />
            <div
              className={`absolute bottom-[10px] ${
                student.isActive
                  ? "bg-green-500 border-2 border-white"
                  : "bg-transparent"
              } -right-1 w-3 h-3 rounded-full`}
            ></div>
          </Avatar>
          <div className="flex justify-between w-full items-center">
            <div>
              <p className="font-medium">{student.name}</p>
              <p className="text-sm text-gray-500 truncate w-40">
                {student.lastContent}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <p className={`text-xs text-gray-500 capitalize`}>
                {student.lastActive}
              </p>
              <p
                className={`w-2 h-2 ${
                  student.isActive ? "bg-transparent" : "bg-primary-500"
                } rounded-full`}
              ></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
