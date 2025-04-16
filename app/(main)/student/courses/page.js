// import { fetchCourses } from "@/lib/fetchData";
// import Heading from "../_components/courses/Heading";
// import CourseCard from "../_components/shared/CourseCard";

// export default async function CoursesPage() {
//   const courses = await fetchCourses();
//   return (
//     <div className="container mx-auto ">
//       <Heading courses={courses} />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {courses.map((course) => (
//           <div key={course.id} className="w-full h-92">
//             <CourseCard course={course} className="h-full" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useGetAllCourseQuery } from "@/store/api/courseApi";
import { useGetAllEnrollCoursesQuery } from "@/store/api/enrolledCourse";
import Heading from "../_components/courses/Heading";
import CourseCard from "../_components/shared/CourseCard";

export default function CoursesPage() {
  const {
    data: enrollcourses,
    isLoading,
    isError,
  } = useGetAllEnrollCoursesQuery("67e3de89529e63530afa1c88");
  const { data: allCourses } = useGetAllCourseQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching courses</div>;
  }

  const courses = (allCourses || []).filter((course) =>
    (enrollcourses || []).some((enrolled) => enrolled.courseId === course.id)
  );

  return (
    <div className="container mx-auto">
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
