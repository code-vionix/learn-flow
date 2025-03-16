"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularKeyword from "./Popular_Key";

const categories = {
  "Web Development": [
    { name: "HTML 5", courses: "2,736 Courses" },
    { name: "CSS 3", courses: "13,127 Courses" },
    { name: "JavaScript", courses: "52,212 Courses" },
    { name: "Sass", courses: "20,215 Courses" },
    { name: "jQuery", courses: "18,900 Courses" },
    { name: "Bootstrap", courses: "30,100 Courses" },
    { name: "Web Accessibility", courses: "7,800 Courses" },
  ],
  "Backend Development": [
    { name: "Node.js", courses: "15,000 Courses" },
    { name: "Express.js", courses: "9,812 Courses" },
    { name: "Django", courses: "22,829 Courses" },
    { name: "Laravel", courses: "6,136 Courses" },
    { name: "Ruby on Rails", courses: "8,000 Courses" },
    { name: "Spring Boot", courses: "12,500 Courses" },
    { name: "Flask", courses: "10,500 Courses" },
  ],
  "Frontend Frameworks": [
    { name: "React", courses: "40,000 Courses" },
    { name: "Vue.js", courses: "10,600 Courses" },
    { name: "Angular", courses: "14,290 Courses" },
    { name: "Svelte", courses: "5,412 Courses" },
    { name: "Ember.js", courses: "4,300 Courses" },
    { name: "Backbone.js", courses: "3,800 Courses" },
    { name: "LitElement", courses: "2,500 Courses" },
  ],
  "Mobile Development": [
    { name: "React Native", courses: "18,300 Courses" },
    { name: "Flutter", courses: "25,000 Courses" },
    { name: "Xamarin", courses: "9,700 Courses" },
    { name: "Swift", courses: "12,600 Courses" },
    { name: "Kotlin", courses: "11,900 Courses" },
    { name: "Ionic", courses: "6,500 Courses" },
  ],
  "Database Technologies": [
    { name: "MySQL", courses: "35,000 Courses" },
    { name: "PostgreSQL", courses: "22,500 Courses" },
    { name: "MongoDB", courses: "27,000 Courses" },
    { name: "SQLite", courses: "6,200 Courses" },
    { name: "Oracle DB", courses: "10,700 Courses" },
    { name: "Redis", courses: "8,300 Courses" },
  ],
};


const keywords = Object.keys(categories);

export default function PopularToolsCarousel() {
  const swiperRef = useRef(null);
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [isPrevActive, setIsPrevActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.on("slideChange", () => {
        setIsPrevActive(swiperInstance.activeIndex > 0);
        setIsNextActive(
          swiperInstance.activeIndex < swiperInstance.slides.length - 1
        );
      });
      setIsPrevActive(swiperInstance.activeIndex > 0);
      setIsNextActive(
        swiperInstance.activeIndex < swiperInstance.slides.length - 1
      );
    }
  }, []);

  const filteredTools = selectedKeyword
    ? categories[selectedKeyword]
    : Object.values(categories).flat();

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
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={6}
          navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
          className="pb-4"
        >
          {filteredTools.map((tool, index) => (
            <SwiperSlide key={index}>
            <Card className="border hover:border-gray-100 flex justify-center items-center w-48 h-24 gap-2 pt-6 pb-6 group hover:shadow-lg">
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
      <PopularKeyword
        keywords={keywords}
        setSelectedKeyword={setSelectedKeyword}
      />
    </div>
  );
}