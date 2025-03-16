"use client";
import CourseCard from "@/app/(main)/components/home/RecentAddedCourse/CourseCard";

import StudentFeedBackCard from "@/app/(main)/courses/[id]/_component/StudentFeedBackCard";
import { reviews } from "@/data";
import { useState } from "react";

export default function TabNavigation({ courses }) {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="w-full md:w-2/3">
      {/* Tab Navigation */}
      <div className="flex gap-40 pl-16">
        {["courses", "review"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-xl font-md  pb-4 text-gray-500 hover:text-black ${
              activeTab === tab
                ? "text-black after:w-40 after:border-b-2 after:border-orange-500"
                : ""
            } after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <hr className="text-black" />

      {/* Tab Content */}
      {activeTab === "courses" ? (
        <>
          <h2 className="text-2xl font-semibold mb-4 mt-4">Vaku Courses</h2>
          <div className="flex flex-wrap gap-6 mt-6 mb-6">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
          <StudentFeedBackCard reviews={reviews} />
        </>
      ) : (
        <div className="mt-4">
          <StudentFeedBackCard reviews={reviews} />
        </div>
      )}
    </div>
  );
}
