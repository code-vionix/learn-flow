// File: NotesDialog.jsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

export default function NotesDialog({
  open,
  setOpen,
  notesText,
  setNotesText,
  notesFileName,
  triggerNotesFileInput,
  notesFileInputRef,
  handleNotesFileSelect,
  saveNotes,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Lecture Notes</DialogTitle>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="py-4">
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              placeholder="Write your lecture Notes here..."
              className="min-h-[100px]"
            />
          </div>
          <div className="mt-4">
            <Label>Uploads Notes</Label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 mt-2 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400"
              onClick={triggerNotesFileInput}
            >
              <input
                type="file"
                ref={notesFileInputRef}
                className="hidden"
                onChange={handleNotesFileSelect}
              />
              <p className="text-xs text-gray-400 text-center">
                Drag and drop a file or browse file
              </p>
              {notesFileName && (
                <p className="text-sm text-gray-700 mt-2 font-medium">
                  {notesFileName}
                </p>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={saveNotes}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Add Notes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
