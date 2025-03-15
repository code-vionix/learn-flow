import { Progress } from "@/components/ui/progress";

const ratings = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 21 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0.5 },
];

const CourseRating = () => {
  return (
    <div className="bg-white w-full flex gap-4 mt-10">
      {/* Rating Summary */}
      <div className="flex flex-col items-center border justify-center w-1/5 border-r pr-6 text-center">
        <h2 className="text-4xl font-bold">4.8</h2>
        <div className="flex justify-center text-orange-400 text-xl mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < 4 ? "★" : "☆"}</span>
          ))}
        </div>
        <p className="text-gray-600 mt-2">Course Rating</p>
      </div>

      {/* Rating Breakdown */}
      <div className="w-4/5 border">
        <div className="p-4">
          {" "}
          <h3 className="text-lg font-semibold mb-2">Course Rating</h3>
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center mb-2">
              <div className="flex text-[#FD8E1F] text-lg mr-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < rating.stars ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-[#6E7485] text-sm mr-2">
                {rating.stars} Star Rating
              </span>
              <Progress
                value={rating.percentage}
                className="w-full bg-gray-200 [&>div]:bg-[#FD8E1F]"
                style={{ "--progress-color": "#FD8E1F" }}
              />
              <span className="text-[#1D2026] text-sm ml-2">
                {rating.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRating;
