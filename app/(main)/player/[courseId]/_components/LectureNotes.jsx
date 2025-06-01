"use client";

import { Download } from "lucide-react";

export default function LectureNotes({ note,id }) {
  if (!note || note.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Lecture Notes
        </h1>
        <p className="text-gray-500">No notes available for this lesson.</p>
      </div>
    );
  }

  const handleDownload = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title || "Lecture Note";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id={id} className="bg-white mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Lecture Notes</h1>
      </div>

      <div className="space-y-4">
        {note.map((item, index) => (
          <div
            key={item.id || index}
            className="flex justify-between items-center border p-4 rounded shadow-sm"
          >
            <p className="font-medium text-gray-800">
              {item.title || `Lecture Note ${index + 1}`}
            </p>
            <button
              onClick={() => handleDownload(item.content, item.title)}
              className="flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-600 px-3 py-1.5 text-sm border border-orange-200"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
