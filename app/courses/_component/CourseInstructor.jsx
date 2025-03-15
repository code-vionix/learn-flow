import Image from "next/image";

const CourseInstructor = ({ instructors }) => {
  return (
    <div className="bg-white  w-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Course Instructor (02)</h2>
      {instructors.map((instructor, index) => (
        <div
          key={index}
          className="flex items-start bg-white shadow-sm p-6 mb-4 border w-full "
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
            <p className="text-gray-600 text-sm">{instructor.role}</p>
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
              {instructor.description} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Mollitia repudiandae nobis, id nulla repellendus
              nam quibusdam in veritatis magni beatae explicabo! Numquam natus
              sapiente veniam recusandae impedit sint quas, ad laboriosam
              cupiditate ratione, tempora accusamus enim vel in suscipit nulla
              inventore nemo ab voluptas, iusto deleniti. Amet, voluptatem
              provident. Consequuntur!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
