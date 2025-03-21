import React from "react";
import WithdrawHistory from "./_components/WithdrawHistory";
import WithdrawMoney from "./_components/WithdrawMoney";
import CardSlider from "./_components/CardSlider";
import RevenueChart from "../../components/shared/RevenueChart/RevenueChart";
import { CreditCard, Crown, Layers, PanelBottomDashed } from "lucide-react";
import BlanceCard from "./_components/BlanceCard";

const DashboardLearningPage = () => {
  const blanceInfo = [
    {
      amount: "13,804.00",
      label: "Total Revenue",
      icon: <Layers />,
      color: "bg-primary-100 text-primary-500",
    },
    {
      amount: "16,593.00",
      label: "Current Blance",
      icon: <PanelBottomDashed />,
      color: "bg-secondary-100 text-secondary-500",
    },
    {
      amount: "13,593.00",
      label: "Total Withdrawals",
      icon: <CreditCard />,
      color: "bg-warning-100 text-warning-500",
    },
    {
      amount: "162.00",
      label: "Today Revenue",
      icon: <Crown />,
      color: "bg-success-100 text-success-500",
    },
  ];

  return (
    <main className="flex flex-col gap-6 pb-20">
      <div className="flex justify-between gap-8 items-center">
        {blanceInfo.map((info, index) => (
          <BlanceCard key={index} {...info} />
        ))}
      </div>

      <div className="flex justify-between gap-6">
        <div className="w-full h-[480px] border ">
          <RevenueChart />
        </div>

        <CardSlider />
      </div>

      <div className="flex justify-between gap-6">
        <WithdrawMoney />

        <WithdrawHistory />
      </div>
    </main>
  );
};

export default DashboardLearningPage;
