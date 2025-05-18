"use client";
import { useGetFaqByRoleQuery } from "@/store/api/faqApi";
import React from "react";

function QuestionSet({ selectedTopic, setSelectedTopic, faqCategory, faqCategoryLoading, faqCategoryError }) {

  if (faqCategoryLoading) {
    // 🔄 Skeleton UI while loading
    return (
      <div className="lg:col-span-3">
        <div className="bg-white  shadow">
          {Array.from({ length: 4 })?.map((topic) => (
            <div
              key={topic}
              className={`w-full text-center sm:text-start bg-gray-100 animate-pulse px-4 py-6 border-b last:!border-b-none transition-colors `}
            >
              <div className="bg-gray-300 w-full h-3 rounded animate-pulse"></div>
              {topic?.category}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (faqCategoryError) {
    // ❌ Show error message
    return (
      <div className="lg:col-span-3 text-red-600 p-4 bg-red-50 rounded-lg border border-red-200">
        <p>⚠️ Failed to load FAQs. Please try again later.</p>
        {error?.data?.message && (
          <p className="text-sm mt-1">{error?.data?.message}</p>
        )}
      </div>
    );
  }

  return (
    <div className="lg:col-span-3">
      <div className="bg-white  shadow">
        {faqCategory?.data?.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic?.id)}
            className={`w-full text-center sm:text-start   px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${selectedTopic === topic?.id
              ? 'bg-primary-500 text-white hover:bg-primary-600'
              : 'text-gray-700'
              }`}
          >
            {topic?.category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionSet;
