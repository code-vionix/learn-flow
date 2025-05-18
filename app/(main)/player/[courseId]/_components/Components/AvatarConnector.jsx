import Image from "next/image";

const AvatarConnector = ({ comment, isNested }) => {
  const hasReply = comment.replies.length > 0;
  const firstReply = comment.replies?.[0];
  const secondLevel = firstReply?.replies?.length > 0;

  const height = hasReply ? "100%" : "0px";

  return (
    <div className="relative flex flex-col items-center">
      <Image
        src={comment.author.avatar || "/placeholder.svg"}
        alt={`${comment.author.name}'s avatar`}
        width={40}
        height={40}
        className="rounded-full"
      />
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
