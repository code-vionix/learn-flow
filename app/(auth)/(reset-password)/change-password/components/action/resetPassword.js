"use server";

import axios from "axios";

export async function resetPassword(email, password) {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROUTE_URL}/password/change`,
      { email, password }
    );

    return { success: true };
  } catch (error) {
    const message =
      error.response?.data?.message || "Error resetting password.";
    return { success: false, message };
  }
}
