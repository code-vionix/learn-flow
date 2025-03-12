import { BarChart2, Clock, FileText, Users } from "lucide-react";

export default function SidebarCourseInfo({
  duration,
  level,
  studentsEnrolled,
  language,
  subtitleLanguage,
}) {
  const infoItems = [
    { icon: Clock, label: "Course Duration", value: duration },
    { icon: BarChart2, label: "Course Level", value: level },
    { icon: Users, label: "Students Enrolled", value: studentsEnrolled },
    { icon: FileText, label: "Language", value: language },
    { icon: FileText, label: "Subtitle Language", value: subtitleLanguage },
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
