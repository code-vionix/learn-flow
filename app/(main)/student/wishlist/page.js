"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
// import { Heart, Star } from "lucide-react";
// import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    rating: 4.8,
    reviews: 144,
    instructors: ["Harry Potter", "John Wick"],
    originalPrice: 49.0,
    discountedPrice: 37.0,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    rating: 4.8,
    reviews: 144,
    instructors: ["Nobody"],
    originalPrice: 29.99,
    discountedPrice: 24.0,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Angular - The Complete Guide (2021 Edition)",
    rating: 4.7,
    reviews: 144,
    instructors: ["Kevin Gilbert"],
    originalPrice: 19.99,
    discountedPrice: 13.0,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
  },
];

export default function Wishlist() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Wishlist ({courses.length})
        </h1>

        <Table className="border">
          <TableHeader>
            <TableRow className="text-lg">
              <TableHead className="p-3">Course</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="pl-24">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="pl-4">
                  <div className="flex items-center gap-4 ">
                    <div className="relative h-[120px] w-48  overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        height={120}
                        width={240}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="mb-5 flex items-center  text-gray-500">
                        <div className="flex text-md  items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">
                            {course.rating}
                          </span>
                          <span className="ml-1">
                            ({course.reviews} Reviews)
                          </span>
                        </div>
                      </div>
                      <h2 className="text-xl font-medium text-gray-900 mt-[-12px]">
                        {course.title}
                      </h2>
                      <div className="flex mt-6 space-x-2 text-md">
                        <p className=" text-gray-500">Course by:</p>
                        <p className=" font-medium text-gray-500">
                          {course.instructors.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-xl font-medium text-primary-500">
                    ${course.discountedPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-xl text-gray-500 line-through">
                    ${course.originalPrice.toFixed(2)}
                  </span>
                </TableCell>
                <TableCell className="pr-4">
                  <div className="ml-5 flex flex-col justify-center items-end gap-6 min-w-[200px]">
                    <div className="flex space-x-3">
                      <button className="inline-flex items-center px-10 py-3 border border-transparent text-md font-medium  shadow-sm text-black bg-gray-100 ">
                        Buy Now
                      </button>
                      <button className="inline-flex items-center px-10 py-3 border border-transparent text-md font-medium  text-white bg-orange-500 hover:bg-orange-600 ">
                        Add To Cart
                      </button>
                      <button className="inline-flex items-center p-2 border-1 bg-primary-100 border-gray-300  text-red-600 ">
                        <Heart className="h-5 w-8" />
                      </button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
