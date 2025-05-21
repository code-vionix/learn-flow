"use client";
import { MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";

export default function CourseCard({ course }) {
  const { imageUrl, instructor, description, createdAt, price, endDate, title } = course;

  console.log("course", course);
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  }


  return (
    <div className="flex flex-col md:flex-row bg-white  shadow-sm overflow-hidden max-w-full">
      {/* Course Image */}
      <div className="relative w-full md:w-[352px] h-64 md:h-auto p-6">
        <Image
          src={imageUrl || "https://plus.unsplash.com/premium_photo-1682974406904-15916a7501f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={title || "Course Image"}
          fill
          sizes="(max-width: 768px) 100vw, 352px"
          className="object-cover p-5"
          priority
        />
      </div>

      {/* Course Details */}
      <div className="flex flex-col p-5 md:p-6 flex-1">
        {/* Upload Info */}
        <div className="text-sm text-gray-500 mb-2">
          <span>
            Uploaded:{" "}
            <span className="text-gray-700">{formatDate(createdAt)}</span>
          </span>
          <span className="mx-3">
            Last Updated:{" "}
            <span className="text-gray-700">{formatDate(endDate)}</span>
          </span>
        </div>


        {/* Course Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          {title}
        </h2>

        {/* Course Description */}
        <p className="text-sm text-gray-600 mb-6">
          {description}
        </p>

        {/* Instructors and Rating */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Instructors */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative w-12 h-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={instructor?.user?.imageUrl || "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt="Kevin Gilbert"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="absolute left-4 top-0 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Kristin Watson"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="ml-2">
              <p className="text-xs text-gray-600">Created by:</p>
              <p className="text-sm font-medium text-gray-900">
                {instructor?.user?.firstName} {instructor?.user?.lastName}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-amber-500 text-amber-500"
                />
              ))}
            </div>
            <span className="font-medium text-gray-900 mr-1">4.8</span>
            <span className="text-sm text-gray-600">(451,444 Rating)</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Price and Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Price Info */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-8">
              <p className="text-xl font-normal text-gray-900">$${price}</p>
              <p className="text-xs text-gray-600">Course prices</p>
            </div>
            <div>
              <p className="text-xl font-normal text-gray-900">
                $131,800,455.82
              </p>
              <p className="text-xs text-gray-600">USD dollar revenue</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex">
            <button className="bg-[#FF6636] text-white px-6 py-3  mr-2 font-medium">
              Withdrew Money
            </button>
            <button className="bg-gray-100 p-3 ">
              <MoreHorizontal className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
