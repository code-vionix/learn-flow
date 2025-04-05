import React from "react";
import loginImage from "@/public/images/Illustrations (1).png";
import Image from "next/image";

import LoginForm from "../_components/LoginForm";

function page() {
  return (
    <div className="pr-72 flex items-center justify-center overflow-hidden gap-32 h-screen w-screen">
      <Image
        src={loginImage}
        alt=""
        width={836}
        height={992}
        className="object-fit"
      />
      <div className="flex items-center justify-center">
        <LoginForm/>
      </div>
    </div>
  );
}

export default page;
