import { Check } from "lucide-react";
import Image from "next/image";

const features = [
    {
        title: "Teach your students as you want.",
        description:
            "Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus.",
    },
    {
        title: "Chat with your students",
        description:
            "Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id.",
    },
    {
        title: "Manage your course, payment in one place",
        description:
            "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.",
    },
];

const WhyTeaching = () => {
    return (
        <div className="instructor-container text-center lg:text-start  lg:h-[648px] flex items-center justify-center">
            <div className=" h-full flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex items-center justify-center ">
                        <Image
                            src="/images/computer.png"
                            alt="teaching"
                            width={500}
                            height={500}
                            className="w-[32rem]"
                        />
                    </div>

                    <div >
                        <h1 className="text-3xl lg:text-4xl  font-semibold">
                            Why you’ll start teaching on Eduguard
                        </h1>
                        <p className="lg:mt-3 text-md text-gray-700">
                            Praesent congue ornare nibh sed ullamcorper. Proin venenatis
                            tellus non turpis scelerisque, vitae auctor arcu ornare. Cras
                            vitae nulla a purus mollis venenatis.
                        </p>

                        <ul className="mt-6 space-y-4 text-start">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-6">
                                    <div className="bg-success-500 lg:size-10 size-8 rounded-full text-white flex items-center justify-center flex-shrink-0">
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        <p className="mt-2 text-gray-600">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyTeaching;
