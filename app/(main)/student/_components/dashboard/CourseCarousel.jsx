"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "../shared/CourseCard";

export function CourseCarousel({ courses }) {
  return (
    <div className="w-full px-6 py-8 mt-20 relative">
      <h1 className="text-3xl font-bold mb-8">
        Let&apos;s start learning, Kevin
      </h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        {/* Absolute Positioned Navigation Buttons INSIDE Carousel */}
        <div className="absolute -top-10 right-0 flex gap-2 mb-10 text-primary-500 bg-primary-900 rounded-none">
          <CarouselPrevious className="hidden md:flex " />
          <CarouselNext className="hidden md:flex" />
        </div>

        <CarouselContent className="-ml-2 px-0 py-0 mt-0 md:-ml-4 mb-20 p-0">
          {courses.map((course, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
            >
              <CourseCard course={course} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
