"use client";
import { useToast } from "@/hooks/use-toast";
import Whatsapp from "@/public/components/Whatsapp";
import { useUpdateInstructorMutation } from "@/store/api/instructorApi";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const socialSchema = z.object({
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  facebook: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
  youtube: z.string(),
});

export default function SocialProfile({ setInstructorInfo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(socialSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [updateInstructor] = useUpdateInstructorMutation();
  const { toast } = useToast();
  const { data: session } = useSession();
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const updatedInstructorData = {
        id: session?.user?.id,
        website: data?.website,
        facebook: data?.facebook,
        instagram: data?.instagram,
        linkedin: data?.linkedin,
        twitter: data?.twitter,
        youtube: data?.youtube,
      };

      const response = await updateInstructor(updatedInstructorData).unwrap();

      toast({
        title: "Social Links Updated!",
        description:
          "Your instructor social links has been successfully updated.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update social links.",
        variant: "destructive",
      });
      console.error("Error updating social links:", error);
    } finally {
      setIsLoading(false);
    }
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
                <Facebook className="text-primary-500" size={20} />
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
            disabled={isLoading}
            className={`px-6 py-3 font-semibold rounded-md text-white ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary-500 hover:bg-primary-600"
            }`}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
