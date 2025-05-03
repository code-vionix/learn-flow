import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash2 } from "lucide-react";

export default function SectionHeader({
  section,
  index,
  setSections,
  sections,
  openEditSectionDialog,
  confirmDelete,
}) {
  const addLecture = (sectionId) => {
    setSections(
      sections.map((sec) =>
        sec.id === sectionId
          ? {
              ...sec,
              lectures: [
                ...sec.lectures,
                {
                  id: `lecture-${Date.now()}`,
                  name: "New lecture",
                  isOpen: false,
                },
              ],
            }
          : sec
      )
    );
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2 flex-1">
        <span className="text-slate-500">=</span>
        <span className="text-slate-500">
          Section {(index + 1).toString().padStart(2, "0")}:
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
  );
}
