"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Eye, EyeOff } from "lucide-react"; // Add EyeOff
import Link from "next/link";
import { useState } from "react";
import { resetPassword } from "./action/resetPassword";

export function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = localStorage.getItem("reset_email");
    if (!email) {
      setError("Email not found in local storage.");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const result = await resetPassword(email, password);
    setLoading(false);

    if (!result.success) {
      setError(result.message || "Failed to reset password.");
    } else {
      alert("Password reset successful.");
      window.location.href = "/login"; // Redirect to login
    }
  };

  return (
    <div className="flex flex-1 md:w-3/5 items-center justify-center p-6 md:p-16 bg-white">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Reset your password</h1>
          <p className="text-muted-foreground">
            Create a new password for your account
          </p>
        </div>
        <div className="space-y-4">
          {/* New Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="new-password">
              New Password
            </label>
            <div className="relative">
              <Input
                id="new-password"
                placeholder="New password"
                type={showPassword ? "text" : "password"}
                className="h-11 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-11 w-11 text-muted-foreground"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Password must be at least 8 characters long and include a mix of
              letters, numbers, and symbols.
            </p>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="confirm-password">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                placeholder="Confirm password"
                type={showConfirm ? "text" : "password"}
                className="h-11 pr-10"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-11 w-11 text-muted-foreground"
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-11 bg-red-500 hover:bg-red-600"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Back to sign in */}
          <div className="text-center">
            <Link href="/" className="text-sm text-red-500 hover:underline">
              Back to sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
