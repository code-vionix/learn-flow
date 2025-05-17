'use client';
import { AlertCircle, Quote } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useGetAllTestimonialQuery } from "@/store/api/testimonialApi";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonial() {
  const { data, isLoading, isError } = useGetAllTestimonialQuery();

  let content;

  if (isLoading) {
    content = (
      <div className="primary-container grid lg:grid-cols-3 gap-12">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-12 animate-pulse">
            <div className="md:w-[424px] h-[200px] bg-primary-200 rounded"></div>
            <div className="h-4 w-32 bg-primary-200 rounded mt-2"></div>
            <div className="h-3 w-48 bg-primary-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    content = (
      <div className="pb-20">
        <Alert className="max-w-screen-md m-auto" variant="destructive">
          <AlertCircle size={20} />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong! Testimonial not found. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!isLoading && !isError && data?.data?.length) {
    content = (
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="py-8"
      >
        {data.data.map((user) => (
          <SwiperSlide key={user._id}>
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-[200px] bg-gray-50 relative">
                <div className="p-6 text-center">
                  <div className="w-full h-12">
                    <Quote className="rotate-180 text-primary-500" />
                  </div>
                  <span className="text-base font-normal text-gray-900 text-center">
                    {user?.message}
                  </span>
                  <div className="w-full mb-0 h-12 flex items-end justify-end">
                    <Quote className="text-primary-500" />
                  </div>
                </div>
                <div className="h-6 w-6 bg-gray-50 rotate-45 absolute bottom-[-12px] left-1/2"></div>
              </div>
              <div className="flex flex-col items-center mt-4">
                <h1>{user?.name}</h1>
                <p>
                  {user?.company && (
                    <>
                      CEO of{" "}
                      <Link href="#" className="text-blue-600 font-medium">
                        {user?.company}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className="primary-container">
      {content}
    </div>
  );
}

export default Testimonial;