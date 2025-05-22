import { AlarmClock } from "lucide-react";

export default function CoursePrice({
  price,
  offer_price,
  discountPercentage,
  endDate,
  startDate,
}) {
  const calculateDaysLeft = (endDateStr) => {
    if (!endDateStr) return null;
    const today = new Date();
    const end = new Date(endDateStr);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysLeft = calculateDaysLeft(endDate);
  const offerActive = daysLeft > 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {offerActive ? (
            <>
              <span className="text-2xl font-semibold">${offer_price}</span>
              <span className="text-gray-500 line-through">${price}</span>
            </>
          ) : (
            <span className="text-2xl font-semibold">${price}</span>
          )}
        </div>

        {offerActive && discountPercentage ? (
          <span className="bg-[#FFEEE8] text-[#FF6636] px-3 py-2 rounded text-sm font-medium">
            {`${discountPercentage.toFixed()}% OFF`}
          </span>
        ) : null}
      </div>

      {offerActive ? (
        <div className="flex items-center gap-2 text-red-500">
          <AlarmClock className="w-5 h-5" />
          <span className="text-sm font-medium">
            {daysLeft} day{daysLeft > 1 ? "s" : ""} left at this price!
          </span>
        </div>
      ) : null}
    </div>
  );
}
