import { Card } from "@/components/ui/card";

const StatsCard = ({ number, label, icon, color }) => {
  return (
    <Card className="flex items-center space-x-4 p-4  transition-shadow duration-300 hover:shadow-lg">
      <div className={`p-3 ${color}`}>{icon}</div>
      <div>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-gray-500">{label}</p>
      </div>
    </Card>
  );
};
export default StatsCard;
