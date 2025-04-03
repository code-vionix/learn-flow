"use client";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff, MoveRight } from "lucide-react";
import { useForm } from "react-hook-form";
import SocialSign from "./SocialSign";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    terms: z
      .boolean()
      .refine((val) => val === true, "You must accept the terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

function RegisterForm() {
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-10">
      <h1 className="font-semibold text-5xl text-gray-900">
        Create your account
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="w-full">
          <label htmlFor="" className="  font-normal text-base text-gray-900">
            Full Name
          </label>
          <div className="w-full flex gap-3 mt-2">
            <div>
              <input
                {...register("firstName")}
                type="text"
                className="h-12 w-[315px] p-5  focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("lastName")}
                type="text"
                className="h-12 w-[315px] p-5 focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full ">
          <label htmlFor="" className="font-normal text-base text-gray-900">
            Username
          </label>
          <div className="w-full  gap-3 mt-2">
            <input
              {...register("username")}
              type="text"
              className="h-12 w-full p-5 focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="" className="font-normal text-base text-gray-900">
            Email
          </label>
          <div className="w-full  gap-3  mt-2">
            <input
              {...register("email")}
              type="text"
              className="h-12 w-full p-5 focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex gap-4">
          <div className="">
            <label htmlFor="" className="font-normal text-base text-gray-900">
              Password
            </label>
            <div className=" mt-2 relative">
              <input
                {...register("password")}
                type={showNewPassword ? "text" : "password"}
                className="h-12 w-[315px] p-5 focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
                placeholder="Create Password"
              />
               <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-6 -translate-y-1/2 text-gray-600"
              >
                {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="" className="font-normal text-base text-gray-900">
              {" "}
              Conform Password
            </label>
            <div className=" mt-2">
              <input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                className="h-12 w-[315px] p-5 focus:outline-none focus:border-primary-500 bg-white border-[1px] border-gray-100 font-normal text-base text-gray-500"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-14 -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <input
                {...register("terms")}
                type="checkbox"
                className="h-5 w-5 border-[1px] bg-white border-gray-200"
              />
              <p className="font-normal text-sm text-gray-500">
                I Agree with all of your{" "}
                <span className="text-secondary-500 cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.terms.message}
              </p>
            )}
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

export default RegisterForm;
