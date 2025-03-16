import Image from "next/image";

const Instructor_header = () => {
    return (
        <header className="h-[648px] ">
            <div className="grid h-full grid-cols-2">
                <div className=" flex  flex-col justify-center ">
                    <h1 className="-mt-[10px] text-[60px] font-[600]">Become an Instructor</h1>
                    <p className="text-[1.5rem] text-[#4E5566] pr-8 mt-3 ">
                        Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.
                    </p>

                    <button className="bg-primary-500 duration-300 mt-6 hover:bg-primary-400 text-white font-regular px-4 py-3 w-[191px] text-[20px]">GET START</button>
                </div>
                <div className=" flex items-end justify-end">
                    <Image
                        className="w-[648px] mt-[110px]"
                        src="/images/header_img.png"
                        alt="instructor_header"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </header>
    );
};

export default Instructor_header;