"use client";
import { useState } from "react";

export default function SubtitleInput({
  value,
  onChange,
  progress,
  setProgress,
}) {
  const [hasCounted, setHasCounted] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 120) {
      onChange(inputValue);

      if (inputValue.trim().length > 0 && !hasCounted) {
        setProgress('basic',progress + 1);
        setHasCounted(true);
      }

      if (inputValue.trim().length === 0 && hasCounted) {
        setProgress('basic',progress - 1);
        setHasCounted(false);
      }
    }
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="subtitle"
        className="block text-sm font-medium text-gray-700"
      >
        Subtitle
      </label>
      <div className="relative">
        <input
          type="text"
          id="subtitle"
          value={value}
          onChange={handleChange}
          placeholder="Your course subtitle"
          className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 focus:border-orange-500 outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
          {value.length}/120
        </div>
      </div>
    </div>
  );
}
