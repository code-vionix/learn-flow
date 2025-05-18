"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import CommentItem from "./CommentItem";
import ReplyInput from "./ReplyInput";

// Dummy session to simulate current logged-in user
const dummySession = {
  user: {
    id: "user_demo_123",
    name: "DemoUser",
    image: "https://xsgames.co/randomusers/assets/avatars/male/75.jpg",
    email: "demo@example.com",
  },
};

// Initial comments
const initialComments = [
  {
    id: 1,
    author: {
      id: "user1",
      name: "User1",
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    },
    text: "Nulla pellentesque leo vitae lorem hendrerit...",
    timeAgo: "2 hours ago",
    replies: [
      {
        id: 27,
        author: {
          id: "user2",
          name: "User2",
          avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
        },
        text: "This is a reply to the first comment.",
        timeAgo: "1 hour ago",
        replies: [],
      },
    ],
  },
];

const CourseComment = () => {
  const user = dummySession.user;
  const [comments, setComments] = useState(initialComments);
  const [replyText, setReplyText] = useState("");
  const [replyToId, setReplyToId] = useState(null);
  const [showNewCommentInput, setShowNewCommentInput] = useState(false);
  const newCommentInputRef = useRef(null);

  const handleAddTopLevelComment = () => {
    if (!replyText.trim()) return;

    const newComment = {
      id: Date.now(),
      author: {
        id: user.id,
        name: user.name,
        avatar: user.image,
      },
      text: replyText,
      timeAgo: "Just now",
      replies: [],
    };

    console.log("📝 New Top-Level Comment:", newComment);

    setComments([...comments, newComment]);
    setReplyText("");
    setShowNewCommentInput(false);
  };

  const handleReply = (targetId) => {
    if (!replyText.trim()) return;

    const newReply = {
      id: Date.now(),
      author: {
        id: user.id,
        name: user.name,
        avatar: user.image,
      },
      text: replyText,
      timeAgo: "Just now",
      replies: [],
    };

    console.log("💬 New Reply to comment ID", targetId, ":", newReply);

    const findTopLevelParentId = (id, list, parent = null) => {
      for (const comment of list) {
        if (comment.id === id) return parent ? parent.id : comment.id;
        const found = findTopLevelParentId(id, comment.replies, comment);
        if (found) return found;
      }
      return null;
    };

    const topLevelId = findTopLevelParentId(targetId, comments);
    const replyTargetId = topLevelId ?? targetId;

    const addReplyToTarget = (list) =>
      list.map((comment) => {
        if (comment.id === replyTargetId) {
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        return {
          ...comment,
          replies: addReplyToTarget(comment.replies),
        };
      });

    const updatedComments = addReplyToTarget(comments);

    setComments(updatedComments);
    setReplyText("");
    setReplyToId(null);
  };

  const toggleNewCommentInput = () => {
    setShowNewCommentInput((prev) => {
      const newState = !prev;
      if (!prev) {
        setTimeout(() => {
          newCommentInputRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
      return newState;
    });
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Comments</h2>
        <Button
          onClick={toggleNewCommentInput}
          className="bg-primary-500 hover:bg-primary-600 rounded"
        >
          Write Comment
        </Button>
      </div>

      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          replyText={replyText}
          setReplyText={setReplyText}
          replyToId={replyToId}
          setReplyToId={setReplyToId}
          handleReply={handleReply}
          isNested={false}
        />
      ))}

      {showNewCommentInput && (
        <div ref={newCommentInputRef} className="mt-6 ml-12">
          <ReplyInput
            replyText={replyText}
            setReplyText={setReplyText}
            onReply={handleAddTopLevelComment}
          />
        </div>
      )}
    </div>
  );
};

export default CourseComment;
