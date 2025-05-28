// CourseHoverCard.jsx
/* eslint-disable @next/next/no-img-element */

import { nameToColor } from "@/lib/utils";
import {
  BarChart,
  Check,
  Clock,
  Heart,
  ShoppingCart,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseHoverCard = ({ course, position = "right" }) => {
  return (
    <div className="relative bg-white border border-gray-200 shadow-lg w-[350px] p-5 ">
      {position === "right" && (
        <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2">
          <div className="w-0 h-0 border-y-8 border-y-transparent border-r-[10px] border-r-white shadow-sm"></div>
        </div>
      )}
      {position === "left" && (
        <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2">
          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[10px] border-l-white shadow-sm"></div>
        </div>
      )}

      {/* Header section - rearranged to match the image */}
      <div className="mb-4">
        <span
          className="text-xs font-medium px-2 py-1 mb-2 inline-block rounded"
          style={{ backgroundColor: nameToColor(course?.category?.name) }}
        >
          {course?.category?.name.toUpperCase()}
        </span>
        <p className="text-2xl text-gray-900 font-medium mb-3">
          {course?.title}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Assuming course?.instructor?.image is the instructor's image URL */}
            {course?.teacher?.imageUrl ? (
              <Image
                src={course?.teacher?.imageUrl}
                alt={course?.teacher?.name}
                width={48} // Adjust size as needed
                height={48} // Adjust size as needed
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              // Fallback if no instructor image, could be a placeholder or initial
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold">
                {course?.teacher?.name
                  ? course?.teacher?.name.charAt(0)
                  : "N/A"}
              </div>
            )}
            <div>
              <p className="text-sm text-gray-500">Course by</p>
              <p className="text-base text-gray-900 font-medium">
                {course?.teacher?.name}
              </p>
            </div>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-gray-700">
            <span className="text-lg font-bold text-orange-500">★</span>
            <span className="text-base font-semibold">
              {course?.rating ? course.rating.toFixed(1) : "0.0"}
            </span>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="flex flex-col gap-4">
        {/* These were part of the old header, now removed or moved */}
        {/* <div className="flex items-center gap-3">
          <Image
            src={course?.thumbnail}
            alt={course?.title}
            className="w-12 h-12 rounded-full object-scale-down"
          />
          <div>
            <p className="text-sm text-gray-500">Course by</p>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-between gap-y-2">
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <Users className="w-4 h-4 text-indigo-600" />
            {course?.students?.toLocaleString()} students
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <BarChart className="w-4 h-4 text-orange-500" />
            {course?.level}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <Clock className="w-4 h-4 text-green-600" />
            {course?.duration} {course?.durationUnit?.toLowerCase()}
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 mt-2">
          {" "}
          {/* Added justify-between and mt-2 */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-900">
              ${course?.discountPrice?.toFixed(2) || "0.00"}{" "}
              {/* Changed to toFixed(2) */}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${course?.price?.toFixed(2) || "0.00"}{" "}
              {/* Changed to toFixed(2) */}
            </span>
            <span className="text-xs text-white bg-[#FF6636] px-2 py-1 rounded">
              {`${course?.discountPercentage?.toFixed(0) || "0"}`} % OFF
            </span>
          </div>
          <button className="p-3 rounded-full bg-[#FFEEE8] text-[#FF6636] hover:bg-[#FF6636] hover:text-white transition-colors duration-200">
            <Heart className="w-6 h-6" />
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-xs font-medium uppercase mb-2 text-gray-700">
            What you will learn
          </h4>
          <ul className="space-y-2">
            {/* Changed from course?.target_audience to course?.learnings */}
            {course?.learnings?.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-6 h-6 text-[#23BD33] flex-shrink-0" />{" "}
                {/* Check icon */}
                <p className="text-sm text-gray-600">{item.description}</p>{" "}
                {/* Accessing item.description */}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <button className="w-full flex items-center justify-center gap-2 bg-[#FF6636] text-white py-3 rounded">
            <ShoppingCart className="w-6 h-6" />
            <span>Add to Cart</span>
          </button>
          <Link
            href={`/courses/${course?.id}`}
            className="w-full flex items-center justify-center gap-2 bg-[#FFEEE8] text-[#FF6636] py-3 rounded"
          >
            Course Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseHoverCard;
