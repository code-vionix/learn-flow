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

export const StudentFeedback = ({ reviews }) => {
  return (
    <div className="w-full mx-auto  space-y-6 mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Students Feedback
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 w-[200px]">
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
        {reviews.map((review, index) => (
          <Card key={index} className="border-b ">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm text-gray-900">
                      {review.name}
                    </h3>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-600">
                      {review.timeAgo}5 min
                    </span>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="mt-3 text-sm text-gray-700 leading-[22px] tracking-tight">
                    {review.comment}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-start pt-3">
        <Button className="w-[165px] h-12 flex justify-center items-center gap-3 bg-primary-900 text-primary-500 font-semibold rounded-none">
          <span>Load More</span>
        </Button>
      </div>
    </div>
  );
};
