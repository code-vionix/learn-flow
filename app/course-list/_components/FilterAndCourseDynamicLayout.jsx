import CourseCard from "@/app/components/cards/CourseCard";
import React from "react";
// import { bestSellingCourses as courses } from "./../../../data/index";
import FilterLeftSideBar from "./FilterLeftSideBar";
import courses from "@/data/newDataFormateForFilter";

const FilterAndCourseDynamicLayout = ({ showFilters }) => {
  return (
    <div
      className={`grid gap-6 my-8 ${
        showFilters ? "grid-cols-4" : "grid-cols-3"
      }`}
    >
      {/* Sidebar Filter (Only Show if showFilters is TRUE) */}
      <FilterLeftSideBar courses={courses} showFilters={showFilters} />

      {/* Course Cards */}
      <div
        className={`grid gap-6 ${
          showFilters ? "col-span-3 grid-cols-3" : "col-span-4 grid-cols-4"
        }`}
      >
        {courses?.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default FilterAndCourseDynamicLayout;
