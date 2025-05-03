"use client";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import FormHeader from "../basic_information_from/FormHeader";

import CourseDescriptionEditor from "./CourseDescriptionEditor/CourseDescriptionEditor";
import CourseMediaUploader from "./CourseMediaUploader/CourseMediaUploader";
import RepeatableSection from "./RepeatableSection";

export default function AdvanceInformation({
  title,
  onBack,
  onNext,
  formData,
  setFormData,
}) {
  const { progress, updateProgress } = useProgress();

  const handleMediaUpload = (type, url) => {
    setFormData((prev) => ({
      ...prev,
      [type]: url,
    }));
  };

  const handleDescriptionChange = (description) => {
    setFormData((prev) => ({
      ...prev,
      description,
    }));
  };

  const handleRepeatableSectionChange = (section, items) => {
    setFormData((prev) => ({
      ...prev,
      repeatableSections: {
        ...prev.repeatableSections,
        [section]: items,
      },
    }));
  };

  const handleSaveNext = () => {
    console.log("Advance Form Data: ", formData);
    onNext();
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
            progress={progress.advance}
            setProgress={updateProgress}
            onUpload={handleMediaUpload}
            formData={formData}
          />
          <CourseDescriptionEditor
            progress={progress.advance}
            setProgress={updateProgress}
            onDescriptionChange={handleDescriptionChange}
            description={formData.description || ""}
          />
          {repeatableTitles.map((title, index) => (
            <RepeatableSection
              key={index}
              title={title}
              index={index}
              progress={progress.advance}
              setProgress={updateProgress}
              initialItems={formData.repeatableSections?.[title] || []}
              onItemsChange={(items) =>
                handleRepeatableSectionChange(title, items)
              }
            />
          ))}

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
