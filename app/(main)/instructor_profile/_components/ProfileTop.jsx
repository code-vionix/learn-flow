import playCircle from "@/public/PlayCircle.png";
import { Crown, Globe, Star, Users } from "lucide-react";
import Image from "next/image";
import SocialIcon from "../../components/shared/social_icon";

export default function ProfileTop() {
  return (
    <div className=" bg-white ">
      <div className=" mx-auto px-2   bg-white ">
        <div className="border-b border-primary-200">
          <div className="py-3 px-4 md:px-6 flex flex-col md:flex-row items-center mx-auto text-center md:text-start md:items-center lg:justify-between">
            <div className="flex flex-col md:flex-row items-center mx-auto md:items-center gap-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile picture"
                width={200}
                height={200}
                className="rounded-full w-36 h-36 object-cover"
              />

              <div className="flex-1">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h2 className="text-2xl font-semibold">Vako Shvili</h2>
                  <span className="flex items-center gap-1 bg-primary-100 text-primary-600 text-xs font-bold px-2 py-1 rounded-md">
                    <Crown className="w-4 h-4" /> Top Rated
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-5">
                  Web Designer & Best-Selling Instructor
                </p>
                <div className="flex flex-wrap items-center justify-center  gap-4 mt-2 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500" size={16} />{" "}
                    <span className="font-semibold">4.8</span> (134,633 reviews)
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />{" "}
                    <span className="font-semibold">430,117</span> students
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={playCircle}
                      alt="Play Circle"
                      width={20}
                      height={20}
                    />
                    <span className="font-semibold">7</span> courses
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center  md:items-end gap-3 mt-3 md:mt-0">
              <a
                href="https://www.vakoshvili.com"
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <Globe size={16} className="text-end" /> www.vakoshvili.com
              </a>
              <SocialIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
