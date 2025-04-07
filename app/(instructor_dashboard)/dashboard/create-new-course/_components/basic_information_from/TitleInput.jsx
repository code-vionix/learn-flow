"use client";
import { useState } from "react";

export default function TitleInput({
  progress,
  setProgress,
  formData,
  setFormData,
  field,
}) {
  const [hasCounted, setHasCounted] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 80) {
      setFormData(field, value);

      if (value.trim().length > 0 && !hasCounted) {
        setProgress(progress + 1);
        setHasCounted(true);
      }

      if (value.trim().length === 0 && hasCounted) {
        setProgress(progress - 1);
        setHasCounted(false);
      }
    }
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700"
      >
        Title
      </label>
      <div className="relative">
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Your course title"
          className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 focus:border-orange-500 outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
          {formData.title.length}/80
        </div>
      </div>
    </div>
  );
}
