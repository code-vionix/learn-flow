import Image from "next/image"
import { Star, User, MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { config } from "@/config";

export default function InstructorCourseCard({ course }) {
    const { title, imageUrl, price, category, createAt, reviews, enrollments } = course;
    const deleteCourse = async (courseId) => {
        const res = await axios.delete(`${config?.baseUrl}/courses/${courseId}`);
        return res.data;
    };


    return (
        <Card className="max-w-sm !p-0 overflow-hidden rounded-none duration-200 border border-[#ff000000] hover:!border-[#80808039]">
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                />
            </div>
            <CardContent className="!py-4 !px-0">
                <div className="mb-2 px-4">
                    <span className="text-xs py-1 px-2 font-semibold bg-secondary-100 uppercase text-secondary-700">
                        {category?.name}
                    </span>
                </div>
                <h3 className="mb-4 mx-4 text-md font-medium text-gray-900">
                    {title}
                </h3>
                <div className="mb-4 px-4 flex border-t border-b py-4 items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-warning-500 text-warning-500" />
                        <span className="font-medium">{reviews}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <User className="h-5 w-5 text-secondary-700" />
                        <span>{enrollments.length} students</span>
                    </div>
                </div>
                <div className="flex px-4 items-center justify-between">
                    <span className="text-xl font-bold text-warning-500">${price}</span>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="rounded-full p-1 hover:bg-gray-100">
                                <MoreHorizontal className="h-5 w-5 text-gray-400" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="right" align="end"
                            className="w-48 !rounded-none ">
                            <DropdownMenuItem className={'hover:!bg-primary-500 !text-foreground hover:!text-white !px-4 !rounded-none cursor-pointer'}>
                                <Link href={`/dashboard/my-courses/${course?.id}`}>View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="hover:bg-primary-500 text-foreground hover:text-white !px-4 !rounded-none cursor-pointer"
                                onClick={() => console.log("Edit", course)}>
                                Edit Course
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => deleteCourse(course?.id)}
                                className="hover:bg-primary-500 text-foreground hover:text-white !px-4 !rounded-none cursor-pointer"
                            >
                                Delete Course
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardContent>
        </Card>
    )
}
