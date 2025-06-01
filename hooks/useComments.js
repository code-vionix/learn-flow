import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_ROUTE_URL;

const useComments = (lessonId, newCommentInputRef) => {
  const { data: session } = useSession();

  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState(""); // ⬅️ for top-level comments
  const [replyText, setReplyText] = useState("");            // ⬅️ for replies
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
    while (parentMap[currentId] !== null && parentMap[currentId] !== undefined) {
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
      const res = await fetchWithAuth(`${API_BASE_URL}/comments?lessonId=${lessonId}`);
      const data = await res.json();
      setComments(buildFlatComments(data));
    } catch (err) {
      setError(err.message || "Error fetching comments");
    } finally {
      setLoading(false);
    }
  }, [lessonId, buildFlatComments]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleAddTopLevelComment = async () => {
    if (!newCommentText.trim()) return;

    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/comments`, {
        method: "POST",
        body: JSON.stringify({
          text: newCommentText,
          lessonId,
          parentId: null,
        }),
      });

      const newComment = await res.json();
      newComment.replies = [];
      setComments((prev) => [newComment, ...prev]);
      setNewCommentText(""); // clear input
      setShowNewCommentInput(false);
    } catch (err) {
      setError(err.message || "Error adding comment");
    }
  };

  const handleReply = async (targetId) => {
    if (!replyText.trim()) return;

    try {
      const parentMap = buildParentMap(
        comments.flatMap((comment) => [comment, ...(comment.replies || [])])
      );
      const rootParentId = findRootParentId(parentMap, targetId);

      const res = await fetchWithAuth(`${API_BASE_URL}/comments`, {
        method: "POST",
        body: JSON.stringify({
          text: replyText,
          lessonId,
          parentId: rootParentId,
        }),
      });

      const newReply = await res.json();
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
      setError(err.message || "Error adding reply");
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
    newCommentText,
    setNewCommentText,
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
