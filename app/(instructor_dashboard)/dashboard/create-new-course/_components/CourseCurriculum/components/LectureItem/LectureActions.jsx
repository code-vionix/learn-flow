"use client";

import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

export default function LectureActions({
  sectionId,
  lectureId,
  openEditLectureDialog,
  confirmDelete,
}) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-slate-400 hover:text-slate-600"
        onClick={() => openEditLectureDialog(sectionId, lectureId)}
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-slate-400 hover:text-slate-600"
        onClick={() => confirmDelete("lecture", sectionId, lectureId)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </>
  );
}
