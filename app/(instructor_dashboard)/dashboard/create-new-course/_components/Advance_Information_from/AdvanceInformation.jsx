"use client";
import { useState } from "react";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import FormHeader from "../basic_information_from/FormHeader";

import CourseDescriptionEditor from "./CourseDescriptionEditor/CourseDescriptionEditor";
import CourseMediaUploader from "./CourseMediaUploader/CourseMediaUploader";
import RepeatableSection from "./RepeatableSection";

export default function AdvanceInformation({ title, onBack, onNext }) {
  const { progress, setProgress } = useProgress();
  const [courseData, setCourseData] = useState({
    thumbnailUrl: "",
    trailerUrl: "",
    description: "",
    repeatableSections: {
      whatYouTeach: [],
      targetAudience: [],
      requirements: [],
    },
  });

  const handleMediaUpload = (type, url) => {
    setCourseData((prevData) => ({
      ...prevData,
      [type]: url,
    }));
  };

  const handleDescriptionChange = (description) => {
    setCourseData((prevData) => ({
      ...prevData,
      description,
    }));
  };

  const handleRepeatableSectionChange = (section, items) => {
    setCourseData((prevData) => ({
      ...prevData,
      repeatableSections: {
        ...prevData.repeatableSections,
        [section]: items,
      },
    }));
  };

  const handleSaveNext = () => {
    console.log("Course Data: ", courseData);
    console.log("Navigating to curriculum..."); // ✅ Check if this shows
    onNext(); // this should switch the tab
  };

  const repeatableTitles = [
    "What you will teach in this course",
    "Target Audience",
    "Course requirements",
  ];

  return (
    <>
      <FormHeader title={title} />
      <div className="max-w-7xl mx-auto py-6">
        <div className="bg-white">
          <CourseMediaUploader
            progress={progress}
            setProgress={setProgress}
            onUpload={handleMediaUpload}
          />
          <CourseDescriptionEditor
            progress={progress}
            setProgress={setProgress}
            onDescriptionChange={handleDescriptionChange}
          />
          {repeatableTitles.map((title, index) => (
            <RepeatableSection
              key={index}
              title={title}
              index={index}
              progress={progress}
              setProgress={setProgress}
              onItemsChange={(items) =>
                handleRepeatableSectionChange(title, items)
              }
            />
          ))}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <button
              onClick={onBack}
              className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
            >
              Previous
            </button>
            <button
              onClick={handleSaveNext}
              className="px-6 py-2 bg-primary-500 font-bold text-white hover:bg-orange-600 transition"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
