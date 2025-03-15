'use client';
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCheck, Play, Pause, CirclePlay, FolderOpen } from "lucide-react";
import { AccordionContent2, AccordionItem2, AccordionTrigger2 } from "@/components/ui/accordion2.";
import { useCourseContext } from "@/povider/CourseProvider";

const CourseModuleItem = ({ course }) => {
    const { currentLecture } = useCourseContext()
    const [playingId, setPlayingId] = useState(null);
    const { handleLectureClick } = useCourseContext();
    const calculateCompletionPercentage = (course) => {
        const totalModules = course?.lectures.length;
        const finishedModules = course?.lectures?.filter(mod => mod?.isFinished).length;
        return totalModules > 0 ? ((finishedModules / totalModules) * 100).toFixed(2) + "%" : "0%";
    };

    const handlePlayPause = (id) => {
        setPlayingId(prev => (prev === id ? null : id));
    };

    // console.log("module.......", course);

    return (
        <AccordionItem2 className="border-b" value={course?.moduleName}>
            <AccordionTrigger2
                className="px-2 flex !justify-between ">
                <div className=" items-center text-sm">
                    {course?.moduleName.slice(0, 60)} ...
                </div>

                <div className="md:flex hidden ml-auto items-center  gap-2 !text-[14px] mt-1 pr-1">
                    <div className="flex items-center gap-1">
                        <CirclePlay strokeWidth={1.5} className="h-4 w-4 text-secondary-500" />
                        <span className="text-gray-600">{course?.lectures.length} lectures</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FolderOpen strokeWidth={1.5} className="h-4 w-4 text-primary-500" />
                        <span className="text-gray-600">{course?.sections} Sections</span>
                    </div>
                    {course?.moduleFinished &&
                        <div className="flex items-center gap-1">
                            <CheckCheck strokeWidth={1.5} className="h-4 w-4 text-success-500" />
                            <span className="text-gray-600">{calculateCompletionPercentage(course)} Finished</span>
                        </div>}
                </div>
            </AccordionTrigger2>

            <AccordionContent2 className="py-0">
                <ul>
                    {course?.lectures?.map(module => (
                        <li
                            key={module?.id}
                            onClick={() => handleLectureClick(course?.moduleId, module?.lectureId)}
                            className={`flex items-center gap-2 px-4 py-2 duration-300 cursor-pointer hover:bg-warning-100 ${currentLecture?.lectureId === module?.lectureId ? "bg-warning-100" : ""}`}
                        >
                            <div className="flex text-gray-500 hover:text-gray-800 duration-300 justify-between w-full items-center gap-2">
                                <span className="text-sm flex items-center gap-1">
                                    <Checkbox
                                        className={`${module?.isFinished && "!bg-primary-500 !border-none "} border-gray-400 !border !rounded-none w-5 h-5`}
                                        checked={module?.isFinished}
                                    />
                                    {module?.lectureName}
                                </span>
                                <span className="flex items-center gap-2 text-[12px]">
                                    {playingId === module?.id ? <Pause size={12} /> : <Play size={12} />} {module?.moduleDuration}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </AccordionContent2>
        </AccordionItem2>
    );
};

export default CourseModuleItem;
