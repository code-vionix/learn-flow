"use client";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Send, Search } from "lucide-react";
import { format } from "date-fns"; // For formatting timestamps

const currentUserId = "user_456"; // Assuming the logged-in user is "Zafor"

const messages = [
  {
    id: "65f2d1b0a9b14c0012a3e123",
    sender: {
      id: "user_123",
      name: "Jane Cooper",
      avatar: "https://example.com/avatars/jane.jpg",
    },
    receiver: { id: "user_456", name: "Zafor" },
    text: "Yeah sure, tellah sure, tellah sure, tellah sure, tell me Zafor",
    timestamp: "2025-03-14T10:15:30Z",
    status: "read",
  },
  {
    id: "65f2d1b0a9b14c0012a3e124",
    sender: {
      id: "user_456",
      name: "Zafor",
      avatar: "https://example.com/avatars/zafor.jpg",
    },
    receiver: { id: "user_123", name: "Jane Cooper" },
    text: "I only have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lectubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lectubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lectubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time for this?",
    timestamp: "2025-03-14T10:16:00Z",
    status: "delivered",
  },
];

const RootChatBox = () => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="grid grid-cols-3 gap-x-5 mt-5 ">
      {/* Sidebar */}
      <aside className="border p-4 bg-white h-full">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Messages</h2>
          <Button className="mt-2 text-secondary-500 bg-secondary-100 hover:bg-secondary-200">
            + Compose
          </Button>
        </div>
        <div className="relative">
          <Input placeholder="Search" className="mt-4 px-8 py-3" />
          <Search className="absolute top-[12px] opacity-70 left-2" />
        </div>

        {/* Scrollable Sidebar */}
        <div className="mt-4 space-y-2 overflow-y-auto h-[80%]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200"
            >
              <Avatar className="w-10 h-10">
                <img
                  src={msg.sender.avatar}
                  alt={msg.sender.name}
                  className="w-full h-full rounded-full"
                />
              </Avatar>
              <div>
                <p className="font-medium">{msg.sender.name}</p>
                <p className="text-sm text-gray-500 truncate w-40">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Window */}
      <main className="col-span-2 flex flex-col border bg-white h-[600px] overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <img
              src="https://example.com/avatars/jane.jpg"
              alt="Jane Cooper"
              className="w-full h-full rounded-full"
            />
          </Avatar>
          <div>
            <p className="font-medium">Jane Cooper</p>
            <p className="text-sm text-green-500">Active Now</p>
          </div>
        </div>

        {/* Chat Messages (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => {
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
                    <img
                      src={msg.sender.avatar}
                      alt={msg.sender.name}
                      className="w-full h-full rounded-full"
                    />
                  </Avatar>
                )}

                <div className="flex flex-col max-w-xs">
                  <Card
                    className={cn(
                      "p-3 break-words",
                      isSentByCurrentUser
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200"
                    )}
                  >
                    <CardContent className="p-0">{msg.text}</CardContent>
                  </Card>
                  <p className="text-xs text-gray-500 mt-1">
                    {format(new Date(msg.timestamp), "hh:mm a")}{" "}
                    {/* Format time */}
                    {isSentByCurrentUser &&
                      msg.status === "delivered" &&
                      " ✓"}{" "}
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
        <div className="p-4 border-t flex items-center space-x-2 bg-white">
          <Input
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button>
            Send <Send className="ml-1" size={16} />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default RootChatBox;
