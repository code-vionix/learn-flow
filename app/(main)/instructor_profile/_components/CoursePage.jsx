import CourseCard from "@/app/(main)/components/home/RecentAddedCourse/CourseCard";
import StudentFeedBackCard from "@/app/(main)/courses/[id]/_component/StudentFeedBackCard";
import { reviews } from "@/data";
import { fetchCourses } from "@/lib/fetchData";

export default async function InstructorCoursePage() {
  const courses = await fetchCourses();

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 mt-20 mb-20">
      <div className="w-full md:w-1/3 border p-6 self-start">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p>
          This section provides details about the instructor and their courses.
        </p>
      </div>

      <div className="w-full md:w-2/3">
        <div className="flex gap-40 pl-16">
          <span className="relative text-xl font-md pb-4 text-black hover:after:w-40 hover:after:border-b-2 hover:after:border-orange-500 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0">
            Courses
          </span>

          <a
            href="#student-feedback"
            className="relative text-xl font-md pb-4 text-black hover:after:w-40 hover:after:border-b-2 hover:after:border-orange-500 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0"
          >
            Review
          </a>
        </div>
        <hr className="text-black" />

        <h2 className="text-2xl font-semibold mb-4 mt-4">Vaku Courses</h2>
        <div className="flex flex-wrap gap-6 mt-6 mb-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <div id="student-feedback">
          <StudentFeedBackCard reviews={reviews} />
        </div>
      </div>
    </div>
  );
}
