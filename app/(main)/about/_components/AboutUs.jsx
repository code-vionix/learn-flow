import React from "react";
import Image from "next/image";

import aboutImage1 from '@/public/images/about-image1.png'

function AboutUs() {
  return (
    <div className="w-full flex items-center justify-center  gap-28 ">
      <div className="w-[33.4375rem] flex-none ">
        <h1 className="w-full h-20 text-gray-100 font-semibold text-7xl">2007-2021</h1>
        <h1 className="w-full h-24 text-gray-900 font-semibold text-4xl">We share knowledge with the world</h1>
        <p className="w-full font-normal text-xl text-gray-600">Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla. </p>
      </div>
      <Image 
      src={aboutImage1}
      className="flex-1"
      alt=""
      width={672}
      height={500}
      />
      
    </div>
  );
}

export default AboutUs;
