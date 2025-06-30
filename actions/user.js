"use server";

import { signIn } from "@/auth";

export async function login(form) {
  try {
    const response = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    return response;
  } catch (err) {
    return {
      success: false,
      error: err?.cause?.err?.message || err?.message || "Login failed",
    };
  }
}
