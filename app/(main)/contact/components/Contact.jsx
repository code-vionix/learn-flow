import React from "react";
import Image from "next/image";

import contactImage from '@/public/images/Fit.png'
import { Mail } from "lucide-react";

function Contact() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row px-2 py-4 sm:px-8 md:px-16 xl:px-40 2xl:px-72 md:py-10 items-center justify-center gap-5 xl:gap-28 ">
      <div className="lg:w-[33.4375rem] lg:flex-none 2xl:flex-1 flex flex-col gap-5 text-center lg:text-start ">
        <h1 className="w-full  text-gray-900 font-semibold text-3xl lg:text-4xl">Contact with us</h1>
        <p className="w-full font-normal text-lg lg:text-xl text-gray-600">Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.</p>
        <button className='w-48 mx-auto lg:mx-0 flex items-center gap-3 px-6 py-3 bg-primary-500 text-white hover:bg-primary-600'> <Mail className="text-white"/> Copy Email</button>
      </div>
      <Image 
      src={contactImage}
      className="flex-1"
      alt=""
      width={760}
      height={540}
      />
      
    </div>
  );
}

export default Contact;