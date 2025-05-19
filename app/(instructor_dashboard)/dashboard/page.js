"use client";
import { useSelector } from "react-redux";
import CourseOverview from "../components/shared/CourseOverview/CourseOverview";
import CourseRating from "../components/shared/CourseRating/CourseRating";
import RevenueChart from "../components/shared/RevenueChart/RevenueChart";

import ProfileBanner from "./_components/ProfileBanner";
import ProfileViewChart from "./_components/ProfileViewChart";
import RecentActivity from "./_components/RecentActivity";

import {
  useDeleteCourseMutation,
  useGetAllCourseQuery,
} from "@/store/api/courseApi";
import StatsGrid from "./_components/StatsGrid";

export default function DashbordPAge() {
  const search = useSelector((state) => state.search);
  const { data, isLoading, isError, isSuccess, error } = useGetAllCourseQuery();
  const [
    deleteCourse,
    {
      isLoading: deleteCourseLoading,
      isError: deleteIsCourseError,
      error: deleteCourseError,
    },
  ] = useDeleteCourseMutation();
  console.log(error);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error?.data?.message}</div>;
  return (
    <div className=" w-full min-h-screen mx-auto bg-gray-50">
      <div className=" container w-[1320px]  mx-auto">
        {/* {isError && <div>{error}</div>} */}
        {deleteCourseLoading && <div>Loading...</div>}
        {deleteIsCourseError && <div>{deleteCourseError.data.message}</div>}
        <button
          className="bg-primary-500 text-white px-4 py-2 rounded"
          onClick={() => {
            deleteCourse("67f9476e65985939a0e2ce7d");
          }}
        >
          delete Course
        </button>
        {isSuccess && <div>{data?.length}</div>}
        <div>{search}</div>
        <StatsGrid />
        <ProfileBanner />
        <div className="w-full  flex  py-4 gap-6 ">
          <div className="w-4/12">
            <RecentActivity />
          </div>
          <div className="w-5/12">
            <RevenueChart />
          </div>
          <div className="w-3/12">
            <ProfileViewChart />
          </div>
        </div>
        <div className="w-full flex gap-6">
          <CourseRating />
          <CourseOverview />
        </div>
      </div>
    </div>
  );
}
