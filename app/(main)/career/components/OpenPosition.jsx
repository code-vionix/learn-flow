
import React from "react";
import JobCard from "./JobCard";

function OpenPosition() {
  const positions = [
    {
      id: 1,
      jobTitle: "Product Designer (UI/UX Designer)",
      location: "Tokyo, Japan",
      type: "Full Time",
      vacancy: "01 Vacancy",
      deadline: "30 June, 2021",
    },
    {
      id: 2,
      jobTitle: "Social Media Manager",
      location: "Moscow, Russia",
      type: "Full Time",
      vacancy: "01 Vacancy",
      deadline: "30 June, 2021",
    },
    {
      id: 3,
      jobTitle: "Director of Accounting",
      location: "Mumbai, India",
      type: "Full Time",
      vacancy: "01 Vacancy",
      deadline: "30 June, 2021",
    },
    {
      id: 4,
      jobTitle: "Principal Software Engineer",
      location: "Tokyo, Japan",
      type: "Full Time",
      vacancy: "01 Vacancy",
      deadline: "30 June, 2021",
    },
  ];

  return (
    <div className="px-2 py-5 md:py-10  sm:px-8 md:px-16 xl:px-40 2xl:px-72 lg:py-10 bg-gray-50">
      <h1 className="font-semibold text-3xl lg:text-4xl text-gray-900 text-center">
        Our all open positions ({positions.length})
      </h1>
      <div className="lg:py-10 flex justify-center items-center flex-wrap gap-3">
        {positions.map((position) => {
          return (
           <JobCard key={position.id} position={position}/>
          );
        })}
      </div>
    </div>
  );
}

export default OpenPosition;
