import { ArrowRight } from "lucide-react";
import Image from "next/image";

const InstructorCard = () => {
  return (
    <div className="w-full flex justify-center  h-[671px] bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-4 justify-between  w-[1320px] mt-20 ">
        {/* Left Section */}
        <div className=" bg-gradient-to-r from-[#CC522B] to-[#FF6636] hidden sm:flex justify-between h-[270px] w-full lg:w-1/2 ">
          <div className="w-3/5 flex flex-col items-start justify-center gap-4 px-5">
            <h3 className="text-2xl font-semibold leading-[36px] lg:leading-[48px] text-white">
              Become an instructor
            </h3>
            <p className="text-white text-sm">
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <div>
              <button className="w-[196px] h-[48px] bg-white text-[#FF6636] py-2 px-4 lg:py-3 lg:px-5 text-sm flex items-center justify-center">
                Start Teaching
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
          <div className="relative w-2/5 h-full overflow-hidden">
            <Image
              src="/images/download.png"
              alt="Promotion Image"
              width={1200}
              height={1250}
              className="h-full w-full object-cover mt-5"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col h-[270px] p-10  bg-white  shadow-md gap-4">
          <h3 className="text-gray-900 text-2xl lg:text-3xl  font-semibold leading-8 lg:leading-10 tracking-tight text-center lg:text-left">
            Your teaching & earning steps
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {[
              "Apply to become an instructor",
              "Complete teacher training",
              "Create your first course",
              "Start earning money",
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex justify-center items-center w-12 h-12 lg:w-14 lg:h-14 bg-indigo-50 rounded-full">
                  <span className="text-indigo-500 text-lg lg:text-xl font-semibold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-gray-900 text-sm lg:text-base font-normal leading-6">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
