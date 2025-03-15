"use client";

import { courseData } from "@/app/course/[courseId]/data/coursesData";
import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [currentPlay, setCurrentPlay] = useState(null);
  const [currentModuleId, setCurrentModuleId] = useState(courseData[0].modules[0].moduleId);
  const [currentLectureId, setCurrentLectureId] = useState(courseData[0].modules[0].lectures[0].lectureId);

  const handleNextClick = () => {
    const currentModuleIndex = courseData[0].modules.findIndex(module => module.moduleId === currentModuleId);
    const currentLectureIndex = courseData[0].modules[currentModuleIndex].lectures.findIndex(lecture => lecture.lectureId === currentLectureId);
    const isLastLectureInModule = currentLectureIndex === courseData[0].modules[currentModuleIndex].lectures.length - 1;

    if (isLastLectureInModule) {
      const isLastModule = currentModuleIndex === courseData[0].modules.length - 1;
      if (!isLastModule) {
        setCurrentModuleId(courseData[0].modules[currentModuleIndex + 1].moduleId);
        setCurrentLectureId(courseData[0].modules[currentModuleIndex + 1].lectures[0].lectureId);
      }
    } else {
      setCurrentLectureId(courseData[0].modules[currentModuleIndex].lectures[currentLectureIndex + 1].lectureId);
    }
  };

  const handleLectureClick = (moduleId, lectureId) => {
    setCurrentModuleId(moduleId);
    setCurrentLectureId(lectureId);
    const selectedLecture = courseData[0].modules.find(module => module.moduleId === moduleId)
      .lectures.find(lecture => lecture.lectureId === lectureId);
    selectedLecture.isFinished = true; 
    setCurrentPlay(selectedLecture);
  };

  const currentModule = courseData[0].modules.find(module => module.moduleId === currentModuleId);
  const currentLecture = currentModule.lectures.find(lecture => lecture.lectureId === currentLectureId);

  return (
    <CourseContext.Provider value={{ currentPlay, setCurrentPlay, handleNextClick, handleLectureClick, currentModule, currentLecture }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  return useContext(CourseContext);
};