"use client";

import { useState } from "react";
import { X, Loader2, UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";
import {
  useUploadFilesMutation,
  useUpdateAttachmentMutation,
  useUpdateNoteMutation,
  useUpdateDescriptionMutation,
  useUpdateVideoUrlMutation,
  useUpdateCaptionsMutation,
  useUploadFileMutation,
} from "@/store/api/lessonApi";

export function AddContentModal({
  isOpen,
  onClose,
  sectionId,
  lectureId,
  contentType,
}) {
  const courseId = useSelector((state) => state.course.courseId) || "";

  const [videoUrl, setVideoUrl] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [captionsFile, setCaptionsFile] = useState(null);
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  // RTK Query hooks

  const [updateLessionsAttachment, { isLoading: isUpdatingAttachment }] =
    useUpdateAttachmentMutation();
  const [updateLessionsNote, { isLoading: isUpdatingNote }] =
    useUpdateNoteMutation();
  const [updateLessionsDescription, { isLoading: isUpdatingDescription }] =
    useUpdateDescriptionMutation();
  const [updateLessionsVideoUrl, { isLoading: isUpdatingVideoUrl }] =
    useUpdateVideoUrlMutation();
  const [updateLessionsCaptions, { isLoading: isUpdatingCaptions }] =
    useUpdateCaptionsMutation();

  const [uploadFiles, { isLoading: isMultipleUploading }] =
    useUploadFilesMutation();
  const [uploadFile, { isLoading: isSingleUploading }] =
    useUploadFileMutation();

  if (!isOpen) return null;

  const handleSave = async () => {
    try {
      let content = "";
      let content2 = "";

      // Handle file uploads if needed
      if (videoFile && contentType === "video") {
        const formData = new FormData();
        formData.append("file", videoFile);
        formData.append("type", "video");

        const uploadResult = await uploadFile(formData).unwrap();
        content = uploadResult.url;
      } else if (captionsFile && contentType === "captions") {
        const formData = new FormData();
        formData.append("file", captionsFile);
        formData.append("type", "captions");

        const uploadResult = await uploadFile(formData).unwrap();
        content = uploadResult.url;
      } else if (multipleFiles.length > 0 && contentType === "file") {
        const formData = new FormData();

        multipleFiles.forEach((file) => {
          formData.append("files", file);
        });

        formData.append("type", "attachments");

        try {
          const result = await uploadFiles(formData).unwrap();
          content2 = result.files.map((item) => item.url);
          console.log(result);
          // maybe clear files here: setMultipleFiles([]);
        } catch (error) {
          console.error("Upload failed:", error);
          // handle error here
        }
      } else if (contentType === "notes") {
        const formData = new FormData();
        formData.append("file", attachmentFile);
        formData.append("type", "notes");

        const uploadResult = await uploadFile(formData).unwrap();
        content = uploadResult.url;
      } else {
        // Handle text content
        switch (contentType) {
          case "video":
            content = videoUrl;
            break;
          case "description":
            content = description;
            break;
        }
      }

      switch (contentType) {
        case "video":
          await updateLessionsVideoUrl({
            courseId,
            moduleId: sectionId,
            lessonId: lectureId,
            videoUrl,
          }).unwrap();
          break;
        case "description":
          await updateLessionsDescription({
            courseId,
            moduleId: sectionId,
            lessonId: lectureId,
            description,
          }).unwrap();
          break;
        case "notes":
          await updateLessionsNote({
            courseId,
            moduleId: sectionId,
            lessonId: lectureId,
            title: notes,
            note: content,
          }).unwrap();
          break;
        case "file":
          await updateLessionsAttachment({
            courseId,
            moduleId: sectionId,
            lessonId: lectureId,
            attatchment: content2,
            name: "attachment",
          }).unwrap();
          break;
        case "captions":
          await updateLessionsCaptions({
            courseId,
            moduleId: sectionId,
            lessonId: lectureId,
            captionsFile,
          }).unwrap();
          break;
      }
      alert("Content saved successfully");

      onClose();
    } catch (error) {
      alert("Failed to save content");
    }
  };

  const handleVideoFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleCaptionsFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCaptionsFile(e.target.files[0]);
    }
  };

  const handleAttachmentFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachmentFile(e.target.files[0]);
    }
  };

  const handleMultipleFilesChange = (e) => {
    if (e.target.files) {
      setMultipleFiles((prev) => [...prev, ...Array.from(e.target.files)]);
      e.target.value = "";
    }
  };

  const isLoading = isMultipleUploading || isSingleUploading;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold capitalize">
            {contentType} Content
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            disabled={isLoading}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {contentType === "video" && (
          <Tabs defaultValue="upload">
            <TabsList className="mb-4 grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Video</TabsTrigger>
              <TabsTrigger value="url">Video URL</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="space-y-4">
              <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
                <input
                  type="file"
                  id="video-upload"
                  className="hidden"
                  accept="video/*"
                  onChange={handleVideoFileChange}
                  disabled={isLoading}
                />
                <label
                  htmlFor="video-upload"
                  className="flex cursor-pointer flex-col items-center justify-center"
                >
                  <UploadIcon className="mb-2 h-10 w-10 text-gray-400" />
                  <p className="mb-1 text-sm font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    MP4, WebM, or Ogg (Max 500MB)
                  </p>
                </label>
              </div>
              {videoFile && (
                <div className="rounded-md bg-gray-50 p-3">
                  <p className="text-sm font-medium">Selected file:</p>
                  <p className="text-sm text-gray-600">{videoFile.name}</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="url" className="space-y-4">
              <div>
                <label
                  htmlFor="video-url"
                  className="mb-2 block text-sm font-medium"
                >
                  Video URL
                </label>
                <Input
                  id="video-url"
                  placeholder="https://example.com/video.mp4"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  disabled={isLoading}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Enter a direct link to your video file or YouTube/Vimeo URL
                </p>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {contentType === "file" && (
          <div className="space-y-4">
            <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <input
                type="file"
                id="multiple-files-upload"
                className="hidden"
                onChange={handleMultipleFilesChange}
                disabled={isLoading}
                multiple
              />
              <label
                htmlFor="multiple-files-upload"
                className="flex cursor-pointer flex-col items-center justify-center"
              >
                <UploadIcon />
                <p className="mb-1 text-sm font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOC, PPT, ZIP (Max 100MB)
                </p>
              </label>
            </div>
            {multipleFiles.length > 0 && (
              <div className="rounded-md bg-gray-50 p-3">
                <p className="text-sm font-medium">Selected files:</p>
                <ul className="mt-2 list-disc pl-6">
                  {multipleFiles.map((file, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {contentType === "captions" && (
          <div className="space-y-4">
            <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <input
                type="file"
                id="captions-upload"
                className="hidden"
                accept=".srt,.vtt"
                onChange={handleCaptionsFileChange}
                disabled={isLoading}
              />
              <label
                htmlFor="captions-upload"
                className="flex cursor-pointer flex-col items-center justify-center"
              >
                <UploadIcon />
                <p className="mb-1 text-sm font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">SRT or VTT files</p>
              </label>
            </div>
            {captionsFile && (
              <div className="rounded-md bg-gray-50 p-3">
                <p className="text-sm font-medium">Selected file:</p>
                <p className="text-sm text-gray-600">{captionsFile.name}</p>
              </div>
            )}
          </div>
        )}

        {contentType === "description" && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium"
              >
                Lecture Description
              </label>
              <Textarea
                id="description"
                placeholder="Enter a detailed description of this lecture..."
                className="min-h-[200px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isLoading}
              />
              <p className="mt-1 text-xs text-gray-500">
                Describe what students will learn in this lecture. This will be
                visible to students.
              </p>
            </div>
          </div>
        )}

        {contentType === "notes" && (
          <div className="space-y-4">
            <div>
              <label htmlFor="notes" className="mb-2 block text-sm font-medium">
                Lecture Notes
              </label>
              <Textarea
                id="notes"
                placeholder="Enter lecture notes for students..."
                className="min-h-[200px]"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                disabled={isLoading}
              />
              <p className="mt-1 text-xs text-gray-500">
                These notes will be available for students to download and
                reference.
              </p>
            </div>
            <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <input
                type="file"
                id="attachment-upload"
                className="hidden"
                onChange={handleAttachmentFileChange}
                disabled={isLoading}
              />
              <label
                htmlFor="attachment-upload"
                className="flex cursor-pointer flex-col items-center justify-center"
              >
                <UploadIcon />
                <p className="mb-1 text-sm font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOC, PPT, ZIP (Max 100MB)
                </p>
              </label>
            </div>
            {attachmentFile && (
              <div className="rounded-md bg-gray-50 p-3">
                <p className="text-sm font-medium">Selected file:</p>
                <p className="text-sm text-gray-600">{attachmentFile.name}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Content
          </Button>
        </div>
      </div>
    </div>
  );
}

// const UploadIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`mb-2 h-10 w-10 text-gray-400 ${className}`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//       />
//     </svg>
//   )
// }
