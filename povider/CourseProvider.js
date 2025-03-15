"use client"; 

import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [currentPlay, setCurrentPlay] = useState(null);

  return (
    <CourseContext.Provider value={{ currentPlay, setCurrentPlay }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  return useContext(CourseContext);
};
