'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Navbar() {
   const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className={`px-72 py-5 flex items-center justify-between border-b-[1px] border-gray-200${
      isSticky
        ? "fixed top-0 bg-white shadow-md py-3"
        : "relative bg-transparent py-5"
    }`}>
      <div className="flex gap-2">
        <h3 className="text-2xl font-semibold flex items-center">
          <span className="mr-2">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          </span>
          E-tutor
        </h3>
      </div>
      <div className="flex gap-2">
      <Button className="bg-white text-gray-500 px-4 py-2 hover:bg-white border-none">
        Don't have account?
        </Button>
        <Button className="text-primary-500 hover:text-orange-600 px-4 py-2 bg-primary-100 hover:bg-primary-200">
          Create Account
        </Button>
       
      </div>
    </div>
  );
}

export default Navbar;
