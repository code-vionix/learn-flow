import Image from "next/image";

import careerImage from "@/public/images/career.png";

function Teams() {
  return (
    <div className=" flex-col-reverse lg:flex-row w-full flex lg:py-10 px-2 py-5 sm:px-8 md:px-16 lg:px-32  xl:px-60 2xl:px-72 items-center justify-center gap-3 lg:gap-28 ">
      <div className="lg:w-[33.5rem] flex flex-col gap-5 lg:flex-none 2xl:flex-1 text-center lg:text-start ">
        <h1 className="w-full  text-gray-900 font-semibold text-3xl lg:text-4xl">
          Join the most incredible & creative team.
        </h1>
        <p className="w-full font-normal text-xl text-gray-600">
          Proin gravida enim augue, dapibus ultrices eros feugiat et.
          Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac.
          Mauris gravida justo ac nunc consectetur.
        </p>
        <div className="flex items-center justify-center lg:block">
          <button className="w-52  gap-3 lg:px-6 py-3 bg-primary-500 text-white hover:bg-primary-600">
            {" "}
            View Open Positions
          </button>
        </div>
      </div>

      <Image
        src={careerImage}
        className="xl:flex-1"
        alt=""
        width={648}
        height={600}
      />
    </div>
  );
}

export default Teams;
