import { Card } from "@/components/ui/card";
import React from "react";

const BlanceCard = ({ color, icon, amount, label }) => {
  return (
    <Card className="flex items-center py-6 pl-6 space-x-4  w-full transition-shadow duration-300 hover:shadow-lg">
      <div className={`p-3 ${color}`}>{icon}</div>
      <div>
        <p className="text-2xl font-normal text-gray-900">${amount}</p>
        <p className="text-gray-500 text-sm font-normal">{label}</p>
      </div>
    </Card>
  );
};

export default BlanceCard;
