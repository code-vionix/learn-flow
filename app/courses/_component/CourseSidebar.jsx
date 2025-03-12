import CourseActions from "./CourseActions";
import CourseFeatures from "./CourseFeatures";
import CoursePrice from "./CoursePrice";
import CourseShare from "./CourseShare";
import SidebarCourseInfo from "./SidebarCourseInfo";

export default function CourseSidebar(props) {
  return (
    <div className="w-[424px] h-fit bg-white border border-gray-200 rounded-lg shadow-lg p-6 space-y-6">
      <CoursePrice {...props} />
      <SidebarCourseInfo {...props} />
      <CourseActions />
      <CourseFeatures />
      <CourseShare />
    </div>
  );
}
