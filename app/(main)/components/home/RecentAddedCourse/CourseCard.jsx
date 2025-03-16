/* eslint-disable @next/next/no-img-element */
"use client";
import { nameToColor } from "@/lib/utils";
import { Star, User } from "lucide-react";
import { useState } from "react";
import CourseHoverCard from "./CourseHoverCard";

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[312px] bg-white border border-gray-200 flex flex-col">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[234px] object-cover border-b border-gray-200"
        />

        <div className="p-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span
              className="text-xs font-medium px-2 py-1 rounded"
              style={{ backgroundColor: nameToColor(course.category) }}
            >
              {course.category.toUpperCase()}
            </span>
            <span className="text-lg font-medium text-[#FF6636]">
              ${course.price}
            </span>
          </div>

          <h3 className="text-base font-medium text-gray-900 line-clamp-2">
            {course.title}
          </h3>

          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-[#FD8E1F] fill-[#FD8E1F]" />
                <span className="text-sm text-gray-700">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-5 h-5 text-[#564FFD]" />
                <span className="text-sm text-gray-700">
                  {(course.students / 10).toFixed(1)}K students
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isHovered && <CourseHoverCard course={course} />}
    </div>
  );
};

export default CourseCard;
