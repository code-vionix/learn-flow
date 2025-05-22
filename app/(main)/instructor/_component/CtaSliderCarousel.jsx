"use client";

import { CtaCarousel, CtaCarouselContent, CtaCarouselItem, CtaCarouselNext, CtaCarouselPrevious } from "@/components/ui/ctaCarousel";
import { useState } from "react";

const CtaSliderCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div>
            <CtaCarousel className="w-full">
                <CtaCarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CtaCarouselItem key={index}>
                            <div className="p-6 bg-primary-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide text-primary-500 lucide-quote"
                                >
                                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                                </svg>

                                <p className="mt-4 text-sm">
                                    Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.
                                </p>
                            </div>
                        </CtaCarouselItem>
                    ))}
                </CtaCarouselContent>
                <CtaCarouselPrevious />
                <CtaCarouselNext />
            </CtaCarousel>
        </div>
    );
};

export default CtaSliderCarousel;
