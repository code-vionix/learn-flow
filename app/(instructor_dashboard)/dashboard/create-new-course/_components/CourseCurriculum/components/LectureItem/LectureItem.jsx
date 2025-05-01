"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Badge from "../LectureList/Badge";
import LectureActions from "./LectureActions";
import LectureDropdown from "./LectureDropdown";

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
            <LectureDropdown
              sectionId={sectionId}
              lectureId={lecture.id}
              openVideoUploadDialog={openVideoUploadDialog}
              openAttachFileDialog={openAttachFileDialog}
              openCaptionDialog={openCaptionDialog}
              openDescriptionDialog={openDescriptionDialog}
              openNotesDialog={openNotesDialog}
            />
          )}

          <LectureActions
            sectionId={sectionId}
            lectureId={lecture.id}
            openEditLectureDialog={openEditLectureDialog}
            confirmDelete={confirmDelete}
          />
        </div>
      </div>
    </div>
  );
}
