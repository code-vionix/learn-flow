"use client";
import React, { useState, useEffect } from "react";
import FilterLeftSideBar from "./FilterLeftSideBar";
import CourseCard from "../../components/cards/CourseCard";
import { getAllCourses } from "@/utils/courses";
import { getAllCategories } from "@/utils/category";
import { useSearchParams } from "next/navigation";

const FilterAndCourseDynamicLayout = ({ showFilters, setHasCount }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const searchParams = useSearchParams();

  const hasActiveFilters = Array.from(searchParams.entries()).length > 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCourses = await getAllCourses();
        setCourses(fetchedCourses);
      } catch (err) {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const displayCourses =
    hasActiveFilters && filteredCourses.length > 0
      ? filteredCourses
      : hasActiveFilters
      ? [] // filters active but no match
      : courses; // no filters

  return (
    <div
      className={`grid gap-6 my-8 ${showFilters ? "grid-cols-4" : "grid-cols-3"}`}
    >
      <FilterLeftSideBar
        setHasCount={setHasCount}
        courses={courses}
        showFilters={showFilters}
        setFilteredCourses={setFilteredCourses}
      />

      <div
        className={`grid gap-6 ${
          showFilters ? "col-span-3 grid-cols-3" : "col-span-4 grid-cols-4"
        }`}
      >
        {displayCourses.length > 0 ? (
          displayCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterAndCourseDynamicLayout;
