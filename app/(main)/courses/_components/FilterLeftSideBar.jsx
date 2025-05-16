"use client";

import { extractCourseFilters } from "@/utils/courses";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import FilterCard from "./FilterCard";
import FilterCategoryLists from "./FilterCategoryLists";
import FilterWithPrice from "./FilterWithPrice";

const FilterLeftSideBar = ({
  showFilters,
  courses,
  setFilteredCourses,
  setHasCount,
  searchQuery,
}) => {
  const searchParams = useSearchParams();

  // Extract selected filters from URL query parameters
  const selectedTools = searchParams.get("Tools")?.split(",") || [];
  const selectedRatings = searchParams.get("Rating")?.split(",") || [];
  const selectedDuration = searchParams.get("Duration")?.split(",") || [];
  const selectedCourseLevel = searchParams.get("CourseLevel")?.split(",") || [];
  const selectedCategories = searchParams.get("category")?.split(",") || [];

  const isPaid = searchParams.get("paid") === "true";
  const isFree = searchParams.get("free") === "true";
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || 0;

  const { tags, levels, durations, ratings, categories } =
    extractCourseFilters(courses);

  // Build query string for API request including the search query
  const buildQuery = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("query", searchQuery); // Include search query
    if (selectedCategories.length)
      params.set("category", selectedCategories.join(","));
    if (selectedTools.length) params.set("Tools", selectedTools.join(","));
    if (selectedRatings.length) params.set("Rating", selectedRatings.join(","));
    if (selectedDuration.length)
      params.set("Duration", selectedDuration.join(","));
    if (selectedCourseLevel.length)
      params.set("CourseLevel", selectedCourseLevel.join(","));
    if (isPaid) params.set("paid", "true");
    if (isFree) params.set("free", "true");
    if (isPaid && (minPrice !== 0 || maxPrice !== 0)) {
      params.set("minPrice", String(minPrice));
      params.set("maxPrice", String(maxPrice));
    }
    return params.toString();
  };

  // Fetch filtered courses whenever the filters or search query changes
  useEffect(() => {
    const query = buildQuery();
    const fetchFilteredCourses = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/v1/courses?${query}`
        );
        const data = await res.json();
        setFilteredCourses(data);
      } catch (error) {
        console.error("Failed to fetch filtered courses:", error);
      }
    };

    if (
      selectedCategories.length ||
      selectedTools.length ||
      selectedRatings.length ||
      selectedDuration.length ||
      selectedCourseLevel.length ||
      isPaid ||
      isFree ||
      (isPaid && (minPrice !== 0 || maxPrice !== 0)) ||
      searchQuery // Include search query in the check
    ) {
      fetchFilteredCourses();
    }
  }, [
    searchParams, // This ensures the effect re-runs on any URL parameter change
    searchQuery, // Re-run when searchQuery changes
  ]);

  const handleFilterChange = (type, isChecked) => {
    setHasCount((prev) => (isChecked ? prev + 1 : prev - 1));
  };

  return (
    <>
      {showFilters && (
        <div className="col-span-1 bg-white p-1 max-h-[800px] overflow-auto">
          <div className="p-4 rounded-sm border w-full">
            <h1 className="text-2xl text-black mb-2 pb-6 uppercase font-semibold border-b">
              Category
            </h1>
            {categories.map((category) => (
              <FilterCategoryLists
                key={category.id}
                category={category}
                onFilterChange={handleFilterChange}
              />
            ))}
          </div>

          <FilterCard
            title="Tools"
            items={tags}
            onFilterChange={handleFilterChange}
          />
          <FilterCard
            title="Rating"
            items={ratings}
            onFilterChange={handleFilterChange}
          />
          <FilterCard
            title="CourseLevel"
            items={levels}
            onFilterChange={handleFilterChange}
          />
          <FilterWithPrice onFilterChange={handleFilterChange} />
          <FilterCard
            title="Duration"
            items={durations}
            onFilterChange={handleFilterChange}
          />
        </div>
      )}
    </>
  );
};

export default FilterLeftSideBar;
