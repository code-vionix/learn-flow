"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Corrected import for Navigation module
import { Swiper, SwiperSlide } from "swiper/react";
import PopularKeyword from "./Popular_Key";


const tools = [
  { name: "HTML 5", courses: "2,736 Courses" },
  { name: "CSS 3", courses: "13,127 Courses" },
  { name: "Javascript", courses: "52,212 Courses" },
  { name: "Saas", courses: "20,215 Courses" },
  { name: "Laravel", courses: "6,136 Courses" },
  { name: "Django", courses: "22,829 Courses" },
  { name: "Django", courses: "22,829 Courses" },
  { name: "Django", courses: "22,829 Courses" },
  { name: "Django", courses: "22,829 Courses" },
];

const keywords = [
  "HTML 5",
  "Web Development",
  "Responsive Development",
  "Developments",
  "Programming",
  "Website",
  "Technology",
  "WordPress",
];

export default function PopularToolsCarousel() {
  const swiperRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      // Set up event listeners to track when the next/prev buttons are active
      swiperInstance.on("slideChange", () => {
        setIsPrevActive(swiperInstance.activeIndex > 0); // Check if there's a previous slide
        setIsNextActive(
          swiperInstance.activeIndex < swiperInstance.slides.length - 1
        ); // Check if there's a next slide
      });

      // Initialize the state for the first load
      setIsPrevActive(swiperInstance.activeIndex > 0);
      setIsNextActive(
        swiperInstance.activeIndex < swiperInstance.slides.length - 1
      );
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Popular tools</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`swiper-prev ${
              isPrevActive ? "text-primary-500" : "text-black"
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`swiper-next ${
              isNextActive ? "text-primary-500" : "text-black"
            }`}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]} // Using Navigation module here
          spaceBetween={20}
          slidesPerView={6}
          navigation={{
            prevEl: ".swiper-prev", // Specify the previous button element
            nextEl: ".swiper-next", // Specify the next button element
          }}
          className="pb-4"
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <Card className="border hover:shadow-xl hover:scale-105 transition-transform duration-300 flex justify-center items-center w-48 h-24 gap-2 pt-6 pb-6 group">
                <CardContent className="p-4 text-center">
                  <h3 className="text-base group-hover:text-primary-500 font-medium">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-500">{tool.courses}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <PopularKeyword />
    </div>
  );
}
