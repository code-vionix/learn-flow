"use client";
import { useProgress } from "../../../_ProgressContext/ProgressContext";
import CategorySelect from "./CategorySelect";
import CourseDetails from "./CourseDetails";
import FormActions from "./FormActions";
import SubtitleInput from "./SubtitleInput";
import TitleInput from "./TitleInput";
import TopicInput from "./TopicInput";

export default function BasicInformationForm() {
  const { progress, setProgress } = useProgress();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 max-h-[796px]">
      <form className="space-y-8 h-">
        <TitleInput progress={progress} setProgress={setProgress} />
        <SubtitleInput progress={progress} setProgress={setProgress} />
        <CategorySelect progress={progress} setProgress={setProgress} />
        <TopicInput progress={progress} setProgress={setProgress} />
        <CourseDetails progress={progress} setProgress={setProgress} />
        <FormActions progress={progress} setProgress={setProgress} />
      </form>
    </div>
  );
}
