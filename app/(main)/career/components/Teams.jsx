import Image from "next/image";

import careerImage from "@/public/images/career.png";

function Teams() {
  return (
    <div className="lg:!h-[530px] primary-container grid lg:grid-cols-2 relative lg:py-10 py-5  gap-3 lg:gap-28 ">
      <div className=" flex flex-col justify-center gap-6 ">
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
        className="xl:flex-1 absolute right-0 bottom-0"
        alt=""
        width={648}
        height={600}
      />
    </div>
  );
}

export default Teams;
