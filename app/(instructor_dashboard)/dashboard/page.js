import CourseOverview from "../components/shared/CourseOverview/CourseOverview";
import CourseRating from "../components/shared/CourseRating/CourseRating";
import RevenueChart from "../components/shared/RevenueChart/RevenueChart";

import ProfileBanner from "./_components/ProfileBanner";
import ProfileViewChart from "./_components/ProfileViewChart";
import RecentActivity from "./_components/RecentActivity";

import StatsGrid from "./_components/StatsGrid";

export default function DashbordPAge() {
  return (
    <div className=" w-full min-h-screen mx-auto bg-gray-50">
      <div className=" container w-[1320px]  mx-auto">
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
