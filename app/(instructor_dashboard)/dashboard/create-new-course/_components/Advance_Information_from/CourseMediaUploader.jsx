"use client";
import { Play, Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CourseMediaUploader({ progress, setProgress }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const CLOUDINARY_UPLOAD_PRESET = "Learn-Folw";
  const CLOUDINARY_CLOUD_NAME = "dqnfj5lb7";

  const handleUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      if (type === "thumbnail") {
        setThumbnailUrl(data.secure_url);
        setProgress((prev) => prev + 1); // Increase progress for thumbnail upload
      } else if (type === "trailer") {
        setTrailerUrl(data.secure_url);
        setProgress((prev) => prev + 1); // Increase progress for trailer upload
      }
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleSave = () => {
    console.log("Thumbnail URL:", thumbnailUrl);
    console.log("Trailer URL:", trailerUrl);
    // You can send the URLs to backend or store wherever needed
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Course Thumbnail */}
      <div>
        <h2 className="text-base font-medium text-gray-900 mb-4">
          Course Thumbnail
        </h2>
        <div className="flex justify-between gap-8">
          <div className="w-56 h-40 bg-gray-100 flex items-center justify-center mb-4 relative">
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt="Uploaded Thumbnail"
                width={224}
                height={160}
                className="object-cover"
              />
            ) : (
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
            )}
          </div>
          <div className="text-sm text-gray-600 flex flex-col gap-8">
            <div>
              <p>Upload your course Thumbnail here.</p>
              <p className="font-semibold">Important guidelines:</p>
              <p>
                1200×800 pixels or 12:8 Ratio. Supported format:
                <span className="text-gray-700 font-medium">
                  .jpg, .jpeg, or .png
                </span>
              </p>
            </div>
            <label className="flex items-center px-4 py-2 w-48 h-12 font-bold text-primary-500 bg-primary-100 hover:bg-orange-100 transition cursor-pointer">
              Upload Image
              <Upload className="w-4 h-4 ml-6" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleUpload(e, "thumbnail")}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Course Trailer */}
      <div>
        <h2 className="text-base font-medium text-gray-900 mb-4">
          Course Trailer
        </h2>
        <div className="flex justify-between gap-8">
          <div className="w-56 h-40 bg-gray-100 flex items-center justify-center mb-4">
            {trailerUrl ? (
              <a href={trailerUrl} target="_blank" rel="noreferrer">
                <Play className="w-12 h-12 text-green-500" />
              </a>
            ) : (
              <Play className="w-12 h-12 text-gray-400" />
            )}
          </div>
          <div className="text-sm text-gray-600 flex flex-col gap-8">
            <div>
              <p>
                Students who watch a well-made promo video are <br />
                <span className="font-medium text-gray-700">
                  5X more likely
                </span>{" "}
                to enroll. Stats go up to{" "}
                <span className="font-medium text-gray-700">10X</span> with
                awesome videos.
              </p>
            </div>
            <label className="flex items-center px-4 py-2 w-48 h-12 font-bold text-primary-500 bg-primary-100 hover:bg-orange-100 transition cursor-pointer">
              Upload Video
              <Upload className="w-4 h-4 ml-6" />
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleUpload(e, "trailer")}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
