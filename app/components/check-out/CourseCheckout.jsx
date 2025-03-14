"use client";

import Image from "next/image";

export default function CourseCheckout() {
  const courses = [
    {
      id: 1,
      title: "Graphic Design Masterclass - Learn GREAT Design",
      instructor: "Courtney Henry",
      price: 13.0,
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      title: "Learn Python Programming Masterclass",
      instructor: "Marvin McKinney",
      price: 89.0,
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 3,
      title: "Instagram Marketing 2021: Complete Guide To Instagram",
      instructor: "Jacob Jones",
      price: 32.0,
      originalPrice: 62.0,
      image: "/placeholder.svg?height=80&width=120",
    },
  ];

  const subtotal = 61.97;
  const discountPercentage = 8;
  const total = 75.0;

  return (
    <div className="w-2/5 justify-center items-center mx-auto p-6 bg-white  shadow">
      {/* Courses Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Courses 03</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex gap-4">
              <div className="w-[120px] h-[80px] relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">
                  Course by: {course.instructor}
                </div>
                <h3 className="font-medium leading-snug">{course.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#ff5722] font-medium">
                    ${course.price.toFixed(2)}
                  </span>
                  {course.originalPrice && (
                    <span className="text-gray-400 line-through">
                      ${course.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>${subtotal.toFixed(2)} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Coupon Discount</span>
            <span>{discountPercentage}%</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t mt-4">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)} USD</span>
          </div>
        </div>

        <button
          className="w-full mt-6 bg-[#ff5722] hover:bg-[#f4511e] text-white font-medium py-3 px-4 rounded transition-colors"
          onClick={() => console.log("Processing payment...")}
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
}
