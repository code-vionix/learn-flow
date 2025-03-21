"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PencilLine, SendHorizontal } from "lucide-react";
import { format } from "date-fns"; // For formatting timestamps
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ChatBoxHeader from "./ChatBoxHeader";
import MessageInput from "./MessageInput";

const currentUserId = "420"; //let this is current user
const MainChatBox = ({ messages }) => {
  const messagesContainerRef = useRef(null); // ref for the message container

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]); // This runs whenever messages change

  return (
    <main
      className={`col-span-2 flex flex-col border bg-white h-[75vh] overflow-hidden`}
    >
      <ChatBoxHeader />

      {/* Chat Messages (Scrollable) */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages?.map((msg, i) => {
          const isSentByCurrentUser = msg.sender.id === currentUserId;
          return (
            <div
              key={msg.id}
              className={cn(
                "flex items-end",
                isSentByCurrentUser ? "justify-end" : "justify-start"
              )}
            >
              {!isSentByCurrentUser && (
                <Avatar className="w-8 h-8 mr-2">
                  <Image
                    width={40}
                    height={40}
                    src={msg.sender.avatar}
                    alt={msg.sender.name}
                    className="w-full h-full rounded-full"
                  />
                </Avatar>
              )}

              <div className="flex flex-col max-w-[70%]">
                <Card
                  className={cn(
                    "p-3",
                    isSentByCurrentUser
                      ? "bg-primary-500 text-white"
                      : "bg-primary-100"
                  )}
                >
                  <CardContent className="p-0">{msg.text}</CardContent>
                </Card>
                <p className="text-xs text-gray-500 mt-1">
                  {format(new Date(msg.timestamp), "hh:mm a")}{" "}
                  {/* Format time */}
                  {isSentByCurrentUser && msg.status === "delivered"
                    ? " ✓✓"
                    : isSentByCurrentUser && msg.status === "read" && "seen"}
                  {/* Show status for sent messages */}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed Message Input */}
      <MessageInput />
    </main>
  );
};

export default MainChatBox;
