import { getCourseDataByCourseId } from "@/utils/courses";
import { CircleCheck } from "lucide-react";

export default async function CourseLearning({ id }) {
  const learnings = await getCourseDataByCourseId("learnings", id);
  console.log("coursedata", learnings);
  return (
    <div className="bg-[#E1F7E366] p-10 space-y-5 ">
      <h2 className="text-2xl font-semibold">
        What you will learn in this course
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {learnings.map((learn) => (
          <div key={learn.id} className="flex gap-2">
            <CircleCheck className="w-6 h-6 text-white rounded-full bg-[#23BD33] flex-shrink-0 outline-none" />
            <p className="text-gray-700">{learn.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
