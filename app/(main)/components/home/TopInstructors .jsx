import TopInstructorCard from "./TopInstructorCard";
export default function TopInstructors({ instructors }) {
  const topInstructors = instructors.slice(0, 5);

  return (
    <section className="w-full bg-white  py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-10 leading-[48px] tracking-[-0.01em]">
          Top instructor of the month
        </h2>
        <div className="flex flex-wrap justify-between w-[1320px] gap-6 mb-10">
          {topInstructors.map((instructor, index) => (
            <TopInstructorCard key={index} instructor={instructor} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
          <p className="text-[14px] text-gray-600 text-center">
            Thousands of students waiting for a instructor. Start teaching &
            earning now!
          </p>
          <button className="flex items-center gap-2 text-primary-500 font-medium">
            <span>Become an Instructor</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-pritext-primary-500"
            >
              <path d="M3.75 12H20.25" strokeWidth="1.5" />
              <path d="M13.5 5.25L20.25 12L13.5 18.75" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
