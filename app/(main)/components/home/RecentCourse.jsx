/* eslint-disable @next/next/no-img-element */
"use client";
import { BarChart, Check, Clock, ShoppingCart, Star, User } from "lucide-react";
import { useState } from "react";

const RecentCourseCard = ({ course }) => {
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
              style={{
                backgroundColor: course.category.bgColor,
                color: course.category.color,
              }}
            >
              {course.category.name.toUpperCase()}
            </span>
            <span className="text-lg font-medium text-[#FF6636]">
              ${course.price}.00
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
                  {(course.students / 1000).toFixed(1)}K students
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isHovered && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-10">
          <div className="bg-white border border-gray-200 shadow-lg rounded-sm w-[424px] p-5">
            <div className="flex flex-col gap-4">
              {/* Instructor Section */}
              <div className="flex items-center gap-3">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-500">Course by</p>
                  <p className="text-sm text-gray-900 font-medium">
                    {course.instructor.name}
                  </p>
                </div>
              </div>

              {/* Course Info */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-[#E34444]" />
                  <span className="text-sm text-gray-700">{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#23BD33]" />
                  <span className="text-sm text-gray-700">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-gray-900">
                  ${course.discountedPrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${course.originalPrice}
                </span>
                <span className="text-xs text-white bg-[#FF6636] px-2 py-1 rounded">
                  {course.discount}% OFF
                </span>
              </div>

              {/* What You'll Learn */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-xs font-medium uppercase mb-2 text-gray-700">
                  What you will learn
                </h4>
                <ul className="space-y-2">
                  {course.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-6 h-6 text-[#23BD33] flex-shrink-0" />
                      <p className="text-sm text-gray-600">{item}</p>
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
                <button className="w-full flex items-center justify-center gap-2 bg-[#FFEEE8] text-[#FF6636] py-3 rounded">
                  Course Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default RecentCourseCard;
