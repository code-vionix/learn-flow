"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Whatsapp from "@/public/components/Whatsapp";

const socialSchema = z.object({
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  facebook: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
  youtube: z.string(),
});

export default function SocialProfile({setInstructorInfo}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(socialSchema),
  });

  const onSubmit = (data) => {
    setInstructorInfo((prev)=>({
      ...prev,
      socialLink:data
    }))

    reset()
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-sm mt-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Social Profile
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm text-gray-900 mb-1.5">
            Personal Website
          </label>
          <div className="relative z-10">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500">
              <Globe size={20} />
            </div>
            <input
              {...register("website")}
              className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
              placeholder="Personal website or portfolio url..."
            />
          </div>
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <label className="block text-sm text-gray-900 mb-1.5">
              Facebook
            </label>
            <div className="relative z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 ">
                <Facebook   className="text-primary-500" size={20} />
              </div>
              <input
                {...register("facebook")}
                className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-900 mb-1.5">
              Instagram
            </label>
            <div className="relative z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500">
                <Instagram className="text-primary-500" size={20} />
              </div>
              <input
                {...register("instagram")}
                className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-900 mb-1.5">
              LinkedIn
            </label>
            <div className="relative z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500">
                <Linkedin size={20} />
              </div>
              <input
                {...register("linkedin")}
                className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-900 mb-1.5">
              Twitter
            </label>
            <div className="relative z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500">
                <Twitter size={20} />
              </div>
              <input
                {...register("twitter")}
                className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Username"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-900 mb-1.5">
              Whatsapp
            </label>
            <div className="relative z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500">
                <Whatsapp />
              </div>
              <input
                {...register("whatsapp")}
                className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-900 mb-1.5">
              Youtube
            </label>
            <div className="relative z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500">
                <Youtube size={20} />
              </div>
              <input
                {...register("youtube")}
                className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Username"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
