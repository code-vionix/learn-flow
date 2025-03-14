import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { nameToColor } from "@/lib/utils";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Clock, LineChart, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const courses = [
//   {
//     id: 1,
//     title: "Investing In Stocks The Complete Course! (13 Hours)",
//     category: "Health & Fitness",
//     categoryColor: "bg-green-500",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 14.0,
//     originalPrice: 28.0,
//     instructor: "Kevin Gilbert",
//     rating: 5.0,
//     reviews: 357914,
//     students: "265.7K",
//     level: "Beginner",
//     duration: "6 hour",
//   },
//   {
//     id: 2,
//     title: "Google Analytics Certification - Learn How To...",
//     category: "Personal Development",
//     categoryColor: "bg-orange-500",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 14.0,
//     originalPrice: 28.0,
//     instructor: "Kevin Gilbert",
//     rating: 5.0,
//     reviews: 357914,
//     students: "265.7K",
//     level: "Beginner",
//     duration: "6 hour",
//   },
//   {
//     id: 3,
//     title: "Adobe XD for Web Design: Essential Principles",
//     category: "Productivity",
//     categoryColor: "bg-red-500",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 14.0,
//     originalPrice: 28.0,
//     instructor: "Kevin Gilbert",
//     rating: 5.0,
//     reviews: 357914,
//     students: "265.7K",
//     level: "Beginner",
//     duration: "6 hour",
//   },
//   {
//     id: 4,
//     title: "The Python Mega Course: Build 10 Real World Apps",
//     category: "Music",
//     categoryColor: "bg-yellow-500",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 14.0,
//     originalPrice: 28.0,
//     instructor: "Kevin Gilbert",
//     rating: 5.0,
//     reviews: 357914,
//     students: "265.7K",
//     level: "Beginner",
//     duration: "6 hour",
//   },
// ];

export default function FeaturedCourses({ courses }) {
  const FeatusedCourses = courses.slice(0, 4);
  return (
    <section className=" max-w-7xl  mx-auto border border-r-gray-100 w-[1480px] px-10 py-10 ">
      <div className="flex justify-between p-5">
        <h2 className="text-2xl font-bold mb-4">Our feature courses</h2>
        <p className="w-96 text-gray-500 text-sm">
          Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
          varius purus et eleifend porta.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {FeatusedCourses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <Card className="flex  overflow-hidden group">
              {/* Course Image */}
              <Image
                width={400}
                height={320}
                src={course.image}
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
                      backgroundColor: nameToColor(course.category, 0.2),
                    }}
                  >
                    {course.category.toUpperCase()}
                  </span>
                  {/* Price */}
                  <div className="flex items-center space-x-2 text-sm mt-1">
                    <span className="font-bold text-gray-900">
                      ${course.offer_price}
                    </span>
                    <span className="text-gray-400 line-through">
                      ${course.price}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-sm mt-2 mb-1 line-clamp-2 group-hover:text-primary-500 transition-colors duration-300">
                  {course.title}
                </h3>
                <div className="flex justify-between items-center">
                  {/* Instructor */}
                  <div className="flex items-center space-x-2 mt-1">
                    <Avatar>
                      <AvatarImage
                        src={course.instructors[0].image}
                        alt="@shadcn"
                      />
                      <AvatarFallback>{course.instructor}</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-500 text-xs">{course.instructor}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900">
                      {course.rating}
                    </span>
                    <span>({course.reviews.toLocaleString()})</span>
                  </div>
                </div>
                {/* Rating, Students, Level, Duration */}
                <div className="flex items-center justify-between mt-2 text-xs   font-semibold">
                  <span className="flex items-center space-x-1 gap-2 text-primary">
                    <User className="size-5 text-secondary-500" />{" "}
                    <p>
                      {course.students}{" "}
                      <span className="text-gray-500">Students</span>
                    </p>
                  </span>
                  <span className="flex items-center space-x-1 gap-2 ">
                    <LineChart className="size-5 text-red-500" />
                    {course.level}
                  </span>
                  <span className="flex items-center space-x-1 gap-2">
                    <Clock className="size-5 text-success-500" />{" "}
                    {course.duration}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
