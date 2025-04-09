/* eslint-disable @next/next/no-img-element */
// File: VideoUploadDialog.jsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Upload, X } from "lucide-react";

export default function VideoUploadDialog({
  open,
  setOpen,
  isFileUploaded,
  triggerFileInput,
  handleFileSelect,
  fileInputRef,
  selectedFileName,
  selectedFileUrl,
  selectedFileDuration,
  uploadVideo,
  // Optionally include setters if you need them on cancel:
  resetVideoUpload, // a function that resets isFileUploaded, selectedFileName, and selectedFileUrl.
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Lecture Video</DialogTitle>
          <button
            onClick={() => {
              setOpen(false);
              resetVideoUpload();
            }}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        {!isFileUploaded ? (
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 flex-1 mr-2"
                onClick={triggerFileInput}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="video/*"
                  onChange={handleFileSelect}
                />
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Upload Files</p>
                {selectedFileName && (
                  <p className="text-sm text-gray-700 mt-2 font-medium">
                    {selectedFileName}
                  </p>
                )}
              </div>
              <Button
                variant="outline"
                className="h-12"
                onClick={triggerFileInput}
              >
                Upload File
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              <span className="font-medium">Note:</span> All files should be at
              least 720p and less than 4.0 GB.
            </p>
          </div>
        ) : (
          <div className="py-4">
            <div className="flex items-start space-x-4">
              <div className="relative w-32 h-24 bg-gray-100 rounded overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=128"
                  alt="Video thumbnail"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-2 right-2 bg-white/80 rounded-full p-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 8L16 12L10 16V8Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-green-600 text-sm font-medium">
                  FILE UPLOADED • {selectedFileDuration}
                </div>
                <div className="text-gray-800 mt-1">{selectedFileName}</div>
                <button
                  className="text-blue-500 hover:text-blue-700 text-sm mt-2"
                  onClick={triggerFileInput}
                >
                  Replace Video
                </button>
              </div>
            </div>
          </div>
        )}

        <DialogFooter className="sm:justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setOpen(false);
              resetVideoUpload();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={uploadVideo}
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
