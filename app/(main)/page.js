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
      <BestSellingSection courses={courses} />
      <FeaturedCourses courses={courses} />
      <RecentAddedCourseList courses={courses} />
      <InstructorCard />
      <TopInstructors instructors={instructors} />
      <TrustedCompanies />
      <JoinCourse />
    </div>
  );
}
