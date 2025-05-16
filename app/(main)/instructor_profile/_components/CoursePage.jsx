"use client";
import CourseCard from "@/app/(main)/components/home/RecentAddedCourse/CourseCard";
import StudentFeedBackCard from "@/app/(main)/courses/[id]/_component/StudentFeedBackCard";
import { useGetInstructorByIdQuery } from "@/store/api/instructorApi";
import { useSession } from "next-auth/react";

export default function InstructorCoursePage() {
  // const courses = await fetchCourses();
  const { data: session } = useSession();
  const { data, isLoading, isError } = useGetInstructorByIdQuery(
    session?.user?.id || ""
  );
  const profile = data?.data?.instructor;
  const courses = profile?.Course;

  if (isLoading) return null;
  if (isError) return <div className="p-4 text-red-500">{isError}</div>;

  return (
    <>
      <div className="container mx-auto px-8  flex flex-col lg:flex-row gap-6 lg:mt-20 mt-5 mb-20">
        <div className="w-full md:w-1/3 border p-6 self-start">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p>{profile?.about || "No description found"}</p>
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex gap-40 pl-16">
            <span className="relative text-xl font-md pb-4 text-black hover:after:w-40 hover:after:border-b-2 hover:after:border-primary-500 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0">
              Courses
            </span>

            <a
              href="#student-feedback"
              className="relative text-xl font-md pb-4 text-black hover:after:w-40 hover:after:border-b-2 hover:after:border-primary-500 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0"
            >
              Review
            </a>
          </div>
          <hr className="text-black" />

          <h2 className="text-2xl font-semibold mb-4 capitalize mt-4">
            {profile?.user?.firstName} {data?.data?.lastName} Courses(
            {profile?.Course?.length})
          </h2>
          {courses && courses.length > 0 ? (
            <div className="flex flex-wrap gap-6 mt-6 mb-6">
              {courses?.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[300px] w-full">
              <span className="text-lg">No courses found</span>
            </div>
          )}

          <div id="student-feedback">
            <StudentFeedBackCard reviews={profile?.ratings} />
          </div>
        </div>
      </div>
    </>
  );
}
