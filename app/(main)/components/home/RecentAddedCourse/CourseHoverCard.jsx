/* eslint-disable @next/next/no-img-element */
import { BarChart, Check, Clock, ShoppingCart } from "lucide-react";

const CourseHoverCard = ({ course }) => {
  return (
    <div className="z-10 flex items-start justify-start">
      <div className="bg-white border border-gray-200 shadow-lg  lg:w-[424px] p-5">
        <div className="flex flex-col lg:gap-4">
          {/* Instructor Section */}
          <div className="flex items-center gap-3">
            <img
              src={course?.thumbnail}
              alt={course?.title}
              className="w-12 h-12 rounded-full object-scale-down"
            />
            <div>
              <p className="text-sm text-gray-500">Course by</p>
              <p className="text-sm text-gray-900 font-medium">
                {course?.title}
              </p>
            </div>
          </div>

          {/* Course Info */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BarChart className="w-5 h-5 text-[#E34444]" />
              <span className="text-sm text-gray-700">{course?.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#23BD33]" />
              <span className="text-sm text-gray-700">{course?.duration}</span>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-900">
              ${course?.discountPrice.toFixed(0)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${course?.price}
            </span>
            <span className="text-xs text-white bg-[#FF6636] px-2 py-1 rounded">
              {`${course.discountPercentage.toFixed(0)}`}% OFF
            </span>
          </div>

          {/* What You'll Learn */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-xs font-medium uppercase mb-2 text-gray-700">
              What you will learn
            </h4>
            <ul className="space-y-2">

              {course?.target_audience?.map((item, index) => (

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
  );
};

export default CourseHoverCard;
