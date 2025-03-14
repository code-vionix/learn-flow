import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

const ChatBoxHeader = () => {
  return (
    <div className="p-4 border-b flex items-center space-x-3">
      <Avatar className="w-10 h-10">
        <Image
          width={40}
          height={40}
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60"
          alt="Jane Cooper"
          className="w-full h-full rounded-ful object-fill"
        />
      </Avatar>
      <div>
        <p className="font-medium">Jane Cooper</p>
        <p className="text-sm text-green-500">Active Now</p>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
