import { Flag, Play, Trophy, Users } from "lucide-react";

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
    <div className="w-full  mt-20">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`${metric.className} p-6  transition-transform hover:scale-105`}
            >
              <div className="flex justify-start items-center">
                <div className="w-1/4 ">
                  <div className=" w-10 h-10 bg-white">
                    <Icon
                      className={`w-8 h-8 ${metric.iconClassName} mb-4 bg-white `}
                    />
                  </div>
                </div>

                <div className="space-y-1 flex flex-col items-center">
                  <h2 className="text-3xl font-bold text-gray-900 w-3/4">
                    {metric.value}
                  </h2>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
