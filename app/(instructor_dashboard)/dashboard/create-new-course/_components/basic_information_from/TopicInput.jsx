"use client";
import { useEffect, useState } from "react";

export default function TopicInput({ value, onChange, progress, setProgress }) {
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    if (value.trim().length > 0) {
      setHasCounted(true);
    }
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);

    if (newValue.trim().length > 0 && !hasCounted) {
      setProgress("basic", progress + 1);
      setHasCounted(true);
    }

    if (newValue.trim().length === 0 && hasCounted) {
      setProgress("basic", progress - 1);
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
        value={value}
        onChange={handleChange}
        placeholder="What is primarily taught in your course?"
        className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 focus:border-orange-500 outline-none"
      />
    </div>
  );
}
