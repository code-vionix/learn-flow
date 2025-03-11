import { bestSellingCourses } from "@/data";
import CategoryGrid from "./components/home/CategoriesSection";
import CourseCard from "./components/cards/CourseCard";
import FeaturedCourses from "./components/home/FeaturedCourses";
import Hero from "./components/home/Hero";
import Navigation from "./components/shared/Navigation";
import JoinCourse from "./components/shared/JoinCourse";
export default function Home() {
  return (
    <div className="bg-background text-primary">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <Hero />
      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Browse top category
        </h2>
        <CategoryGrid />
      </div>
      {/* Best Selling Courses Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Best selling courses
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestSellingCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      {/* FeaturedCourses section */}
      <FeaturedCourses />
      <JoinCourse />
    </div>
  );
}
