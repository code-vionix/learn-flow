import { Button } from "@/components/ui/button";
import React from "react";

export default function JoinCourse() {
  return (
    <div className=" py-10 bg-gray-900 border-b border-gray-800 ">
      <div className=" px-6 flex justify-between items-center mx-auto container">
        <div className="flex flex-col py-6 gap-5">
          <h2 className="text-3xl font-bold text-white max-w-lg py-2">
            Start learning with 67.1k students around the world.
          </h2>
          <div className="flex space-x-4">
            <Button className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2">
              Join The Family
            </Button>
            <Button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-4 py-2">
              Browse All Courses
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center text-5xl gap-28 py-6">
            <div className="space-y-2">
              <p className="font-bold text-white">6.3k</p>
              <p className="text-gray-400 text-sm">Online courses</p>
            </div>
            <div className="space-y-2">
              <p className=" font-bold text-white">26k</p>
              <p className="text-gray-400 text-sm">Certified Instructor</p>
            </div>
            <div className="space-y-2">
              <p className=" font-bold text-white">99.9%</p>
              <p className="text-gray-400 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
