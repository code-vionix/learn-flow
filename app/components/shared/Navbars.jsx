/* eslint-disable @next/next/no-img-element */
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbars() {
  return (
    <nav className="bg-primary text-gray-300">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Left - Navigation Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/" className="relative text-white font-medium">
              Home
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500"></span>
            </Link>
            <Link href="/courses" className="hover:text-white">
              Courses
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/instructor" className="hover:text-white">
              Become an Instructor
            </Link>
          </div>

          {/* Right - Currency & Language Dropdowns */}
          <div className="flex items-center space-x-6 text-sm">
            <button className="flex items-center hover:text-white">
              USD <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <button className="flex items-center hover:text-white">
              English <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
