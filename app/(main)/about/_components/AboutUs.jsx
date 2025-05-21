import React from "react";
import Image from "next/image";

import aboutImage1 from '@/public/images/about-image1.png'

function AboutUs() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row  items-center justify-center gap-3 lg:gap-28 ">
      <div className="md:w-[33.4375rem] lg:flex-none 2xl:flex-1 md:pt-5 text-center xl:text-start md:px-8 flex flex-col md:gap-5  ">
        <h1 className="w-full  text-gray-100 font-semibold md:text-7xl ">2007-2021</h1>
        <h1 className="w-full  text-gray-900 font-semibold text-2xl  md:text-4xl  md:text-start">We share knowledge with the world</h1>
        <p className="w-full font-normal text-sm text-gray-600 sm:text-base md:text-xl  md:text-start">Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla. </p>
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
