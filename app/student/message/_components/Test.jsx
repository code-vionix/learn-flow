"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

const dummyResponse = {
  status: "success",
  messages: [
    {
      id: "65f2d1b0a9b14c0012a3e123",
      sender: {
        id: "user_123",
        name: "Jane Cooper",
        avatar: "https://example.com/avatars/jane.jpg",
      },
      receiver: {
        id: "user_456",
        name: "Zafor",
      },
      text: "Yeah sure, tell me Zafor",
      timestamp: "2025-03-14T10:15:30Z",
      type: "received",
      status: "read",
    },
    {
      id: "65f2d1b0a9b14c0012a3e124",
      sender: {
        id: "user_456",
        name: "Zafor",
        avatar: "https://example.com/avatars/zafor.jpg",
      },
      receiver: {
        id: "user_123",
        name: "Jane Cooper",
      },
      text: "I only have a small doubt about your lecture. Can you give me some time for this?",
      timestamp: "2025-03-14T10:16:00Z",
      type: "sent",
      status: "delivered",
    },
  ],
};

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setMessages(dummyResponse.messages);
  }, []);

  const handleUserClick = (userId) => {
    const userMessages = dummyResponse.messages.filter(
      (msg) => msg.sender.id === userId || msg.receiver.id === userId
    );
    setSelectedUser(userId);
    setMessages(userMessages);
  };

  return (
    <div className="grid grid-cols-3 bg-gray-100">
      {/* Sidebar */}
      <aside className="border-r p-4 bg-white">
        <h2 className="font-semibold text-lg">Message</h2>
        <Button className="w-full mt-2">+ Compose</Button>
        <Input placeholder="Search" className="mt-4" />
        <ScrollArea className="mt-4 space-y-2">
          {dummyResponse.messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleUserClick(msg.sender.id)}
            >
              <Avatar className="w-10 h-10" src={msg.sender.avatar} />
              <div>
                <p className="font-medium">{msg.sender.name}</p>
                <p className="text-sm text-gray-500 truncate w-40">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </aside>

      {/* Chat Window */}
      <main className="col-span-2 flex flex-col bg-white">
        {selectedUser ? (
          <>
            <div className="p-4 border-b flex items-center space-x-3">
              <Avatar className="w-10 h-10" src={messages[0]?.sender.avatar} />
              <div>
                <p className="font-medium">{messages[0]?.sender.name}</p>
                <p className="text-sm text-green-500">Active Now</p>
              </div>
            </div>
            <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.type === "sent" ? "justify-end" : "justify-start"
                  )}
                >
                  <Card
                    className={cn(
                      "p-3 max-w-xs",
                      msg.type === "sent"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200"
                    )}
                  >
                    <CardContent>{msg.text}</CardContent>
                  </Card>
                </div>
              ))}
            </ScrollArea>
            <div className="p-4 border-t flex items-center space-x-2">
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
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </main>
    </div>
  );
}
