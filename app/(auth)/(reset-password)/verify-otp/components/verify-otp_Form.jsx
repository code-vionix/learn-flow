"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { verifyOtp } from "./action/VerifyOTP";
import { useRouter } from "next/navigation";

export function OtpVerificationForm() {
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOtpChange = (e, i) => {
    const val = e.target.value;

    if (/^\d?$/.test(val)) {
      const newOtp = [...otpValues];
      newOtp[i] = val;
      setOtpValues(newOtp);

      if (val && i < 5) {
        const nextInput = document.getElementById(`otp-${i + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(paste)) {
      const newOtp = paste.split("");
      setOtpValues(newOtp);

      // Focus last input
      const lastInput = document.getElementById(`otp-5`);
      lastInput?.focus();

      e.preventDefault();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace") {
      if (otpValues[i] === "" && i > 0) {
        const prevInput = document.getElementById(`otp-${i - 1}`);
        prevInput?.focus();
        e.preventDefault();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = localStorage.getItem("reset_email");
    if (!email) {
      setError("Email not found in local storage.");
      return;
    }

    const otp = otpValues.join("");
    if (otp.length !== 6) {
      setError("Please enter a 6-digit code.");
      return;
    }

    setLoading(true);
    try {
      const result = await verifyOtp(email, otp);
      if (result.success) {
        router.push("/change-password");
      } else {
        setError(result.message || "Verification failed");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 md:w-3/5 items-center justify-center p-6 md:p-16 bg-white">
      <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Verify your email</h1>
          <p className="text-muted-foreground">
            We've sent a verification code to your email address. Please enter the code below.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="otp-0">
              Verification Code
            </label>
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <Input
                  key={i}
                  id={`otp-${i}`}
                  className="h-12 w-12 text-center text-lg"
                  maxLength={1}
                  value={otpValues[i]}
                  onChange={(e) => handleOtpChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={i === 0 ? handlePaste : undefined}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                />
              ))}
            </div>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button
            type="submit"
            className="w-full h-11 bg-red-500 hover:bg-red-600"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Didn't receive a code?</p>
            <Button variant="link" className="text-red-500 hover:text-red-600">
              Resend Code
            </Button>
            <div>
              <Link href="/" className="text-sm text-red-500 hover:underline">
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
