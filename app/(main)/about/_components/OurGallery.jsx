import React from "react";
import Image from "next/image";
import galleryImage from "@/public/images/Gallery.png";
import { MoveRight } from "lucide-react";

function OurGallery({ isButton = true }) {
  return (
    <div className="primary-container grid lg:grid-cols-2  gap-5 md:gap-28  ">

      <div className={`${isButton ? 'order-1' : 'order-2'} md:w-[26.5rem] lg:flex-none 2xl:flex-1 text-center lg:text-start  flex flex-col gap-3 md:gap-4`}>
        <h3 className="w-full text-sm md:text-base font-medium text-primary-500">
          OUR GALLERY
        </h3>
        <h1 className="w-full  text-gray-900 font-semibold text-2xl md:text-4xl">
          We’ve been here almost 17 years
        </h1>
        <p className="w-full font-normal text-base md:text-xl text-gray-600">
          Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam
          ac libero quis tellus venenatis imperdiet. Sed sed nunc libero.
          Curabitur in urna ligula. torquent per conubia nostra.
        </p>
        <div className="text-center mx-auto lg:mx-0">
          {isButton && (
            <button className="w-48 flex items-center gap-3 px-6 py-3 bg-primary-500 text-white hover:bg-primary-600">
              Join our team <MoveRight size={20} />
            </button>
          )}
        </div>
      </div>
      <Image className="flex-1" src={galleryImage} alt="" width={672} height={500} />
    </div>
  );
}

export default OurGallery;
