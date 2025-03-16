
import { CourseProgress } from "./CourseProgress";
import CourseModuleItem from "./CourseModuleItem";
import { courseData } from "../data/coursesData";
import { Accordion2 } from "@/components/ui/accordion2.";

const WatchingCourseContent = ({ modules }) => {
    return (
        <div className="md:mt-0 mt-4">
            <div className="flex items-center justify-between w-full">
                <h1 className="md:text-[24px] font-semibold">Course Contents</h1>
                <h3 className="md:text-[16px] font-semibold text-success-500">15% Completed</h3>
            </div>
            <CourseProgress />

            <div className="mt-4 border transparent-scroll h-[490px] overflow-y-auto ">
                <Accordion2 type="single" collapsible className="w-full">
                    {modules?.map((course) => (
                        <CourseModuleItem key={course.id} course={course} />
                    ))}
                </Accordion2>
            </div>
        </div>
    );
};

export default WatchingCourseContent;