import CourseCard from "./CourseCard";

export default function CourseList({ courses }) {
  const RecentAddedCourses = courses.slice(0, 3);
  return (
    <div className=" bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Recently added courses
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {RecentAddedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
