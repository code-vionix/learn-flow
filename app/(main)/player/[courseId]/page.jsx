import { CourseProvider } from "@/povider/CourseProvider";
import { getCourseDataByCourseId } from "@/utils/courses";
import { getCourseById } from "@/utils/getCourseById";
import CourseContent from "./_components/CourseContent";
import WatchingCourseHeader from "./_components/WatchingCourseHeader";
import WatchingCourseWrapper from "./_components/WatchingCourseWrapper";
import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";

const CourseWatchingPage = async ({ params }) => {
  const { courseId } = params;

  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    redirect("/login"); // This is extra safe; middleware already handles this
  }

  let course;

  try {
    course = await getCourseById(courseId);
  } catch (error) {
    return notFound(); // Show custom 404 page if API fails
  }

  if (!course) {
    return notFound();
  }

  const sections = await getCourseDataByCourseId("modules", courseId);
  const enrollments = await getCourseDataByCourseId("enrolments", courseId);

  const isEnrolled = course?.enrollments?.some(
    (enrollment) => enrollment.userId === userId
  );

  if (!isEnrolled) {
    redirect(`/courses/${courseId}`);
  }

  return (
    <div className="bg-white">
      <CourseProvider courseId={courseId}>
        <WatchingCourseHeader course={course} sections={sections} />
        <WatchingCourseWrapper>
          <CourseContent
            courseId={courseId}
            data={course}
            sections={sections}
            course={course}
            enrollments={enrollments?.data}
          />
        </WatchingCourseWrapper>
      </CourseProvider>
    </div>
  );
};

export default CourseWatchingPage;
