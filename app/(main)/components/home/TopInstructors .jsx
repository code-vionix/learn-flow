

import TopInstructorCard from "./TopInstructorCard";


export default function TopInstructors({ instructors }) {
  const topInstructors = instructors.slice(0, 5);

  return (
    <section className="mt-[-260px]">
      <div className="primary-container bg-white border">
        <h2 className="text-4xl font-semibold text-center text-[#1D2026] mb-10 leading-[48px] tracking-[-0.01em]">
          Top instructor of the month
        </h2>
        <div className="grid grid-cols-5 gap-8">
          {topInstructors?.map((instructor, index) => (
            <TopInstructorCard key={index} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
