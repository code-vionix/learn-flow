import {
  AlignLeft,
  Bold,
  Italic,
  Link,
  List,
  Strikethrough,
  Underline,
} from "lucide-react";
import { useRef, useState } from "react";

export default function CourseDescriptionEditor() {
  const [description, setDescription] = useState("");
  const textareaRef = useRef(null);

  const insertMarkdown = (syntax, suffix = syntax, placeholder = "") => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = description.substring(start, end) || placeholder;
    const newText =
      description.substring(0, start) +
      syntax +
      selectedText +
      suffix +
      description.substring(end);

    setDescription(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + syntax.length,
        start + syntax.length + selectedText.length
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
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Toolbar */}
        <div className="flex items-center gap-1 p-2 bg-gray-50 border-t border-gray-200">
          <button
            onClick={() => insertMarkdown("**", "**", "bold text")}
            className="p-2 text-gray-600 hover:bg-gray-200"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => insertMarkdown("_", "_", "italic text")}
            className="p-2 text-gray-600 hover:bg-gray-200"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => insertMarkdown("<u>", "</u>", "underline")}
            className="p-2 text-gray-600 hover:bg-gray-200"
          >
            <Underline className="w-4 h-4" />
          </button>
          <button
            onClick={() => insertMarkdown("~~", "~~", "strikethrough")}
            className="p-2 text-gray-600 hover:bg-gray-200"
          >
            <Strikethrough className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              insertMarkdown("[", "](https://example.com)", "link text")
            }
            className="p-2 text-gray-600 hover:bg-gray-200"
          >
            <Link className="w-4 h-4" />
          </button>
          <button
            onClick={() => insertMarkdown("- ", "", "List item")}
            className="p-2 text-gray-600 hover:bg-gray-200"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            disabled
            title="Align not supported in Markdown"
            className="p-2 text-gray-400 cursor-not-allowed"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
