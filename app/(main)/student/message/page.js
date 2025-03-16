import React from "react";
import { MessageCircleCode } from "lucide-react";
import Image from "next/image";

const StudentMessagePage = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl text-center text-primary-500 font-medium">
        <MessageCircleCode className="inline-block mr-5" size={32} />
        Create a new Chat
      </h1>
      <Image src="/createChat.jpg" alt="dummy" width={1080} height={720} />
    </div>
  );
};

export default StudentMessagePage;
