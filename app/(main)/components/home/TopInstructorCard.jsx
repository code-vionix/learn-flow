const { Star } = require("lucide-react");

const TopInstructorCard = ({ instructor }) => {
  const topRating = instructor?.ratings?.reduce((acc, rating) => acc + rating?.rating, 0) / instructor?.ratings?.length;

  const topRatingRounded = Math.round(topRating * 10) / 10;
  const topRatingRoundedString = topRatingRounded.toString();

  return (
    <div className="flex flex-col items-center w-[244px] bg-white border border-[#E9EAF0]">
      <div
        className="w-full h-[244px] bg-cover bg-center shadow-[inset_0_-1px_0_#E9EAF0]"
        style={{ backgroundImage: `url(${instructor?.user?.imageUrl})` }}
      />
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="text-center">
          <h3 className="text-[16px] font-medium text-[#1D2026] mb-1">
            {instructor?.user?.firstName} {instructor?.user?.lastName}
          </h3>
          <p className="text-[14px] text-[#8C94A3]">{instructor?.user?.role}</p>
        </div>
      </div>

      <div className="flex py-3 border-t justify-between items-center w-full px-4">
        <div className="flex items-center gap-1">
          <Star
            className={`w-4 h-4 text-primary-500`}
          />
          <span className="text-[14px] font-medium text-[#4E5566]">
            {topRatingRoundedString || 0}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-[14px] font-medium text-[#4E5566]">
            {instructor?.totalEnrollments}
          </span>
          <span className="text-[14px] text-[#8C94A3] ml-1">students</span>
        </div>
      </div>
    </div>
  )
};
export default TopInstructorCard;
