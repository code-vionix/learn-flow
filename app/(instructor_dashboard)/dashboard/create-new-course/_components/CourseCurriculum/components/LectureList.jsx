import { Button } from "@/components/ui/button";
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
  Trash2,
  VideoIcon,
} from "lucide-react";

export default function LectureList({
  section,
  toggleLecture,
  openVideoUploadDialog,
  openAttachFileDialog,
  openCaptionDialog,
  openDescriptionDialog,
  openNotesDialog,
  openEditLectureDialog,
  confirmDelete,
}) {
  return (
    <div className="space-y-2">
      {section.lectures.map((lecture) => (
        <div key={lecture.id} className="bg-white border border-slate-200">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-slate-500">=</span>
              <span>{lecture.name}</span>
              <div className="flex flex-wrap gap-1">
                {lecture.videoFile && <Badge color="green" text="Video" />}
                {lecture.caption && <Badge color="blue" text="Caption" />}
                {lecture.attachedFile && <Badge color="purple" text="File" />}
                {lecture.description && (
                  <Badge color="yellow" text="Description" />
                )}
                {lecture.notes && <Badge color="pink" text="Notes" />}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-primary-100 text-primary-500 hover:bg-primary-200 border-primary-200 rounded-none"
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
                      <VideoIcon className="mr-2 h-4 w-4" />
                      <span>Video</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        openAttachFileDialog(section.id, lecture.id)
                      }
                    >
                      <File className="mr-2 h-4 w-4" />
                      <span>Attach File</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => openCaptionDialog(section.id, lecture.id)}
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
                onClick={() => confirmDelete("lecture", section.id, lecture.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Badge({ color, text }) {
  const colors = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    yellow: "bg-yellow-100 text-yellow-800",
    pink: "bg-pink-100 text-pink-800",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${colors[color] || ""}`}>
      {text}
    </span>
  );
}
