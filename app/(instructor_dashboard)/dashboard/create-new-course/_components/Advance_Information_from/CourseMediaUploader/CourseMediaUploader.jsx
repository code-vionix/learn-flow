"use client";
import { useState } from "react";
import UploaderCard from "./UploaderCard";

const CLOUDINARY_UPLOAD_PRESET = "Learn-Folw";
const CLOUDINARY_CLOUD_NAME = "dqnfj5lb7";

export default function CourseMediaUploader({
  progress,
  setProgress,
  onUpload,
}) {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [isUploadingThumbnail, setIsUploadingThumbnail] = useState(false);
  const [isUploadingTrailer, setIsUploadingTrailer] = useState(false);

  const uploadToCloudinary = async (file, type) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.secure_url;
  };

  const handleUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === "thumbnail") setIsUploadingThumbnail(true);
    else setIsUploadingTrailer(true);

    try {
      const url = await uploadToCloudinary(file, type);

      if (type === "thumbnail") {
        setThumbnailUrl(url);
        setIsUploadingThumbnail(false);
      } else {
        setTrailerUrl(url);
        setIsUploadingTrailer(false);
      }

      onUpload(`${type}Url`, url);
      setProgress("advance", (prevValue) => prevValue + 1);
    } catch (err) {
      console.error("Upload failed", err);
      setIsUploadingThumbnail(false);
      setIsUploadingTrailer(false);
    }
  };

  const handleRemove = (type) => {
    if (type === "thumbnail") {
      setThumbnailUrl(null);
      setProgress("advance", (prevValue) => prevValue - 1);
      onUpload("thumbnailUrl", null);
    } else {
      setTrailerUrl(null);
      setProgress("advance", (prevValue) => prevValue - 1);
      onUpload("trailerUrl", null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <UploaderCard
        type="thumbnail"
        url={thumbnailUrl}
        isUploading={isUploadingThumbnail}
        onUpload={onUpload}
        onRemove={() => handleRemove("thumbnail")}
        onFileChange={(e) => handleUpload(e, "thumbnail")}
      />
      <UploaderCard
        type="trailer"
        url={trailerUrl}
        isUploading={isUploadingTrailer}
        onUpload={onUpload}
        onRemove={() => handleRemove("trailer")}
        onFileChange={(e) => handleUpload(e, "trailer")}
      />
    </div>
  );
}
