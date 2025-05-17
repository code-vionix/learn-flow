import { Accordion2 } from "@/components/ui/accordion2.";
import CourseModuleItem from "./CourseModuleItem";
import { CourseProgress } from "./CourseProgress";

const WatchingCourseContent = ({ sections, courseId }) => {
  console.log("section...", sections);

  return (
    <div className="md:mt-0 mt-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="md:text-[24px] font-semibold">Course Contents</h1>
        <h3 className="md:text-[16px] font-semibold text-success-500">
          15% Completed
        </h3>
      </div>
      <CourseProgress />

      <div className="mt-4 border transparent-scroll h-[490px] overflow-y-auto ">
        <Accordion2 type="single" collapsible className="w-full">
          {sections?.data?.map((module) => (
            <CourseModuleItem key={module.id} module={module} />
          ))}
        </Accordion2>
      </div>
    </div>
  );
};

export default WatchingCourseContent;
