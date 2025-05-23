import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ReplyInput = ({ replyText, setReplyText, onReply }) => (
  <div className="flex gap-3 items-center mt-3">
    <div className="p-2 flex items-center border w-full rounded">
      <MessageCircle size={23} strokeWidth={1} />
      <input
        type="text"
        placeholder="Write your reply"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        className="!h-full px-2 flex-1 focus:outline-none bg-transparent"
      />
    </div>
    <Button
      onClick={onReply}
      className="bg-orange-500 hover:bg-orange-600 px-6 h-[40px]"
    >
      Post
    </Button>
  </div>
);

export default ReplyInput;
