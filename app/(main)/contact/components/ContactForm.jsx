"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";


import { useForm } from "react-hook-form";
import { z } from "zod";

const accountSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().min(3, "Username must be at least 3 characters"),

  subject: z.string().max(50, "Title cannot exceed 50 characters"),
  message: z.string().max(500, "Biography cannot exceed 500 characters"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    

    reset();
  };

  const titleLength = watch("title")?.length || 0;

  return (
    <div className="w-[648px] p-10 bg-white flex-none ">
      <h1 className="text-2xl mb-3 font-normal text-gray-900">Get In touch </h1>
      <p className="text-base mb-3 text-gray-600 font-normal">
        Feel free contact with us, we love to make new partners & friends
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex gap-5 ">
          <div className="flex-1">
            <label className="block text-sm text-gray-900 mb-1.5">
              First name
            </label>
            <input
              {...register("firstName")}
              className="w-full h-12 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
              placeholder="First name..."
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-900 mb-1.5">
              Last name
            </label>
            <input
              {...register("lastName")}
              className="w-full h-12 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
              placeholder="Last name..."
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className=" space-y-6">
          <div>
            <label className="block text-sm text-gray-900 mb-1.5">Email</label>
            <input
              {...register("email")}
              className="w-full h-12 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
              placeholder="Email Address"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-900 mb-1.5">Subject</label>
          <div className="relative">
            <input
              {...register("subject")}
              className="w-full h-12 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
              placeholder="Subject"
              maxLength={50}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700">
              {titleLength}/50
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-900 mb-1.5">Message</label>
          <textarea
            {...register("message")}
            className="w-full h-28 p-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500 resize-none"
            placeholder="Subject Message"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-3 flex gap-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600"
          >
            Send Message <SendHorizontal/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
