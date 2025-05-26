"use server";
import { auth } from "@/auth";
import axios from "axios";

export const createCheckoutSession = async (userId, courseId, amount) => {
  const session = await auth();

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
    return data;
  } catch (error) {
    console.error("Stripe Checkout Error (Server):", error.message);
    throw new Error("Payment failed. Please try again.");
  }
};
