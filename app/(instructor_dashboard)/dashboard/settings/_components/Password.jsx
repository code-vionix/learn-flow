"use client";

import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/lib/auth";
import { useUpdateUserPasswordMutation } from "@/store/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(4, "Password must be at least 6 characters"),
    newPassword: z.string().min(4, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(4, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

function Password({ setInstructorInfo }) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { accessToken, session } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const [updateUserPassword] = useUpdateUserPasswordMutation();
  // const onPasswordSubmit = async (data) => {
  //   setInstructorInfo(prev => ({
  //     ...prev,
  //     password: data
  //   }));

  //   try {
  //     const res = await updateUserPassword({
  //       currentPassword: data?.currentPassword,
  //       newPassword: data?.newPassword,
  //     }).unwrap();
  //
  //   } catch (err) {
  //     console.error('Error updating password:', err);
  //   }

  //   reset()

  // }
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const onPasswordSubmit = async (data) => {
    setLoading(true);
    setInstructorInfo((prev) => ({
      ...prev,
      password: data,
    }));

    try {
      const res = await updateUserPassword({
        currentPassword: data?.currentPassword,
        newPassword: data?.newPassword,
      }).unwrap();
      setLoading(false);
      toast({
        title: "Password Updated",
        description: "Your password has been changed successfully.",
        variant: "default", // can also be 'success' if you created that variant
      });

      reset();
    } catch (err) {
      setLoading(false);
      toast({
        title: "Update Failed",
        description:
          err?.data?.message || "Something went wrong while updating password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Change password
      </h2>

      <form onSubmit={handleSubmit(onPasswordSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm text-gray-900 mb-1.5">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              {...register("currentPassword")}
              className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showCurrentPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.currentPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.currentPassword.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-900 mb-1.5">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              {...register("newPassword")}
              className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-900 mb-1.5">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
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

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 font-semibold rounded-md text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary-500 hover:bg-primary-600"
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Password;
