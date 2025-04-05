"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SocialSign from "./SocialSign";

const signInSchema = z
  .object({
    identifier: z.string().min(3, "Username or email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    remember: z.boolean().optional(),
  })
  .refine(
    (data) => {
      return data.identifier.includes("@")
        ? z.string().email().safeParse(data.identifier).success
        : true;
    },
    {
      message: "Invalid email format",
      path: ["identifier"],
    }
  );

function LoginForm() {
 
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signInSchema) });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-10">
      <h1 className="font-semibold text-5xl text-gray-900">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="w-[648px]">
          <label htmlFor="" className="font-normal text-base text-gray-900">
            Email
          </label>
          <div className="w-full  gap-3  mt-2">
            <input
              {...register("identifier")}
              type="text"
              className="h-12 w-full p-5 focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
              placeholder=" Username or email address..."
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identifier.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full  gap-4">
          <label htmlFor="" className="font-normal text-base text-gray-900">
            Password
          </label>
          <div className=" mt-2">
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className="h-12 w-full p-5 focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
                placeholder=" Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-6 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <input
              {...register("remember")}
              type="checkbox"
              className="h-5 w-5 border-[1px] bg-white border-gray-200"
            />
            <p className="font-normal text-sm text-gray-500">Remember me</p>
          </div>

          <Button className="bg-primary-500 px-6 py-6 font-semibold text-base hover:bg-primary-600">
            Create Account <MoveRight size={30} color="white" />
          </Button>
        </div>
      </form>
      <SocialSign />
    </div>
  );
}

export default LoginForm;
