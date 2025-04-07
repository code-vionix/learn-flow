"use client";
import { useState } from "react";

export default function SubtitleInput({
  progress,
  setProgress,
  formData,
  setFormData,
  field,
}) {
  const [hasCounted, setHasCounted] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 120) {
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
        htmlFor="subtitle"
        className="block text-sm font-medium text-gray-700"
      >
        Subtitle
      </label>
      <div className="relative">
        <input
          type="text"
          id="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Your course subtitle"
          className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 focus:border-orange-500 outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
          {formData.subtitle.length}/120
        </div>
      </div>
    </div>
  );
}
