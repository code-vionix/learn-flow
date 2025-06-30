"use client";

import { useGetAllEnrollCoursesQuery } from "@/store/api/enrolledCourse";
import { useGetAllEnrolledCoursesTeacherQuery } from "@/store/api/enrolledTeacher";
import { CourseCarousel } from "./_components/dashboard/CourseCarousel";
import DashboardMetrics from "./_components/dashboard/DashboardMetrics";

export default function HomePage() {
  const { data: courses, isLoading, isError } = useGetAllEnrollCoursesQuery();

  const {
    data: instructors = [],
    isLoading: instructorLoading,
    isError: instructorError,
  } = useGetAllEnrolledCoursesTeacherQuery();

  if (isLoading || instructorLoading) return <p>Loading...</p>;
  if (isError || instructorError) return <p>Something went wrong!</p>;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center gap-2 w-full">
        <DashboardMetrics courses={courses} instructors={instructors} />
      </div>

      <CourseCarousel courses={courses} />
    </div>
  );
}
