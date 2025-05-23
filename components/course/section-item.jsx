"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, AlignJustify, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LectureItem } from "./lecture-item";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddNewLessonMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
} from "@/store/api/lessonApi";
import {
  useDeleteModuleMutation,
  useUpdateModuleMutation,
} from "@/store/api/moduleApi";
import { setEditActiveLecture } from "@/store/slice/courseUpdateSlice";


export function SectionItem({ section, courseId }) {
  const dispatch = useDispatch();

  const activeLecture = useSelector((state) => state.courseUpdate.activeLecture)

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(section.title);

  const [createLecture, { isLoading: isCreatingLecture }] =
    useAddNewLessonMutation();
  const [updateSection, { isLoading: isUpdatingSection }] =
    useUpdateModuleMutation();
  const [deleteSection, { isLoading: isDeletingSection }] =
    useDeleteModuleMutation();

  const handleAddLecture = async () => {
    try {
      await createLecture({
        courseId,
        moduleId: section.id,
        title: "New Lesson",
      }).unwrap();
      alert("Lesson added successfully");
    } catch (error) {
      alert("Failed to add lesson");
    }
  };

  const handleDeleteSection = async () => {
    if (confirm("Are you sure you want to delete this section?")) {
      try {
        await deleteSection({ courseId, moduleId: section.id }).unwrap();
        alert("Section deleted successfully");
        // Clear active lecture if it was in this section
        if (section.lectures.some((lecture) => lecture.id === activeLecture)) {
          dispatch(setEditActiveLecture(null));
        }
      } catch (error) {
        alert("Failed to delete section");
      }
    }
  };

  const handleEditTitle = () => {
    setIsEditing(true);
  };

  const handleSaveTitle = async () => {
    try {
      await updateSection({
        courseId,
        moduleId: section.id,
        title,
      }).unwrap();
      setIsEditing(false);
      alert("Section updated successfully");
    } catch (error) {
      alert("Failed to update section");
    }
  };

  const isLoading = isCreatingLecture || isUpdatingSection || isDeletingSection;

  return (
    <div className="rounded-md border bg-gray-50">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <AlignJustify className="h-4 w-4" />
          {isEditing ? (
            <div className="flex items-center gap-2">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-8 w-64"
                autoFocus
              />
              <Button size="sm" onClick={handleSaveTitle} disabled={isLoading}>
                {isUpdatingSection ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Save
              </Button>
            </div>
          ) : (
            <span className="font-medium">{section.title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAddLecture}
            disabled={isLoading}
          >
            {isCreatingLecture ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleEditTitle}
            disabled={isLoading}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDeleteSection}
            disabled={isLoading}
          >
            {isDeletingSection ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Lectures */}
      {section.lessons.map((lesson) => (
        <LectureItem key={lesson.id} lesson={lesson} sectionId={section.id} courseId={courseId} />
      ))}
    </div>
  );
}
