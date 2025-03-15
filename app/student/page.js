import { fetchCourses } from "@/lib/fetchData";
import { CourseCarousel } from "./_components/dashboard/CourseCarousel";
import DashboardMetrics from "./_components/dashboard/DashboardMetrics";

export default async function HomePage() {
  const courses = await fetchCourses();
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mx-auto w-[1530px]">
        <DashboardMetrics />
      </div>

      <CourseCarousel courses={courses} />
    </div>
  );
}
