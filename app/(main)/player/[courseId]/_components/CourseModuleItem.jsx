"use client";
import {
  AccordionContent2,
  AccordionItem2,
  AccordionTrigger2,
} from "@/components/ui/accordion2.";
import { Checkbox } from "@/components/ui/checkbox";
import { useCourseContext } from "@/povider/CourseProvider";
import { CheckCheck, CirclePlay, FolderOpen, Pause, Play } from "lucide-react";
import { useState } from "react";

const CourseModuleItem = ({ module }) => {
  const { currentLecture, handleLessonClick } = useCourseContext();
  const [playingId, setPlayingId] = useState(null);

  // Calculate completion percentage of lessons in this module
  const calculateCompletionPercentage = (module) => {
    const totalLessons = module?.lessons?.length || 0;
    const finishedLessons = module?.lessons?.filter(
      (lesson) => lesson?.isFinished
    ).length;
    return totalLessons > 0
      ? ((finishedLessons / totalLessons) * 100).toFixed(2) + "%"
      : "0%";
  };

  // Toggle play/pause icon for lesson
  const handlePlayPause = (id) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionItem2 className="border-b" value={module?.title}>
      <AccordionTrigger2 className="px-2 flex !justify-between ">
        <div className="items-center text-sm">
          {module?.title.slice(0, 60)} ...
        </div>

        <div className="md:flex hidden ml-auto items-center gap-2 !text-[14px] mt-1 pr-1">
          <div className="flex items-center gap-1">
            <CirclePlay
              strokeWidth={1.5}
              className="h-4 w-4 text-secondary-500"
            />
            <span className="text-gray-600">
              {module?.lessons?.length} lectures
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FolderOpen
              strokeWidth={1.5}
              className="h-4 w-4 text-primary-500"
            />
            <span className="text-gray-600">5 Sections</span>
          </div>
          {/* Show finished percentage if any lesson is finished */}
          {module?.lessons?.some((lesson) => lesson.isFinished) && (
            <div className="flex items-center gap-1">
              <CheckCheck
                strokeWidth={1.5}
                className="h-4 w-4 text-success-500"
              />
              <span className="text-gray-600">
                {calculateCompletionPercentage(module)} Finished
              </span>
            </div>
          )}
        </div>
      </AccordionTrigger2>

      <AccordionContent2 className="py-0">
        <ul>
          {module?.lessons?.map((lesson) => (
            <li
              key={lesson?.id}
              onClick={() => handleLessonClick(module?.id, lesson?.id)}
              className={`flex items-center gap-2 px-4 py-2 duration-300 cursor-pointer hover:bg-warning-100 ${
                currentLecture?.lectureId === lesson?.id ? "bg-warning-100" : ""
              }`}
            >
              <div className="flex text-gray-500 hover:text-gray-800 duration-300 justify-between w-full items-center gap-2">
                <span className="text-sm flex items-center gap-1">
                  <Checkbox
                    className={`border-gray-400 !border !rounded-none w-5 h-5 ${
                      lesson?.isFinished ? "!bg-primary-500 !border-none" : ""
                    }`}
                    checked={lesson?.isFinished}
                    readOnly
                  />
                  {lesson?.title}
                </span>
                <span
                  className="flex items-center gap-2 text-[12px] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause(lesson?.id);
                  }}
                >
                  {playingId === lesson?.id ? (
                    <Pause size={12} />
                  ) : (
                    <Play size={12} />
                  )}{" "}
                  {lesson?.estimatedTime} min
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
