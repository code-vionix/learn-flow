import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useRef } from "react";

export function VideoUploadDialog({
  open,
  onOpenChange,
  selectedFileName,
  onFileSelect,
  onUpload,
}) {
  const fileInputRef = useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload Video</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="py-4">
          <div className="grid gap-2">
            <Label>Upload Video</Label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 mt-2 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400"
              onClick={triggerFileInput}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="video/*"
                onChange={onFileSelect}
              />
              <p className="text-xs text-gray-400 text-center">
                Drag and drop a video file or browse
              </p>
              {selectedFileName && (
                <p className="text-sm text-gray-700 mt-2 font-medium">
                  {selectedFileName}
                </p>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={onUpload}
            className="bg-orange-500 hover:bg-orange-600 text-white"
            disabled={!selectedFileName}
          >
            Upload Video
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
