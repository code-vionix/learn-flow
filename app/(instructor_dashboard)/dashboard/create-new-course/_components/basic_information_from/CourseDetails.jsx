"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
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
  });

  const handleSelect = (field, value) => {
    setFormData(field, value);

    if (value && !hasCounted[field]) {
      setProgress(progress + 1);
      setHasCounted((prev) => ({ ...prev, [field]: true }));
    }

    if (!value && hasCounted[field]) {
      setProgress(progress - 1);
      setHasCounted((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData("duration", value);

    if (value.trim().length > 0 && !hasCounted.duration) {
      setProgress(progress + 1);
      setHasCounted((prev) => ({ ...prev, duration: true }));
    }

    if (value.trim().length === 0 && hasCounted.duration) {
      setProgress(progress - 1);
      setHasCounted((prev) => ({ ...prev, duration: false }));
    }
  };

  const dropdownFields = [
    { id: "language", label: "Course Language", options: languages },
    {
      id: "subtitleLang",
      label: "Subtitle Language (Optional)",
      options: subtitleLanguages,
    },
    { id: "level", label: "Course Level", options: courseLevels },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
      {dropdownFields.map(({ id, label, options }) => (
        <div className="flex flex-col gap-2 w-full" key={id}>
          <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full px-4 py-2 border border-gray-300 bg-white text-left text-sm flex items-center justify-between focus:ring-0 focus:ring-orange-500 focus:outline-none">
                {formData[id] || "Select..."}
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {options.map((option, i) => (
                <DropdownMenuItem
                  key={i}
                  onClick={() => handleSelect(id, option)}
                  className="cursor-pointer"
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}

      {/* Duration input */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="duration" className="text-sm font-medium text-gray-700">
          Duration
        </label>
        <div className="flex w-full">
          <input
            type="text"
            id="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="Course duration"
            className="w-full px-4 py-2 border border-gray-300 focus:ring-0 focus:ring-orange-500 outline-none"
          />
          <select
            value={formData.durationType}
            onChange={(e) => handleSelect("durationType", e.target.value)}
            className="w-32 border border-gray-300 px-4 py-2 focus:ring-0 focus:ring-orange-500 outline-none"
          >
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
