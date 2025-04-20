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
  const { progress, setProgress } = useProgress();

  const handleFormDataChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveAndNext = () => {
    console.log("Form Data:", formData);
    // You can validate fields here if needed
    if (progress === 10) {
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
            progress={progress}
            setProgress={setProgress}
          />
          <SubtitleInput
            value={formData.subtitle}
            onChange={(val) => handleFormDataChange("subtitle", val)}
            progress={progress}
            setProgress={setProgress}
          />
          <CategorySelect
            formData={formData}
            setFormData={handleFormDataChange}
            progress={progress}
            setProgress={setProgress}
          />
          <TopicInput
            value={formData.topic}
            onChange={(val) => handleFormDataChange("topic", val)}
            progress={progress}
            setProgress={setProgress}
          />
          <CourseDetails
            formData={formData}
            setFormData={handleFormDataChange}
            progress={progress}
            setProgress={setProgress}
          />
          <FormActions handleSaveAndNext={handleSaveAndNext} />
        </form>
      </div>
    </>
  );
}
