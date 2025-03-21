"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PencilLine, SendHorizontal } from "lucide-react";
import { useState } from "react";

const MessageInput = () => {
  const [input, setInput] = useState("");
  return (
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
  );
};

export default MessageInput;
