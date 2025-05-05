"use client";
import React, { useState, useEffect } from "react";
import FilterLeftSideBar from "./FilterLeftSideBar";
import CourseCard from "../../components/cards/CourseCard";
import { getAllCourses } from "@/utils/courses";
import { getAllCategories } from "@/utils/category"; // import utility

const FilterAndCourseDynamicLayout = ({ showFilters }) => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedCourses, fetchedCategories] = await Promise.all([
          getAllCourses(),
          getAllCategories()
        ]);
        setCourses(fetchedCourses);
        setCategories(fetchedCategories);
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

  return (
    <div
      className={`grid gap-6 my-8 ${showFilters ? "grid-cols-4" : "grid-cols-3"}`}
    >
      <FilterLeftSideBar
        courses={courses}
        showFilters={showFilters}
        categories={categories} // ✅ pass to sidebar
        setFilteredCourses={setFilteredCourses}
      />

      <div
        className={`grid gap-6 ${
          showFilters ? "col-span-3 grid-cols-3" : "col-span-4 grid-cols-4"
        }`}
      >
        {/* {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))} */}
        {
          filteredCourses.length>0 ?filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          )):<p>no course found</p>
        }
      </div>
    </div>
  );
};

export default FilterAndCourseDynamicLayout;
