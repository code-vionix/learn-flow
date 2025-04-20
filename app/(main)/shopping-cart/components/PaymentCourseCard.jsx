"use client"
import React from 'react'
import {
  
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Star, XCircle } from "lucide-react";
import Image from 'next/image';

function PaymentCourseCard({course,setWishlist,wishlist}) {

  const handleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <TableBody key={course.id} className="relative">
            <XCircle
                className="hidden md:block absolute lg:top-[4.4rem] top-[3.2rem]  left-2"
                color={`${ wishlist.includes(course.id)
                    ? "rgba(140, 148, 163, 1)"
                    : "rgba(29, 32, 38, 1)"
                }`}
              />

    <TableRow className="lg:ml-3 flex flex-col lg:flex-row lg:items-center lg:justify-between ">
      <TableCell className="lg:pl-4 w-full">
        <div className="flex   xl:gap-4 gap-2 sm:ml-6 ">
          <div className="relative max-h-[7.5rem] max-w-48  overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              height={120}
              width={240}
              className="object-cover"
            />
          </div>
          <div className=''>
            <div className="lg:mb-5 mb-2 flex items-center  text-gray-500">
              <div className="flex text-md  items-center">
                <Star className="lg:h-4 lg:w-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">
                  {course.rating}
                </span>
                <span className="lg:ml-1">
                  ({course.reviews} Reviews)
                </span>
              </div>
            </div>
            <h2 className="lg:text-xl text-sm font-normal lg:font-medium text-gray-900 mt-[-12px]">
              {course.title}
            </h2>
            <div className="flex lg:mt-6 mt-2 lg:space-x-2 space-x-1 text-md">
              <p className=" text-gray-500">Course by:</p>
              <p className="font-normal lg:font-medium text-gray-500">
                {course.instructors.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </TableCell>
      <div className="flex items-center mx-auto sm:justify-end  2xl:px-16  ">
        <TableCell>
          <span className="lg:text-xl text-base font-medium text-primary-500">
            ${course.discountedPrice.toFixed(2)}
          </span>
          <span className="ml-2 lg:text-xl text-base text-gray-500 line-through">
            ${course.originalPrice.toFixed(2)}
          </span>
        </TableCell>
        <TableCell className="lg:pr-4">
          <div className="lg:ml-5 ml-3 flex flex-col justify-center items-end lg:gap-6 gap-3 lg:min-w-[200px]">
            <div className="flex lg:space-x-3 space-x-2">
              <button
                onClick={() => handleWishlist(course.id)}
                className={`inline-flex items-center px-3 py-2 md:px-10 md:py-3 border border-transparent text-md font-normal lg:font-medium  text-primary-500 ${
                  wishlist.includes(course.id)
                    ? "bg-white"
                    : "bg-primary-100"
                }  hover:bg-primary-200 `}
              >
                Move To Wishlist
              </button>
            </div>
          </div>
        </TableCell>
      </div>
    </TableRow>
  </TableBody>
  )
}

export default PaymentCourseCard