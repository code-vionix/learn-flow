import { getCourseDataByCourseId } from "@/utils/courses";
import { ArrowRight } from "lucide-react";

export default async function CourseDetails({ id }) {
  const tergetAudience = await getCourseDataByCourseId("targetAudiences", id);
  const requirements = await getCourseDataByCourseId("requirements", id);
  return (
    <div className=" w-full mx-auto space-y-6">
      {/* Who this course is for */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Who this course is for:
        </h2>
        <ul className="mt-2 space-y-2 text-gray-700">
          {tergetAudience.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <ArrowRight className="w-4 h-4 text-orange-500 mt-1" />
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Course requirements */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Course requirements
        </h2>
        <ul className="mt-2 space-y-2 text-gray-700">
          {requirements.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="w-2 h-2 mt-2 bg-gray-500 rounded-full"></span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
