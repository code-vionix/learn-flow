"use client";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import AdvanceInformationTab from "./AdvanceInformationTab";
import BasicInformationTab from "./BasicInformationTab";
import CurriculumTab from "./CurriculumTab";
import PublishCourseTab from "./PublishCourseTab";

export default function ProgressSteps() {
  const { progress } = useProgress();
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-0">
        <div className="flex items-center justify-between">
          <BasicInformationTab progress={progress} />
          <AdvanceInformationTab progress={progress} />
          <CurriculumTab progress={progress} />
          <PublishCourseTab progress={progress} />
        </div>
      </div>
    </div>
  );
}
