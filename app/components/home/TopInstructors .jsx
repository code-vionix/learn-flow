import { Star } from 'lucide-react';

const instructors = [
  { id: 1, name: "William Smith", role: "UI/UX Designer", rating: 5.0, students: "265.7K", imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 2, name: "Daniel Brown", role: "Software Engineer", rating: 5.0, students: "182.4K", imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 3, name: "Sarah Parker", role: "Product Designer", rating: 5.0, students: "142.8K", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 4, name: "David Wilson", role: "Frontend Developer", rating: 5.0, students: "198.2K", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 5, name: "Kevin Henry", role: "Full Stack Developer", rating: 5.0, students: "155.3K", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
];

const InstructorCard = ({ instructor }) => (
  <div className="flex flex-col items-center w-[244px] bg-white border border-[#E9EAF0]">
    <div className="w-full h-[244px] bg-cover bg-center shadow-[inset_0_-1px_0_#E9EAF0]" style={{ backgroundImage: `url(${instructor.imageUrl})` }} />
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="text-center">
        <h3 className="text-[16px] font-medium text-[#1D2026] mb-1">{instructor.name}</h3>
        <p className="text-[14px] text-[#8C94A3]">{instructor.role}</p>
      </div>
      <div className="w-full border-t border-[#E9EAF0]" />
      <div className="flex justify-between items-center w-full px-4">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-[#FD8E1F] fill-[#FD8E1F]" />
          <span className="text-[14px] font-medium text-[#4E5566]">{instructor.rating}</span>
        </div>
        <div className="flex items-center">
          <span className="text-[14px] font-medium text-[#4E5566]">{instructor.students}</span>
          <span className="text-[14px] text-[#8C94A3] ml-1">students</span>
        </div>
      </div>
    </div>
  </div>
);

export default function TopInstructors() {
  return (
    <section className="w-full bg-white border border-[#E9EAF0] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-[#1D2026] mb-10 leading-[48px] tracking-[-0.01em]">
          Top instructor of the month
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
          <p className="text-[14px] text-[#6E7485] text-center">
            Thousands of students waiting for a instructor. Start teaching & earning now!
          </p>
          <button className="flex items-center gap-2 text-[#FF6636] font-medium">
            <span>Become an Instructor</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#FF6636]">
              <path d="M3.75 12H20.25" strokeWidth="1.5" />
              <path d="M13.5 5.25L20.25 12L13.5 18.75" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
