/* eslint-disable @next/next/no-img-element */
"use client";
import { nameToColor } from "@/lib/utils";
import { Star, User } from "lucide-react";
import { useState } from "react";
import CourseHoverCard from "./CourseHoverCard";

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  const totalReviews = course?.reviews.length || 0;
  const possibleRatings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];

  const reviews = Array.from({ length: totalReviews }, () => ({
    rating: possibleRatings[Math.floor(Math.random() * possibleRatings.length)],
  }));
  return (
    <div
      className="relative w-[312px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Card */}
      <div className="bg-white border border-gray-200 flex flex-col">
        <img
          src={course?.thumbnail}
          alt={course.title}
          className="w-full h-[234px] p-1  object-cover border-b border-gray-200"
        />

        <div className=" flex flex-col gap-2">
          <div className="px-4 pt-4 pb-0 flex justify-between items-center">
            <span
              className="text-xs font-medium px-2 py-1 rounded"
              style={{ backgroundColor: nameToColor(course?.category?.name) }}
            >
              {course?.category?.name.toUpperCase()}
            </span>
            {/* <span className="text-lg font-medium text-[#FF6636]">
              ${course?.price}
            </span> */}
            {/* add discounted price also */}
            <div className="space-x-2">
            <span className="text-lg font-medium text-[#FF6636]">
              ${course.discountPrice.toFixed(0)}
            </span>
            <span className="line-through text-gray-500">${course.price}</span>
            </div>
          </div>

          <h3 className=" px-4 text-base font-medium text-gray-900 line-clamp-3 h-20">
            {course?.title}
          </h3>

          <div className="border-t border-gray-200  mt-2">
            <div className=" px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-[#FD8E1F] fill-[#FD8E1F]" />
                <span className="text-sm text-gray-700">{reviews.length || 0}</span>
              </div>
              <div className="flex items-center gap-1 px-4 ">
                <User className="w-5 h-5 text-[#564FFD]" />
                <span className="text-sm text-gray-700">
                  {course?.enrollments &&
                    (course?.enrollments.length / 10).toFixed(1)}
                  {" "}students
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Card (Fixed Position in Course Card) */}
      {isHovered && (
        <div className="absolute lg:-top-16 lg:-left-16 top-20  mt-0 z-10">
          <CourseHoverCard course={course} />
        </div>
      )}
    </div>
  );
};

export default CourseCard;
