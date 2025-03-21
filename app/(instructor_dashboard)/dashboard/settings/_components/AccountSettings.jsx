"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@radix-ui/react-select";
import { ChevronDown, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const accountSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  title: z.string().max(50, "Title cannot exceed 50 characters"),
  biography: z.string().max(500, "Biography cannot exceed 500 characters"),
});

export default function AccountSettings({ setInstructorInfo }) {
  const [selectedFile, setSelectedFile] = useState([]);
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
    setInstructorInfo((prev) => ({
      ...prev,
      user: data,
    }));

    reset();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));

      setInstructorInfo((prev) => ({
        ...prev,
        user: file,
      }));
      // onFileSelect(file);
    }
  };

  const titleLength = watch("title")?.length || 0;

  return (
    <div className="bg-white p-10 rounded-lg shadow-sm z-[10] relative">
      <div className="flex  gap-6">
        <div className="flex-grow flex-col">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Account Settings
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex gap-5 w-[58.75rem]">
              <div className="flex-1">
                <label className="block text-sm text-gray-900 mb-1.5">
                  First name
                </label>
                <input
                  {...register("firstName")}
                  className="w-full h-12 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                  placeholder="First name"
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
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-[58.75rem] space-y-6">
              <div>
                <label className="block text-sm text-gray-900 mb-1.5">
                  Username
                </label>
                <input
                  {...register("username")}
                  className="w-full h-12 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-900 mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-primary-500">
                    <span className="font-medium">
                 <select className="border-none text-base font-normal outline-none">
                  <option value="+088">+088</option>
                  <option value="+098">+098</option>
                  <option value="+099">+099</option>
                 </select>
                    </span>
            
                  </div>
                  <input
                    {...register("phoneNumber")}
                    className="w-full h-12 pl-20 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                    placeholder="Your Phone number..."
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-900 mb-1.5">
                Title
              </label>
              <div className="relative">
                <input
                  {...register("title")}
                  className="w-full h-12 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500"
                  placeholder="Your title, profession or small biography"
                  maxLength={50}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700">
                  {titleLength}/50
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-900 mb-1.5">
                Biography
              </label>
              <textarea
                {...register("biography")}
                className="w-full h-28 p-4 border border-gray-200 rounded-md focus:outline-none focus:border-primary-500 resize-none"
                placeholder="Your title, profession or small biography"
              />
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

        <div className="w-auto pt-3 absolute top-10 right-4">
          <div className="bg-gray-50 p-8 rounded-lg text-center w-[16.5rem] h-[20rem]">
            <div className="relative mx-auto mb-5">
              <Image
                src={selectedFile}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
                width={192}
                height={192}
              />
              <label
                id="fileUpload"
                className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-3 px-4 flex items-center justify-center gap-2"
              >
                <Upload size={24} />
                <span>Upload Photo</span>
                <input
                  htmlFor="fileUpload"
                  onChange={handleFileChange}
                  type="file"
                  hidden={true}
                />
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Image size should be under 1MB and image ratio needs to be 1:1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
