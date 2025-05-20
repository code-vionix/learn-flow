"use client";

import { useState } from "react";
import {
  Edit,
  Trash2,
  ChevronDown,
  ChevronUp,
  AlignJustify,
  File,
  FileText,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import {
  useDeleteLessonMutation,
  useUpdateLessonMutation,
} from "@/store/api/lessonApi";
import { setActiveLecture } from "@/store/slice/courseCreateSlice";
import { AddContentModal } from "../modals/add-content-modal";
import RenderBadge from "./RenderBadge";

export function LectureItem({ lesson, sectionId }) {
  const dispatch = useDispatch();
  const activeLecture =
    useSelector((state) => state.course.activeLecture) || {};
  const courseId = useSelector((state) => state.course.courseId) || "";

  const isActive = activeLecture?.lessonId === lesson?.id;

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(lesson?.title);
  const [isContentMenuOpen, setIsContentMenuOpen] = useState(false);
  const [contentModalType, setContentModalType] = useState(null);

  // RTK Query hooks
  const [updateLecture, { isLoading: isUpdatingLecture }] =
    useUpdateLessonMutation();
  const [deleteLecture, { isLoading: isDeletingLecture }] =
    useDeleteLessonMutation();

  const handleDeleteLecture = async () => {
    if (confirm("Are you sure you want to delete this lecture?")) {
      try {
        await deleteLecture({
          courseId,
          moduleId: sectionId,
          lessonId: lesson?.id,
        }).unwrap();

        // Clear active lecture if it was this one
        if (activeLecture.lessonId === lesson?.id) {
          dispatch(setActiveLecture(null));
        }

        alert("Lecture deleted successfully");
      } catch (error) {
        alert("Failed to delete lecture");
      }
    }
  };

  const handleEditTitle = () => {
    setIsEditing(true);
  };

  const handleSaveTitle = async () => {
    try {
      await updateLecture({
        courseId,
        moduleId: sectionId,
        lessonId: lesson?.id,
        title,
      }).unwrap();

      setIsEditing(false);
      alert("Lecture updated successfully");
    } catch (error) {
      alert("Failed to update lecture");
    }
  };

  const handleToggleActive = () => {
    if (isActive) {
      dispatch(setActiveLecture(null));
    } else {
      dispatch(setActiveLecture({ moduleId: sectionId, lessonId: lesson?.id }));
    }
  };

  const handleOpenContentModal = (contentType) => {
    setContentModalType(contentType);
    setIsContentMenuOpen(false);
  };

  const handleCloseContentModal = () => {
    setContentModalType(null);
  };

  const isLoading = isUpdatingLecture || isDeletingLecture;

  return (
    <>
      <div
        className={`border-t px-6 py-3 ${
          isActive ? "bg-blue-500" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlignJustify className="h-4 w-4 text-gray-500" />
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-8 w-64"
                    autoFocus
                  />
                  <Button
                    size="sm"
                    onClick={handleSaveTitle}
                    disabled={isLoading}
                  >
                    {isUpdatingLecture ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Save
                  </Button>
                </div>
              ) : (
                <span>{lesson?.title}</span>
              )}
            </div>
            <div className="flex gap-2 items-center flex-wrap pl-5">
             <RenderBadge lesson={lesson} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu
              open={isContentMenuOpen}
              onOpenChange={setIsContentMenuOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`h-7 px-2 ${
                    isActive ? "border-blue-300 bg-blue-100" : ""
                  }`}
                  onClick={handleToggleActive}
                  disabled={isLoading}
                >
                  Contents{" "}
                  {isActive ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => handleOpenContentModal("video")}
                >
                  Video
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOpenContentModal("file")}
                >
                  Attach File
                </DropdownMenuItem>
                {/* <DropdownMenuItem
                  onClick={() => handleOpenContentModal("captions")}
                >
                  Captions
                </DropdownMenuItem> */}
                <DropdownMenuItem
                  onClick={() => handleOpenContentModal("description")}
                >
                  Description
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOpenContentModal("notes")}
                >
                  Lecture Notes
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={handleEditTitle}
              disabled={isLoading}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={handleDeleteLecture}
              disabled={isLoading}
            >
              {isDeletingLecture ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {isActive && lesson?.contentType && (
          <div className="mt-3 rounded-md border bg-white p-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium capitalize">{lesson?.contentType}</h4>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleOpenContentModal(lesson?.contentType)}
                disabled={isLoading}
              >
                Edit {lesson?.contentType}
              </Button>
            </div>
            {lesson?.content && (
              <div className="mt-2 text-sm text-gray-600">
                {lesson?.contentType === "video" && (
                  <div className="flex items-center gap-2">
                    <video className="h-20 w-36 rounded bg-gray-100 object-cover" />
                    <span>Video: {lesson?.content}</span>
                  </div>
                )}
                {lesson?.contentType === "file" && (
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-100 text-blue-600">
                      <File className="h-5 w-5" />
                    </div>
                    <span>{lesson?.content}</span>
                  </div>
                )}
                {lesson?.contentType === "description" && (
                  <div className="rounded-md bg-gray-50 p-2">
                    {lesson?.content}
                  </div>
                )}
                {lesson?.contentType === "notes" && (
                  <div className="rounded-md bg-gray-50 p-2">
                    {lesson?.content}
                  </div>
                )}
                {lesson?.contentType === "captions" && (
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-yellow-100 text-yellow-600">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span>{lesson?.content}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {contentModalType && (
        <AddContentModal
          isOpen={!!contentModalType}
          onClose={handleCloseContentModal}
          sectionId={sectionId}
          lectureId={lesson.id}
          contentType={contentModalType}
        />
      )}
    </>
  );
}

