import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <Card className="border-gray-200 shadow-lg h-92 p-0">
      <CardHeader className="p-0 space-y-0">
        <div className="w-full h-[220px] relative">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover rounded-none"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 border-b h-[100px]">
        <h3 className="text-sm text-gray-600 mb-2">{course.title}</h3>
        <p className="text-base font-medium line-clamp-1">{course.subtitle}</p>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        {course.progress ? (
          <>
            <Button
              variant="ghost"
              className="bg-orange-50 text-orange-500 hover:bg-orange-100 hover:text-orange-600"
            >
              Watch Lecture
            </Button>
            <span className="text-green-500 text-sm">
              {course.progress}% {course.progress < 50 ? "Finish" : "Completed"}
            </span>
          </>
        ) : (
          <Button
            variant="ghost"
            className="bg-orange-50 text-orange-500 hover:bg-orange-100 hover:text-orange-600 w-full"
          >
            Watch Lecture
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
