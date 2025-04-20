"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Edit,
  File,
  Trash2,
  VideoIcon,
} from "lucide-react";
import { useState } from "react";
import Badge from "./Badge";

export default function LectureItem({
  lecture,
  sectionId,
  toggleLecture,
  openVideoUploadDialog,
  openAttachFileDialog,
  openCaptionDialog,
  openDescriptionDialog,
  openNotesDialog,
  openEditLectureDialog,
  confirmDelete,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    toggleLecture(sectionId, lecture.id);
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="bg-white border border-slate-200">
      <div className="flex items-center justify-between p-3 relative">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-slate-500">=</span>
          <span>{lecture.name}</span>
          <div className="flex flex-wrap gap-1">
            {lecture.videoFile && <Badge color="green" text="Video" />}
            {lecture.caption && <Badge color="blue" text="Caption" />}
            {lecture.attachedFile && <Badge color="purple" text="File" />}
            {lecture.description && <Badge color="yellow" text="Description" />}
            {lecture.notes && <Badge color="pink" text="Notes" />}
          </div>
        </div>

        <div className="flex items-center gap-2 relative">
          <Button
            variant="outline"
            size="sm"
            className="bg-primary-100 text-primary-500 hover:bg-primary-200 border-primary-200 rounded-none"
            onClick={handleToggleDropdown}
          >
            Contents
            {showDropdown ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </Button>

          {showDropdown && (
            <div className="absolute top-10 right-0 z-50 w-48 bg-white border border-gray-200 rounded shadow-md">
              <button
                onClick={() => openVideoUploadDialog(sectionId, lecture.id)}
                className="flex items-center px-4 py-2 w-full hover:bg-gray-100"
              >
                <VideoIcon className="mr-2 h-4 w-4" />
                Video
              </button>
              <button
                onClick={() => openAttachFileDialog(sectionId, lecture.id)}
                className="flex items-center px-4 py-2 w-full hover:bg-gray-100"
              >
                <File className="mr-2 h-4 w-4" />
                Attach File
              </button>
              <button
                onClick={() => openCaptionDialog(sectionId, lecture.id)}
                className="px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Captions
              </button>
              <button
                onClick={() => openDescriptionDialog(sectionId, lecture.id)}
                className="px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Description
              </button>
              <button
                onClick={() => openNotesDialog(sectionId, lecture.id)}
                className="px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Lecture Notes
              </button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600"
            onClick={() => openEditLectureDialog(sectionId, lecture.id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600"
            onClick={() => confirmDelete("lecture", sectionId, lecture.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
