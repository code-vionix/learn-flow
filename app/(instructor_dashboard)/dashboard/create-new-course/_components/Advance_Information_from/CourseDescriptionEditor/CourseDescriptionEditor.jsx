"use client";
import { useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";

export default function CourseDescriptionEditor({
  description = "", // received from parent
  onDescriptionChange,
  progress,
  setProgress,
}) {
  const textareaRef = useRef(null);
  const [hasProgressed, setHasProgressed] = useState(false);

  useEffect(() => {
    if (description.trim().length > 0) {
      setHasProgressed(true);
    } else {
      setHasProgressed(false);
    }
  }, [description]);

  const handleChange = (e) => {
    const value = e.target.value;
    onDescriptionChange(value);

    if (value.trim().length > 0 && !hasProgressed) {
      setProgress("advance", (prev) => prev + 1);
      setHasProgressed(true);
    }

    if (value.trim().length === 0 && hasProgressed) {
      setProgress("advance", (prev) => prev - 1);
      setHasProgressed(false);
    }
  };

  const insertMarkdown = (prefix, suffix = prefix, placeholder = "") => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = description.slice(start, end) || placeholder;

    const newText =
      description.slice(0, start) +
      prefix +
      selectedText +
      suffix +
      description.slice(end);

    onDescriptionChange(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selectedText.length
      );
    }, 0);
  };

  return (
    <div className="mb-8">
      <h2 className="text-base font-medium text-gray-900 mb-4">
        Course Description
      </h2>

      <div className="border border-gray-200 rounded">
        <textarea
          ref={textareaRef}
          className="w-full p-4 border-b border-gray-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
          rows={6}
          placeholder="Enter your course description using markdown..."
          value={description}
          onChange={handleChange}
        />
        <Toolbar insertMarkdown={insertMarkdown} />
      </div>
    </div>
  );
}
