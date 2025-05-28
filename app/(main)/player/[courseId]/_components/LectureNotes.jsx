"use client";

import { Download } from "lucide-react";
import Image from "next/image";

export default function LectureNotes({ note }) {
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

  const isImage = (url) => {
    return /\.(avif|jpg|jpeg|png|webp|gif)$/i.test(url);
  };

  const isPDF = (url) => {
    return /\.pdf$/i.test(url);
  };

  return (
    <div className="bg-white mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Lecture Notes</h1>
      </div>

      <div className="space-y-6">
        {note.map((item) => {
          const handleDownload = () => {
            const link = document.createElement("a");
            link.href = item.content;
            link.download = item.title || "Lecture Note";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };

          return (
            <div key={item.id} className="space-y-4 text-gray-700">
              <div className="flex justify-between items-center">
                <p className="font-medium">{item.title}</p>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-600 px-3 py-1.5  text-sm border border-orange-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>

              {isImage(item.content) ? (
                <div className="relative w-full max-w-xl aspect-video overflow-hidden border">
                  <Image
                    src={item.content}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
              ) : isPDF(item.content) ? (
                <iframe
                  src={item.content}
                  className="w-full h-[500px] border"
                  title={item.title}
                />
              ) : (
                <div className="text-sm text-gray-500 italic">
                  Preview not supported for this file type.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
