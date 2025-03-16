import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PurchaseItem = ({ course, date }) => {
    return (
        <div>
            <Link href={`#`} className="flex p-4 duration-300 lg:pr-20 hover:bg-orange-50 md:flex-row flex-col gap-4">
                <div className="md:w-32 w-full h-[12rem] md:h-24 relative flex-shrink-0">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover rounded-md w-full"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 fill-primary-400 text-primary-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-sm text-gray-500">({course.reviews} Reviews)</span>
                    </div>
                    <h3 className="font-medium">{course.title}</h3>
                    <div className="flex justify-between">
                        <div className="text-sm text-gray-500 mt-1">Course by: {course.instructor}</div>
                        <div className="text-orange-500  font-medium mt-2">${course.price}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PurchaseItem;