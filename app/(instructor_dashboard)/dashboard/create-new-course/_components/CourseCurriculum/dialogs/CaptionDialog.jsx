// File: CaptionDialog.jsx
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

export default function CaptionDialog({
  open,
  setOpen,
  captionText,
  setCaptionText,
  saveCaption,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Lecture Caption</DialogTitle>
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
            <Label htmlFor="caption">Caption</Label>
            <Textarea
              id="caption"
              value={captionText}
              onChange={(e) => setCaptionText(e.target.value)}
              placeholder="Write your lecture caption here..."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={saveCaption}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Add Caption
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
