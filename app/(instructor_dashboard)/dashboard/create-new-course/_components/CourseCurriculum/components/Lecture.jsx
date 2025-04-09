import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, Edit, File, Trash2, VideoIcon } from "lucide-react";

export default function Lecture({
  lecture,
  sectionId,
  onEdit,
  onDelete,
  onToggle,
  onOpenVideoUpload,
  onOpenAttachFile,
  onOpenCaption,
  onOpenDescription,
  onOpenNotes
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-md">
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
                className="bg-orange-50 text-orange-500 hover:bg-orange-100 border-orange-200"
                onClick={() => onToggle(sectionId, lecture.id)}
              >
                Contents{" "}
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
                  className="cursor-pointer"
                  onClick={() => onOpenVideoUpload(sectionId, lecture.id)}
                >
                  <VideoIcon className="mr-2 h-4 w-4" />
                  <span>Video</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => onOpenAttachFile(sectionId, lecture.id)}
                >
                  <File className="mr-2 h-4 w-4" />
                  <span>Attach File</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => onOpenCaption(sectionId, lecture.id)}
                >
                  <span className="ml-6">Captions</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => onOpenDescription(sectionId, lecture.id)}
                >
                  <span className="ml-6">Description</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => onOpenNotes(sectionId, lecture.id)}
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
            onClick={() => onEdit(sectionId, lecture.id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600"
            onClick={() => onDelete(sectionId, lecture.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}