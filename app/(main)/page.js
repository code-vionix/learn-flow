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
          <FeaturedCourses courses={courses} />
      <RecentAddedCourseList courses={courses} />
        <InstructorCard />
          <TopInstructors instructors={instructors} />
        <TrustedCompanies />
      <JoinCourse />
      </div>

      <div className="relative ">
        <div className="lg:w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        </div>
      </div>
      <section className="lg:w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
      </section>
    </div>
  );
}
