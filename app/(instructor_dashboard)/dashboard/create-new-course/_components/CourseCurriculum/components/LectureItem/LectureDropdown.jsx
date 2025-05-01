"use client";

import { File, VideoIcon } from "lucide-react";

export default function LectureDropdown({
  sectionId,
  lectureId,
  openVideoUploadDialog,
  openAttachFileDialog,
  openCaptionDialog,
  openDescriptionDialog,
  openNotesDialog,
}) {
  return (
    <div className="absolute top-10 right-0 z-50 w-48 bg-white border border-gray-200 rounded shadow-md">
      <button
        onClick={() => openVideoUploadDialog(sectionId, lectureId)}
        className="flex items-center px-4 py-2 w-full hover:bg-gray-100"
      >
        <VideoIcon className="mr-2 h-4 w-4" />
        Video
      </button>
      <button
        onClick={() => openAttachFileDialog(sectionId, lectureId)}
        className="flex items-center px-4 py-2 w-full hover:bg-gray-100"
      >
        <File className="mr-2 h-4 w-4" />
        Attach File
      </button>
      <button
        onClick={() => openCaptionDialog(sectionId, lectureId)}
        className="px-4 py-2 w-full text-left hover:bg-gray-100"
      >
        Captions
      </button>
      <button
        onClick={() => openDescriptionDialog(sectionId, lectureId)}
        className="px-4 py-2 w-full text-left hover:bg-gray-100"
      >
        Description
      </button>
      <button
        onClick={() => openNotesDialog(sectionId, lectureId)}
        className="px-4 py-2 w-full text-left hover:bg-gray-100"
      >
        Lecture Notes
      </button>
    </div>
  );
}
