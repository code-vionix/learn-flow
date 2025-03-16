import { ArrowRight } from "lucide-react";

export default function CourseDetails() {
  return (
    <div className=" w-full mx-auto space-y-6">
      {/* Who this course is for */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Who this course is for:
        </h2>
        <ul className="mt-2 space-y-2 text-gray-700">
          {[
            "This course is for those who want to launch a Freelance Web Design career.",
            "Praesent eget consequat elit. Duis a pretium purus.",
            "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
            "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
            "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
            "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
            "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <ArrowRight className="w-4 h-4 text-orange-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Course requirements */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Course requirements
        </h2>
        <ul className="mt-2 space-y-2 text-gray-700">
          {[
            "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
            "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
            "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
            "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
            "Praesent eget consequat elit. Duis a pretium purus.",
            "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
            "This course is for those who want to launch a Freelance Web Design career.",
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="w-2 h-2 mt-2 bg-gray-500 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
