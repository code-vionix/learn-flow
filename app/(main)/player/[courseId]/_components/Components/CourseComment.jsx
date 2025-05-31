"use client";
import { useRef } from "react";
import useComments from "@/hooks/useComments";
import CommentList from "./CommentList";
import ReplyInput from "./ReplyInput";

const CourseComment = ({ lessonId }) => {
  const newCommentInputRef = useRef(null);

  const {
    comments,
    newCommentText, // ⬅️ for top-level
    setNewCommentText,
    replyText,       // ⬅️ for replies
    setReplyText,
    replyToId,
    setReplyToId,
    loading,
    error,
    handleAddTopLevelComment,
    handleReply,
  } = useComments(lessonId, newCommentInputRef);

  if (loading) return <p className="p-4">Loading comments...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Comments ({comments?.length})
      </h2>

      {/* ✅ Fixed: Use newCommentText for top-level input */}
      <div ref={newCommentInputRef} className="mb-6">
        <ReplyInput
          replyText={newCommentText}
          setReplyText={setNewCommentText}
          onReply={handleAddTopLevelComment}
        />
      </div>

      <CommentList
        comments={comments}
        replyText={replyText}
        setReplyText={setReplyText}
        replyToId={replyToId}
        setReplyToId={setReplyToId}
        handleReply={handleReply}
      />
    </div>
  );
};

export default CourseComment;
