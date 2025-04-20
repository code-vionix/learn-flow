"use client";

import { useState } from "react";

const languages = ["English", "Spanish", "French", "German", "Hindi"];
const subtitleLanguages = ["None", "English", "Spanish", "French"];
const courseLevels = ["Beginner", "Intermediate", "Advanced"];
const durationTypes = ["Minutes", "Hours", "Days", "Weeks"];

export default function CourseDetails({
  progress,
  setProgress,
  formData,
  setFormData,
}) {
  const [hasCounted, setHasCounted] = useState({
    language: false,
    subtitleLang: false,
    level: false,
    duration: false,
    durationType: false,
  });

  const handleSelect = (field, value) => {
    setFormData(field, value);

    if (value && !hasCounted[field]) {
      setProgress('basic',progress + 1);
      setHasCounted((prev) => ({ ...prev, [field]: true }));
    }

    if (!value && hasCounted[field]) {
      setProgress('basic',progress - 1);
      setHasCounted((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData("duration", value);

    if (value.trim().length > 0 && !hasCounted.duration) {
      setProgress('basic',progress + 1);
      setHasCounted((prev) => ({ ...prev, duration: true }));
    }

    if (value.trim().length === 0 && hasCounted.duration) {
      setProgress('basic',progress - 1);
      setHasCounted((prev) => ({ ...prev, duration: false }));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
      {/* Language */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="language" className="text-sm font-medium text-gray-700">
          Course Language
        </label>
        <select
          id="language"
          value={formData.language || ""}
          onChange={(e) => handleSelect("language", e.target.value)}
          className="px-4 py-2 border border-gray-300 text-sm outline-none focus:ring-0"
        >
          <option value="">Select...</option>
          {languages.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Subtitle Language */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="subtitleLang"
          className="text-sm font-medium text-gray-700"
        >
          Subtitle Language (Optional)
        </label>
        <select
          id="subtitleLang"
          value={formData.subtitleLang || ""}
          onChange={(e) => handleSelect("subtitleLang", e.target.value)}
          className="px-4 py-2 border border-gray-300 text-sm outline-none focus:ring-0"
        >
          <option value="">Select...</option>
          {subtitleLanguages.map((sub, i) => (
            <option key={i} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>

      {/* Course Level */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="level" className="text-sm font-medium text-gray-700">
          Course Level
        </label>
        <select
          id="level"
          value={formData.level || ""}
          onChange={(e) => handleSelect("level", e.target.value)}
          className="px-4 py-2 border border-gray-300 text-sm outline-none focus:ring-0"
        >
          <option value="">Select...</option>
          {courseLevels.map((level, i) => (
            <option key={i} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      {/* Duration */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="duration" className="text-sm font-medium text-gray-700">
          Duration
        </label>
        <div className="flex w-full">
          <input
            type="text"
            id="duration"
            value={formData.duration || ""}
            onChange={handleInputChange}
            placeholder="Course duration"
            className="w-full px-4 py-2 border border-gray-300 focus:ring-0 outline-none"
          />
          <select
            value={formData.durationType || ""}
            onChange={(e) => handleSelect("durationType", e.target.value)}
            className="w-32 border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-0"
          >
            <option value="">Type</option>
            {durationTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
