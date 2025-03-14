import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StudentLayout = () => {
  return (
    <div className="w-full h-40 bg-[#FFEEE8] relative">
      <div className="container mx-auto absolute top-3/4  bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="border-b border-primary-200">
          <div className="py-6 px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile picture"
                width={96}
                height={96}
                className="rounded-full w-20 h-20 object-cover "
              />
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Kevin Gilbert
                </h1>
                <p className="text-gray-600">
                  Web Designer & Best-Selling Instructor
                </p>
              </div>
            </div>
            <Link
              href="/become-instructor"
              className="mt-4 md:mt-0 flex items-center gap-2 bg-orange-50 text-orange-500 hover:bg-orange-100 transition-colors px-6 py-3 rounded-md"
            >
              <span>Become Instructor</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <nav className="flex w-full justify-between overflow-x-auto border-t border-primary-200 font-bold">
            <Link
              href="/student"
              className="px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-primary-500"
            >
              Dashboard
            </Link>
            <Link
              href="/student/courses"
              className="px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[#FF6636]"
            >
              Courses
            </Link>
            <Link
              href="/student/teachers"
              className="px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[#FF6636]"
            >
              Teachers
            </Link>
            <Link
              href="/student/message"
              className="px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[#FF6636]"
            >
              Message
            </Link>
            <Link
              href="/student/wishlist"
              className="px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[#FF6636]"
            >
              Wishlist
            </Link>
            <Link
              href="/student/purchase-history"
              className="px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[#FF6636]"
            >
              Purchase History
            </Link>
            <Link
              href="/student/settings"
              className="px-6 py-4 text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[#FF6636]"
            >
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
