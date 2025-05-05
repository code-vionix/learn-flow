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

  // 👇 Lifting formData up here
  const [basicFormData, setBasicFormData] = useState({
    title: "",
    subtitle: "",
    category: "",
    subcategory: "",
    topic: "",
    language: "",
    subtitleLang: "",
    level: "",
    duration: "",
    durationType: "Days",
  });

  //advance information
  const [advanceFormData, setAdvanceFormData] = useState({
    thumbnailUrl: "",
    trailerUrl: "",
    description: "",
    repeatableSections: {
      whatYouTeach: [],
      targetAudience: [],
      requirements: [],
    },
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <BasicInformationForm
            title="Basic Information"
            onNext={() => setActiveTab("advance")}
            formData={basicFormData}
            setFormData={setBasicFormData}
          />
        );
      case "advance":
        return (
          <AdvanceInformation
            title="Advance Information"
            onBack={() => {
              setActiveTab("basic");
            }}
            onNext={() => setActiveTab("curriculum")}
            formData={advanceFormData}
            setFormData={setAdvanceFormData}
          />
        );

      case "curriculum":
        return (
          <CourseCurriculum
            title="Course Curriculum"
            onBack={() => {
              setActiveTab("advance");
            }}
            onNext={() => setActiveTab("publish")}
          />
        );
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
