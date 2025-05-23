"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Upload, Trash2, Loader2 } from "lucide-react"; // Added Loader2 for spinner
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useUploadFileMutation } from "@/store/api/lessonApi"; // Assuming this uploads a file and returns a URL
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "@/store/api/userApi";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

export default function ProfilePictureCard({ initialImageUrl }) {
  const { data } = useGetUserInfoQuery();
  // Accept initial image URL as prop
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(data?.imageUrl || ""); // Use initialImageUrl
  const [localError, setLocalError] = useState(null); // State for local validation errors

  // Mutations
  const [uploadFile, { isLoading: isUploading, error: uploadError }] =
    useUploadFileMutation();
  const [updateUser, { isLoading: isSaving, error: saveError }] =
    useUpdateUserInfoMutation();

  const isLoading = isUploading || isSaving; // Combine loading states
  const hasError = localError || uploadError || saveError; // Combine error states

  // Effect for creating and revoking the preview URL
  useEffect(() => {
    if (!selectedFile) {
      // If no file is selected, use the initial image or clear the preview
      setPreviewUrl(data?.imageUrl || "");
      return;
    }

    // Create a new object URL for the selected file
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);
    setLocalError(null); // Clear any previous local error

    // Clean up the object URL when the component unmounts or selectedFile changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, data?.imageUrl]); // Rerun effect when selectedFile or initialImageUrl changes

  // Handle file drop
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    setLocalError(null); // Clear previous errors

    if (fileRejections.length > 0) {
      const rejection = fileRejections[0].errors[0];
      if (rejection.code === "file-too-large") {
        setLocalError("File size must be less than 1MB.");
      } else if (rejection.code === "file-invalid-type") {
        setLocalError("Invalid file type. Please upload an image.");
      } else {
        setLocalError("File selection failed.");
      }
      setSelectedFile(null); // Clear any previously selected file
      return;
    }

    const file = acceptedFiles[0];
    if (file) {
      // The size check is handled by useDropzone if maxSize is set,
      // but let's keep a manual check too for clarity or if not using maxSize option
      if (file.size > 1024 * 1024) {
        setLocalError("File size must be less than 1MB.");
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  }, []);

  // Configure dropzone, including max size and accepted file types
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/gif": [".gif"], // Example, add other types if needed
    },
    maxSize: 1024 * 1024, // 1MB
  });

  // Handle saving the photo
  const handleSavePhoto = async () => {
    if (isLoading) return; // Prevent multiple clicks

    setLocalError(null); // Clear local errors before attempting save

    try {
      let uploadedImageUrl = initialImageUrl; // Start with the current image URL

      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const uploadResponse = await uploadFile(formData).unwrap();

        if (uploadResponse && uploadResponse.url) {
          uploadedImageUrl = uploadResponse.url;
        } else {
          throw new Error("Upload failed: Invalid response structure.");
        }
      } else if (previewUrl !== initialImageUrl && !selectedFile) {
        uploadedImageUrl = null; // Set URL to null to remove the image
      } else {
        return;
      }

      await updateUser({ imageUrl: uploadedImageUrl }).unwrap();

      console.log("Profile picture updated successfully!");

      setSelectedFile(null);
    } catch (err) {
      console.error("Failed to save profile picture:", err);
    }
  };

  const handleDeletePhoto = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    setPreviewUrl("");
    setLocalError(null);
  };

  // Determine what image to display
  const displayImageUrl = previewUrl || initialImageUrl || "/placeholder.svg"; // Fallback placeholder

  const isSaveDisabled =
    isLoading || (!selectedFile && previewUrl === (initialImageUrl || ""));

  return (
    <Card className="border p-4">
      <div
        {...getRootProps()}
        className={`relative aspect-square w-full overflow-hidden cursor-pointer
           ${isDragActive ? "bg-gray-300" : "bg-gray-100"}
           ${localError ? "border-2 border-red-500" : ""}`} // Highlight border on error
      >
        <Image
          src={displayImageUrl}
          alt="Profile photo"
          fill
          className={`object-cover ${selectedFile ? "" : "opacity-50"}`} // Dim placeholder
          onError={(e) => {
            console.error("Error loading image:", e.currentTarget.src);
          }}
        />

        {/* Hidden input for file selection */}
        <input {...getInputProps()} />

        {/* Overlay label for upload */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex items-center justify-center gap-2 bg-black/50 px-4 py-2 backdrop-blur-sm">
            {isLoading ? (
              <Loader2 className="h-4 w-4 text-white animate-spin" />
            ) : (
              <Upload className="h-4 w-4 text-white" />
            )}
            <span className="text-sm font-medium text-white">
              {isDragActive ? "Drop photo here..." : "Upload or drag photo"}
            </span>
          </div>
        </div>

        {/* Delete button - shown if there is *any* image displayed */}
        {(previewUrl || initialImageUrl) &&
          !isLoading && ( // Show delete if there's a preview or initial, and not loading
            <button
              onClick={handleDeletePhoto}
              className="absolute top-0 right-0 m-2 rounded-full bg-red-500 p-1 text-white z-10 hover:bg-red-600 transition-colors"
              aria-label="Remove photo"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
      </div>

      {/* Feedback Messages */}
      {localError && (
        <p className="mt-2 text-center text-sm text-red-500">{localError}</p>
      )}
      {uploadError && (
        <p className="mt-2 text-center text-sm text-red-500">
          Upload failed: {uploadError.message || "An error occurred."}
        </p>
      )}
      {saveError && (
        <p className="mt-2 text-center text-sm text-red-500">
          Save failed: {saveError.message || "An error occurred."}
        </p>
      )}
      {!localError &&
        !uploadError &&
        !saveError && ( // Show hint only if no errors
          <p className="mt-2 text-center text-xs text-gray-500">
            Image size should be under 1MB.
          </p>
        )}

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSavePhoto} disabled={isSaveDisabled}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Save Photo
        </Button>
      </div>
    </Card>
  );
}
