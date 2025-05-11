"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Trash2, ChevronDown, Pencil } from "lucide-react";

export default function CourseCurriculumForm() {
  const { handleSubmit } = useForm();
  const [sections, setSections] = useState([
    {
      id: 1,
      name: "Section name",
      lectures: [
        {
          id: 1,
          name: "Lecture name",
          contents: {
            video: null,
            attachment: null,
            captions: "",
            description: "",
            notes: "",
          },
        },
      ],
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [selectedContentType, setSelectedContentType] = useState("");
  const [tempContent, setTempContent] = useState(null);

  const [editingSectionId, setEditingSectionId] = useState(null);
  const [editingLecture, setEditingLecture] = useState(null);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    console.log("Curriculum state:", sections);
  };

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      name: "New Section",
      lectures: [],
    };
    setSections([...sections, newSection]);
  };

  const addLecture = (sectionId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lectures: [
                ...section.lectures,
                {
                  id: section.lectures.length + 1,
                  name: "New Lecture",
                  contents: {
                    video: null,
                    attachment: null,
                    captions: "",
                    description: "",
                    notes: "",
                  },
                },
              ],
            }
          : section
      )
    );
  };

  const removeLecture = (sectionId, lectureId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.filter(
                (lecture) => lecture.id !== lectureId
              ),
            }
          : section
      )
    );
  };

  const openContentModal = (lecture, contentType) => {
    setCurrentLecture(lecture);
    setSelectedContentType(contentType);
    setTempContent(lecture.contents[contentType.toLowerCase()]);
    setOpenModal(true);
  };

  const saveContent = () => {
    if (!currentLecture) return;

    setSections((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        lectures: section.lectures.map((lecture) =>
          lecture.id === currentLecture.id
            ? {
                ...lecture,
                contents: {
                  ...lecture.contents,
                  [selectedContentType.toLowerCase()]: tempContent,
                },
              }
            : lecture
        ),
      }))
    );

    setOpenModal(false);
  };

  const updateSectionName = (sectionId, name) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId ? { ...section, name } : section
      )
    );
  };

  const updateLectureName = (sectionId, lectureId, name) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.map((lecture) =>
                lecture.id === lectureId ? { ...lecture, name } : lecture
              ),
            }
          : section
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Course Curriculum</h2>
          <div className="flex items-center space-x-3">
            <Button type="submit">Save</Button>
            <Button variant="outline">Save & Preview</Button>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              {editingSectionId === section.id ? (
                <Input
                  className="w-64 h-8 text-sm"
                  value={section.name}
                  autoFocus
                  onChange={(e) =>
                    updateSectionName(section.id, e.target.value)
                  }
                  onBlur={() => setEditingSectionId(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setEditingSectionId(null);
                  }}
                />
              ) : (
                <div className="flex items-center space-x-1">
                  <span className="font-medium">
                    Section 0{section.id}: {section.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setEditingSectionId(section.id)}
                    className="text-gray-500 hover:text-primary-500"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                </div>
              )}
              <Button
                size="icon"
                onClick={() => addLecture(section.id)}
                type="button"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {section.lectures.map((lecture) => (
              <div
                key={lecture.id}
                className="flex items-center justify-between p-3 bg-white rounded mb-2"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center space-x-1">
                    {editingLecture?.sectionId === section.id &&
                    editingLecture?.lectureId === lecture.id ? (
                      <Input
                        className="w-64 h-8 text-sm"
                        value={lecture.name}
                        autoFocus
                        onChange={(e) =>
                          updateLectureName(
                            section.id,
                            lecture.id,
                            e.target.value
                          )
                        }
                        onBlur={() => setEditingLecture(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") setEditingLecture(null);
                        }}
                      />
                    ) : (
                      <>
                        <span className="text-sm text-gray-700">
                          {lecture.name}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setEditingLecture({
                              sectionId: section.id,
                              lectureId: lecture.id,
                            })
                          }
                          className="text-gray-500 hover:text-primary-500"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Content Tags */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {lecture.contents.video && (
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded">
                        Video
                      </span>
                    )}
                    {lecture.contents.attachment && (
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-xs rounded">
                        Attachment
                      </span>
                    )}
                    {lecture.contents.captions && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded">
                        Captions
                      </span>
                    )}
                    {lecture.contents.description && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-600 text-xs rounded">
                        Desc
                      </span>
                    )}
                    {lecture.contents.notes && (
                      <span className="px-2 py-0.5 bg-pink-100 text-pink-600 text-xs rounded">
                        Notes
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Contents <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {[
                        "Video",
                        "Attach File",
                        "Captions",
                        "Description",
                        "Lecture Notes",
                      ].map((type) => (
                        <DropdownMenuItem
                          key={type}
                          onClick={() => openContentModal(lecture, type)}
                        >
                          {type}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeLecture(section.id, lecture.id)}
                    type="button"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="text-center">
          <Button type="button" variant="secondary" onClick={addSection}>
            Add Section
          </Button>
        </div>
      </form>

      {/* Modal Dialog */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedContentType} for {currentLecture?.name}
            </DialogTitle>
          </DialogHeader>

          {["Video", "Attach File"].includes(selectedContentType) && (
            <div className="space-y-4">
              <Input
                type="file"
                onChange={(e) => setTempContent(e.target.files[0])}
              />
              <p className="text-xs text-gray-500">
                Note: Files should be at least 720p and under 4GB.
              </p>
              {tempContent && (
                <div className="text-sm text-green-600">
                  {tempContent.name} uploaded.
                </div>
              )}
            </div>
          )}

          {["Captions", "Description", "Lecture Notes"].includes(
            selectedContentType
          ) && (
            <Input
              placeholder={`Enter ${selectedContentType}`}
              value={tempContent || ""}
              onChange={(e) => setTempContent(e.target.value)}
            />
          )}

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
            <Button onClick={saveContent}>Save {selectedContentType}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
