import React from "react";
import Image from "next/image";

import careerImage from '@/public/images/career.png'


function Teams() {
  return (
    <div className="w-full flex py-10 px-72 items-center justify-center gap-28 ">
      <div className="w-[536px] flex flex-col gap-5 flex-none ">
        <h1 className="w-full  text-gray-900 font-semibold text-4xl">Join the most incredible & creative team.</h1>
        <p className="w-full font-normal text-xl text-gray-600">Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.</p>
        <button className='w-52  gap-3 px-6 py-3 bg-primary-500 text-white hover:bg-primary-600'>  View Open Positions</button>
      </div>
      <Image 
      src={careerImage}
      className="flex-1"
      alt=""
      width={648}
      height={600}
      />
      
    </div>
  );
}

export default Teams;