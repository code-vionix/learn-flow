import {
  Clock,
  Currency,
  FileCode,
  FileText,
  Layers,
  Monitor,
  Trophy,
} from "lucide-react";

export default function CourseFeatures() {
  const features = [
    { icon: Clock, text: "Lifetime access" },
    { icon: Currency, text: "30-day money-back guarantee" },
    { icon: FileCode, text: "Free exercises & downloadable resources" },
    { icon: Trophy, text: "Shareable certificate of completion" },
    { icon: Monitor, text: "Access on mobile, tablet, and TV" },
    { icon: FileText, text: "English subtitles" },
    { icon: Layers, text: "100% online course" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-medium">This course includes:</h3>
      <ul className="space-y-3">
        {features.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <Icon className="w-6 h-6 text-primary-500" />
            <span className="text-gray-700">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
