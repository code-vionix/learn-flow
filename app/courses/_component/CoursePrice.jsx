import { AlarmClock } from "lucide-react";

export default function CoursePrice({
  price,
  originalPrice,
  discount,
  daysLeft,
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold">${price}</span>
          <span className="text-gray-500 line-through">${originalPrice}</span>
        </div>
        <span className="bg-[#FFEEE8] text-[#FF6636] px-3 py-2 rounded text-sm font-medium">
          {discount}% OFF
        </span>
      </div>
      <div className="flex items-center gap-2 text-red-500">
        <AlarmClock className="w-5 h-5" />
        <span className="text-sm font-medium">
          {daysLeft} days left at this price!
        </span>
      </div>
    </div>
  );
}
