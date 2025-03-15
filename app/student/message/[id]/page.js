import React from "react";
import MainChatBox from "../_components/MainChatBox";
import { messages } from "@/data/message";

const ChatBoxPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      {" "}
      <MainChatBox messages={messages} />
    </div>
  );
};

export default ChatBoxPage;
