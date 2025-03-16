import { bestSellingCourses } from "@/data";
import CourseCard from "../components/cards/CourseCard";

import { getInstructors } from "@/lib/fetchData";
import TopInstructors from "../components/home/TopInstructors ";
import CourseListPage from "../course-list/page";
import PopularToolsCarousel from "./_components/PopularTools";

export default async function CategoryList() {
  const instructors = await getInstructors();

  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Best selling courses in Web Development
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestSellingCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <PopularToolsCarousel />
      <TopInstructors instructors={instructors} />
      <CourseListPage />
    </>
  );
}
