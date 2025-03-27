'use client'



import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heart, Star, XCircle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import PaymentCard from "./PaymentCard";

function ShoppingCart() {

  const [wishlist, setWishlist] = useState([]);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState("");


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


   // Calculate Subtotal
   const subtotal = courses.reduce((sum, course) => sum + course.originalPrice, 0);

   // Discount Percentage
   const discountPercentage = 8;
   const taxes =  17.99;
 
   // Calculate Discount Amount
   const discountAmount = couponApplied ? subtotal * discountPercentage / 100 : 0;
 
   // Calculate Total Price After Discount
   const totalPrice = (subtotal + taxes) - discountAmount


   function handleOnPayment(value){
console.log(value.toFixed(2));

   }

   

   const handleWishlist = (id) => {
     setWishlist((prev) =>
       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
     );
   };

  return (
    
      <div className="px-72 py-20 mx-auto ">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Shopping Cart ({courses.length})
        </h1>
        <div className=" w-full flex gap-5">
          <Table className="border">
        
            <TableHeader>
              <TableRow className="text-lg">
                <TableHead className="p-3">Course</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="pl-24">Action</TableHead>
              </TableRow>
            </TableHeader>
            {courses.map((course) => (
            <TableBody key={course.id} className='relative' >
            <XCircle className="absolute top-[4.4rem] left-2" color={`${wishlist.includes(course.id) ? "rgba(140, 148, 163, 1)" : "rgba(29, 32, 38, 1)"}`}/>
              
                <TableRow  className='ml-3 '>
                    
                  <TableCell className="pl-4">
                    <div className="flex items-center gap-4 ml-8">
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
                        <button onClick={() => handleWishlist(course.id)} className={`inline-flex items-center px-10 py-3 border border-transparent text-md font-medium  text-primary-500 ${wishlist.includes(course.id) ? "bg-white" : "bg-primary-100"}  hover:bg-primary-200 `}>
                          Move To Wishlist
                        </button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
             
            </TableBody>
             ))}
          </Table>
          <PaymentCard 
          setCouponApplied={setCouponApplied}
          setCouponCode={setCouponCode}
          couponCode={couponCode}
          couponApplied={couponApplied}
          subtotal={subtotal}
          discountPercentage={discountPercentage}
          discountAmount={discountAmount}
          taxes={taxes}
          totalPrice={totalPrice}
          onPayment={handleOnPayment}
          />
        </div>
      </div>
    
  );
}

export default ShoppingCart;
