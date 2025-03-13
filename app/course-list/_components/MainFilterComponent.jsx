"use client";
import { useState } from "react";
import FilterToggleButton from "./FilterToggleButton";
import SortCourse from "./SortCourse";
import CourseSuggestionSection from "./CourseSuggestionSection";
import FilterAndCourseDynamicLayout from "./FilterAndCourseDynamicLayout";
import SearchBar from "./SearchBar";

const MainFilterComponent = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FilterToggleButton
              setShowFilters={setShowFilters}
              showFilters={showFilters}
            />
            <SearchBar />
          </div>
          <SortCourse />
        </div>
        <CourseSuggestionSection />
      </div>
      {/* Dynamic Layout - Filters & Courses */}
      <FilterAndCourseDynamicLayout showFilters={showFilters} />
    </div>
  );
};

export default MainFilterComponent;
