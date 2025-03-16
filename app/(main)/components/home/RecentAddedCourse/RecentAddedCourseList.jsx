import CourseCard from "./CourseCard";

export default async function CourseList({ courses }) {
  const RecentAddedCourses = courses.slice(0, 4);
  return (
    <div className=" bg-white mt-[320px] py-20 w-full">
      <div className="container mx-auto px-4 w-[1320px]">
        <h2 className="text-4xl font-semibold text-center mb-10">
          Recently added courses
        </h2>

        <div className="flex justify-center gap-6 flex-row relative">
          {RecentAddedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
