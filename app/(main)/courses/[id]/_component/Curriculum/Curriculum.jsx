import { getCourseDataByCourseId } from "@/utils/courses";
import CurriculumAccordion from "./CurriculumAccordion";
export default async function Curriculum({ id }) {
  const modules = await getCourseDataByCourseId("modules", id);
  return (
    <div className="w-full mx-auto bg-white border border-[#E9EAF0]">
      <div className="p-6 border-b border-[#E9EAF0]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#1D2026]">Curriculum</h2>
          <div className="flex items-center gap-6 text-sm text-[#4E5566]">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6636]">📂</span>
              <span>{modules?.totalModules} Sections</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#564FFD]">▶</span>
              <span>{modules?.totalLessons} lectures</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FD8E1F]">⏱</span>
              <span>{modules?.totalEstimatedTime}</span>
            </div>
          </div>
        </div>
      </div>

      <CurriculumAccordion sections={modules.data} id={id} />
    </div>
  );
}
