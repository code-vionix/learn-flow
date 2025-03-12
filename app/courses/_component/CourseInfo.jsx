import { Star } from "lucide-react";
import Image from "next/image";

export default function CourseInfo() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            src="/author1.jpg"
            alt="Author 1"
            width={50}
            height={50}
            className="rounded-full"
          />
          <Image
            src="/author2.jpg"
            alt="Author 2"
            width={50}
            height={50}
            className="rounded-full absolute -right-6 top-0 border-2 border-white"
          />
        </div>
        <div className="ml-8">
          <p className="text-sm text-gray-600">Created by:</p>
          <p className="text-base font-medium">
            Dianne Russell • Kristin Watson
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[#FD8E1F] text-[#FD8E1F]" />
          ))}
        </div>
        <span className="font-medium">4.8</span>
        <span className="text-sm text-gray-600">(451,444 Rating)</span>
      </div>
    </div>
  );
}
