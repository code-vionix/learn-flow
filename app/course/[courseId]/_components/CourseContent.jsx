import WatchingCourseContent from "./WatchingCourseContent";
import WatchingCoursePreview from "./WatchingCoursePreview";

const CourseContent = () => {
    return (
        <div className="mt-3 lg:flex grid-cols-3 gap-4">
            <div className="col-span-2 md:p-2 lg:w-[65%] w-full">
                <WatchingCoursePreview />
            </div>
            <div className="md:block hidden lg:w-[35%] w-full">
                <WatchingCourseContent />
            </div>
        </div>
    );
};

export default CourseContent;