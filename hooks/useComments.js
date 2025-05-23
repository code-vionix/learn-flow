import axiosInstance from "@/utils/axios"; // তুমি যেই ফাইলে axiosInstance export করেছো
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

const useComments = (lessonId, newCommentInputRef) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyToId, setReplyToId] = useState(null);
  const [showNewCommentInput, setShowNewCommentInput] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const buildParentMap = (commentsList) => {
    const map = {};
    commentsList.forEach(({ id, parentId }) => {
      map[id] = parentId;
    });
    return map;
  };

  const findRootParentId = (parentMap, commentId) => {
    let currentId = commentId;
    while (
      parentMap[currentId] !== null &&
      parentMap[currentId] !== undefined
    ) {
      currentId = parentMap[currentId];
    }
    return currentId;
  };

  const buildFlatComments = useCallback((commentsList) => {
    const map = {};
    const roots = [];
    const parentMap = buildParentMap(commentsList);

    commentsList.forEach((comment) => {
      map[comment.id] = { ...comment, replies: [] };
    });

    commentsList.forEach((comment) => {
      if (comment.parentId === null) {
        roots.push(map[comment.id]);
      } else {
        const rootParentId = findRootParentId(parentMap, comment.id);
        if (map[rootParentId]) {
          map[rootParentId].replies.push(map[comment.id]);
        }
      }
    });

    return roots;
  }, []);

  const fetchComments = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/comments?lessonId=${lessonId}`);
      setComments(buildFlatComments(res.data));
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Error fetching comments"
      );
    } finally {
      setLoading(false);
    }
  }, [lessonId, buildFlatComments]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleAddTopLevelComment = async () => {
    if (!replyText.trim()) return;

    try {
      const res = await axiosInstance.post("/comments", {
        text: replyText,
        lessonId,
        parentId: null,
      });

      const newComment = res.data;
      newComment.replies = [];
      setComments((prev) => [newComment, ...prev]);
      setReplyText("");
      setShowNewCommentInput(false);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Error adding comment"
      );
    }
  };

  const handleReply = async (targetId) => {
    if (!replyText.trim()) return;

    try {
      const parentMap = buildParentMap(
        comments.flatMap((comment) => [comment, ...(comment.replies || [])])
      );
      const rootParentId = findRootParentId(parentMap, targetId);

      const res = await axiosInstance.post("/comments", {
        text: replyText,
        lessonId,
        parentId: rootParentId,
      });

      const newReply = res.data;
      newReply.replies = [];

      setComments((prev) =>
        prev.map((comment) => {
          if (comment.id === rootParentId) {
            return { ...comment, replies: [...comment.replies, newReply] };
          }
          return comment;
        })
      );

      setReplyText("");
      setReplyToId(null);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Error adding reply"
      );
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

  return {
    comments,
    replyText,
    setReplyText,
    replyToId,
    setReplyToId,
    showNewCommentInput,
    toggleNewCommentInput,
    loading,
    error,
    handleAddTopLevelComment,
    handleReply,
  };
};

export default useComments;
