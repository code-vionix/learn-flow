"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import StarRating from "./StarRating";

export default function StudentFeedBackCard({ reviews }) {
  const [sortByRating, setSortByRating] = useState(null);

  function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return `${diff} sec${diff !== 1 ? "s" : ""} ago`;
    const mins = Math.floor(diff / 60);
    if (mins < 60) return `${mins} min${mins !== 1 ? "s" : ""} ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }

  // Sort reviews based on selected rating
  // const sortedReviews = useMemo(() => {
  //   if (!sortByRating) return reviews;
  //   return [...reviews].filter((review) => Math.floor(review.rating) === sortByRating);
  // }, [reviews, sortByRating]);

  console.log("review.........", reviews);

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#1D2026]">
          Students Feedback
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              {sortByRating ? `${sortByRating} Star Rating` : "Sort by"}
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[5, 4, 3, 2, 1].map((star) => (
              <DropdownMenuItem key={star} onClick={() => setSortByRating(star)}>
                {star} Star Rating
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem onClick={() => setSortByRating(null)}>
              Clear Filter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4 mt-4">
        {reviews && reviews.length > 0
          ? reviews?.map((review, index) => (
            <Card key={review?.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <img
                    src={
                      review.user?.imageUrl ||
                      `https://avatar.iran.liara.run/public/${index}`
                    }
                    alt={review.user?.firstName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-sm text-[#1D2026]">
                        {review?.user?.firstName} {review?.user?.lastName}
                      </h3>
                      <span className="text-xs text-[#6E7485]">•</span>
                      <span className="text-xs text-[#6E7485]">
                        {getTimeAgo(review?.createdAt)}
                      </span>
                    </div>
                    <StarRating rating={review?.rating} />
                    <p className="mt-3 text-sm text-[#4E5566] leading-[22px] tracking-tight">
                      {review?.comment}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
          : <div>No Reviews Found</div>
        }
      </div>
    </>
  );
}
