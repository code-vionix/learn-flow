"use client";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import AdvanceInformationTab from "./AdvanceInformationTab";
import BasicInformationTab from "./BasicInformationTab";
import CurriculumTab from "./CurriculumTab";
import PublishCourseTab from "./PublishCourseTab";

export default function ProgressSteps({ activeTab, setActiveTab }) {
  const { progress } = useProgress();

  return (
    <div className="border-b p-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <BasicInformationTab
            progress={progress}
            isActive={activeTab === "basic"}
          />
          <AdvanceInformationTab
            progress={progress}
            isActive={activeTab === "advance"}
          />
          <CurriculumTab
            progress={progress}
            isActive={activeTab === "curriculum"}
          />
          <PublishCourseTab
            progress={progress}
            isActive={activeTab === "publish"}
          />
        </div>
      </div>
    </div>
  );
}
