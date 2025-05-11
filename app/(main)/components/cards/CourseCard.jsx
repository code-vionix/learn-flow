import { Card } from "@/components/ui/card";
import { nameToColor } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({
  id,
  title,
  category,
  price,
  rating=5,
  students,
  image,
}) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="w-60 p-0 shadow-none transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
        {/* Top Image */}
        <div className="relative">
          <Image
            src={image}
            alt={title}
            className="w-full h-40 object-cover"
            width={400}
            height={400}
          />
        </div>

        {/* Details Section */}
        <div>
          <div className="flex items-center justify-between mb-2 p-3">
            <span
              className="text-primary px-2 py-1 rounded-sm text-xs font-semibold "
              style={{ backgroundColor: nameToColor(category.name) }}
            >
              {category.name.toUpperCase()}
            </span>
            <span className="font-bold text-primary-500 text-md">${price}</span>
          </div>
          {/* Category Tag */}

          {/* Title */}
          <h3 className="font-semibold text-sm mt-2 mb-2 p-2 h-16 ">{title}</h3>

          {/* Separator Line */}
          <div className="border-b w-full  border-gray-200 my-2" />

          {/* Rating & Review Section */}
          <div className="flex items-center justify-between px-3 gap-4 py-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{rating.toFixed(2)}</span>
            </div>
            <span className="text-sm text-gray-900 font-semibold">
              {students}{" "}
              <span className="text-gray-400 font-thin">Students</span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
