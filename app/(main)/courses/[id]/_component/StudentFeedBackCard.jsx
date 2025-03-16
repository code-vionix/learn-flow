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
import StarRating from "./StarRating";

export default function StudentFeedBackCard({ reviews }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#1D2026]">
          Students Feedback
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              Sort by
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>5 Star Rating</DropdownMenuItem>
            <DropdownMenuItem>4 Star Rating</DropdownMenuItem>
            <DropdownMenuItem>3 Star Rating</DropdownMenuItem>
            <DropdownMenuItem>2 Star Rating</DropdownMenuItem>
            <DropdownMenuItem>1 Star Rating</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm text-[#1D2026]">
                      {review.author}
                    </h3>
                    <span className="text-xs text-[#6E7485]">•</span>
                    <span className="text-xs text-[#6E7485]">
                      {review.timeAgo}
                    </span>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="mt-3 text-sm text-[#4E5566] leading-[22px] tracking-tight">
                    {review.content}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-start pt-3">
        <Button className="w-[165px] h-12 flex justify-center items-center gap-3 bg-[#FFEEE8] text-[#FF6636] font-semibold rounded">
          <span>Load More</span>

          <div className="animate-spin w-6 h-6 border-2 border-[#FF6636] border-t-transparent rounded-full" />
        </Button>
      </div>
    </>
  );
}
