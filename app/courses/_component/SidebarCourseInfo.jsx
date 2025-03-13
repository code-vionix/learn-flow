import { BarChart2, Clock, FileText, Users } from "lucide-react";

export default function SidebarCourseInfo({ course }) {
  const infoItems = [
    { icon: Clock, label: "Course Duration", value: course.duration },
    { icon: BarChart2, label: "Course Level", value: course.level },
    { icon: Users, label: "Students Enrolled", value: course.students },
    { icon: FileText, label: "Language", value: "Emgilsh" },
    { icon: FileText, label: "Subtitle Language", value: "English" },
  ];

  return (
    <div className="space-y-4 border-t border-b border-gray-200 py-6">
      {infoItems.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon className="w-6 h-6 text-gray-400" />
            <span>{label}</span>
          </div>
          <span className="text-gray-600">{value}</span>
        </div>
      ))}
    </div>
  );
}
