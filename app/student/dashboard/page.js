import { fetchCourses } from "@/lib/fetchData";
import { CourseCarousel } from "../components/dashboard/CourseCarousel";
import DashboardMetrics from "../components/dashboard/DashboardMetrics";

export default async function DashboardPage() {
  const courses = await fetchCourses();
  return (
    <div className="container mx-auto">
      <DashboardMetrics />
      <CourseCarousel courses={courses} />
    </div>
  );
}
