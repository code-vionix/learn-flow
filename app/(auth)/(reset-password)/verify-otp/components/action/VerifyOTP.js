"use server";

import axios from "axios";

export async function verifyOtp(email, otp) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROUTE_URL}/password/otpverify`,
      { email, otp }
    );

    if (res.status !== 200) {
      return {
        success: false,
        message: res.data.message || "Verification failed",
      };
    }

    return { success: true };
  } catch (error) {
    return { success: false, message: "Network error" };
  }
}
