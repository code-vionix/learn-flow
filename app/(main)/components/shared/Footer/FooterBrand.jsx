import { Discord } from "@/components/icons";
import Logo from "@/components/Logo";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function FooterBrand() {
  return (
    <div className="w-2/6">
      <Logo targetLink="/" className="text-white" />
      <p className="text-gray-400 text-sm mt-2 max-w-sm p-4">
        A modern LMS platform for creating, managing, and accessing online
        courses. It includes video lessons, quizzes, assignments, progress
        tracking, and certification—designed for both instructors and students
        with a responsive, user-friendly interface.
      </p>
      <div className="flex space-x-3 mt-4 p-4">
        <a target="_blank"
          href="https://www.facebook.com/codevionix"
          className="p-2 bg-gray-700 hover:bg-orange-600 "
        >
          <Facebook className="h-4 w-4 text-white" />
        </a>
        <a target="_blank"
          href="http://github.com/codevionix"
          className="p-2 bg-gray-700 hover:bg-orange-600 "
        >
          <Github className="h-4 w-4 text-white" />
        </a>
        <a target="_blank"
          href="https://www.youtube.com/@codevionix"
          className="p-2 bg-gray-700 hover:bg-orange-600 "
        >
          <Youtube className="h-4 w-4 text-white" />
        </a>
        <a target="_blank" href="https://discord.gg/XxvexMTeYm" className="p-2 bg-gray-700 hover:bg-orange-600 ">
          <Discord />
        </a>
      </div>
    </div>
  );
}
