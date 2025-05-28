"use client";

import { FileText, Download } from "lucide-react";

export default function AttachFiles({ attachments = [] }) {
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name || "attachment";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white mt-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Attach Files ({attachments.length.toString().padStart(2, "0")})
        </h2>
      </div>

      {/* Files List */}
      <div className="space-y-3">
        {attachments.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-4 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              {/* File Icon */}
              <div className="flex-shrink-0">
                <div className="w-10 h-12 bg-orange-500 rounded flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* File Info */}
              <div className="flex flex-col">
                <span className="text-gray-900 font-medium text-sm">
                  {file.name || "Unnamed Attachment"}
                </span>
                <span className="text-gray-500 text-sm">
                  {/* File type from URL extension */}
                  {file.url.split(".").pop()?.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={() => handleDownload(file)}
              className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 transition-colors text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              Download File
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {attachments.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>No files attached</p>
        </div>
      )}
    </div>
  );
}
