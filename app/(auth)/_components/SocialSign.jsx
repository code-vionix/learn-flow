import React from "react";
import Image from "next/image";
import Apple from "@/public/images/apple 2.png";
import Google from "@/public/images/search 1.png";
import Facebook from "@/public/images/facebook 1.png";


function SocialSign() {
  const socialLinks= [
    {
      id:1,
      image:Apple,
      name:Google
    },
    {
      id:1,
      image:Apple,
      name:Google
    },
    {
      id:1,
      image:Apple,
      name:Google
    },
  ]
  return (
    <div className="space-y-4">
      <div className=" w-full text-center">
        <div className=" w-full border-t-[1px] border-gray-300  "></div>

        <div className="text-sm font-medium text-gray-500 mt-[-10px] bg-transparent  ">
          SIGN UP WITH
        </div>
      </div>

      <div className="flex gap-2 ">
        <div className="flex h-11 w-48 border items-center  text-center p-6">
          <span className=" flex flex-none items-center border-r-[1px] pr-4">
          <Image
              src={Google}
              width={20}
              height={20}
              alt="Google"
              className="text-black"
            />
          </span>
          <span className="flex-1 text-center">Google</span>
        </div>
        <div className="flex h-11 w-48 border items-center  text-center p-6">
          <span className=" flex flex-none items-center border-r-[1px] pr-4">
            <Image
              src={Apple}
              width={20}
              height={20}
              alt="Apple"
              className="text-black"
            />
          </span>
          <span className="flex-1 text-center">Apple</span>
        </div>
        <div className="flex h-11 w-48 border items-center  text-center p-6">
          <span className=" flex flex-none items-center border-r-[1px] pr-4">
          <Image
              src={Facebook}
              width={20}
              height={20}
              alt="Facebook"
              className="text-black"
            />
          </span>
          <span className="flex-1 text-center">Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default SocialSign;
