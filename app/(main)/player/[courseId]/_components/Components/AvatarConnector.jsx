import Image from "next/image";

const AvatarConnector = ({ comment, isNested }) => {
  const replies = comment?.replies || [];
  const hasReply = replies.length > 0;

  const firstReply = replies[0];
  const secondLevel = (firstReply?.replies || []).length > 0;

  const height = hasReply ? "100%" : "0px";
  const avatarUrl = comment?.author?.imageUrl || "/placeholder.svg";
  const authorName = `${comment?.author?.name || "User"}'s avatar`;

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image
          src={avatarUrl}
          alt={authorName}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      {hasReply && (
        <div className="w-[2px] bg-gray-300 mt-1" style={{ height }} />
      )}
      {isNested && (
        <div
          className="absolute left-[-60px] -top-2 w-[56px] h-8 
                     bg-transparent 
                     border-l-[3px] border-b-[3px] 
                     border-gray-300 
                     rounded-bl-full"
        />
      )}
    </div>
  );
};

export default AvatarConnector;
