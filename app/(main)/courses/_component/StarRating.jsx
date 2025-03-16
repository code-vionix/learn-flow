import { StarIcon } from "lucide-react";

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? "text-[#FD8E1F]" : "text-gray-200"}`}
      />
    ))}
  </div>
);
export default StarRating;
