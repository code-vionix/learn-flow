import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const SliderButton = ({ current, prevCard, cards, nextCard }) => {
  return (
    <div>
      <Button
        disabled={current === 0}
        variant="ghost"
        size="icon"
        onClick={prevCard}
      >
        <ArrowLeft
          className={`${current !== 0 ? "text-gray-700" : "text-gray-300"}`}
          size={32}
        />
      </Button>

      <Button
        disabled={current === cards.length - 1}
        variant="ghost"
        size="icon"
        onClick={nextCard}
      >
        <ArrowRight
          className={`${current === 0 ? "text-gray-700" : "text-gray-300"}`}
          size={32}
        />
      </Button>
    </div>
  );
};

export default SliderButton;
