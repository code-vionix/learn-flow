"use client";

import { useToast } from "@/hooks/use-toast";
import { useAddNewContactMutation } from "@/store/api/contactApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { set } from "date-fns";
import { Check, SendHorizontal } from "lucide-react";
import { useState } from "react";


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
  const [updateInstructor] = useAddNewContactMutation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await updateInstructor(data).unwrap();
      // console.log('check : : : ', data, response);

      if (response?.data) {
        setLoading(false);
        toast({
          title: "Your message has been sent!",
          description: "We will get back to you soon.",
        });

        setShowSuccessMessage(true); // Show success message
        setTimeout(() => setShowSuccessMessage(false), 4000); // Hide after 4 sec
        reset(); // Reset form
      }
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
    }
  };

  const titleLength = watch("title")?.length || 0;

  return (
    <div className="md:w-[40.5rem] md:p-10 bg-white md:flex-none ">
      <h1 className="text-2xl mb-3 font-normal text-gray-900">Get In touch </h1>
      <p className="text-base mb-3 text-gray-600 font-normal">
        Feel free contact with us, we love to make new partners & friends
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
        <div className="flex gap-5 ">
          <div className="md:flex-1">
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
        {showSuccessMessage && (
          <div className="flex items-center gap-2 text-sm text-success-500">
            <Check /> Your message has been sent
          </div>
        )}

        <div className="flex items-center justify-center lg:block">
          <button
            disabled={loading}
            type="submit"
            className="px-6 py-3 flex gap-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600"
          >
            {loading ? "Sending..." : "Send Message"} <SendHorizontal />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
