import Breadcrumb from "./_component/Breadcrumb";

import { reviews } from "./../../data/index";
import CourseDescription from "./_component/CourseDescription";
import CourseDetails from "./_component/CourseDetails";
import CourseInfo from "./_component/CourseInfo";
import CourseInstructor from "./_component/CourseInstructor";
import CourseLearning from "./_component/CourseLearning";
import CoursePreview from "./_component/CoursePreview";
import CourseRating from "./_component/CourseRating";
import CourseSidebar from "./_component/CourseSidebar";
import CourseTabs from "./_component/CourseTabs";
import CourseTitle from "./_component/CourseTitle";
import { StudentFeedback } from "./_component/StudentFeedback";

export default function Home() {
  const course = {
    price: "0",
    originalPrice: "0",
    discount: "0",
    daysLeft: "Limited time",
    duration: "Self-paced",
    level: "Beginner",
    studentsEnrolled: "0",
    language: "English",
    subtitleLanguage: "English",
  };
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-10 py-10 flex gap-6">
        <div className="flex flex-col gap-10 w-full">
          <Breadcrumb />
          <CourseTitle />
          <CourseInfo />
          <CoursePreview />
          <CourseTabs />
          <CourseDescription />
          <CourseLearning />
          <CourseDetails />
          <CourseInstructor />
          <CourseRating />
          <StudentFeedback reviews={reviews} />
        </div>
        <CourseSidebar {...course} />
      </main>
    </div>
  );
}
