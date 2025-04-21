"use client";
import { Eye, EyeOff, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SignUpForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      // Save tokens to localStorage
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      // Redirect to dashboard
      router.push("/login");
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-4xl"
      onSubmit={handleSubmit}
    >
      {/* Full Name */}
      <div>
        <label className="font-normal text-base text-gray-900">Full Name</label>
        <div className="flex gap-3 mt-2">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="h-12 w-full p-5 bg-white border border-gray-200 text-gray-700"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="h-12 w-full p-5 bg-white border border-gray-200 text-gray-700"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      {/* Username */}
      <div>
        <label className="font-normal text-base text-gray-900">Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="h-12 w-full p-5 mt-2 bg-white border border-gray-200 text-gray-700"
          placeholder="Username"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="font-normal text-base text-gray-900">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="h-12 w-full p-5 mt-2 bg-white border border-gray-200 text-gray-700"
          placeholder="Email address"
          required
        />
      </div>

      {/* Password Fields */}
      <div className="flex gap-4">
        {/* Password */}
        <div className="relative w-full">
          <label className="font-normal text-base text-gray-900">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className="h-12 w-full p-5 mt-2 bg-white border border-gray-200 text-gray-700"
            placeholder="Create Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[52px] text-gray-600"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative w-full">
          <label className="font-normal text-base text-gray-900">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="h-12 w-full p-5 mt-2 bg-white border border-gray-200 text-gray-700"
            placeholder="Confirm Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-[52px] text-gray-600"
          >
            {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Submit + Terms */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <input type="checkbox" required className="h-5 w-5" />
          <p className="text-sm text-gray-600">
            I agree with all of your{" "}
            <span className="text-secondary-500 cursor-pointer">
              Terms & Conditions
            </span>
          </p>
        </div>
        <Button className="bg-primary-500 px-6 rounded-none py-6 font-semibold text-base hover:bg-primary-600">
          Create Account <MoveRight size={30} color="white" />
        </Button>
      </div>
      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">SIGN IN WITH</span>
        </div>
      </div>
    </form>
  );
}
