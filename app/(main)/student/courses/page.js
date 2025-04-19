"use client";
import { useGetAllEnrollCoursesQuery } from "@/store/api/enrolledCourse";
import Heading from "../_components/courses/Heading";
import CourseCard from "../_components/shared/CourseCard";

export default function CoursesPage() {
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetAllEnrollCoursesQuery("67e3de89529e63530afa1c88");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching courses</div>;
  }

  return (
    <div className="container mx-auto">
      <Heading courses={courses} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="w-full h-92">
            <CourseCard course={course.course} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
