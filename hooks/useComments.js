// import { useCallback, useEffect, useState } from "react";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_ROUTE_URL;

// const useComments = (lessonId, newCommentInputRef) => {
//   const [comments, setComments] = useState([]);
//   const [replyText, setReplyText] = useState("");
//   const [replyToId, setReplyToId] = useState(null);
//   const [showNewCommentInput, setShowNewCommentInput] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Convert flat comments list to nested tree
//   const buildNestedComments = useCallback((comments) => {
//     const map = {};
//     const roots = [];

//     comments.forEach((comment) => {
//       map[comment.id] = { ...comment, replies: [] };
//     });

//     comments.forEach((comment) => {
//       if (comment.parentId && map[comment.parentId]) {
//         map[comment.parentId].replies.push(map[comment.id]);
//       } else {
//         roots.push(map[comment.id]);
//       }
//     });

//     return roots;
//   }, []);

//   // Fetch all comments from API and build nested structure
//   const fetchComments = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${API_BASE_URL}/comments?lessonId=${lessonId}`);
//       if (!res.ok) throw new Error("Failed to fetch comments");

//       const data = await res.json();
//       setComments(buildNestedComments(data));
//     } catch (err) {
//       setError(err.message || "Error fetching comments");
//     } finally {
//       setLoading(false);
//     }
//   }, [lessonId, buildNestedComments]);

//   useEffect(() => {
//     fetchComments();
//   }, [fetchComments]);

//   // Add a new top-level comment
//   const handleAddTopLevelComment = async () => {
//     if (!replyText.trim()) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/comments`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: replyText, lessonId, parentId: null }),
//       });

//       if (!res.ok) throw new Error("Failed to add comment");

//       const newComment = await res.json();
//       newComment.replies = [];
//       setComments((prev) => [newComment, ...prev]);
//       setReplyText("");
//       setShowNewCommentInput(false);
//     } catch (err) {
//       setError(err.message || "Error adding comment");
//     }
//   };

//   // Add a reply to a specific comment
//   const handleReply = async (targetId) => {
//     if (!replyText.trim()) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/comments`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: replyText, lessonId, parentId: targetId }),
//       });

//       if (!res.ok) throw new Error("Failed to add reply");

//       const newReply = await res.json();
//       newReply.replies = [];

//       const addReplyToTarget = (list) =>
//         list.map((comment) => {
//           if (comment.id === targetId) {
//             return {
//               ...comment,
//               replies: [...(comment.replies || []), newReply],
//             };
//           }
//           if (comment.replies?.length) {
//             return {
//               ...comment,
//               replies: addReplyToTarget(comment.replies),
//             };
//           }
//           return comment;
//         });

//       setComments((prev) => addReplyToTarget(prev));
//       setReplyText("");
//       setReplyToId(null);
//     } catch (err) {
//       setError(err.message || "Error adding reply");
//     }
//   };

//   // Toggle the input field for a new top-level comment
//   const toggleNewCommentInput = () => {
//     setShowNewCommentInput((prev) => {
//       const newState = !prev;
//       if (!prev) {
//         setTimeout(() => {
//           newCommentInputRef.current?.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }, 100);
//       }
//       return newState;
//     });
//   };

//   return {
//     comments,
//     replyText,
//     setReplyText,
//     replyToId,
//     setReplyToId,
//     showNewCommentInput,
//     toggleNewCommentInput,
//     loading,
//     error,
//     handleAddTopLevelComment,
//     handleReply,
//   };
// };

// export default useComments;
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_ROUTE_URL;

const useComments = (lessonId, newCommentInputRef) => {
  const { data: session } = useSession();
  console.log(session);
  const [comments, setComments] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyToId, setReplyToId] = useState(null);
  const [showNewCommentInput, setShowNewCommentInput] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // একটা ম্যাপ তৈরি করে commentId থেকে তার parentId পাবে
  const buildParentMap = (commentsList) => {
    const map = {};
    commentsList.forEach(({ id, parentId }) => {
      map[id] = parentId;
    });
    return map;
  };

  // একটা কমেন্ট আইডি থেকে মূল parentId খুঁজে বের করবে (যেটার parentId null)
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

  // Flat structure বানাবে, সব replies root parent comment এর replies হবে, nested নয়
  const buildFlatComments = useCallback((commentsList) => {
    const map = {};
    const roots = [];
    const parentMap = buildParentMap(commentsList);

    // প্রথমে সব কমেন্টকে id ম্যাপে রাখো
    commentsList.forEach((comment) => {
      map[comment.id] = { ...comment, replies: [] };
    });

    commentsList.forEach((comment) => {
      if (comment.parentId === null) {
        // মেইন কমেন্ট root এ রাখো
        roots.push(map[comment.id]);
      } else {
        // root parent আইডি বের করো
        const rootParentId = findRootParentId(parentMap, comment.id);
        if (map[rootParentId]) {
          // সব রিপ্লাই root parent এর replies হিসেবে যোগ করো
          map[rootParentId].replies.push(map[comment.id]);
        }
      }
    });

    return roots;
  }, []);

  // API থেকে কমেন্টস ফেচ করবে এবং structure বানাবে
  const fetchComments = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/comments?lessonId=${lessonId}`);
      if (!res.ok) throw new Error("Failed to fetch comments");

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

  // নতুন মেইন কমেন্ট যোগ করা
  const handleAddTopLevelComment = async () => {
    if (!replyText.trim()) return;

    try {
      const res = await fetch(`${API_BASE_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: replyText, lessonId, parentId: null }),
      });

      if (!res.ok) throw new Error("Failed to add comment");

      const newComment = await res.json();
      newComment.replies = [];
      setComments((prev) => [newComment, ...prev]);
      setReplyText("");
      setShowNewCommentInput(false);
    } catch (err) {
      setError(err.message || "Error adding comment");
    }
  };

  // রিপ্লাই যোগ করা - সবসময় root parent comment কে parentId হিসেবে সেট করবে
  const handleReply = async (targetId) => {
    if (!replyText.trim()) return;

    try {
      // reply করার জন্য প্রথমে parentMap বানাও, তারপর মূল parentId খুঁজে বের করো
      const parentMap = buildParentMap(
        comments.flatMap((comment) => [comment, ...(comment.replies || [])])
      );
      const rootParentId = findRootParentId(parentMap, targetId);

      const res = await fetch(`${API_BASE_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: replyText,
          lessonId,
          parentId: rootParentId,
        }),
      });

      if (!res.ok) throw new Error("Failed to add reply");

      const newReply = await res.json();
      newReply.replies = [];

      // root parent comment এর replies-এ নতুন reply যোগ করো
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

  // নতুন টপ লেভেল কমেন্ট ইনপুট দেখানো/লুকানো
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
