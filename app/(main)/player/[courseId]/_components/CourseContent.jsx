import WatchingCourseContent from "./WatchingCourseContent";
import WatchingCoursePreview from "./WatchingCoursePreview";

const CourseContent = ({ data, sections, course, enrollments, courseId }) => {
  const modules = data.modules;
  return (
    <div className="mt-3 lg:flex grid-cols-3 gap-4">
      <div className="col-span-2 md:p-2 lg:w-[65%] w-full">
        <WatchingCoursePreview
          courseId={courseId}
          data={data}
          course={course}
          enrollments={enrollments}
          sections={sections}
        />
      </div>
      <div className="md:block hidden lg:w-[35%] w-full">
        <WatchingCourseContent
          modules={modules}
          sections={sections}
          courseId={courseId}
        />
      </div>
    </div>
  );
};

export default CourseContent;
