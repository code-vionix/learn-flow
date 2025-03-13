import FilterCategoryLists from "./FilterCategoryLists";
import Tools from "./Tools";
import { getCategoryFromCourses, getToolsFormCoures } from "@/utils/category";

const FilterLeftSideBar = ({ showFilters, courses }) => {
  const tools = getToolsFormCoures(courses, "tools");
  const rating = getToolsFormCoures(courses, "rating");
  const duration = getToolsFormCoures(courses, "duration");
  const courseLevel = getToolsFormCoures(courses, "courseLevel");
  const categorys = getCategoryFromCourses(courses);

  console.log(duration);

  return (
    <>
      {showFilters && (
        <div className="col-span-1 bg-white p-1">
          {/* Category  */}
          <div className="p-4 rounded-sm border w-full">
            <h1 className="text-2xl text-black mb-2 pb-6 uppercase font-semibold border-b">
              Category
            </h1>

            {categorys.map((category) => (
              <FilterCategoryLists key={category.id} category={category} />
            ))}
          </div>
          {/* Tools  */}
          <Tools />
          {/* rating  */}
          {/* price  */}
          {/* duration  */}
          {/* courseLevel  */}
        </div>
      )}
    </>
  );
};

export default FilterLeftSideBar;
