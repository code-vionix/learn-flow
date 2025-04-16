import { Star } from "lucide-react";
import Image from "next/image";

export default function CourseInfo({ course }) {
  const instructors = course?.instructors.slice(0, 2);
  console.log("text......", instructors);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            src={instructors.length > 0 && instructors[0]?.image}
            alt={instructors[0]?.name}
            width={50}
            height={50}
            className="rounded-full w-[50px] h-[50px] border-2 border-white"
          />
          <Image
            src={instructors[1]?.image}
            alt={instructors[1]?.name}
            width={50}
            height={50}
            className="rounded-full absolute -right-6 top-0 border-2  border-white w-[50px] h-[50px]"
          />
        </div>
        <div className="ml-8">
          <p className="text-sm text-gray-600">Created by:</p>
          <p className="text-base font-medium">
            {instructors[0]?.name} . {instructors[0]?.name}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[#FD8E1F] text-[#FD8E1F]" />
          ))}
        </div>
        <span className="font-medium">{course?.rating}</span>
        <span className="text-sm text-gray-600">(451,444 Rating)</span>
      </div>
    </div>
  );
}
