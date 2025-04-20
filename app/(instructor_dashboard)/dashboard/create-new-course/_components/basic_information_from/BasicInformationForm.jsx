"use client";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import CategorySelect from "./CategorySelect";
import CourseDetails from "./CourseDetails";
import FormActions from "./FormActions";
import FormHeader from "./FormHeader";
import SubtitleInput from "./SubtitleInput";
import TitleInput from "./TitleInput";
import TopicInput from "./TopicInput";

export default function BasicInformationForm({
  title,
  onNext,
  formData,
  setFormData,
}) {
  console.log(formData);
  const { progress, updateProgress } = useProgress();

  const handleFormDataChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveAndNext = () => {
    console.log("Form Data:", formData);
    // You can validate fields here if needed
    if (progress.basic === 10) {
      onNext(); // Go to next tab
    }
  };

  return (
    <>
      <FormHeader title={title} formData={formData} />
      <div className="max-w-7xl mx-auto py-8 max-h-[796px]">
        <form className="space-y-8">
          <TitleInput
            value={formData.title}
            onChange={(val) => handleFormDataChange("title", val)}
            progress={progress.basic}
            setProgress={updateProgress}
          />
          <SubtitleInput
            value={formData.subtitle}
            onChange={(val) => handleFormDataChange("subtitle", val)}
            progress={progress.basic}
            setProgress={updateProgress}
          />
          <CategorySelect
            formData={formData}
            setFormData={handleFormDataChange}
            progress={progress.basic}
            setProgress={updateProgress}
          />
          <TopicInput
            value={formData.topic}
            onChange={(val) => handleFormDataChange("topic", val)}
            progress={progress.basic}
            setProgress={updateProgress}
          />
          <CourseDetails
            formData={formData}
            setFormData={handleFormDataChange}
            progress={progress.basic}
            setProgress={updateProgress}
          />
          <FormActions handleSaveAndNext={handleSaveAndNext} />
        </form>
      </div>
    </>
  );
}
