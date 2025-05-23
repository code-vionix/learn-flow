// "use client";
// import Image from "next/image";
// import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import { MessageCircle } from "lucide-react";

// const commentsData = [
//   {
//     id: 1,
//     author: {
//       name: "User1",
//       avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
//     },
//     text: "Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum. Morbi ultricies volutpat orci quis fringilla. Suspendisse faucibus augue quis dictum egestas. ",
//     timeAgo: "2 hours ago",
//     replies: [
//       {
//         id: 27,
//         author: {
//           name: "User2",
//           avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
//         },
//         text: "This is a reply to the first comment.",
//         timeAgo: "1 hour ago",
//         replies: [
//           {
//             id: 254,
//             author: {
//               name: "User2",
//               avatar:
//                 "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
//             },
//             text: "This is a reply to the first comment.",
//             timeAgo: "1 hour ago",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     author: {
//       name: "User2",
//       avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
//     },
//     text: "This is a reply to the first comment.",
//     timeAgo: "1 hour ago",
//     replies: [],
//   },
// ];

// const CourseComment = () => {
//   const [comments, setComments] = useState(commentsData);
//   const [replyText, setReplyText] = useState("");
//   const [replyToId, setReplyToId] = useState(null);

//   const handleReply = (parentId) => {
//     if (!replyText) return;

//     const addReply = (comments, parentId) => {
//       return comments.map((comment) => {
//         if (comment.id === parentId) {
//           return {
//             ...comment,
//             replies: [
//               ...comment.replies,
//               {
//                 id: Date.now(),
//                 author: {
//                   name: "CurrentUser",
//                   avatar:
//                     "https://xsgames.co/randomusers/assets/avatars/male/75.jpg",
//                 },
//                 text: replyText,
//                 timeAgo: "Just now",
//                 replies: [],
//               },
//             ],
//           };
//         }
//         return {
//           ...comment,
//           replies: addReply(comment.replies, parentId),
//         };
//       });
//     };

//     setComments(addReply(comments, parentId));
//     setReplyText("");
//     setReplyToId(null);
//   };

//   const renderComments = (comments, isNested = false) => {
//     return comments.map((comment) => (
//       <div
//         key={comment.id}
//         className={`flex space-x-4 mt-6 ${isNested ? "ml-6" : ""}`}
//       >
//         {/* Avatar + vertical line container */}
//         <div className="relative flex flex-col items-center">
//           <Image
//             src={comment.author.avatar || "/placeholder.svg"}
//             alt={`${comment.author.name}'s avatar`}
//             width={40}
//             height={40}
//             className="rounded-full"
//           />

//           {/* Vertical connecting line for nested comments */}
//           {comment.replies.length > 0 && (
//             <div
//               className="w-[2px] bg-gray-300 mt-1"
//               style={{
//                 height:
//                   comment.replies.length === 1 &&
//                   comment.replies[0].replies.length === 0
//                     ? "56px"
//                     : "100%",
//               }}
//             />
//           )}

//           {/* Horizontal connecting line for nested comments (connect avatar to main line) */}
//           {isNested && (
//             <div
//               className="absolute left-[-60px] -top-2 w-[56px] h-8
//              bg-transparent
//              border-l-[3px] border-b-[3px]
//              border-gray-300
//              rounded-bl-full"
//             />
//           )}
//         </div>

//         {/* Comment content */}
//         <div className="flex flex-col flex-1">
//           <div className="flex items-center gap-2 mb-1">
//             <span className="font-medium">{comment.author.name}</span>
//             <span className="text-gray-500 text-sm">• {comment.timeAgo}</span>
//           </div>
//           <p className="text-gray-700 mb-2">{comment.text}</p>
//           <button
//             className={`flex items-center gap-1.5 ${
//               replyToId === comment.id ? "text-primary-500" : "text-[#8C94A3]"
//             } text hover:text-orange-600`}
//             onClick={() => setReplyToId(comment.id)}
//           >
//             <MessageCircle size={20} strokeWidth={1} />
//             <span className="text-sm font-medium">REPLY</span>
//           </button>

//           {replyToId === comment.id && (
//             <div className="flex gap-3 items-center mt-3">
//               <div className="p-2 flex items-center border w-full rounded">
//                 <MessageCircle size={23} strokeWidth={1} />
//                 <input
//                   type="text"
//                   id="reply-input"
//                   placeholder="Write your reply"
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                   className="!h-full px-2 flex-1 focus:outline-none bg-transparent"
//                 />
//               </div>
//               <Button
//                 onClick={() => handleReply(comment.id)}
//                 className="bg-orange-500 hover:bg-orange-600 px-6 h-[40px]"
//               >
//                 Post Reply
//               </Button>
//             </div>
//           )}

//           {/* Render nested replies */}
//           {renderComments(comment.replies, true)}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="p-4">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-bold">Comments</h2>
//         <Button className="bg-primary-500 hover:bg-primary-600 rounded">
//           Write Comment
//         </Button>
//       </div>
//       {renderComments(comments)}
//     </div>
//   );
// };

// export default CourseComment;
