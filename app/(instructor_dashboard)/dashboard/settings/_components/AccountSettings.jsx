"use client";
import { useToast } from "@/hooks/use-toast";
import { useUpdateInstructorMutation } from "@/store/api/instructorApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import { useSession } from "next-auth/react";
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

export default function AccountSettings() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSchema),
  });

  const [updateInstructor] = useUpdateInstructorMutation();
  const { toast } = useToast();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const updatedInstructorData = {
        id: '6811186f3f1d94ec4578d01b',
        firstName: data?.firstName,
        lastName: data?.lastName,
        username: data?.username,
        phoneNumber: data?.phoneNumber,
        title: data?.title,
        biography: data?.biography,
        imageUrl:
          selectedFile ||
          "https://images.unsplash.com/aa-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      };

      const response = await updateInstructor(updatedInstructorData).unwrap();

      toast({
        title: "Profile updated!",
        description: "Your instructor profile has been successfully updated.",
      });

      console.log("Updated Instructor:", response);
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update instructor.",
        variant: "destructive",
      });
      console.error("Error updating instructor:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const titleLength = watch("title")?.length || 0;

  return (
    <div className="bg-white p-10 rounded-lg shadow-sm z-[10] relative">
      <div className="flex gap-6">
        <div className="flex-grow flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-3 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-10">
                  Account Settings
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-900 ">
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

                  <div className="space-y-2">
                    <label className="block text-sm text-gray-900 ">
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

                <div className="space-y-2">
                  <label className="block text-sm text-gray-900 ">
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

                <div className="space-y-2">
                  <label className="block text-sm text-gray-900 ">
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

              <div className="pt-3">
                <div className="bg-gray-50 p-6 text-center w-[16.5rem] h-[20rem]">
                  <div className="relative mx-auto w-full h-[13rem] overflow-hidden rounded">
                    {selectedFile && (
                      <Image
                        src={selectedFile}
                        alt="Profile"
                        className="object-cover w-full h-full"
                        width={128}
                        height={128}
                      />
                    )}
                    <label
                      htmlFor="fileUpload"
                      className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 px-4 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Upload size={20} />
                      <span className="text-sm">Upload Photo</span>
                      <input
                        id="fileUpload"
                        onChange={handleFileChange}
                        type="file"
                        hidden
                      />
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Image size should be under 1MB and image ratio needs to be 1:1
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-900 mb-1.5">Title</label>
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
                disabled={isLoading}
                className={`px-6 py-3 font-semibold rounded-md text-white ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary-500 hover:bg-primary-600"
                  }`}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
