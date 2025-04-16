"use client";

import { useGetAllCourseQuery } from "@/store/api/courseApi";
import { useGetAllEnrollCoursesQuery } from "@/store/api/enrolledCourse";
import { CourseCarousel } from "./_components/dashboard/CourseCarousel";
import DashboardMetrics from "./_components/dashboard/DashboardMetrics";

export default function HomePage() {
  const {
    data: enrollcourses,
    isLoading,
    isError,
  } = useGetAllEnrollCoursesQuery("67e3de89529e63530afa1c88");
  const { data: allCourses } = useGetAllCourseQuery();

  const courses = (allCourses || []).filter((course) =>
    (enrollcourses || []).some((enrolled) => enrolled.courseId === course.id)
  );
  console.log(courses);

  // console.log(courses);

  if (isLoading) return <p>Loading...</p>;
  if ( isError) return <p>Something went wrong!</p>;

  const total_enrolled = courses.length;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mx-auto w-[1530px]">
        <DashboardMetrics totalEnroll={total_enrolled} />
      </div>

      <CourseCarousel courses={courses} />
    </div>
  );
}
