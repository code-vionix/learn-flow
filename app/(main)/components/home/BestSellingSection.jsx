'use client';
import CourseCard from "../cards/CourseCard";

export default function BestSellingSection({ courses }) {
  console.log("object", courses);
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16  bg-gray-100 h-[1179px]">
      <h2 className="text-3xl font-bold text-center mb-12">
        Best selling courses
      </h2>
      <div className=" h-[691px]  w-[1320px]  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {courses?.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
