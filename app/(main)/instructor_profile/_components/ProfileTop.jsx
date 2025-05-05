"use client";
import playCircle from "@/public/PlayCircle.png";
import { Crown, Globe, Star, Users } from "lucide-react";
import Image from "next/image";
import SocialIcon from "../../components/shared/social_icon";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfile } from "@/app/api/instructor";
import { useGetInstructorByIdQuery } from "@/store/api/instructorApi";

export default function ProfileTop() {
  const { data: session } = useSession();
  const { data, isLoading, isError } = useGetInstructorByIdQuery(session?.user?.id || "");
  const profile = data?.data?.instructor;

  const totalReviews = data?.data?.totalReviews || 0;
  const possibleRatings = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];

  const reviews = Array.from({ length: totalReviews }, () => ({
    rating: possibleRatings[Math.floor(Math.random() * possibleRatings.length)],
  }));



  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-t-transparent border-primary-500 rounded-full animate-spin mb-2"></div>
        <span className="text-lg">Loading</span>
      </div>
    );

  if (isError) return <div className="p-4 text-red-500">{isError}</div>;



  return (
    <div className="h-40  relative">
      <div className="container mx-auto px-8 absolute top-3/4  left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border-b border-primary-200">
          <div className="py-6 px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Image
                src={profile?.user?.imageUrl || 'https://randomuser.me/api/portraits/men/32.jpg'}
                alt="Profile picture"
                width={200}
                height={200}
                className="rounded-full w-36 h-36 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-semibold">{profile?.user?.firstName} {profile?.user?.lastName}</h2>
                  <span className="flex items-center gap-1 bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded-md">
                    <Crown className="w-4 h-4" /> Top Rated
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-5">
                  {profile?.bio ?? 'N/A'}
                </p>
                <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500" size={16} />{" "}
                    <span className="font-semibold">{totalReviews}</span> ({data?.data?.totalReviews} reviews)
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />{" "}
                    <span className="font-semibold">{data?.data?.totalEnrollments}</span> students
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={playCircle}
                      alt="Play Circle"
                      width={20}
                      height={20}
                    />
                    <span className="font-semibold">{profile?.Course.length}</span> courses
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-3 mt-3 md:mt-0">
              <a
                href="https://www.vakoshvili.com"
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <Globe size={16} className="text-end" />{profile?.website}
              </a>
              <SocialIcon profile={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
