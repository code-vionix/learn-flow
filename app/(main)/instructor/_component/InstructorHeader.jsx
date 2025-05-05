import Image from "next/image";
import HeaderImage from '@/public/images/header_img.png'
const InstructorHeader = () => {
    return (
        <header className=" bg-white overflow-hidden">
            <div className="instructor-container lg:h-[640px] ">
                <div className="grid lg:h-full text-center lg:text-start grid-flow-col-reverse lg:grid-cols-2">
                    <div className=" flex  flex-col justify-center ">
                        <h1 className="lg:-mt-[10px] text-3xl sm:text-4xl lg:text-6xl font-semibold">Become an Instructor</h1>
                        <p className="text-lg lg:text-2xl text-[#4E5566] lg:pr-8 lg:mt-3 ">
                            Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.
                        </p>

                        <button className="text-center mx-auto lg:mx-0 bg-primary-500 duration-300 mt-6 hover:bg-primary-400 text-white font-regular px-2 py-2 md:px-4 md:py-3 lg:w-[191px] text-base lg:text-[18px]">GET START</button>
                    </div>
                    <div className="mt-[-20px] flex items-end justify-end">
                        <Image
                            className="lg:w-[648px] mt-[110px]"
                            src={HeaderImage}
                            alt="instructor_header"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default InstructorHeader;