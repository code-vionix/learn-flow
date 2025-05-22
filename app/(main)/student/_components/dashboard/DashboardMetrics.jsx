import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Flag, Play, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function DashboardMetrics({ courses }) {
  const total_enrolled = courses.length;

  const getCourseStatus = (progress) => {
    return progress === 100 ? "Completed" : "Active";
  };

  // Calculate active and completed courses
  const activeCourses = courses.filter(
    (course) => getCourseStatus(course.progress) === "Active"
  ).length;
  const completedCourses = courses.filter(
    (course) => getCourseStatus(course.progress) === "Completed"
  ).length;

  const metrics = [
    {
      label: "Enrolled Courses",
      value: total_enrolled,
      icon: Play,
      className: "bg-orange-100",
      iconClassName: "text-orange-500",
    },
    {
      label: "Active Courses",
      value: activeCourses,
      icon: Flag,
      className: "bg-blue-100",
      iconClassName: "text-blue-500",
    },
    {
      label: "Completed Courses",
      value: completedCourses,
      icon: Trophy,
      className: "bg-green-100",
      iconClassName: "text-green-500",
    },
    {
      label: "Course Instructors",
      value: "241",
      icon: Users,
      className: "bg-orange-100",
      iconClassName: "text-orange-500",
    },
  ];

  return (
    <>
      {metrics.map((mat, index) => (
        <Link href="#" key={index}>
          <Card
            className={cn(
              "flex items-center h-[108px] w-[312px] gap-5 p-5",
              mat.className
            )}
          >
            <div className="p-3 bg-white rounded-full">
              <mat.icon className={`w-6 h-6 ${mat.iconClassName}`} />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-600">{mat.value}</p>
              <h3 className="font-semibold text-sm text-gray-500">
                {mat.label}
              </h3>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
}
