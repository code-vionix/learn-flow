"use server";
import axios from "axios";

export const createCheckoutSession = async (userId, courseId, amount) => {
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTNkZTg5NTI5ZTYzNTMwYWZhMWM4OCIsInJvbGUiOiJTVFVERU5UIiwiaWF0IjoxNzQ3NTk1OTMwLCJleHAiOjE3NTUzNzE5MzB9.XG-x6hCIa43mSDwgyvrijEglSg38jZB9Nj0bHNjH5ag`,
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
