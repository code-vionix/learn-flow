import React from "react";
import Image from "next/image";
import branche from "@/public/images/branche.png";
import branche1 from "@/public/images/branche1.jpg";
import branche2 from "@/public/images/branche2.jpg";
import branche3 from "@/public/images/branche3.jpg";

function Breanches() {
  const bransheInfo = [
    {
      id: 1,
      type: "MAIN BRANCHES",
      location: "Los Angeles, California",
      address: "1702 Olympic Boulevard Santa Monica, CA 90404",
      image: branche,
    },
    {
      id: 2,

      location: "Tokyo, Japan",
      address: "901 N Pitt Str., Suite 170 Tokyo, VA 22314, Japan",
      image: branche1
    },
    {
      id: 3,

      location: "Moscow, Russia",
      address: "Anjeliersstraat 470H, 1015 NL Moscow, Russia",
      image: branche2
    },
    {
      id: 4,

      location: "Mumbai, India",
      address: "36 East 20th St, 6th Floor Mumbai, India",
      image: branche3
    },
  ];
  return (
    <div className=" w-full px-72 py-20 flex flex-col items-center justify-center gap-10">
      <div className="text-center flex flex-col gap-5 w-[604px]">
        <h1 className="font-semibold text-gray-900 text-4xl">
          Our branches all over the world.
        </h1>
        <p className="font-normal text-xl text-gray-700 text-center ">
          Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
          imperdiet id leo quis, luctus auctor nisi.{" "}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 ">
        {
          bransheInfo.map(branche=>{
            return(
              <div key={branche.id} className=" relative flex gap-3 max:h-[364px] cursor-pointer  ">
          <Image
            src={branche.image}
            alt=""
            className="object-cover"
            width={312}
            height={364}
          />
          <div className="pt-5 pb-4 px-10 text-center absolute bottom-7 left-6 bg-gray-100 w-[264px]">
            <h2 className="text-xs font-normal text-primary-500 ">
              {branche.type}
            </h2>
            <h1 className="text-base font-medium text-gray-900 mt-1">
              {branche.location}
            </h1>
            <p className="text-sm font-normal text-gray-600 mt-1">
             {branche.address}
            </p>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Breanches;
