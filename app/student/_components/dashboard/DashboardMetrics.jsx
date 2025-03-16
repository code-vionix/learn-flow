import { Card } from "@/components/ui/card";
import { cn, nameToColor } from "@/lib/utils";
import { Flag, Play, Trophy, Users } from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    label: "Enrolled Courses",
    value: "957",
    icon: Play,
    className: "bg-orange-50",
    iconClassName: "text-orange-500",
  },
  {
    label: "Active Courses",
    value: "6",
    icon: Flag,
    className: "bg-blue-50",
    iconClassName: "text-blue-500",
  },
  {
    label: "Completed Courses",
    value: "951",
    icon: Trophy,
    className: "bg-green-50",
    iconClassName: "text-green-500",
  },
  {
    label: "Course Instructors",
    value: "241",
    icon: Users,
    className: "bg-orange-50",
    iconClassName: "text-orange-500",
  },
];

export default function DashboardMetrics() {
  return (
    <>
      {metrics.map((mat, index) => (
        <Link href="#" key={index}>
          <Card
            className={cn(
              "flex items-center h-[108px] w-[312px]",
              mat.className
            )}
            style={{ backgroundColor: nameToColor(index) }}
          >
            <div className="p-3 gap-4 bg-white rounded-full">
              <mat.icon className={`w-6 h-6 ${mat.iconClassName}`} />
            </div>
            <div>
              <h3 className="font-semibold text-md text-gray-900">
                {mat.label}
              </h3>
              <p className="text-xs text-gray-600">{mat.value}</p>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
}
