import { CheckSquare, Play, Trophy, Users } from "lucide-react";
import StatsCard from "../../components/shared/StatsCard";

const statsData = [
  {
    number: 957,
    label: "Enrolled Courses",
    icon: <Play />,
    color: "bg-red-100 text-red-500",
  },
  {
    number: 19,
    label: "Active Courses",
    icon: <CheckSquare />,
    color: "bg-blue-100 text-blue-500",
  },
  {
    number: 241,
    label: "Course Instructors",
    icon: <Users />,
    color: "bg-orange-100 text-orange-500",
  },
  {
    number: 951,
    label: "Completed Courses",
    icon: <Trophy />,
    color: "bg-green-100 text-green-500",
  },
  {
    number: 957,
    label: "Enrolled Courses",
    icon: <Play />,
    color: "bg-red-100 text-red-500",
  },
  {
    number: 19,
    label: "Active Courses",
    icon: <CheckSquare />,
    color: "bg-blue-100 text-blue-500",
  },
  {
    number: 241,
    label: "Course Instructors",
    icon: <Users />,
    color: "bg-orange-100 text-orange-500",
  },
  {
    number: 951,
    label: "Completed Courses",
    icon: <Trophy />,
    color: "bg-green-100 text-green-500",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-6 py-6">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
