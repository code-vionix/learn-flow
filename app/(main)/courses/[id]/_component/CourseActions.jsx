"use client";
import { createCheckoutSession } from "@/lib/checkoutSession";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CourseActions({ course }) {
  const [loading, setLoading] = useState(false);
  const courseId = course.id;
  const userId = course.teacherId;
  const amount = course.price;

  const handleBuyNow = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;

      // Call the server action to create a checkout session
      const { sessionId } = await createCheckoutSession(
        userId,
        courseId,
        amount
      );
      // Redirect to Stripe Checkout
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.log("Stripe Checkout Error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button className="w-full bg-[#FF6636] text-white py-4  font-semibold hover:bg-[#e55b30] transition">
        Add To Cart
      </button>
      <button
        className={`w-full bg-[#FFEEE8] text-[#FF6636] py-4 font-semibold hover:bg-[#fcd4c7] transition ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleBuyNow}
        disabled={loading}
      >
        {loading ? "Processing..." : "Buy Now"}
      </button>
      <div className="flex gap-3">
        <button className="flex-1 py-2 px-4 border border-gray-200  text-gray-700 font-medium hover:bg-gray-100 transition">
          Add To Wishlist
        </button>
        <button className="flex-1 py-2 px-4 border border-gray-200  text-gray-700 font-medium hover:bg-gray-100 transition">
          Gift Course
        </button>
      </div>
      <p className="text-sm text-gray-600 text-center">
        Note: All courses have a 30-day money-back guarantee
      </p>
    </div>
  );
}
