import { fetchCourses } from "@/lib/fetchData";
import Heading from "../components/courses/Heading";
import CourseCard from "../components/shared/CourseCard";

export default async function CoursesPage() {
  const courses = await fetchCourses();
  return (
    <div className="container mx-auto mt-20">
      <Heading courses={courses} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="w-full h-92">
            <CourseCard course={course} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
