import Image from "next/image";

const instructors = [
  {
    name: "Vako Shvili",
    title: "Web Designer & Best-Selling Instructor",
    rating: 4.9,
    students: "236,568",
    courses: 9,
    description:
      "One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job...",
    image: "/images/vako.jpg", // Replace with actual image path
  },
  {
    name: "Nima Tahami",
    title: "Entrepreneur & Designer • Founder of ShiftRide",
    rating: 4.6,
    students: "5,342",
    courses: 1,
    description:
      "I'm an entrepreneur & designer with a high passion for building products of all sorts and seeing ideas come to life...",
    image: "/images/nima.jpg", // Replace with actual image path
  },
];

const CourseInstructor = () => {
  return (
    <div className="bg-white p-6 w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Course Instructor (02)</h2>
      {instructors.map((instructor, index) => (
        <div
          key={index}
          className="flex items-start bg-white shadow-sm p-6 mb-4 border-b w-full max-w-3xl"
        >
          {/* Profile Image */}
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={80}
            height={80}
            className="rounded-full object-cover border-4 border-white shadow-md"
          />

          {/* Instructor Details */}
          <div className="ml-6 flex-1">
            <h3 className="text-lg font-semibold">{instructor.name}</h3>
            <p className="text-gray-600 text-sm">{instructor.title}</p>
            <div className="flex items-center mt-2 text-gray-700 text-sm">
              <span className="text-orange-500 text-lg">
                ★ {instructor.rating}
              </span>
              <span className="ml-4">👥 {instructor.students} Students</span>
              <span className="ml-4">
                ▶️ {String(instructor.courses).padStart(2, "0")} Courses
              </span>
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              {instructor.description}{" "}
              <span className="text-blue-500">READ MORE</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
