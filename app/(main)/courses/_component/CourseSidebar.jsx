import CourseActions from "./CourseActions";
import CourseFeatures from "./CourseFeatures";
import CoursePrice from "./CoursePrice";
import CourseShare from "./CourseShare";
import SidebarCourseInfo from "./SidebarCourseInfo";

export default function CourseSidebar({ course }) {
  return (
    <div className="w-[424px] h-fit bg-white border border-gray-200  shadow-lg p-6 space-y-6">
      <CoursePrice offer_price={course.offer_price} price={course.price} />
      <SidebarCourseInfo course={course} />
      <CourseActions course={course} />
      <CourseFeatures course={course} />
      <CourseShare />
    </div>
  );
}
