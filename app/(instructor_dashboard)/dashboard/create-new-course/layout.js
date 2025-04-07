// CreateCourseLayout.jsx
"use client";

import { ProgressProvider } from "../_ProgressContext/ProgressContext";
import ProgressSteps from "./_components/basic_information_from/ProgressSteps";

export default function CreateCourseLayout({ children }) {
  return (
    <ProgressProvider>
      <div className="min-h-screen bg-white">
        <ProgressSteps />
        {children}
      </div>
    </ProgressProvider>
  );
}
