import React from "react";
import Image from "next/image";

import aboutImage2 from "@/public/images/about-image2.png";

function OurMission() {
  return (
    
      <div className="w-full  px-10 flex items-center justify-center  gap-28  ">
        <Image src={aboutImage2} alt="" width={672} height={500} />
        <div className="w-[33.4375rem]">
          <h3 className="w-full text-base font-medium text-primary-500">
            OUR ONE BILLION MISSION
          </h3>
          <h1 className="w-full h-24 text-gray-900 font-semibold text-4xl">
            Our one billion mission sounds bold, We agree.
          </h1>
          <p className="w-full font-normal text-xl text-gray-600">
            `&#34;`We cannot solve our problems with the same thinking we used when we
            created them.`&#34;`—Albert Einstein. Institutions are slow to change.
            Committees are where good ideas and innovative thinking go to die.
            Choose agility over dogma. Embrace and drive change. We need to wipe
            the slate clean and begin with bold, radical thinking.`&#34;`
          </p>
        </div>
      </div>
    
  );
}

export default OurMission;
