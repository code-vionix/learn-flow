"use client";
import { useGetAllEnrollCoursesQuery } from "@/store/api/enrolledCourse";
import { useState } from "react";
import Heading from "../_components/courses/Heading";
import CourseCard from "../_components/shared/CourseCard";

export default function CoursesPage() {
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetAllEnrollCoursesQuery("67e3de89529e63530afa1c88");

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [status, setStatus] = useState("All Courses");
  const [teacher, setTeacher] = useState("All Teachers");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching courses</div>;
  }

  const getCourseStatus = (progress) => {
    return progress === 100 ? "Completed" : "Active";
  };

  const filteredCourses = courses
    .filter((course) => {
      const courseStatus = getCourseStatus(course.progress);
      const matchesStatus =
        status === "All Courses" || courseStatus === status;

      const matchesSearch = course.course.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // const matchesTeacher =
      //   teacher === "All Teachers" ||
      //   course.course.instructor?.name === teacher;

      return matchesSearch && matchesStatus ;
    })
    .sort((a, b) => {
      if (sortBy === "Latest")
        return new Date(b.enrolledAt) - new Date(a.enrolledAt);
      if (sortBy === "Oldest")
        return new Date(a.enrolledAt) - new Date(b.enrolledAt);
      if (sortBy === "A-Z")
        return a.course.title.localeCompare(b.course.title);
      if (sortBy === "Z-A")
        return b.course.title.localeCompare(a.course.title);
      return 0;
    });

  return (
    <div className="container mx-auto">
      <Heading
        courses={courses}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        status={status}
        setStatus={setStatus}
        teacher={teacher}
        setTeacher={setTeacher}
      />
      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No courses match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="w-full h-92">
              <CourseCard course={course.course} className="h-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
