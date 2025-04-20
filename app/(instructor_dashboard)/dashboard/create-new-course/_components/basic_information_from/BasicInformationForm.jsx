"use client";
import { useState } from "react";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import CategorySelect from "./CategorySelect";
import CourseDetails from "./CourseDetails";
import FormActions from "./FormActions";
import FormHeader from "./FormHeader";
import SubtitleInput from "./SubtitleInput";
import TitleInput from "./TitleInput";
import TopicInput from "./TopicInput";

export default function BasicInformationForm({ title, onNext }) {
  const { progress, setProgress } = useProgress();
  const [isComplate, setIsComplate] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleFormDataChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveAndNext = () => {
    console.log("Form Data:", formData);
    if (progress === 10) {
      setIsComplate(true);
      onNext();
    }
  };

  return (
    <>
      <FormHeader title={title} />
      <div className="max-w-7xl mx-auto py-8 max-h-[796px]">
        <form className="space-y-8 h-">
          <TitleInput
            progress={progress}
            setProgress={setProgress}
            formData={formData}
            setFormData={handleFormDataChange}
            field="title"
          />
          <SubtitleInput
            progress={progress}
            setProgress={setProgress}
            formData={formData}
            setFormData={handleFormDataChange}
            field="subtitle"
          />
          <CategorySelect
            progress={progress}
            setProgress={setProgress}
            formData={formData}
            setFormData={handleFormDataChange}
          />
          <TopicInput
            progress={progress}
            setProgress={setProgress}
            formData={formData}
            setFormData={handleFormDataChange}
            field="topic" // pass the field name here
          />
          <CourseDetails
            progress={progress}
            setProgress={setProgress}
            formData={formData}
            setFormData={handleFormDataChange}
          />
          <FormActions handleSaveAndNext={handleSaveAndNext} />
        </form>
      </div>
    </>
  );
}
