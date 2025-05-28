"use client";
import { useState, useEffect, useRef } from "react";
import { Accordion2 } from "@/components/ui/accordion2.";
import CourseModuleItem from "./CourseModuleItem";
import { CourseProgress } from "./CourseProgress";
import { useCourseContext } from "@/povider/CourseProvider";

const WatchingCourseContent = ({ sections }) => {
  const { currentLesson } = useCourseContext();

  const [openModuleId, setOpenModuleId] = useState(null);
  const userToggled = useRef(false); // <-- track if user manually toggled

  // When currentLesson changes, open its module if user hasn’t manually toggled
  useEffect(() => {
    if (!userToggled.current && currentLesson?.moduleId) {
      setOpenModuleId(currentLesson.moduleId);
    }
  }, [currentLesson]);

  // Handle user manually opening/closing accordion
  const handleValueChange = (value) => {
    userToggled.current = true; // user took control
    setOpenModuleId(value);
  };

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
        <Accordion2
          type="single"
          collapsible
          className="w-full"
          value={openModuleId}
          onValueChange={handleValueChange}
        >
          {sections?.data?.map((module) => (
            <CourseModuleItem
              key={module.id}
              module={module}
              value={module.id} // <-- pass this so accordion knows the value
            />
          ))}
        </Accordion2>
      </div>
    </div>
  );
};

export default WatchingCourseContent;
