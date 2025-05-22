"use client";
import { Button } from "@/components/ui/button";
import useComments from "@/hooks/useComments";
import { useRef } from "react";
import CommentList from "./CommentList";
import ReplyInput from "./ReplyInput";

const CourseComment = () => {
  const lessonId = "6826bc13b354b64db00ec91b";
  const newCommentInputRef = useRef(null);

  const {
    comments,
    replyText,
    setReplyText,
    replyToId,
    setReplyToId,
    loading,
    error,
    showNewCommentInput,
    toggleNewCommentInput,
    handleAddTopLevelComment,
    handleReply,
  } = useComments(lessonId, newCommentInputRef);

  if (loading) return <p className="p-4">Loading comments...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

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

      <CommentList
        comments={comments}
        replyText={replyText}
        setReplyText={setReplyText}
        replyToId={replyToId}
        setReplyToId={setReplyToId}
        handleReply={handleReply}
      />

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
