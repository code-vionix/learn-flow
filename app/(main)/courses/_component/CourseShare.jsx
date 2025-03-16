import { Facebook, Link2, Linkedin, Mail, Twitter } from "lucide-react";

export default function CourseShare() {
  const shareOptions = [
    { icon: Link2, label: "Copy Link" },
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Mail, label: "Email" },
    { icon: Linkedin, label: "WhatsApp" },
  ];

  return (
    <div className="pt-6 space-y-4 border-t border-gray-200">
      <h3 className="font-medium">Share this course:</h3>
      <div className="flex gap-2">
        {shareOptions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5 text-gray-700" />
          </button>
        ))}
      </div>
    </div>
  );
}
