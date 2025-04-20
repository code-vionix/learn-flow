"use client";
import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    basic: 0,
    advance: 0,
    curriculum: 0,
    coursePublish: 0,
  });

  const updateProgress = (key, valueOrUpdater) => {
    setProgress((prev) => ({
      ...prev,
      [key]:
        typeof valueOrUpdater === "function"
          ? valueOrUpdater(prev[key]) // safely call the updater
          : valueOrUpdater,
    }));
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
