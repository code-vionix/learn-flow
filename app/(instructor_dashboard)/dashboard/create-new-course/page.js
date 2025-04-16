"use client";
import { useState } from "react";
import { ProgressProvider } from "../_ProgressContext/ProgressContext";
import ProgressSteps from "./_components/basic_information_from/ProgressSteps";

import AdvanceInformation from "./_components/Advance_Information_from/AdvanceInformation";
import BasicInformationForm from "./_components/basic_information_from/BasicInformationForm";
import CourseCurriculum from "./_components/CourseCurriculum/CourseCurriculum";
import CoursePublish from "./_components/CoursePublish/CoursePublish";

export default function CreateCourseLayout() {
  const [activeTab, setActiveTab] = useState("basic");

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <BasicInformationForm
            title="Basic Information"
            onNext={() => setActiveTab("advance")}
          />
        );
      case "advance":
        return (
          <AdvanceInformation
            title="Advance Information"
            onBack={() => setActiveTab("basic")}
          />
        );
      case "curriculum":
        return <CourseCurriculum title="Course Curriculum" />;
      case "publish":
        return <CoursePublish title="Publish Course" />;
      default:
        return null;
    }
  };

  return (
    <ProgressProvider>
      <div className="min-h-screen bg-white p-4">
        <ProgressSteps activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full mx-auto">{renderTabContent()}</div>
      </div>
    </ProgressProvider>
  );
}
