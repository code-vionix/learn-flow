/* eslint-disable @next/next/no-assign-module-variable */
'use client';

import { getCourseDataByCourseId } from '@/utils/courses';
import { createContext, useContext, useEffect, useState } from 'react';

const CourseContext = createContext(null);

export const CourseProvider = ({ children, courseId }) => {
  const contextValue = useCourseContextInternal(courseId);
  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};

const useCourseContextInternal = (courseId) => {
  const [modules, setModules] = useState([]);
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [currentLessonId, setCurrentLessonId] = useState(null);
  const [currentPlay, setCurrentPlay] = useState(null);

  useEffect(() => {
    async function fetchModules() {
      try {
        const response = await getCourseDataByCourseId('modules', courseId);
        const fetchedModules = response.data || [];

        setModules(fetchedModules);

        if (fetchedModules.length > 0) {
          // Try to get saved values from localStorage
          const savedModuleId = localStorage.getItem(`currentModuleId-${courseId}`);
          const savedLessonId = localStorage.getItem(`currentLessonId-${courseId}`);

          let initialModule = fetchedModules[0];
          let initialLesson = initialModule.lessons[0];

          if (savedModuleId && savedLessonId) {
            const module = fetchedModules.find((mod) => mod.id === savedModuleId);
            const lesson = module?.lessons.find((les) => les.id === savedLessonId);

            if (module && lesson) {
              initialModule = module;
              initialLesson = lesson;
            }
          }

          setCurrentModuleId(initialModule.id);
          setCurrentLessonId(initialLesson.id);
          setCurrentPlay(initialLesson);
        }
      } catch (error) {
        console.error('Failed to fetch modules:', error);
      }
    }

    if (courseId) fetchModules();
  }, [courseId]);

  // Save current lesson/module to localStorage
  useEffect(() => {
    if (currentModuleId && currentLessonId) {
      localStorage.setItem(`currentModuleId-${courseId}`, currentModuleId);
      localStorage.setItem(`currentLessonId-${courseId}`, currentLessonId);
    }
  }, [currentModuleId, currentLessonId, courseId]);

  const handleNextClick = () => {
    if (!modules.length || !currentModuleId || !currentLessonId) return;

    const currentModuleIndex = modules.findIndex(
      (module) => module.id === currentModuleId
    );
    if (currentModuleIndex === -1) return;

    const currentLessonIndex = modules[currentModuleIndex].lessons.findIndex(
      (lesson) => lesson.id === currentLessonId
    );
    if (currentLessonIndex === -1) return;

    const isLastLessonInModule =
      currentLessonIndex === modules[currentModuleIndex].lessons.length - 1;

    if (isLastLessonInModule) {
      const isLastModule = currentModuleIndex === modules.length - 1;
      if (!isLastModule) {
        const nextModule = modules[currentModuleIndex + 1];
        const nextLesson = nextModule.lessons[0];
        setCurrentModuleId(nextModule.id);
        setCurrentLessonId(nextLesson.id);
        setCurrentPlay(nextLesson);
      }
    } else {
      const nextLesson = modules[currentModuleIndex].lessons[currentLessonIndex + 1];
      setCurrentLessonId(nextLesson.id);
      setCurrentPlay(nextLesson);
    }
  };

  const handleLessonClick = (moduleId, lessonId) => {
    const selectedModule = modules.find((module) => module.id === moduleId);
    if (!selectedModule) return;

    const selectedLesson = selectedModule.lessons.find(
      (lesson) => lesson.id === lessonId
    );
    if (!selectedLesson) return;

    selectedLesson.isFinished = true;

    setCurrentModuleId(moduleId);
    setCurrentLessonId(lessonId);
    setCurrentPlay(selectedLesson);
  };

  const currentModule = modules.find((module) => module.id === currentModuleId);
  const currentLesson = currentModule?.lessons.find(
    (lesson) => lesson.id === currentLessonId
  );

  return {
    courseId,
    currentPlay,
    setCurrentPlay,
    handleNextClick,
    handleLessonClick,
    currentModule,
    currentLesson,
    modules,
  };
};

export const useCourseContext = (courseId) => {
  const context = useContext(CourseContext);
  const internal = useCourseContextInternal(courseId);

  if (context) return context;

  if (!courseId) {
    throw new Error(
      'useCourseContext: courseId is required if not inside a CourseProvider'
    );
  }

  return internal;
};
