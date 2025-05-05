"use client";

import { useGetAllEnrollCoursesQuery } from "@/store/api/enrolledCourse";
import { CourseCarousel } from "./_components/dashboard/CourseCarousel";
import DashboardMetrics from "./_components/dashboard/DashboardMetrics";

export default function HomePage() {
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetAllEnrollCoursesQuery("67e3de89529e63530afa1c88");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mx-auto w-[1530px]">
        <DashboardMetrics courses={courses} />
      </div>

      <CourseCarousel courses={courses} />
    </div>
  );
}
