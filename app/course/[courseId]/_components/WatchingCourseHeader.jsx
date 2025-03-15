'use client'

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, CirclePlay, Clock, FolderOpen } from "lucide-react";
import WatchingCourseWrapper from "./WatchingCourseWrapper";
import ReviewModal from './ReviewModal';
import { useCourseContext } from '@/povider/CourseProvider';

const WatchingCourseHeader = ({ data }) => {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const { handleNextClick } = useCourseContext();
    const handleReviewSubmit = (rating, feedback) => {
        console.log('Review submitted:', { rating, feedback });
    };

    console.log('data:: ', data);

    return (
        <div className="bg-[#F5F7FA]">
            <WatchingCourseWrapper className={'py-3'}>
                <div className="flex md:flex-row flex-col lg:items-center justify-between gap-3">
                    <div className="flex lg:items-center gap-3">
                        <Button variant="ghost" className="p-2 !bg-white md:flex hidden rounded-full duration-300 hover:border-gray-500 border border-transparent">
                            <ArrowLeft strokeWidth={1} className="h-5 w-5" />
                        </Button>

                        <div className="">
                            <h3 className="font-semibold text-[18px] lg:w-auto w-auto md:w-[400px]">{data?.courseName}</h3>

                            <div className="flex items-center gap-3 text-sm mt-1">
                                <div className="flex items-center gap-1">
                                    <FolderOpen strokeWidth={1.5} className="h-4 w-4 text-primary-500" />
                                    <span className="text-sm text-gray-600">{data?.sections} Sections</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CirclePlay strokeWidth={1.5} className="h-4 w-4 text-secondary-500" />
                                    <span className="text-sm text-gray-600">{data?.lectures} lectures</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock strokeWidth={1.5} className="h-4 w-4 text-warning-500" />
                                    <span className="text-sm text-gray-600">{data?.courseDuration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex hidden md:items-center items-start gap-3">
                        <Button
                            className="bg-white text-sm text-black px-6 duration-300 hover:bg-primary-50 shadow-none font-[400]"
                            onClick={() => setIsReviewModalOpen(true)}
                        >
                            Write a Review
                        </Button>
                        <Button onClick={handleNextClick} className="bg-primary-500 text-sm text-white px-6 duration-300 hover:bg-primary-400 shadow-none font-[400]">
                            Next lecture
                        </Button>
                    </div>
                </div>
            </WatchingCourseWrapper>

            <ReviewModal
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                onSubmit={handleReviewSubmit}
            />
        </div>
    );
};

export default WatchingCourseHeader;