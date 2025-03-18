import MainChatBox from "@/app/(main)/student/message/_components/MainChatBox";
import { messages } from "@/data/message";
import React from "react";

const ChatBoxPageInDashboard = async (params) => {
  const { id } = await params;
  return (
    <div>
      {" "}
      <MainChatBox isDash={true} messages={messages} />
    </div>
  );
};

export default ChatBoxPageInDashboard;
