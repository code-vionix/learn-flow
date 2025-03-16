import { getGreeting } from "@/utils";
import DashProfile from "./DashProfile";
import DashNotifaction from "./DashNotifaction";
import DashSearch from "./DashSearch";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between container mx-auto py-6 px-10">
      <div>
        <p className="text-xs text-gray-600 font-medium">{getGreeting()}</p>
        <p className="text-xl text-gray-900 font-semibold ">Dashboard</p>
      </div>
      <div className="flex items-center gap-4">
        <DashSearch />
        <DashNotifaction />
        <DashProfile />
      </div>
    </header>
  );
};

export default DashboardHeader;
