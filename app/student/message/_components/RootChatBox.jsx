"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { Search } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "Jane Cooper",
    text: "Yeah sure, tell me zafor",
    time: "just now",
    type: "received",
  },
  {
    id: 2,
    sender: "Zafor",
    text: "I only have a small doubt about your lecture. can you give me some time for this?",
    time: "now",
    type: "sent",
  },
  { id: 3, sender: "Zafor", text: "I'm Zafor", time: "now", type: "sent" },
  {
    id: 4,
    sender: "Zafor",
    text: "Hello, Good Evening.",
    time: "now",
    type: "sent",
  },
  {
    id: 5,
    sender: "Jane Cooper",
    text: "Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 😊",
    time: "today",
    type: "received",
  },
];

const RootChatBox = () => {
  const [input, setInput] = useState("");

  return (
    <div className="grid grid-cols-3 gap-x-5 z-50 mt-5">
      {/* Sidebar */}
      <aside className="border p-4 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Message</h2>
          <Button className="mt-2 text-secondary-500 bg-secondary-100 hover:bg-secondary-200">
            + Compose
          </Button>
        </div>
        <div className="relative">
          <Input placeholder="Search" className="mt-4 px-8 py-3" />
          <Search className="absolute top-[6px] opacity-70 left-2" />
        </div>

        <ScrollArea className="mt-4 space-y-2">
          {messages.slice(0, 5).map((msg) => (
            <div
              key={msg.id}
              className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-200"
            >
              <Avatar className="w-10 h-10" />
              <div>
                <p className="font-medium">{msg.sender}</p>
                <p className="text-sm text-gray-500 truncate w-40">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </aside>

      {/* Chat Window */}
      <main className="col-span-2 flex flex-col border bg-white">
        <div className="p-4 border-b flex items-center space-x-3">
          <Avatar className="w-10 h-10" />
          <div>
            <p className="font-medium">Jane Cooper</p>
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
                  "p-3 mt-5 max-w-xs",
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
      </main>
    </div>
  );
};

export default RootChatBox;
