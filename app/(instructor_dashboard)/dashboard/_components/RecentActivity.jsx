"use client";
import { ChevronDown, MessageCircle, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

const activities = [
  {
    id: 1,
    type: "comment",
    user: "Kevin",
    action: "comments on your lecture",
    detail: "What is ux",
    course: "2021 ui/ux design with figma",
    time: "Just now",
    icon: <MessageCircle className="text-orange-500" />,
  },
  {
    id: 2,
    type: "rating",
    user: "John",
    action: "give a 5 star rating on your course",
    course: "2021 ui/ux design with figma",
    time: "5 mins ago",
    icon: <Star className="text-orange-500" />,
  },
  {
    id: 3,
    type: "purchase",
    user: "Sraboni",
    action: "purchase your course",
    course: "2021 ui/ux design with figma",
    time: "6 mins ago",
    icon: <ShoppingBag className="text-orange-500" />,
  },
  {
    id: 4,
    type: "purchase",
    user: "Arif",
    action: "purchase your course",
    course: "2021 ui/ux design with figma",
    time: "10 mins ago",
    icon: <ShoppingBag className="text-orange-500" />,
  },
];

const RecentActivity = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-white w-full h-[26.5rem]">
      <div className="flex justify-between items-center mb-3 border-b py-4 px-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-500"
        >
          Today <ChevronDown className="ml-1 w-4 h-4" />
        </button>
      </div>
      <ul className="space-y-3 px-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start space-x-3">
            <div className="p-2 py-2 bg-primary-500 rounded-full text-white">
              {activity.icon}
            </div>
            <div className=" py-2">
              <p className="text-sm">
                <strong>{activity.user}</strong> {activity.action}{" "}
                {activity.detail && <span>“{activity.detail}”</span>} in
                <span className="font-semibold"> “{activity.course}”</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
