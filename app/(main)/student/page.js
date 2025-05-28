"use client";

import { useGetAllEnrollCoursesQuery } from "@/store/api/enrolledCourse";
import { CourseCarousel } from "./_components/dashboard/CourseCarousel";
import DashboardMetrics from "./_components/dashboard/DashboardMetrics";
import { useGetAllEnrolledCoursesTeacherQuery } from "@/store/api/enrolledTeacher";

export default function HomePage() {
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetAllEnrollCoursesQuery();

  const {
    data: instructors = [],
    isLoading: instructorLoading,
    isError: instructorError,
  } = useGetAllEnrolledCoursesTeacherQuery();

  if (isLoading || instructorLoading) return <p>Loading...</p>;
  if (isError || instructorError) return <p>Something went wrong!</p>;

  

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mx-auto w-[1530px]">
        <DashboardMetrics courses={courses} instructors={instructors} />
      </div>

      <CourseCarousel courses={courses} />
    </div>
  );
}
