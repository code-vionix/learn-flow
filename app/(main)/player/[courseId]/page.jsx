import { CourseProvider } from "@/povider/CourseProvider";
import { getCourseDataByCourseId } from "@/utils/courses";
import { getCourseById } from "@/utils/getCourseById";
import CourseContent from "./_components/CourseContent";
import WatchingCourseHeader from "./_components/WatchingCourseHeader";
import WatchingCourseWrapper from "./_components/WatchingCourseWrapper";
import { courseData } from "./data/coursesData";

const CourseWatchingPage = async ({ params }) => {
  const { courseId } = params;

  const data = courseData[0];
  const course = await getCourseById(courseId);
  const sections = await getCourseDataByCourseId("modules", courseId);
  const enrollments = await getCourseDataByCourseId("enrolments", courseId);

  return (
    <div className="bg-white">
      <CourseProvider courseId={courseId}>
        <WatchingCourseHeader course={course} sections={sections} />
        <WatchingCourseWrapper>
          <CourseContent
            courseId={courseId}
            data={data}
            sections={sections}
            course={course}
            enrollments={enrollments.data}
          />
        </WatchingCourseWrapper>
        ``
        <br /> <br />
      </CourseProvider>
    </div>
  );
};

export default CourseWatchingPage;
