import { timeAgo } from "@/utils/timeAgo";
import { MessageCircle } from "lucide-react";
import AvatarConnector from "./AvatarConnector";
import ReplyInput from "./ReplyInput";

const CommentItem = ({
  comment,
  replyText,
  setReplyText,
  replyToId,
  setReplyToId,
  handleReply,
  isNested,
}) => {
  const getUserFullName = (author) =>
    author
      ? [author.firstName, author.lastName].filter(Boolean).join(" ")
      : "Unknown";

  return (
    <div className={`flex space-x-4 mt-6 ${isNested ? "ml-6" : ""}`}>
      <AvatarConnector comment={comment} isNested={isNested} />
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">{getUserFullName(comment.author)}</span>
          <span className="text-gray-500 text-sm">
            • {timeAgo(comment.createdAt)}
          </span>
        </div>
        <p className="text-gray-700 mb-2">{comment.text}</p>
        <button
          onClick={() => setReplyToId(comment.id)}
          className={`flex items-center gap-1.5 ${
            replyToId === comment.id ? "text-primary-500" : "text-[#8C94A3]"
          } text hover:text-orange-600`}
        >
          <MessageCircle size={20} strokeWidth={1} />
          <span className="text-sm font-medium">REPLY</span>
        </button>

        {replyToId === comment.id && (
          <ReplyInput
            replyText={replyText}
            setReplyText={setReplyText}
            onReply={() => handleReply(comment.id)}
          />
        )}

        {Array.isArray(comment.replies) &&
          comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              replyText={replyText}
              setReplyText={setReplyText}
              replyToId={replyToId}
              setReplyToId={setReplyToId}
              handleReply={handleReply}
              isNested={true}
            />
          ))}
      </div>
    </div>
  );
};

export default CommentItem;
