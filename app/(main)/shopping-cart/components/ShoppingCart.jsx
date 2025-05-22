"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import PaymentCard from "./PaymentCard";
import PaymentCourseCard from "./PaymentCourseCard";

function ShoppingCart() {
  const [wishlist, setWishlist] = useState([]);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [hydrated, setHydrated] = useState(false); // Track if client has hydrated

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

  useEffect(() => {
    // Load wishlist from local storage (example)
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
    setHydrated(true); // Mark as hydrated once the client runs
  }, []);

  // Calculate Subtotal
  const subtotal = courses.reduce(
    (sum, course) => sum + course.originalPrice,
    0
  );

  // Discount Percentage
  const discountPercentage = 8;
  const taxes = 17.99;

  // Calculate Discount Amount
  const discountAmount = couponApplied
    ? (subtotal * discountPercentage) / 100
    : 0;

  // Calculate Total Price After Discount
  const totalPrice = subtotal + taxes - discountAmount;

  function handleOnPayment(value) {
    console.log(value.toFixed(2));
  }

  if (!hydrated) {
    // Render a fallback or null to avoid initial mismatch
    return null;
  }

  return (
    <div className="px-2 py-2 sm:px-8 md:px-16 lg:px-32 2xl:72 2xl:py-20 mx-auto  ">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-start">
        Shopping Cart ({courses.length})
      </h1>
      <div className=" w-full flex flex-col items-center justify-center xl:flex-row xl:items-start  lg:gap-5">
        <Table className="border">
          <TableHeader>
            <TableRow className="w-full text-lg p-2 flex items-center justify-between  lg:gap-10 ">
              <TableHead className="w-2/3 flex justify-evenly ">
                Course
              </TableHead>
              <TableHead className="hidden lg:block ">Price</TableHead>
              <TableHead className=" hidden lg:block ">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {courses?.map((course, i) => (
              <PaymentCourseCard
                key={course?.id || i}
                course={course}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            ))}
          </TableBody>
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
