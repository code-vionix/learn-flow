// File: AttachFileDialog.jsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function AttachFileDialog({
  open,
  setOpen,
  attachedFileName,
  triggerAttachFileInput,
  attachFileInputRef,
  handleAttachFileSelect,
  attachFile,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Attach File</DialogTitle>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="py-4">
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400"
            onClick={triggerAttachFileInput}
          >
            <input
              type="file"
              ref={attachFileInputRef}
              className="hidden"
              onChange={handleAttachFileSelect}
            />
            <p className="text-sm text-gray-500 text-center">Attach File</p>
            <p className="text-xs text-gray-400 mt-1 text-center">
              Drag and drop a file or browse file
            </p>
            {attachedFileName && (
              <p className="text-sm text-gray-700 mt-2 font-medium">
                {attachedFileName}
              </p>
            )}
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={attachFile}
            className="bg-orange-500 hover:bg-orange-600 text-white"
            disabled={!attachedFileName}
          >
            Attach File
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
