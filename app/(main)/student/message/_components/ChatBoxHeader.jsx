import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";
import { Ellipsis, MoreVertical } from "lucide-react";

const ChatBoxHeader = () => {
  return (
    <div className="p-4 border-b flex items-center justify-between">
      {/* Left Side: Avatar and User Info */}
      <div className="flex items-center space-x-3 relative ">
        <Avatar className="w-10 h-10 ">
          <Image
            width={400}
            height={600}
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60"
            alt="Jane Cooper"
            className="w-full h-full rounded-full object-fill"
          />
        </Avatar>

        <div>
          <p className="font-medium">Jane Cooper</p>
          <p className="text-sm text-green-500">Active Now</p>
        </div>
        <div className="absolute left-4 top-8 bg-green-500 border-3 border-white w-[10px] h-[10px] rounded-full"></div>
      </div>

      {/* Right Side: Three-dot Menu Icon */}
      <button className="p-2 bg-gray-200 hover:bg-primary-200 transition">
        <Ellipsis className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default ChatBoxHeader;
