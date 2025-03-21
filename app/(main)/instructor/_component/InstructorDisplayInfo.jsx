import { Card } from "@/components/ui/card";
import Image from "next/image";

const InstructorDisplayInfo = ({color}) => {
    const displayInfo = [
        {
            id: 1,
            icon: "/icons/users.svg",
            title: '67.1k',
            subtitle: 'Student'
        },
        {
            id: 2,
            icon: "/icons/notebook.svg",
            title: '60k',
            subtitle: 'Certified Instructor'
        }, {
            id: 3,
            icon: "/icons/glob.svg",
            title: '72',
            subtitle: 'Country Language'
        }, {
            id: 4,
            icon: "/icons/CircleWavyCheck.svg",
            title: '99.9%',
            subtitle: 'Success Rate'
        }, {
            id: 5,
            icon: "/icons/stackicon.svg",
            title: '30',
            subtitle: 'Trusted Companies'
        },
    ]
    return (
        <div className={`${color} || bg-primary-100`}>



            <div className="instructor-container h-[128px] grid grid-cols-5 gap-4 items-center">
                {
                    displayInfo?.map(itm => <div key={itm?.id} className="px-4py-2 flex gap-4 items-start">
                        <Image
                            className="w-[40px] h-[40px]"
                            src={itm?.icon}
                            alt={itm?.title}
                            width={100}
                            height={100}
                        />
                        <div>
                            <h1 className="text-[1.8rem] font-bold">{itm?.title}</h1>
                            <p className="text-gray-700">{itm?.subtitle}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default InstructorDisplayInfo;