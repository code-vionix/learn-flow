"use server";
import axios from "axios";
import { auth } from "@/auth";

export const createCheckoutSession = async (userId, courseId, amount) => {
  const session = await auth();
console.log('sd',session);

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROUTE_URL}/course/checkoutSession`,
      {
        userId,
        courseId,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error("Stripe Checkout Error (Server):", error.message);
    throw new Error("Payment failed. Please try again.");
  }
};
