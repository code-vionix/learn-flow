"use client"
import Image from "next/image";
import { useSession } from 'next-auth/react';

const AvatarConnector = ({ comment, isNested }) => {
  const {data:session}=useSession()
  console.log(session)
  const replies = comment?.replies ?? [];
  const hasReply = replies.length > 0;
  const showVerticalLine = hasReply;

  const avatarUrl = comment?.author?.imageUrl ||session?.user?.image;
  const authorName = comment?.author?.name || session?.user?.name;

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden relative">
  <Image
    src={avatarUrl}
    alt={authorName}
    fill
    className="object-cover"
  />
</div>

      {/* Vertical connector line if replies exist */}
      {showVerticalLine && (
        <div className="w-[2px] bg-gray-300 mt-1 flex-grow" />
      )}

      {/* Curved connector if nested reply */}
      {isNested && (
        <div
          className="absolute left-[-60px] -top-2 w-[56px] h-8 
                     border-l-[3px] border-b-[3px] 
                     border-gray-300 
                     rounded-bl-full"
        />
      )}
    </div>
  );
};

export default AvatarConnector;
