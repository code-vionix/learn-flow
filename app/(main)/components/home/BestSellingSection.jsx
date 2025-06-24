
'use client';
import Image from "next/image";
import CourseCard from "../cards/CourseCard";

export default function BestSellingSection({ courses }) {

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16  bg-gray-100  pb-[200px]">
      <h2 className="text-3xl font-bold text-center mb-12">
        Best selling courses
      </h2>
      <div className="lg:w-[1320px]  mx-auto ">
        {courses && courses.length === 0
          ? (
            <div className="h-full flex flex-col items-center justify-center ">
              <Image src="/images/no-item-found.png" alt="No courses available" width={500} height={300} className="mx-auto opacity-[0.5]" />
              <h3 className="text-center text-gray-600 text-xl">
                No courses available at the moment
              </h3>
            </div>)
          : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {courses?.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
