"use client";
import { useState } from "react";

export default function TopicInput({ progress, setProgress }) {
  const [topic, setTopic] = useState("");
  const [hasCounted, setHasCounted] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setTopic(value);

    if (value.trim().length > 0 && !hasCounted) {
      setProgress(progress + 1);
      setHasCounted(true);
    }

    if (value.trim().length === 0 && hasCounted) {
      setProgress(progress - 1);
      setHasCounted(false);
    }
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="topic"
        className="block text-sm font-medium text-gray-700"
      >
        Course Topic
      </label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={handleChange}
        placeholder="What is primarily taught in your course?"
        className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 focus:border-orange-500 outline-none"
      />
    </div>
  );
}
