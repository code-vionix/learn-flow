import BestSellingSection from "./components/home/BestSellingSection";
import CategoriesSection from "./components/home/CategoriesSection";
import FeaturedCourses from "./components/home/FeaturedCourses";
import Hero from "./components/home/Hero";
import InstructorCard from "./components/home/InstructorCard";
import RecentAddedCourseList from "./components/home/RecentAddedCourse/RecentAddedCourseList";
import TopInstructors from "./components/home/TopInstructors ";
import TrustedCompanies from "./components/home/TrustedCompanies";
import JoinCourse from "./components/shared/JoinCourse";
import Navigation from "./components/shared/Navigation";
export default function Home() {
  return (
    <div className="bg-background text-primary">
      <Navigation />
      <Hero />
      <CategoriesSection />
      <BestSellingSection />
      <FeaturedCourses />
      <RecentAddedCourseList />
      <InstructorCard />
      <TopInstructors />
      <TrustedCompanies />
      <JoinCourse />
    </div>
  );
}
