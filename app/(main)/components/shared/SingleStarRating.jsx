// import { Star } from "lucide-react";

export function SingleStarRating({ rating }) {
    return (
        <div className="flex items-center gap-1">
            {/* <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> */}
            <span className="text-sm text-muted-foreground">{rating?.toFixed(1)}</span>
        </div>
    );
}
