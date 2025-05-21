import React from "react";
import Image from "next/image";

import aboutImage2 from "@/public/images/about-image2.png";

function OurMission() {
  return (

    <div className="relative primary-container grid lg:grid-cols-2  gap-5 md:gap-28 ">

      <div className="lg:w-[33.4375rem] lg:flex-none 2xl:flex-1 text-center lg:text-start flex flex-col gap-1 md:gap-3">
        <h3 className="w-full text-sm md:text-base font-medium text-primary-500">
          OUR ONE BILLION MISSION
        </h3>
        <h1 className="w-full  text-gray-900 font-semibold text-2xl md:text-4xl">
          Our one billion mission sounds bold, We agree.
        </h1>
        <p className="w-full font-normal text-base md:text-xl px-2 text-gray-600">
          `We cannot solve our problems with the same thinking we used when we
          created them.`&#34;`—Albert Einstein. Institutions are slow to change.
          Committees are where good ideas and innovative thinking go to die.
          Choose agility over dogma. Embrace and drive change. We need to wipe
          the slate clean and begin with bold, radical thinking.`
        </p>
      </div>
      <Image className="flex-1 absolute right-0 bottom-0" src={aboutImage2} alt="" width={672} height={500} />
    </div>

  );
}

export default OurMission;
