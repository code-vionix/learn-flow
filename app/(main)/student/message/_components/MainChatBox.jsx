"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PencilLine, SendHorizontal } from "lucide-react";
import { format } from "date-fns"; // For formatting timestamps
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ChatBoxHeader from "./ChatBoxHeader";

const currentUserId = "420"; //let this is current user
const MainChatBox = ({ messages, isDash = false }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <main
      className={`col-span-2 flex flex-col border bg-white ${
        isDash ? "h-[75vh]" : "h-[600px]"
      }  overflow-hidden`}
    >
      <ChatBoxHeader />

      {/* Chat Messages (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
        {/* Scroll to bottom ref */}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Message Input */}
      <div className="p-4 border-t flex items-center space-x-2 bg-white relative">
        <PencilLine
          className="absolute left-8 top-8 text-primary-500"
          size={18}
        />
        <Input
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-8 py-6"
        />
        <Button className="bg-primary-500 text-white hover:bg-primary-600 py-6">
          Send
          <SendHorizontal className="ml-1" size={20} />
        </Button>
      </div>
    </main>
  );
};

export default MainChatBox;
