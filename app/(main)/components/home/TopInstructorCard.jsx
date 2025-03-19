const { Star } = require("lucide-react");

const TopInstructorCard = ({ instructor }) => (
  <div className="flex flex-col items-center w-[244px] bg-white border border-[#E9EAF0]">
    <div
      className="w-full h-[244px] bg-cover bg-center shadow-[inset_0_-1px_0_#E9EAF0]"
      style={{ backgroundImage: `url(${instructor.image})` }}
    />
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="text-center">
        <h3 className="text-[16px] font-medium text-[#1D2026] mb-1">
          {instructor.name}
        </h3>
        <p className="text-[14px] text-[#8C94A3]">{instructor.role}</p>
      </div>
      <div className="w-full border-t border-[#E9EAF0]" />
      <div className="flex justify-between items-center w-full px-4">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-[#FD8E1F] fill-[#FD8E1F]" />
          <span className="text-[14px] font-medium text-[#4E5566]">
            {instructor.rating}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-[14px] font-medium text-[#4E5566]">
            {instructor.students}
          </span>
          <span className="text-[14px] text-[#8C94A3] ml-1">students</span>
        </div>
      </div>
    </div>
  </div>
);
export default TopInstructorCard;
