import { Card } from "@/components/ui/card";
import { cn, nameToColor } from "@/lib/utils";
import { Flag, Play, Trophy, Users } from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    label: "Enrolled Courses",
    value: "957",
    icon: Play,
    className: "bg-orange-100",
    iconClassName: "text-orange-500",
  },
  {
    label: "Active Courses",
    value: "6",
    icon: Flag,
    className: "bg-blue-100",
    iconClassName: "text-blue-500",
  },
  {
    label: "Completed Courses",
    value: "951",
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

export default function DashboardMetrics() {
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
            <div className="p-3 gap-4 bg-white">
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
