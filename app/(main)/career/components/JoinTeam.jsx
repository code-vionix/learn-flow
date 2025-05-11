import unionImage from "@/public/images/Union.png";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

function JoinTeam() {
  return (
    <div className="bg-gray-50 ">
      <div className="primary-container grid lg:grid-cols-2 lg:py-16 gap-3 lg:gap-28 ">
        <Image
          src={unionImage}
          className="md:flex-1"
          alt=""
          width={648}
          height={600}
        />
        <div className="lg:w-[33.5rem] text-center lg:text-start flex flex-col gap-5 flex-1 ">
          <div className="flex flex-col gap-3 ">
            <h1 className="font-semibold text-3xl lg:text-4xl text-gray-900">
              Why you will join our team
            </h1>
            <p className="font-normal text-base text-gray-700">
              Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis.
              Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula
              mi ut, vestibulum odio.{" "}
            </p>
          </div>
          <div className="flex justify-between text-start items-start p-8 bg-white gap-2  ">
            <div>
              {" "}
              <CircleCheck
                fill="rgba(35, 189, 51, 1)"
                size={40}
                className=" text-white  "
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-base text-gray-900">
                Ut justo ligula, vehicula sed egestas vel.
              </h3>
              <p className="font-normal text-sm text-gray-600">
                Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                felis. Vestibulum non consectetur tortor. Morbi at orci vehicula,
                vehicula mi ut, vestibulum odio.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-between text-start items-start p-8 bg-white gap-2  ">
            <div>
              {" "}
              <CircleCheck
                fill="rgba(35, 189, 51, 1)"
                size={40}
                className=" text-white  "
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-base text-gray-900">
                Aenean vitae leo leo praesent ullamcorper ac.
              </h3>
              <p className="font-normal text-sm text-gray-600">
                Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default JoinTeam;
