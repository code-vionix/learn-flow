import React from "react";

const DotSliderButton = ({ cards, current, setCurrent }) => {
  return (
    <div className="">
      {cards?.map((_card, index) => (
        <span
          key={index}
          onClick={() => setCurrent(index)}
          className={`h-[10px] cursor-pointer w-[10px] ml-2 inline-block rounded-full ${
            index === current ? "bg-primary-500" : "bg-primary-200"
          }`}
        />
      ))}
    </div>
  );
};

export default DotSliderButton;
