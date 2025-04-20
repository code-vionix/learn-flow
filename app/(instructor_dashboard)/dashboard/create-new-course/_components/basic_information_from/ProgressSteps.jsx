"use client";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import AdvanceInformationTab from "../TabSection/AdvanceInformationTab";
import BasicInformationTab from "../TabSection/BasicInformationTab";
import CurriculumTab from "../TabSection/CurriculumTab";
import PublishCourseTab from "../TabSection/PublishCourseTab";

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
