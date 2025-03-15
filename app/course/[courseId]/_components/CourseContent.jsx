import WatchingCourseContent from "./WatchingCourseContent";
import WatchingCoursePreview from "./WatchingCoursePreview";

const CourseContent = ({ data }) => {
    const modules = data.modules;
    return (
        <div className="mt-3 lg:flex grid-cols-3 gap-4">
            <div className="col-span-2 md:p-2 lg:w-[65%] w-full">
                <WatchingCoursePreview data={data} />
            </div>
            <div className="md:block hidden lg:w-[35%] w-full">
                <WatchingCourseContent modules={modules} />
            </div>
        </div>
    );
};

export default CourseContent;