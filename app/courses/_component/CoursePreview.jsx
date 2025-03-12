import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function CoursePreview() {
  return (
    <div className="relative w-full h-[492px] bg-gray-200 rounded-lg">
      <Image
        src="/course-preview.jpg"
        alt="Course preview"
        fill
        className="object-cover rounded-lg"
      />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full">
        <PlayCircle className="w-6 h-6 text-[#FF6636]" />
      </button>
    </div>
  );
}
