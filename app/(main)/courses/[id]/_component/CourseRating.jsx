import { Progress } from "@/components/ui/progress";

// Utility: calculate average rating and breakdown
const calculateRatingData = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return {
      average: 0,
      breakdown: {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
      },
    };
  }

  const total = reviews.length;
  let sum = 0;
  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  for (const review of reviews) {
    const rating = Math.round(review.rating);
    sum += rating;
    if (breakdown[rating] !== undefined) {
      breakdown[rating]++;
    }
  }

  const average = parseFloat((sum / total).toFixed(1));
  const percentageBreakdown = {};

  for (let star = 1; star <= 5; star++) {
    percentageBreakdown[star] = parseFloat(
      ((breakdown[star] / total) * 100).toFixed(1)
    );
  }

  return { average, breakdown: percentageBreakdown };
};

const CourseRating = ({ reviews }) => {
  const { average, breakdown } = calculateRatingData(reviews);

  const ratingData = [5, 4, 3, 2, 1].map((star) => ({
    stars: star,
    percentage: breakdown[star] || 0,
  }));

  return (
    <div className="bg-white w-full flex gap-4">
      {/* Rating Summary */}
      <div className="flex flex-col items-center border justify-center w-1/5 border-r pr-6 text-center">
        <h2 className="text-4xl font-bold">{average}</h2>
        <div className="flex justify-center text-orange-400 text-xl mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < Math.round(average) ? "★" : "☆"}</span>
          ))}
        </div>
        <p className="text-gray-600 mt-2">Course Rating</p>
      </div>

      {/* Rating Breakdown */}
      <div className="w-4/5 border">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Course Rating</h3>
          {ratingData.map((rating) => (
            <div key={rating.stars} className="flex items-center mb-2">
              <div className="flex text-[#FD8E1F] text-lg mr-2 w-24">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < rating.stars ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-[#6E7485] text-sm mr-2 w-28">
                {rating.stars} Star Rating
              </span>
              <Progress
                value={rating.percentage}
                className="w-full rounded-none bg-gray-200 h-2 [&>div]:bg-[#FD8E1F]"
              />
              <span className="text-[#1D2026] text-sm ml-2 whitespace-nowrap">
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
