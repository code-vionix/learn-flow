import {
  AlignLeft,
  Bold,
  Italic,
  Link,
  List,
  Strikethrough,
  Underline,
} from "lucide-react";

export default function Toolbar({ insertMarkdown }) {
  const buttonConfig = [
    { icon: Bold, markdown: ["**", "**", "bold text"] },
    { icon: Italic, markdown: ["_", "_", "italic text"] },
    { icon: Underline, markdown: ["<u>", "</u>", "underline"] },
    { icon: Strikethrough, markdown: ["~~", "~~", "strikethrough"] },
    { icon: Link, markdown: ["[", "](https://example.com)", "link text"] },
    { icon: List, markdown: ["- ", "", "List item"] },
  ];

  return (
    <div className="flex items-center gap-1 p-2 bg-gray-50 border-t border-gray-200">
      {buttonConfig.map(({ icon: Icon, markdown }, index) => (
        <button
          key={index}
          onClick={() => insertMarkdown(...markdown)}
          className="p-2 text-gray-600 hover:bg-gray-200"
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
      <button
        disabled
        title="Align not supported in Markdown"
        className="p-2 text-gray-400 cursor-not-allowed"
      >
        <AlignLeft className="w-4 h-4" />
      </button>
    </div>
  );
}
