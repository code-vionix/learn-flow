"use client";

import React, { useState, useEffect } from "react";
import FilterLeftSideBar from "./FilterLeftSideBar";
import CourseCard from "../../components/cards/CourseCard";
import { getAllCourses } from "@/utils/courses"; // This should accept query params
import { useSearchParams } from "next/navigation";

const FilterAndCourseDynamicLayout = ({ showFilters, setHasCount }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const hasActiveFilters = Array.from(searchParams.entries()).length > 0;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryObj = {};
        if (query) {
          queryObj.query = query;
        }

        // You need to pass query params to getAllCourses
        const fetchedCourses = await getAllCourses(queryObj);
        setCourses(fetchedCourses);
      } catch (err) {
        setError("Failed to load courses.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const displayCourses = (() => {
    if (filteredCourses.length > 0) return filteredCourses;
  
    if (query && courses.length > 0) return courses;
  
    if (query && courses.length === 0) return [];
  
    return courses;
  })();
  

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
