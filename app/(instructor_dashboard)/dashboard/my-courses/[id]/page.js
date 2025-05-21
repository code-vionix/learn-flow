'use client';
import { useGetCourseByIdQuery } from "@/store/api/courseApi";
import CourseOverview from "../../../components/shared/CourseOverview/CourseOverview";
import CourseRating from "../../../components/shared/CourseRating/CourseRating";
import RevenueChart from "../../../components/shared/RevenueChart/RevenueChart";

import Breadcrumb from "../_components/Breadcrumb";
import CourseCard from "../_components/CourseCard";
import StatsGrid from "../_components/StatsGrid";

export default function MyCoursesPage({ params }) {
  const { data, isLoading, isError } = useGetCourseByIdQuery(params?.id);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="text-xl text-red-500 font-semibold">Failed to load course data.</span>
      </div>
    );
  }

  return (
    <div className="gap-6">
      <Breadcrumb />
      <CourseCard course={data} />
      <div className="w-full flex justify-between gap-4 h-full py-6">
        <StatsGrid />
        <div className="h-full w-1/2">
          <CourseRating />
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 h-full">
        <div className="w-2/5 h-[30rem]">
          <RevenueChart />
        </div>
        <div className="w-3/5 h-[30rem]">
          <CourseOverview />
        </div>
      </div>
    </div>
  );
}
