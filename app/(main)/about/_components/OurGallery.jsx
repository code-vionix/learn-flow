import React from 'react'
import Image from 'next/image'
import galleryImage from "@/public/images/Gallery.png";
import { MoveRight } from 'lucide-react';


function OurGallery({isButton = true }) {
  return (
     <div className="w-full  py-20 pr-40  pl-72 flex items-center justify-center flex-row-reverse gap-28  ">
           <Image className='flex-1' src={galleryImage} alt="" width={672} height={500} />
           <div className="w-[26.5rem] flex-none flex flex-col gap-4">
             <h3 className="w-full text-base font-medium text-primary-500">
             OUR GALLERY
             </h3>
             <h1 className="w-full h-24 text-gray-900 font-semibold text-4xl">
             We’ve been here almost 17 years
             </h1>
             <p className="w-full font-normal text-xl text-gray-600">
             Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.
             </p>
            {
              isButton &&  <button className='w-48 flex items-center gap-3 px-6 py-3 bg-primary-500 text-white hover:bg-primary-600'>Join our team <MoveRight size={20}/></button>
            }
           </div>
         </div>
  )
}

export default OurGallery