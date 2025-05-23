'use client';
import { useGetAllInstructorOfTheMonthQuery } from "@/store/api/instructorApi";
import TopInstructorCard from "./TopInstructorCard";
import CourseSkaliton from "../cards/CourseSkaliton";


export default function TopInstructors({ instructors }) {
  const { data: topInstructors, isLoading, isError } = useGetAllInstructorOfTheMonthQuery();
  return (
    <section className="mt-[-260px]">
      <div className="primary-container bg-white border">
        <h2 className="text-4xl font-semibold text-center text-[#1D2026] mb-10 leading-[48px] tracking-[-0.01em]">
          Top instructor of the month
        </h2>
        <div className="grid md:grid-cols-5 md:gap-8 gap-3">
          {isLoading ? (
            new Array(5).fill(0).map((_, index) => (
              <CourseSkaliton key={index} />
            ))
          )
            : (
              topInstructors?.map((instructor, index) => (
                <TopInstructorCard key={index} instructor={instructor} />
              ))
            )}
        </div>
      </div>
    </section>
  );
}
