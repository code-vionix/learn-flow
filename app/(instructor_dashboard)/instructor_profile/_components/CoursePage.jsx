import { fetchCourses } from "@/lib/fetchData";
import TabNavigation from "./TabNavigation";

export default async function InstructorCoursePage() {
  const courses = await fetchCourses();

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 mt-20 mb-20">
      <div className="w-full md:w-1/3 border p-6 self-start">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p>
          This section provides details about the instructor and their courses.
        </p>
      </div>

      <TabNavigation courses={courses} />
    </div>
  );
}
