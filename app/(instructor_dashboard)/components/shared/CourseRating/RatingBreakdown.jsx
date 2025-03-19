import StarIcon from "./StarIcon";

export default function RatingBreakdown({ ratingData }) {
  return (
    <div className="space-y-3 px-4 py-4">
      {ratingData.map((item) => (
        <div key={item.stars} className="flex items-center gap-3">
          <div className="flex items-center w-20">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={star <= item.stars} size="small" />
            ))}
          </div>
          <div className="text-sm w-16">{item.label}</div>
          <div className="flex-1 h-2 bg-gray-200  overflow-hidden">
            <div
              className="h-full bg-orange-500  transition-all duration-500 ease-in-out"
              style={{ width: `${item.percentage}%` }}
            />
          </div>
          <div className="text-sm w-10 text-right">
            {item.percentage < 1 ? `<1%` : `${item.percentage}%`}
          </div>
        </div>
      ))}
    </div>
  );
}
