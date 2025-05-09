import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        const isFull = index + 1 <= rating;
        const isHalf = rating > index && rating < index + 1;

        return (
          <div key={index} className="relative w-4 h-4">
            {/* Gray Star as background */}
            <Star className="text-gray-200 w-4 h-4 absolute top-0 left-0" />
            {/* Orange overlay for full or half star */}
            {isFull && (
              <Star className="text-[#FD8E1F] w-4 h-4 absolute top-0 left-0" />
            )}
            {isHalf && (
              <Star
                className="text-[#FD8E1F] w-4 h-4 absolute top-0 left-0 overflow-hidden"
                style={{ width: "50%", clipPath: "inset(0 50% 0 0)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
