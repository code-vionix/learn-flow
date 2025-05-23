"use client";
import { useGetInstructorByIdQuery } from "@/store/api/instructorApi";
import { useSession } from "next-auth/react";
import InstructorCourseCard from "./_components/InstructorCourseCard";

const InstructorPage = () => {
  const { data: session } = useSession();
  const { data, isLoading, isError } = useGetInstructorByIdQuery(
    session?.user?.id || ""
  );



  const profile = data?.data?.instructor;
  const courses = profile?.Course;

  // LinkedIn-style spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load courses. Please try again later.
      </div>
    );
  }

  return (
    <>
      {/* <FilterCourse courses={courses} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses?.map((course) => (
          <InstructorCourseCard key={course?.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default InstructorPage;
