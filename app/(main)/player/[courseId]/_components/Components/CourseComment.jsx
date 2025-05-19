"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import CommentItem from "./CommentItem";
import ReplyInput from "./ReplyInput";

const CourseComment = () => {
  const lessonId = "6826bc13b354b64db00ec91b"; // Use your lessonId here

  const [comments, setComments] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyToId, setReplyToId] = useState(null);
  const [showNewCommentInput, setShowNewCommentInput] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const newCommentInputRef = useRef(null);

  // Build nested comments tree from flat list
  const buildNestedComments = (comments) => {
    const map = {};
    const roots = [];

    comments.forEach((comment) => {
      map[comment.id] = { ...comment, replies: [] };
    });

    comments.forEach((comment) => {
      if (comment.parentId) {
        if (map[comment.parentId]) {
          map[comment.parentId].replies.push(map[comment.id]);
        } else {
          // If parent not found, treat as root (optional)
          roots.push(map[comment.id]);
        }
      } else {
        roots.push(map[comment.id]);
      }
    });

    return roots;
  };

  // Fetch comments from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3000/api/v1/comments?lessonId=${lessonId}`
        );
        if (!res.ok) throw new Error("Failed to fetch comments");
        const data = await res.json();

        const nestedComments = buildNestedComments(data);
        setComments(nestedComments);
      } catch (err) {
        setError(err.message || "Error fetching comments");
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [lessonId]);

  // Add new top-level comment
  const handleAddTopLevelComment = async () => {
    if (!replyText.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/api/v1/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: replyText,
          lessonId,
          parentId: null,
        }),
      });

      if (!res.ok) throw new Error("Failed to add comment");

      const newComment = await res.json();
      newComment.replies = [];

      setComments((prev) => [newComment, ...prev]);
      setReplyText("");
      setShowNewCommentInput(false);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error adding comment");
    }
  };

  // Add reply to comment with id = targetId
  const handleReply = async (targetId) => {
    if (!replyText.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/api/v1/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: replyText,
          lessonId,
          parentId: targetId,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add reply");
      }

      const newReply = await res.json();
      newReply.replies = [];

      // Recursively add reply to nested comments tree
      const addReplyToTarget = (list) =>
        list.map((comment) => {
          if (comment.id === targetId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply],
            };
          }
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: addReplyToTarget(comment.replies),
            };
          }
          return comment;
        });

      const updatedComments = addReplyToTarget(comments);
      setComments(updatedComments);
      setReplyText("");
      setReplyToId(null);
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to add reply");
    }
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
