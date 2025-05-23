'use client';
import { useGetPopularInstructorQuery } from "@/store/api/instructorApi";
import TopInstructorCard from "../../components/home/TopInstructorCard";
import CourseSkaliton from "../../components/cards/CourseSkaliton";


export default function PopularInstructors() {
    const { data: topInstructors, isLoading, isError } = useGetPopularInstructorQuery();
    return (
        <section className="">
            <div className="primary-container">
                <h2 className="text-4xl font-semibold text-center text-[#1D2026] mb-10 leading-[48px] tracking-[-0.01em]">
                    Popular instructor in Web Development
                </h2>
                <div className="grid md:grid-cols-5 md:gap-8 gap-3">
                    {isLoading ? (
                        new Array(5).fill(0).map((_, index) => (
                            <CourseSkaliton key={index} />
                        ))
                    )
                        : topInstructors?.map((instructor, index) => (
                            <TopInstructorCard key={index} instructor={instructor} />
                        ))}
                </div>
            </div>
        </section>
    );
}
