import CourseCard from "@/app/(main)/components/home/RecentAddedCourse/CourseCard";
import StudentFeedBackCard from "@/app/(main)/courses/[id]/_component/StudentFeedBackCard";
import { reviews } from "@/data";
import { fetchCourses } from "@/lib/fetchData";

export default async function InstructorCoursePage() {
  const courses = await fetchCourses();

  return (
    <div className=" px-2 2xl:px-40  mx-auto flex flex-col lg:flex-row gap-6 lg:mt-20 mt-5 mb-20">
      <div className="w-full lg:w-1/3 border lg:p-6 p-3 text-center lg:text-start self-start">
        <h2 className="lg:text-xl text-lg font-medium lg:font-semibold mb-4">About Me</h2>
        <p>
          This section provides details about the instructor and their courses.
        </p>
      </div>

      <div className="w-full lg:w-2/3 text-center">
        <div className="flex lg:gap-40 gap-8  justify-center">
          <span className="relative lg:text-xl text-lg font-md pb-4 text-black hover:after:w-40 hover:after:border-b-2 hover:after:border-primary-500 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0">
            Courses
          </span>

          <a
            href="#student-feedback"
            className="relative lg:text-xl text-lg font-md pb-4 text-black hover:after:w-40 hover:after:border-b-2 hover:after:border-primary-500 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0"
          >
            Review
          </a>
        </div>
        <hr className="text-black" />

        <h2 className="lg:text-2xl text-xl font-semibold mb-4 mt-4">Vaku Courses</h2>
        <div className="flex flex-wrap items-center justify-center mx-auto gap-6 mt-6 mb-6">
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
