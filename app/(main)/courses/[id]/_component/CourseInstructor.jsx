import Image from "next/image";

const CourseInstructor = ({ instructor }) => {
  return (
    <div className="bg-white  w-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Course Instructor (1)</h2>

      <div className="flex items-start bg-white shadow-sm p-6 mb-4 border w-full ">
        {/* Profile Image */}
        <Image
          src={instructor?.user?.imageUrl}
          alt={instructor?.user?.fullName}
          width={80}
          height={80}
          className="rounded-full object-cover border-4 border-white shadow-md w-[136px] h-[136px]"
        />

        {/* Instructor Details */}
        <div className="ml-6 flex-1">
          <h3 className="text-lg font-semibold">
            {instructor?.user?.fullName}
          </h3>
          <p className="text-gray-600 text-sm">{instructor.title}</p>
          <div className="flex items-center mt-2 text-gray-700 text-sm">
            <span className="text-orange-500 text-lg">
              ★ {instructor?.averageRating}
            </span>
            <span className="ml-4">
              👥 {instructor?.totalStudents} Students
            </span>
            <span className="ml-4">
              ▶️ {String(instructor?.totalCourses).padStart(2, "0")} Courses
            </span>
          </div>
          <p className="text-gray-600 mt-2 text-sm">{instructor?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
