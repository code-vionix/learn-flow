'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {useState} from 'react'

const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters")
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  })

function Password({setInstructorInfo}) {

   const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm({
      resolver: zodResolver(passwordSchema)
    })
  
    const onPasswordSubmit = (data) => {
     setInstructorInfo(prev=>({
      ...prev,
      password:data
     }))

     reset()
     
    }

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
          className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-orange-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
  )
}

export default Password