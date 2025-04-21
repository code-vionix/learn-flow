import { Play, Upload, X } from "lucide-react";
import Image from "next/image";
import Spinner from "./Spinner";

export default function UploaderCard({
  type,
  url,
  isUploading,
  onUpload,
  onRemove,
  onFileChange,
}) {
  const isImage = type === "thumbnail";
  const label = isImage ? "Upload Image" : "Upload Video";

  return (
    <div>
      <h2 className="text-base font-medium text-gray-900 mb-4">
        {isImage ? "Course Thumbnail" : "Course Trailer"}
      </h2>
      <div className="flex justify-between gap-8">
        <div className="relative w-56 h-40 bg-gray-100 flex items-center justify-center mb-4">
          {isUploading ? (
            <Spinner />
          ) : url ? (
            <>
              {isImage ? (
                <Image
                  src={url}
                  alt="Uploaded Thumbnail"
                  width={224}
                  height={160}
                  className="object-cover"
                />
              ) : (
                <a href={url} target="_blank" rel="noreferrer">
                  <Play className="w-12 h-12 text-green-500" />
                </a>
              )}
              <button
                onClick={onRemove}
                className="absolute top-1 right-1 bg-white text-red-600 hover:bg-red-100 rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : isImage ? (
            <svg
              className="w-16 h-16 text-gray-400"
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
          ) : (
            <Play className="w-12 h-12 text-gray-400" />
          )}
        </div>

        <div className="text-sm text-gray-600 flex flex-col gap-8">
          <div>
            {isImage ? (
              <>
                <p>Upload your course Thumbnail here.</p>
                <p className="font-semibold">Important guidelines:</p>
                <p>
                  1200×800 pixels or 12:8 Ratio. Supported format:{" "}
                  <span className="text-gray-700 font-medium">
                    .jpg, .jpeg, or .png
                  </span>
                </p>
              </>
            ) : (
              <p>
                Students who watch a well-made promo video are{" "}
                <span className="font-medium text-gray-700">
                  5X more likely
                </span>{" "}
                to enroll. Stats go up to{" "}
                <span className="font-medium text-gray-700">10X</span> with
                awesome videos.
              </p>
            )}
          </div>

          <label className="flex items-center px-4 py-2 w-48 h-12 font-bold text-primary-500 bg-primary-100 hover:bg-orange-100 transition cursor-pointer">
            {isUploading ? "Uploading..." : label}
            <Upload className="w-4 h-4 ml-6" />
            <input
              type="file"
              accept={isImage ? "image/*" : "video/*"}
              onChange={onFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
