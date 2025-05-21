import {
  Armchair,
  ChartBarBig,
  CreditCard,
  Gift,
  Handshake,
  Trophy,
  Utensils,
} from "lucide-react";

function OurPerkBenefit() {
  const benefits = [
    {
      id: "1",
      title: "Healthy Food & Snacks",
      bgColor: "bg-primary-100",
      icon: <Utensils color="rgba(255, 102, 54, 1)" />,
    },
    {
      id: "2",
      title: "Personal Career Growth",
      bgColor: "bg-secondary-100",

      icon: <ChartBarBig color="rgba(86, 79, 253, 1)" />,
    },
    {
      id: "3",
      title: "Vacation & Paid Time Off",
      bgColor: "bg-success-100",

      icon: <Armchair color="rgba(35, 189, 51, 1)" />,
    },
    {
      id: "4",
      title: "Special Allowance & Bonuse",
      bgColor: "bg-warning-100",

      icon: <Gift color="rgba(253, 142, 31, 1)" />,
    },
    {
      id: "5",
      title: "Competitive Salary",
      bgColor: "bg-success-100",

      icon: <CreditCard color="rgba(35, 189, 51, 1)" />,
    },
    {
      id: "6",
      title: "Well-being memberships",
      bgColor: "bg-primary-100",

      icon: <Handshake color=" rgba(255, 102, 54, 1)" />,
    },
    {
      id: "7",
      title: "Maternity/Paternity Benefits",
      bgColor: "bg-gray-50",

      icon: <Trophy color="rgba(29, 32, 38, 1)" />,
    },
    {
      id: "8",
      title: "Eduguard Annual Events",
      bgColor: "bg-secondary-100",
      textColor: "",
      icon: <Utensils color="rgba(86, 79, 253, 1)" />,
    },
  ];

  return (
    <section className="bg-gray-50">
      <h1 className="font-semibold py-5 text-3xl lg:text-4xl text-gray-900 text-center">
        Our Perks & Benefits
      </h1>

      <div className=" primary-container grid lg:grid-cols-4 gap-6 2xl:py-10">
        {benefits.map((benefit) => {
          return (
            <div key={benefit.id} className={`${benefit.bgColor} border border-foreground-50 w-full h-[12rem] p-8`}>
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 bg-white flex items-center justify-center p-5">
                  {benefit.icon}
                </div>
                <h2 className="font-medium text-lg">{benefit.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurPerkBenefit;
