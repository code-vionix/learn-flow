"use client";
import { Button } from "@/components/ui/button";
import { useGetUserInfoQuery, useUpdateUserInfoMutation } from "@/store/api/userApi";
import { useEffect, useState } from "react";

const ProfileForm = () => {
  const [titleCount, setTitleCount] = useState("");
  const { data, isLoading, isError } = useGetUserInfoQuery();
  const [updateUserInfo, { isLoading: isUpdating, isError: isUpdateError, isSuccess }] = useUpdateUserInfoMutation()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // username: "",
    email: "",
    // title: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        // username: data.username || "",
        email: data.email || "",
        // title: data.title || ""
      });
    }
  }, [data]);
  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (name === "title" && value.length > 50) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo(formData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load data.</p>;

  return (
    <div className="md:col-span-2 lg:pl-8">
      <h4 className="text-[14px] text-gray-900">Full Name</h4>
      <div className="grid mt-2 md:grid-cols-2 md:gap-6 gap-2">
        <div className="space-y-2">
          <input
            type="text"
            name="firsName"
            id="firsName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500"
          />
        </div>

        <div className="space-y-2">
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h4 className="text-[14px] text-gray-900">Username</h4>
        <div className="space-y-2">
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h4 className="text-[14px] text-gray-900">Email</h4>
        <div className="space-y-2">
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h4 className="text-[14px] text-gray-900">Title</h4>
        <div className="space-x-2 h-[48px] focus-within:border-primary-500 border px-3 flex items-center gap-2">
          <input
            // onChange={handleTitleChange}
            // value={titleCount}
            type="text"
            name="title"
            id="title"
            // value={formData.title}
            placeholder="Your title, profession or small biography"
            className="h-full w-full text-[16px] focus:outline-none bg-transparent text-gray-500"
          />
          {/* <span className="text-gray-400">{titleCount.length}/50</span> */}
          <span className="text-gray-400">0/50</span>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="mt-6 h-[48px] px-8 font-[600] text-[16px] !bg-primary-500"
      >
        Save changes
      </Button>
    </div>
  );
};

export default ProfileForm;
