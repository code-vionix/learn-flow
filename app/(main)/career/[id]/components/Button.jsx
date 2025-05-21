import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";

function ApplyButton() {
  return (
    <Button className="lg:px-8 lg:py-3 px-4 py-1 bg-primary-500 text-white font-semibold text-base lg:text-lg h-10 lg:h-14 hover:bg-primary-600">
      Apply Now{" "}
      <MoveRight
        size={30}
        color="white"
        className="text-center w-full h-full"
      />{" "}
    </Button>
  );
}

export default ApplyButton;
