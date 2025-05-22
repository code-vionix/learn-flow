"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { sendResetEmail } from "./actions/sendResetEmail";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter(); //  Initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("email", email);

    const result = await sendResetEmail(formData);
    setLoading(false);

    if (result.success) {
      localStorage.setItem("reset_email", email); // ✅ Save email in localStorage
      router.push("/verify-otp"); // ✅ Redirect to verify-otp page
    } else {
      setMessage({
        type: "error",
        text: result.message,
      });
    }
  };

  return (
    <div className="flex flex-1 md:w-3/5 items-center justify-center p-6 md:p-16 bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight">
            Forgot your password?
          </h1>
          <p className="text-muted-foreground text-base">
            Enter your email address and we&apos;ll send you a verification code
            to reset your password.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                placeholder="Email address..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 pl-10 border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 transition-all"
              />
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-red-500 hover:bg-red-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {loading ? "Sending..." : "Send Reset Code"}
            <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
          </Button>

          {message && message.type === "error" && (
            <p className="text-sm text-center text-red-500">{message.text}</p>
          )}

          <div className="text-center pt-4">
            <Link
              href="/"
              className="text-sm text-red-500 hover:text-red-700 hover:underline flex items-center justify-center gap-1 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to sign in
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            Need help? Contact our support team at{" "}
            <a
              href="mailto:support@e-tutor.com"
              className="text-red-500 hover:underline"
            >
              support@e-tutor.com
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
