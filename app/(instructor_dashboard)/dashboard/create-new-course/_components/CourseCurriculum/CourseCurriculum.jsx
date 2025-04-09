/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronUp, Edit, File, Plus, Trash2, VideoIcon, X, Upload } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import CurriculumHeader from "./components/CurriculumHeader"

export default function CourseCurriculum() {
  const [sections, setSections] = useState([
    {
      id: "section-1",
      name: "Section name",
      lectures: [
        { id: "lecture-1", name: "Lecture name", isOpen: false },
        { id: "lecture-2", name: "Lecture name", isOpen: true },
      ],
    },
  ])

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)

  // Edit section dialog state
  const [editSectionDialogOpen, setEditSectionDialogOpen] = useState(false)
  const [currentSectionId, setCurrentSectionId] = useState(null)
  const [newSectionName, setNewSectionName] = useState("")

  // Edit lecture dialog state
  const [editLectureDialogOpen, setEditLectureDialogOpen] = useState(false)
  const [currentLectureInfo, setCurrentLectureInfo] = useState(null)
  const [newLectureName, setNewLectureName] = useState("")

  // Video upload dialog state
  const [videoUploadDialogOpen, setVideoUploadDialogOpen] = useState(false)
  const [selectedFileName, setSelectedFileName] = useState("")
  const [selectedFileUrl, setSelectedFileUrl] = useState("")
  const [selectedFileDuration, setSelectedFileDuration] = useState("")
  const [isFileUploaded, setIsFileUploaded] = useState(false)
  const fileInputRef = useRef(null)

  // Caption dialog state
  const [captionDialogOpen, setCaptionDialogOpen] = useState(false)
  const [captionText, setCaptionText] = useState("")

  // Attach file dialog state
  const [attachFileDialogOpen, setAttachFileDialogOpen] = useState(false)
  const [attachedFileName, setAttachedFileName] = useState("")
  const attachFileInputRef = useRef(null)

  // Description dialog state
  const [descriptionDialogOpen, setDescriptionDialogOpen] = useState(false)
  const [descriptionText, setDescriptionText] = useState("")

  // Notes dialog state
  const [notesDialogOpen, setNotesDialogOpen] = useState(false)
  const [notesText, setNotesText] = useState("")
  const [notesFileName, setNotesFileName] = useState("")
  const notesFileInputRef = useRef(null)

  const toggleLecture = (sectionId, lectureId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === lectureId) {
                return { ...lecture, isOpen: !lecture.isOpen }
              }
              return { ...lecture, isOpen: false }
            }),
          }
        }
        return section
      }),
    )
  }

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      name: "New section",
      lectures: [],
    }
    setSections([...sections, newSection])
  }

  const addLecture = (sectionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: [
              ...section.lectures,
              {
                id: `lecture-${Date.now()}`,
                name: "New lecture",
                isOpen: false,
              },
            ],
          }
        }
        return section
      }),
    )
  }

  // Open edit section dialog
  const openEditSectionDialog = (sectionId) => {
    const section = sections.find((s) => s.id === sectionId)
    if (section) {
      setCurrentSectionId(sectionId)
      setNewSectionName(section.name)
      setEditSectionDialogOpen(true)
    }
  }

  // Save section name
  const saveSectionName = () => {
    if (!currentSectionId) return

    setSections(
      sections.map((section) => {
        if (section.id === currentSectionId) {
          return {
            ...section,
            name: newSectionName || "Untitled Section",
          }
        }
        return section
      }),
    )
    setEditSectionDialogOpen(false)
  }

  // Open edit lecture dialog
  const openEditLectureDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    if (lecture) {
      setCurrentLectureInfo({ sectionId, lectureId })
      setNewLectureName(lecture.name)
      setEditLectureDialogOpen(true)
    }
  }

  // Save lecture name
  const saveLectureName = () => {
    if (!currentLectureInfo) return

    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === currentLectureInfo.lectureId) {
                return {
                  ...lecture,
                  name: newLectureName || "Untitled Lecture",
                }
              }
              return lecture
            }),
          }
        }
        return section
      }),
    )
    setEditLectureDialogOpen(false)
  }

  // Open video upload dialog
  const openVideoUploadDialog = (sectionId, lectureId) => {
    setCurrentLectureInfo({ sectionId, lectureId })
    setVideoUploadDialogOpen(true)
    setSelectedFileName("")
    setIsFileUploaded(false)
  }

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setSelectedFileName(file.name)

      // Create a temporary URL for the file
      const url = URL.createObjectURL(file)
      setSelectedFileUrl(url)

      // Simulate getting video duration (in a real app, you would use the video API)
      // For this demo, we'll set a random duration between 1-5 minutes
      const minutes = 1
      const seconds = Math.floor(Math.random() * 59)
      setSelectedFileDuration(`${minutes}:${seconds.toString().padStart(2, "0")}`)

      setIsFileUploaded(true)
    }
  }

  // Trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // Upload video
  const uploadVideo = () => {
    if (!currentLectureInfo || !selectedFileName) return

    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === currentLectureInfo.lectureId) {
                return {
                  ...lecture,
                  videoFile: selectedFileName,
                  videoDuration: selectedFileDuration,
                }
              }
              return lecture
            }),
          }
        }
        return section
      }),
    )
    setVideoUploadDialogOpen(false)
    setIsFileUploaded(false)
    setSelectedFileName("")
    setSelectedFileUrl("")
  }

  // Open caption dialog
  const openCaptionDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    setCurrentLectureInfo({ sectionId, lectureId })
    setCaptionText(lecture?.caption || "")
    setCaptionDialogOpen(true)
  }

  // Save caption
  const saveCaption = () => {
    if (!currentLectureInfo) return

    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === currentLectureInfo.lectureId) {
                return {
                  ...lecture,
                  caption: captionText,
                }
              }
              return lecture
            }),
          }
        }
        return section
      }),
    )
    setCaptionDialogOpen(false)
  }

  // Open attach file dialog
  const openAttachFileDialog = (sectionId, lectureId) => {
    setCurrentLectureInfo({ sectionId, lectureId })
    setAttachFileDialogOpen(true)
    setAttachedFileName("")
  }

  // Handle attach file selection
  const handleAttachFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFileName(e.target.files[0].name)
    }
  }

  // Trigger attach file input click
  const triggerAttachFileInput = () => {
    if (attachFileInputRef.current) {
      attachFileInputRef.current.click()
    }
  }

  // Attach file
  const attachFile = () => {
    if (!currentLectureInfo || !attachedFileName) return

    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === currentLectureInfo.lectureId) {
                return {
                  ...lecture,
                  attachedFile: attachedFileName,
                }
              }
              return lecture
            }),
          }
        }
        return section
      }),
    )
    setAttachFileDialogOpen(false)
  }

  // Open description dialog
  const openDescriptionDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    setCurrentLectureInfo({ sectionId, lectureId })
    setDescriptionText(lecture?.description || "")
    setDescriptionDialogOpen(true)
  }

  // Save description
  const saveDescription = () => {
    if (!currentLectureInfo) return

    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === currentLectureInfo.lectureId) {
                return {
                  ...lecture,
                  description: descriptionText,
                }
              }
              return lecture
            }),
          }
        }
        return section
      }),
    )
    setDescriptionDialogOpen(false)
  }

  // Open notes dialog
  const openNotesDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    setCurrentLectureInfo({ sectionId, lectureId })
    setNotesText(lecture?.notes || "")
    setNotesFileName("")
    setNotesDialogOpen(true)
  }

  // Handle notes file selection
  const handleNotesFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNotesFileName(e.target.files[0].name)
    }
  }

  // Trigger notes file input click
  const triggerNotesFileInput = () => {
    if (notesFileInputRef.current) {
      notesFileInputRef.current.click()
    }
  }

  // Save notes
  const saveNotes = () => {
    if (!currentLectureInfo) return

    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === currentLectureInfo.lectureId) {
                return {
                  ...lecture,
                  notes: notesText,
                }
              }
              return lecture
            }),
          }
        }
        return section
      }),
    )
    setNotesDialogOpen(false)
  }

  // Confirm delete dialog
  const confirmDelete = (type, sectionId, lectureId) => {
    setItemToDelete({ type, sectionId, lectureId })
    setDeleteDialogOpen(true)
  }

  // Delete section or lecture
  const handleDelete = () => {
    if (!itemToDelete) return

    if (itemToDelete.type === "section") {
      setSections(sections.filter((section) => section.id !== itemToDelete.sectionId))
    } else if (itemToDelete.type === "lecture" && itemToDelete.lectureId) {
      setSections(
        sections.map((section) => {
          if (section.id === itemToDelete.sectionId) {
            return {
              ...section,
              lectures: section.lectures.filter((lecture) => lecture.id !== itemToDelete.lectureId),
            }
          }
          return section
        }),
      )
    }

    setDeleteDialogOpen(false)
    setItemToDelete(null)
  }

  return (
    <div className="max-w-7xl mx-auto py-4">
      <CurriculumHeader/>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <Card key={section.id} className="p-4 bg-slate-50 border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 flex-1">
                <span className="text-slate-500">=</span>
                <span className="text-slate-500">Sections {(index + 1).toString().padStart(2, "0")}:</span>
                <span>{section.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-400 hover:text-slate-600"
                  onClick={() => openEditSectionDialog(section.id)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-400 hover:text-slate-600"
                  onClick={() => confirmDelete("section", section.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              {section.lectures.map((lecture) => (
                <div key={lecture.id} className="bg-white border border-slate-200 rounded-md">
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-slate-500">=</span>
                      <span>{lecture.name}</span>
                      <div className="flex flex-wrap gap-1">
                        {lecture.videoFile && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Video</span>
                        )}
                        {lecture.caption && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Caption</span>
                        )}
                        {lecture.attachedFile && (
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">File</span>
                        )}
                        {lecture.description && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            Description
                          </span>
                        )}
                        {lecture.notes && (
                          <span className="text-xs bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full">Notes</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-orange-50 text-orange-500 hover:bg-orange-100 border-orange-200"
                            onClick={() => toggleLecture(section.id, lecture.id)}
                          >
                            Contents{" "}
                            {lecture.isOpen ? (
                              <ChevronUp className="ml-1 h-4 w-4" />
                            ) : (
                              <ChevronDown className="ml-1 h-4 w-4" />
                            )}
                          </Button>
                        </DropdownMenuTrigger>
                        {lecture.isOpen && (
                          <DropdownMenuContent align="end" className="w-[180px]">
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={() => openVideoUploadDialog(section.id, lecture.id)}
                            >
                              <VideoIcon className="mr-2 h-4 w-4" />
                              <span>Video</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={() => openAttachFileDialog(section.id, lecture.id)}
                            >
                              <File className="mr-2 h-4 w-4" />
                              <span>Attach File</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={() => openCaptionDialog(section.id, lecture.id)}
                            >
                              <span className="ml-6">Captions</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={() => openDescriptionDialog(section.id, lecture.id)}
                            >
                              <span className="ml-6">Description</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={() => openNotesDialog(section.id, lecture.id)}
                            >
                              <span className="ml-6">Lecture Notes</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        )}
                      </DropdownMenu>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-slate-600"
                        onClick={() => openEditLectureDialog(section.id, lecture.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-slate-400 hover:text-slate-600"
                        onClick={() => confirmDelete("lecture", section.id, lecture.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="ghost" size="sm" className="mt-2" onClick={() => addLecture(section.id)}>
              <Plus className="mr-1 h-4 w-4" /> Add lecture
            </Button>
          </Card>
        ))}
      </div>

      <Button
        variant="ghost"
        className="w-full mt-4 py-3 text-orange-500 bg-orange-50 hover:bg-orange-100"
        onClick={addSection}
      >
        Add Sections
      </Button>

      <div className="flex justify-between mt-8">
        <Button variant="outline">Previous</Button>
        <Button className="bg-orange-500 hover:bg-orange-600">Save & Next</Button>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {itemToDelete?.type === "section"
                ? "This will delete the section and all its lectures."
                : "This will delete the lecture and all its content."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Section Dialog */}
      <Dialog open={editSectionDialogOpen} onOpenChange={setEditSectionDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Section Name</DialogTitle>
            <button
              onClick={() => setEditSectionDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="section-name">Section</Label>
              <Input
                id="section-name"
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
                placeholder="Write your section name here..."
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setEditSectionDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveSectionName} className="bg-orange-500 hover:bg-orange-600 text-white">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Lecture Dialog */}
      <Dialog open={editLectureDialogOpen} onOpenChange={setEditLectureDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Lecture Name</DialogTitle>
            <button
              onClick={() => setEditLectureDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="lecture-name">Lecture</Label>
              <Input
                id="lecture-name"
                value={newLectureName}
                onChange={(e) => setNewLectureName(e.target.value)}
                placeholder="Write your lecture name here..."
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setEditLectureDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveLectureName} className="bg-orange-500 hover:bg-orange-600 text-white">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Video Upload Dialog */}
      <Dialog open={videoUploadDialogOpen} onOpenChange={setVideoUploadDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Lecture Video</DialogTitle>
            <button
              onClick={() => setVideoUploadDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
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
                  {selectedFileName && <p className="text-sm text-gray-700 mt-2 font-medium">{selectedFileName}</p>}
                </div>
                <Button variant="outline" className="h-12" onClick={triggerFileInput}>
                  Upload File
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                <span className="font-medium">Note:</span> All files should be at least 720p and less than 4.0 GB.
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <div className="text-green-600 text-sm font-medium">FILE UPLOADED • {selectedFileDuration}</div>
                  <div className="text-gray-800 mt-1">{selectedFileName}</div>
                  <button className="text-blue-500 hover:text-blue-700 text-sm mt-2" onClick={triggerFileInput}>
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
                setVideoUploadDialogOpen(false)
                setIsFileUploaded(false)
                setSelectedFileName("")
                setSelectedFileUrl("")
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

      {/* Caption Dialog */}
      <Dialog open={captionDialogOpen} onOpenChange={setCaptionDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Lecture Caption</DialogTitle>
            <button
              onClick={() => setCaptionDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
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
            <Button variant="outline" onClick={() => setCaptionDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveCaption} className="bg-orange-500 hover:bg-orange-600 text-white">
              Add Caption
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Attach File Dialog */}
      <Dialog open={attachFileDialogOpen} onOpenChange={setAttachFileDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Attach File</DialogTitle>
            <button
              onClick={() => setAttachFileDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
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
              <input type="file" ref={attachFileInputRef} className="hidden" onChange={handleAttachFileSelect} />
              <p className="text-sm text-gray-500 text-center">Attach File</p>
              <p className="text-xs text-gray-400 mt-1 text-center">Drag and drop a file or browse file</p>
              {attachedFileName && <p className="text-sm text-gray-700 mt-2 font-medium">{attachedFileName}</p>}
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setAttachFileDialogOpen(false)}>
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

      {/* Description Dialog */}
      <Dialog open={descriptionDialogOpen} onOpenChange={setDescriptionDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Lecture Description</DialogTitle>
            <button
              onClick={() => setDescriptionDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>
          <div className="py-4">
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={descriptionText}
                onChange={(e) => setDescriptionText(e.target.value)}
                placeholder="Write your lecture description here..."
                className="min-h-[150px]"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setDescriptionDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveDescription} className="bg-orange-500 hover:bg-orange-600 text-white">
              Add Description
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Notes Dialog */}
      <Dialog open={notesDialogOpen} onOpenChange={setNotesDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Lecture Notes</DialogTitle>
            <button
              onClick={() => setNotesDialogOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
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
                <input type="file" ref={notesFileInputRef} className="hidden" onChange={handleNotesFileSelect} />
                <p className="text-xs text-gray-400 text-center">Drag an drop a file or browse file</p>
                {notesFileName && <p className="text-sm text-gray-700 mt-2 font-medium">{notesFileName}</p>}
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setNotesDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveNotes} className="bg-orange-500 hover:bg-orange-600 text-white">
              Add Description
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
