import React from "react";
import Image from "next/image";

import contactImage from '@/public/images/Fit.png'
import { Mail } from "lucide-react";

function Contact() {
  return (
    <div className="w-full flex px-72 py-10 items-center justify-center gap-28 ">
      <div className="w-[33.4375rem] flex flex-col gap-5 flex-none ">
        <h1 className="w-full  text-gray-900 font-semibold text-4xl">Contact with us</h1>
        <p className="w-full font-normal text-xl text-gray-600">Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.</p>
        <button className='w-48 flex items-center gap-3 px-6 py-3 bg-primary-500 text-white hover:bg-primary-600'> <Mail className="text-white"/> Copy Email</button>
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