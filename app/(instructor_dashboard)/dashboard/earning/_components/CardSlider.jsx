"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Ellipsis } from "lucide-react";
import { useState } from "react";
import CardAddButton from "./CardAddButton";
import DotSliderButton from "./DotSliderButton";
import SliderButton from "./SliderButton";

const cards = [
  {
    id: 1,
    type: "VISA",
    number: "4855 **** **** ****",
    expires: "04/24",
    name: "Vako Shvili",
    bgColor: "bg-[#453FCA]",
  },
  {
    id: 1,
    type: "Master",
    number: "5795 **** **** ****",
    expires: "04/24",
    name: "Vako Shvili",
    bgColor: "bg-orange-700",
  },
];

export default function CardSlider() {
  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full max-w-[26.5rem] flex flex-col gap-5 p-4 border shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Cards</h2>
        {/* <span className="text-gray-500 text-sm">Revenue</span> */}
      </div>

      <div className="relative">
        <Card
          className={`relative overflow-hidden px-1 py-4 text-white h-48 w-96 ${cards[current].bgColor}`}
        >
          <div className="w-56 h-56 bg-[#ffffff15] rounded-full absolute -bottom-16 -right-8"></div>
          <div className="w-20 h-20 bg-[#ffffff15] rounded-full absolute -top-3 left-4"></div>
          <CardContent className="h-48 w-96 gap-6 flex flex-col">
            <div className="w-full flex justify-between items-center">
              <span className="text-2xl text-white font-bold">
                {cards[current].type}
              </span>
              <Ellipsis size={25} />
            </div>
            <p className="text-2xl flex items-center gap-6 font-medium">
              {cards[current].number}
              <span className="inline-block">
                <Copy size={16} />
              </span>
            </p>
            <div className="flex items-center gap-24 text-sm">
              <div>
                <p className="text-gray-200 text-xs">EXPIRES</p>
                <p>{cards[current].expires}</p>
              </div>
              <div>
                <p className="text-gray-300 text-[10px]">CARD NAME</p>
                <p>{cards[current].name}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-6 items-center">
          <DotSliderButton
            cards={cards}
            current={current}
            setCurrent={setCurrent}
          />

          <SliderButton
            current={current}
            prevCard={prevCard}
            cards={cards}
            nextCard={nextCard}
          />
        </div>
      </div>

      <CardAddButton />
    </div>
  );
}
