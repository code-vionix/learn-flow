import CourseOverview from "../../components/shared/CourseOverview/CourseOverview";
import CourseRating from "../../components/shared/CourseRating/CourseRating";
import RevenueChart from "../../components/shared/RevenueChart/RevenueChart";

import Breadcrumb from "./_components/Breadcrumb";
import CourseCard from "./_components/CourseCard";
import StatsGrid from "./_components/StatsGrid";

export default function MyCoursesPage() {
  return (
    <div className="gap-6">
      <Breadcrumb />
      <CourseCard />
      <div className="w-full flex justify-between gap-4 h-full py-6">
        <StatsGrid />
        <div className="h-full w-1/2">
          <CourseRating />
        </div>
      </div>
      <div className="w-full flex   justify-between gap-4 h-full">
        <div className=" w-2/5  h-[30rem] ">
          <RevenueChart />
        </div>
        <div className="w-3/5  h-[30rem] ">
          <CourseOverview />
        </div>
      </div>
    </div>
  );
}
