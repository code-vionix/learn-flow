import { fetchCourses, getInstructors } from "@/lib/fetchData";
import BestSellingSection from "./components/home/BestSellingSection";
import CategoriesSection from "./components/home/CategoriesSection";
import FeaturedCourses from "./components/home/FeaturedCourses";
import Hero from "./components/home/Hero";
import InstructorCard from "./components/home/InstructorCard";
import RecentAddedCourseList from "./components/home/RecentAddedCourse/RecentAddedCourseList";
import TopInstructors from "./components/home/TopInstructors ";
import TrustedCompanies from "./components/home/TrustedCompanies";
import JoinCourse from "./components/shared/JoinCourse";
export default async function Home() {
  const courses = await fetchCourses();
  const instructors = await getInstructors();
  return (
    <div className="bg-background text-primary">
      <Hero />
      <CategoriesSection />
      <div className="relative ">
        <BestSellingSection courses={courses} />
        <div className="absolute left-1/2 -translate-x-1/2 top-3/4 mt-10 w-[1480px] bg-white px-10 py-10">
          <FeaturedCourses courses={courses} />
        </div>
      </div>

      <RecentAddedCourseList courses={courses} />
      <div className="relative ">
        <InstructorCard />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 mt-20 w-[1480px] bg-white px-10 py-10">
          <TopInstructors instructors={instructors} />
        </div>
      </div>

      <TrustedCompanies />
      <JoinCourse />
    </div>
  );
}
