"use client";
import { useSearchParams } from "next/navigation";
import FilterCategoryLists from "./FilterCategoryLists";
import FilterCard from "./Tools";
import { getCategoryFromCourses, getToolsFormCoures } from "@/utils/category";

const FilterLeftSideBar = ({ showFilters, courses }) => {
  const searchParams = useSearchParams();
  // Get the query from the URL
  // Retrieve filter values from the URL
  const selectedTools = searchParams.get("Tools")?.split(",") || [];
  const selectedRatings = searchParams.get("Rating")?.split(",") || [];
  const selectedDuration = searchParams.get("Duration")?.split(",") || [];
  const selectedCourseLevel = searchParams.get("CourseLevel")?.split(",") || [];
  const selectedCategories = searchParams.get("category")?.split(",") || [];
  console.log(selectedTools);

  const tools = getToolsFormCoures(courses, "tools");
  const ratings = getToolsFormCoures(courses, "rating");
  const duration = getToolsFormCoures(courses, "duration");
  const courseLevel = getToolsFormCoures(courses, "courseLevel");
  const categorys = getCategoryFromCourses(courses);

  return (
    <>
      {showFilters && (
        <div className="col-span-1 bg-white p-1">
          <div className="p-4 rounded-sm border w-full">
            <h1 className="text-2xl text-black mb-2 pb-6 uppercase font-semibold border-b">
              Category
            </h1>

            {categorys.map((category) => (
              <FilterCategoryLists key={category.id} category={category} />
            ))}
          </div>

          {/* Tools  */}
          <FilterCard title="Tools" items={tools} />
          {/* rating  */}
          <FilterCard title="Rating" items={ratings} />
          {/* price  */}
          {/* <FilterCard title = "Tools" tools= {tools} /> */}
          {/* courseLevel  */}
          <FilterCard title="CourseLevel" items={courseLevel} />
          {/* duration  */}
          <FilterCard title="Duration" items={duration} />
        </div>
      )}
    </>
  );
};

export default FilterLeftSideBar;
