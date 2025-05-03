'use client';
import { Button } from "@/components/ui/button";
import { useGetUserProfileQuery } from "@/store/api/userApi";
import { useState } from "react";

const ProfileForm = () => {
    const [titleCount, setTitleCount] = useState('')
    const {data, isLoading, isError} = useGetUserProfileQuery()

    console.log(data);

    const handleTitleChange = (e) => {
        const input = e.target.value;
        if (input.length <= 50) {
            setTitleCount(input);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile changes saved successfully!");
    }

    return (
        <div className="md:col-span-2 lg:pl-8">
            <h4 className="text-[14px] text-gray-900">Full Name</h4>
            <div className="grid mt-2 md:grid-cols-2 md:gap-6 gap-2">
                <div className="space-y-2">
                    <input type="text" name="firsName" id="firsName" placeholder="First name"
                        className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500" />
                </div>

                <div className="space-y-2">
                    <input type="text" name="lastName" id="lastName" placeholder="Last name"
                        className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500" />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <h4 className="text-[14px] text-gray-900">Username</h4>
                <div className="space-y-2">
                    <input type="text" name="username" id="username" placeholder="Enter your username"
                        className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500" />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <h4 className="text-[14px] text-gray-900">Email</h4>
                <div className="space-y-2">
                    <input type="text" name="email" id="email" placeholder="Email address"
                        className="h-[48px] w-full text-[16px] px-3 focus:outline-primary-400 border bg-transparent text-gray-500" />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <h4 className="text-[14px] text-gray-900">Title</h4>
                <div className="space-x-2 h-[48px] focus-within:border-primary-500 border px-3 flex items-center gap-2">
                    <input
                        onChange={handleTitleChange}
                        value={titleCount}
                        type="text" name="title" id="title" placeholder="Your title, profession or small biography"
                        className="h-full w-full text-[16px] focus:outline-none bg-transparent text-gray-500" />
                    <span className="text-gray-400">{titleCount.length}/50</span>
                </div>
            </div>

            <Button onClick={handleSubmit} className="mt-6 h-[48px] px-8 font-[600] text-[16px] !bg-primary-500">Save changes</Button>
        </div>
    );
};

export default ProfileForm;