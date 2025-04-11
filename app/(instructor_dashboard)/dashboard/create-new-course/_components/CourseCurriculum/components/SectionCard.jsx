// File: SectionCard.jsx

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronUp,
  Edit,
  File,
  Plus,
  Trash2,
  VideoIcon,
} from "lucide-react";

export default function SectionCard({
  section,
  index,
  setSections,
  sections,
  openEditSectionDialog,
  confirmDelete,
  toggleLecture,
  openVideoUploadDialog,
  openAttachFileDialog,
  openCaptionDialog,
  openDescriptionDialog,
  openNotesDialog,
  openEditLectureDialog,
}) {
  const addLecture = (sectionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: [
              ...section.lectures,
              {
                id: `lecture-${Date.now()}`,
                name: "New lecture",
                isOpen: false,
              },
            ],
          };
        }
        return section;
      })
    );
  };

  return (
    <Card className="p-4 bg-slate-50 border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-slate-500">=</span>
          <span className="text-slate-500">
            Sections {(index + 1).toString().padStart(2, "0")}:
          </span>
          <span>{section.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600 rounded-none"
            onClick={() => addLecture(section.id)}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600 rounded-none"
            onClick={() => openEditSectionDialog(section.id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600 rounded-none"
            onClick={() => confirmDelete("section", section.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {section.lectures.map((lecture) => (
          <div key={lecture.id} className="bg-white border border-slate-200">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2 flex-1">
                <span className="text-slate-500">=</span>
                <span>{lecture.name}</span>
                <div className="flex flex-wrap gap-1">
                  {lecture.videoFile && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Video
                    </span>
                  )}
                  {lecture.caption && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      Caption
                    </span>
                  )}
                  {lecture.attachedFile && (
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                      File
                    </span>
                  )}
                  {lecture.description && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                      Description
                    </span>
                  )}
                  {lecture.notes && (
                    <span className="text-xs bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full">
                      Notes
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-primary-100 text-primary-500-500 hover:bg-primary-200-100 border-primary-200 rounded-none"
                      onClick={() => toggleLecture(section.id, lecture.id)}
                    >
                      Contents
                      {lecture.isOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  {lecture.isOpen && (
                    <DropdownMenuContent align="end" className="w-[180px]">
                      <DropdownMenuItem
                        onClick={() =>
                          openVideoUploadDialog(section.id, lecture.id)
                        }
                      >
                        <VideoIcon className="mr-2 h-4 w-4" />{" "}
                        <span>Video</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          openAttachFileDialog(section.id, lecture.id)
                        }
                      >
                        <File className="mr-2 h-4 w-4" />{" "}
                        <span>Attach File</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          openCaptionDialog(section.id, lecture.id)
                        }
                      >
                        <span className="ml-6">Captions</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          openDescriptionDialog(section.id, lecture.id)
                        }
                      >
                        <span className="ml-6">Description</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openNotesDialog(section.id, lecture.id)}
                      >
                        <span className="ml-6">Lecture Notes</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  )}
                </DropdownMenu>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-400 hover:text-slate-600"
                  onClick={() => openEditLectureDialog(section.id, lecture.id)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-400 hover:text-slate-600"
                  onClick={() =>
                    confirmDelete("lecture", section.id, lecture.id)
                  }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
