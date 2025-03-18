import React from "react";
import WithdrawHistory from "./_components/WithdrawHistory";
import WithdrawMoney from "./_components/WithdrawMoney";
import CardSlider from "./_components/CardSlider";

const DashboardLearningPage = () => {
  return (
    <main className="flex flex-col gap-6 pb-20">
      <div className="flex justify-between items-center">
        <div className="w-[312px] h-[108px] border"></div>
        <div className="w-[312px] h-[108px] border"></div>
        <div className="w-[312px] h-[108px] border"></div>
        <div className="w-[312px] h-[108px] border"></div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="w-full h-[480px] border "></div>

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
