'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

import { MessageSquare } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const commentsData = [
    {
        id: 1,
        author: { name: 'User1', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg' },
        text: 'Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum. Morbi ultricies volutpat orci quis fringilla. Suspendisse faucibus augue quis dictum egestas. ',
        timeAgo: '2 hours ago',
        replies: [
            {
                id: 27,
                author: { name: 'User2', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg' },
                text: 'This is a reply to the first comment.',
                timeAgo: '1 hour ago',
                replies: [
                    {
                        id: 254,
                        author: { name: 'User2', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg' },
                        text: 'This is a reply to the first comment.',
                        timeAgo: '1 hour ago',
                        replies: [

                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        author: { name: 'User2', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg' },
        text: 'This is a reply to the first comment.',
        timeAgo: '1 hour ago',
        replies: [

        ],
    },
];

const CourseComment = () => {
    const [comments, setComments] = useState(commentsData);
    const [replyText, setReplyText] = useState('');
    const [replyToId, setReplyToId] = useState(null);

    const handleReply = (parentId) => {
        if (!replyText) return;

        const addReply = (comments, parentId) => {
            return comments.map((comment) => {
                if (comment.id === parentId) {
                    return {
                        ...comment,
                        replies: [
                            ...comment.replies,
                            {
                                id: Date.now(),
                                author: { name: 'CurrentUser', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/75.jpg' },
                                text: replyText,
                                timeAgo: 'Just now',
                                replies: [],
                            },
                        ],
                    };
                }
                return {
                    ...comment,
                    replies: addReply(comment.replies, parentId),
                };
            });
        };

        setComments(addReply(comments, parentId));
        setReplyText('');
        setReplyToId(null);
    };

    const renderComments = (comments) => {
        return comments.map((comment) => (
            <div key={comment.id} className="space-y-4 ml-6 mt-4 border-l-2 pl-4">
                <div className="flex gap-3">
                    <div className="flex-shrink-0">
                        <Image
                            src={comment.author.avatar || "/placeholder.svg"}
                            alt={`${comment.author.name}'s avatar`}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{comment.author.name}</span>
                            <span className="text-gray-500 text-sm">• {comment.timeAgo}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{comment.text}</p>
                        <button
                            className={`flex items-center gap-1.5 ${replyToId === comment.id ? 'text-primary-500' : 'text-[#8C94A3]'} text hover:text-orange-600`}
                            onClick={() => setReplyToId(comment.id)}
                        >
                            <MessageCircle size={20} strokeWidth={1} />
                            <span className="text-sm font-medium">REPLY</span>
                        </button>
                    </div>
                </div>
                {replyToId === comment.id && (
                    <div className="flex gap-3 items-center ml-[52px]">
                        <div className="p-2 flex items-center border w-full">
                            <MessageCircle size={23} strokeWidth={1} />
                            <input
                                type="text"
                                id="reply-input"
                                placeholder="Write your reply"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="!h-full px-2 flex-1 focus:outline-none bg-transparent"
                            />
                        </div>
                        <Button onClick={() => handleReply(comment.id)} className="bg-orange-500 hover:bg-orange-600 px-6 h-[40px]">
                            Post Reply
                        </Button>
                    </div>
                )}
                {renderComments(comment.replies)}
            </div>
        ));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            {renderComments(comments)}
        </div>
    );
};

export default CourseComment;