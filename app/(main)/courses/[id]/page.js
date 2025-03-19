import { getCourseById } from "@/lib/fetchData";

import CourseDetails from "./_component/CourseDetails";

import CourseInstructor from "./_component/CourseInstructor";
import CourseLearning from "./_component/CourseLearning";
import CoursePreview from "./_component/CoursePreview";
import CourseRating from "./_component/CourseRating";

import Breadcrumb from "./_component/Breadcrumb";
import CourseSidebar from "./_component/CourseSidebar";
import CourseTabs from "./_component/CourseTabs";

import CourseDescription from "./_component/CourseDescription";
import CourseInfo from "./_component/CourseInfo";
import CourseTitle from "./_component/CourseTitle";
import Curriculum from "./_component/Curriculum";
import RelatedCourses from "./_component/RelatedCourses";
import { StudentFeedback } from "./_component/StudentFeedback";

export default async function Home({ params }) {
  const { id } = params;
  const course = await getCourseById(id);

  return (
    <div className="h-full w-full">
      <div className="w-full min-h-screen relative">
        <div className="flex flex-col  absulate top-0 h-[370px] w-full bg-gray-100"></div>

        <div className="flex-1 px-10 py-2 flex gap-6 w-[1320px] mx-auto  bg-transparent -mt-[330px] ">
          <div className="flex flex-col  gap-4 w-full">
            <Breadcrumb />
            <CourseTitle title={course.title} subtitle={course.subtitle} />
            <CourseInfo course={course} />
            <CoursePreview course={course} />
            <CourseTabs />
            <CourseDescription />
            <CourseLearning />
            <CourseDetails />

            {/* Ensure the ID matches the tab name */}
            <section id="curriculum">
              <Curriculum />
            </section>

            <section id="instructor">
              <CourseInstructor instructors={course.instructors} />
            </section>

            <section id="review">
              <CourseRating />
              <StudentFeedback reviews={course.user_reviews} />
            </section>
          </div>
          <CourseSidebar course={course} />
        </div>
      </div>
      <div className="w-full">
        <RelatedCourses course={course} />
      </div>
    </div>
  );
}
