import { Upload } from "lucide-react";

export default function ThumbnailUploader() {
  return (
    <div>
      <h2 className="text-base font-medium text-gray-900 mb-4">
        Course Thumbnail
      </h2>
      <div className="border border-gray-200 p-4">
        <div className="bg-gray-50 p-6 flex flex-col items-center justify-center">
          <div className="w-32 h-32 bg-gray-100 flex items-center justify-center mb-4">
            {/* SVG icon */}
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-600 text-center mb-4">
            <p>Upload your course Thumbnail here.</p>
            <p className="font-semibold">Important guidelines:</p>
            <p>
              1200×800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or
              .png
            </p>
          </div>
          <button className="flex items-center px-4 py-2 text-orange-500 bg-orange-50 hover:bg-orange-100 transition">
            <Upload className="w-4 h-4 mr-2" />
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}
