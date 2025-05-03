"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown, Search } from "lucide-react";

export default function CoursesSearch({
  courses,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  status,
  setStatus,
  teacher,
  setTeacher,
}) {
  const totalCourses = courses.length;
  console.log(courses);

  const sortOptions = ["Latest", "Oldest", "A-Z", "Z-A"];
  const statusOptions = ["All Courses", "Active", "Completed", "Archived"];
  

  const teacherOptions = [
    "All Teachers",
    "John Doe",
    "Jane Smith",
    "Robert Johnson",
  ];

  return (
    <div className="w-full  mx-auto ">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Courses ({totalCourses})
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-2/5">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary text-sm"
              placeholder="Search in your courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/5">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="sort-by"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sort by:
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between font-normal"
                >
                  {sortBy}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[8rem]">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="flex items-center justify-between"
                  >
                    {option}
                    {sortBy === option && <Check className="h-4 w-4 ml-2" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="w-full md:w-1/3">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status:
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between font-normal"
                >
                  {status}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[8rem]">
                {statusOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setStatus(option)}
                    className="flex items-center justify-between"
                  >
                    {option}
                    {status === option && <Check className="h-4 w-4 ml-2" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="w-full md:w-1/3">
            <label
              htmlFor="teacher"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Teacher:
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between font-normal"
                >
                  {teacher}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[8rem]">
                {teacherOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setTeacher(option)}
                    className="flex items-center justify-between"
                  >
                    {option}
                    {teacher === option && <Check className="h-4 w-4 ml-2" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Course list would go here */}
      {/* <div className="bg-gray-50 p-8 rounded-md text-center text-gray-500">
        Course list content would appear here based on selected filters
      </div> */}
    </div>
  );
}
