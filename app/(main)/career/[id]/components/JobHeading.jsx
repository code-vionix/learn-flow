import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  ClipboardList,
  MapPin,
  MoveRight,
} from "lucide-react";
import React from "react";
import ApplyButton from "./Button";

function JobHeading({ position }) {
  return (
    <div className="px-72 py-20 bg-gray-50 flex justify-between items-center">
      <div className="flex flex-col gap-3">
        <div className="flex gap-4">
          <span className="flex gap-2 items-center font-normal text-sm text-gray-700">
            <MapPin size={20} color="rgba(86, 79, 253, 1)" />
            {/* {positions.location} */} Tokyo, Japan
          </span>
          <span className="flex gap-2 items-center font-normal text-sm text-gray-700">
            <BriefcaseBusiness size={20} color="rgba(35, 189, 51, 1)" />
            {/* {position.type} */}Full Time
          </span>
          <span className="flex gap-2 items-center font-normal text-sm text-gray-700">
            <ClipboardList size={20} color="rgba(253, 142, 31, 1)" />
            {/* {position.vacancy} */} 01 Vacancy
          </span>
        </div>
        <h1 className="font-semibold text-5xl text-gray-900">
          Product Designer (UI/UX Designer)
        </h1>
        <div className="flex gap-20 mt-10 ">
          <div className="flex flex-col">
            <span className="font-medium text-base text-primary-500">ADDRESS</span>
            <span className="font-normal text-base text-gray-900 text-start w-[200px]">1702 Olympic Boulevard Santa Monica, CA 90404</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-base text-primary-500">CONTACT</span>
            <div className="font-normal text-base text-gray-900 flex flex-col">
              <span>career.eduguard@gamil.com</span>
              <span>(219) 555-0114</span>
            </div>
          </div>
        </div>
      </div>
      <ApplyButton/>
    </div>
  );
}

export default JobHeading;
