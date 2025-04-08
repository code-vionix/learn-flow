"use client";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import FormHeader from "../basic_information_from/FormHeader";
import CourseDescriptionEditor from "./CourseDescriptionEditor";
import CourseMediaUploader from "./CourseMediaUploader";
import RepeatableSection from "./RepeatableSection";

export default function AdvanceInformation({ title, onBack }) {
  const { progress, setProgress } = useProgress();
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
          <CourseMediaUploader progress={progress} setProgress={setProgress} />
          <CourseDescriptionEditor
            progress={progress}
            setProgress={setProgress}
          />
          {repeatableTitles.map((title, index) => (
            <RepeatableSection
              key={index}
              title={title}
              index={index}
              progress={progress}
              setProgress={setProgress}
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
              onClick={() => {
                // Future: setActiveTab("curriculum");
              }}
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
