"use client";
import { useState } from "react";

const tabs = ["Overview", "Curriculum", "Instructor", "Review"];

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full border-b border-gray-300">
      <div className="flex justify-between space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative pb-2 text-lg font-semibold transition-colors ${
              activeTab === tab
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 h-1 w-full bg-orange-500"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
