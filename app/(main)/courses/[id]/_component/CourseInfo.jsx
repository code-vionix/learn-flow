import { Star } from "lucide-react";
import Image from "next/image";

export default function CourseInfo({ course }) {
  const instructors = course?.instructor
  const totalRating = course?.reviews.reduce((sum, review) => sum + review.rating, 0);
const averageRating = course?.reviews.length > 0 ? totalRating / course?.reviews.length : 0;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            src=""
            alt=""
            width={50}
            height={50}
            className="rounded-full w-[50px] h-[50px] border-2 border-white"
          />
          <Image
            src=""
            alt=""
            width={50}
            height={50}
            className="rounded-full absolute -right-6 top-0 border-2  border-white w-[50px] h-[50px]"
          />
        </div>
        <div className="ml-8">
          <p className="text-sm text-gray-600">Created by:</p>
          <p className="text-base font-medium">
            home
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-[#FD8E1F] text-[#FD8E1F]" />
          ))}
        </div>
        <span className="font-medium">{averageRating}</span>
        <span className="text-sm text-gray-600">({course?.reviews.length})</span>
      </div>
    </div>
  );
}
