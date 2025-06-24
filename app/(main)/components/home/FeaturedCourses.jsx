'use client'
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { nameToColor } from "@/lib/utils";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Clock, LineChart, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SingleStarRating } from "../shared/SingleStarRating";
export default function FeaturedCourses({ courses }) {
  const FeatusedCourses = courses?.slice(0, 4);

  return (
    <section className="primary-container bg-white mt-[-130px] ">
      <div className="flex justify-between p-5">
        <h2 className="text-2xl font-bold mb-4">Our feature courses</h2>
        <p className="w-96 text-gray-500 text-sm">
          Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
          varius purus et eleifend porta.
        </p>
      </div>
      {
        courses?.length === 0
          ? (
            <div className="h-full flex flex-col items-center justify-center ">
              <Image src="/images/no-item-found.png" alt="No courses available" width={500} height={300} className="mx-auto opacity-[0.5]" />
              <h3 className="text-center text-gray-600 text-xl">
                No courses available at the moment
              </h3>
            </div>)
          : (<div className="grid md:grid-cols-2 gap-6">
            {FeatusedCourses?.map((course) => {
              const averageRating =
                course?.reviews.length > 0
                  ? course?.reviews.reduce((acc, r) => acc + r.rating, 0) / course?.reviews.length
                  : 0;

              return (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <Card className="flex border hover:border-transparent border-gray-200 hover:shadow-lg duration-200 overflow-hidden group">
                    {/* Course Image */}
                    <Image
                      width={400}
                      height={320}
                      src={course?.thumbnail}
                      alt={course.title}
                      className="w-40 h-32 object-cover"
                    />

                    {/* Course Details */}
                    <div className="p-4 flex-1">
                      <div className="flex items-center justify-between text-gray-900">
                        {/* Category */}
                        <span
                          className=" px-2 py-1  text-xs"
                          style={{
                            backgroundColor: nameToColor(course?.category?.name, 0.2),
                          }}
                        >
                          {course?.category?.name.toUpperCase()}
                        </span>
                        {/* Price */}
                        <div className="flex items-center space-x-2 text-sm mt-1">
                          <span className="font-bold text-gray-900">
                            ${course?.price}
                          </span>
                          <span className="text-gray-400 line-through">
                            ${course?.discountPrice && course?.discountPrice}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-sm mt-2 mb-1 line-clamp-2 group-hover:text-primary-500 transition-colors duration-300">
                        {course?.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        {/* Instructor */}
                        <div className="flex items-center space-x-2 mt-1">
                          <Avatar>
                            <AvatarImage
                              src={course?.CourseInstructor[0]?.imageUrl ? course?.CourseInstructor[0]?.imageUrl : `https://avatar.iran.liara.run/public/boy`}
                              alt={course?.CourseInstructor[0]?.firstName || "Instructor Avatar"}
                            />
                            <AvatarFallback>instructor</AvatarFallback>
                          </Avatar>
                          <p className="text-gray-500 text-xs">{course?.CourseInstructor[0]?.firstName} {course?.CourseInstructor[0]?.lastName}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                          <span className="font-medium text-gray-900">
                            {averageRating.toFixed(1)}
                          </span>
                          <span>({course?.reviews.length})</span>
                        </div>
                      </div>
                      {/* Rating, Students, Level, Duration */}
                      <div className="flex items-center justify-between mt-2 text-xs   font-semibold">
                        <span className="flex items-center space-x-1 gap-2 text-primary">
                          <User className="size-5 text-secondary-500" />{" "}
                          <p>
                            {course?.enrollments.length}{" "}
                            <span className="text-gray-500">Students</span>
                          </p>
                        </span>
                        <span className="flex items-center space-x-1 gap-2 ">
                          <LineChart className="size-5 text-red-500" />
                          {course?.level}
                        </span>
                        <span className="flex items-center space-x-1 gap-2">
                          <Clock className="size-5 text-success-500" />{" "}
                          {course?.duration}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>)
      }


    </section>
  );
}
