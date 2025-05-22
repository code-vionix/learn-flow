"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
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

  const filteredReviews = sortByRating
    ? reviews.filter((review) => Math.floor(review.rating) === sortByRating)
    : reviews;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="lg:text-2xl text-lg font-semibold text-[#1D2026]">
          Students Feedback
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-none">
              Sort by
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setSortByRating(star)}
              >
                {star} Star Rating
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem onClick={() => setSortByRating(null)}>
              All Ratings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        {filteredReviews.map((review) => {
          const user = review.user;
          const fullName = user
            ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()
            : "Anonymous";
          const avatar = user?.imageUrl || null;
          const initials = fullName?.charAt(0).toUpperCase() || "U";

          return (
            <div key={review.id} className="border-b pb-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="py-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-[#1D2026] overflow-hidden">
                      {avatar ? (
                        <img
                          src={avatar}
                          alt={fullName}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <span>{initials}</span>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm text-[#1D2026]">
                          {fullName}
                        </h3>
                        <span className="text-xs text-[#6E7485]">•</span>
                        <span className="text-xs text-[#6E7485]">
                          {getTimeAgo(review.createdAt)}
                        </span>
                      </div>
                      <StarRating rating={review.rating} />
                      {review.comment && (
                        <p className="w-full mt-3 lg:text-sm text-xs text-[#4E5566] lg:leading-[22px] tracking-tight">
                          {review.comment}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center lg:justify-start pt-3">
        <Button className="w-[165px] h-12 flex justify-center items-center gap-3 bg-[#FFEEE8] text-[#FF6636] font-semibold rounded">
          <span>Load More</span>
          <div className="animate-spin w-6 h-6 border-2 border-[#FF6636] border-t-transparent rounded-full" />
        </Button>
      </div>
    </>
  );
}
