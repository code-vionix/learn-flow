import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Edit, Plus, Trash2 } from "lucide-react";
import Lecture from "./Lecture";

export default function Section({ 
  section, 
  index, 
  onEditSection, 
  onDeleteSection, 
  onAddLecture,
  onEditLecture,
  onDeleteLecture,
  onToggleLecture,
  onOpenVideoUpload,
  onOpenAttachFile,
  onOpenCaption,
  onOpenDescription,
  onOpenNotes
}) {
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
            className="h-8 w-8 text-slate-400 hover:text-slate-600"
            onClick={() => onAddLecture(section.id)}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600"
            onClick={() => onEditSection(section.id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-slate-400 hover:text-slate-600"
            onClick={() => onDeleteSection(section.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {section.lectures.map((lecture) => (
          <Lecture
            key={lecture.id}
            lecture={lecture}
            sectionId={section.id}
            onEdit={onEditLecture}
            onDelete={onDeleteLecture}
            onToggle={onToggleLecture}
            onOpenVideoUpload={onOpenVideoUpload}
            onOpenAttachFile={onOpenAttachFile}
            onOpenCaption={onOpenCaption}
            onOpenDescription={onOpenDescription}
            onOpenNotes={onOpenNotes}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="mt-2"
        onClick={() => onAddLecture(section.id)}
      >
        <Plus className="mr-1 h-4 w-4" /> Add lecture
      </Button>
    </Card>
  );
}