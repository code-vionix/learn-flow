import { Card } from "@/components/ui/card";
import StarIcon from "./StarIcon";

export default function RatingOverview({ overallRating }) {
  return (
    <Card className="p-6 bg-orange-50 border-none">
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold mb-2">{overallRating}</span>
        <div className="flex mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= Math.floor(overallRating)} />
          ))}
        </div>
        <span className="text-sm">Overall Rating</span>
      </div>
    </Card>
  );
}
