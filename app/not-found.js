"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./globals.css";

import notFoundImage from "@/public/images/not-found.png";

import Navbars from "./(main)/components/shared/Navbars";

import { Button } from "@/components/ui/button";
import DashboardFooter from "./(instructor_dashboard)/dashboard/_components/DashboardFooter";
import Navigation from "./(main)/components/shared/navigation/Navigation";

function NotFound() {
  const router = useRouter();
  return (
    <>
      <Navbars />
      <Navigation />
      <div className="w-full flex items-center justify-center  gap-28 px-72 py-32">
        <div className="w-[33.4375rem] flex-none mb-4">
          <h1 className="w-full  text-gray-100 font-semibold text-7xl">
            Error 404
          </h1>
          <h1 className="w-full mb-8  text-gray-900 font-semibold text-4xl">
            Oops! page not found
          </h1>
          <p className="w-full  mb-8  font-normal text-xl text-gray-600">
            Something went wrong. It&apos; look that your requested could not be
            found. It&apos; look like the link is broken or the page is removed.
          </p>
          <Button
            onClick={() => router.back()}
            className="px-8 py-6 bg-primary-500 text-white font-semibold text-lg hover:bg-primary-600"
          >
            {" "}
            Go Back
          </Button>
        </div>
        <Image
          src={notFoundImage}
          className="flex-1"
          alt=""
          width={672}
          height={500}
        />
      </div>
      <div className="px-36">
        <DashboardFooter />
      </div>
    </>
  );
}

export default NotFound;
