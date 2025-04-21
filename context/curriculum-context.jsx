"use client"

import { createContext, useContext, useState } from "react"

const CurriculumContext = createContext(undefined)

export function CurriculumProvider({ children }) {
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

  // Current item tracking
  const [currentSectionId, setCurrentSectionId] = useState(null)
  const [currentLectureInfo, setCurrentLectureInfo] = useState(null)
  const [itemToDelete, setItemToDelete] = useState(null)

  // Dialog states
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editSectionDialogOpen, setEditSectionDialogOpen] = useState(false)
  const [editLectureDialogOpen, setEditLectureDialogOpen] = useState(false)
  const [videoUploadDialogOpen, setVideoUploadDialogOpen] = useState(false)
  const [captionDialogOpen, setCaptionDialogOpen] = useState(false)
  const [attachFileDialogOpen, setAttachFileDialogOpen] = useState(false)
  const [descriptionDialogOpen, setDescriptionDialogOpen] = useState(false)
  const [notesDialogOpen, setNotesDialogOpen] = useState(false)

  // Form values
  const [newSectionName, setNewSectionName] = useState("")
  const [newLectureName, setNewLectureName] = useState("")
  const [captionText, setCaptionText] = useState("")
  const [descriptionText, setDescriptionText] = useState("")
  const [notesText, setNotesText] = useState("")

  // File upload states
  const [selectedFileName, setSelectedFileName] = useState("")
  const [selectedFileUrl, setSelectedFileUrl] = useState("")
  const [selectedFileDuration, setSelectedFileDuration] = useState("")
  const [isFileUploaded, setIsFileUploaded] = useState(false)
  const [attachedFileName, setAttachedFileName] = useState("")
  const [notesFileName, setNotesFileName] = useState("")

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

  const openEditSectionDialog = (sectionId) => {
    const section = sections.find((s) => s.id === sectionId)
    if (section) {
      setCurrentSectionId(sectionId)
      setNewSectionName(section.name)
      setEditSectionDialogOpen(true)
    }
  }

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

  const openEditLectureDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    if (lecture) {
      setCurrentLectureInfo({ sectionId, lectureId })
      setNewLectureName(lecture.name)
      setEditLectureDialogOpen(true)
    }
  }

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

  const openVideoUploadDialog = (sectionId, lectureId) => {
    setCurrentLectureInfo({ sectionId, lectureId })
    setVideoUploadDialogOpen(true)
    setSelectedFileName("")
    setIsFileUploaded(false)
  }

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

  const openCaptionDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    setCurrentLectureInfo({ sectionId, lectureId })
    setCaptionText(lecture?.caption || "")
    setCaptionDialogOpen(true)
  }

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

  const openAttachFileDialog = (sectionId, lectureId) => {
    setCurrentLectureInfo({ sectionId, lectureId })
    setAttachFileDialogOpen(true)
    setAttachedFileName("")
  }

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

  const openDescriptionDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    setCurrentLectureInfo({ sectionId, lectureId })
    setDescriptionText(lecture?.description || "")
    setDescriptionDialogOpen(true)
  }

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

  const openNotesDialog = (sectionId, lectureId) => {
    const section = sections.find((s) => s.id === sectionId)
    const lecture = section?.lectures.find((l) => l.id === lectureId)

    setCurrentLectureInfo({ sectionId, lectureId })
    setNotesText(lecture?.notes || "")
    setNotesFileName("")
    setNotesDialogOpen(true)
  }

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

  const confirmDelete = (type, sectionId, lectureId) => {
    setItemToDelete({ type, sectionId, lectureId })
    setDeleteDialogOpen(true)
  }

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
    <CurriculumContext.Provider
      value={{
        // Data
        sections,
        currentSectionId,
        currentLectureInfo,
        itemToDelete,

        // Dialog states
        deleteDialogOpen,
        editSectionDialogOpen,
        editLectureDialogOpen,
        videoUploadDialogOpen,
        captionDialogOpen,
        attachFileDialogOpen,
        descriptionDialogOpen,
        notesDialogOpen,

        // Form values
        newSectionName,
        newLectureName,
        captionText,
        descriptionText,
        notesText,

        // File states
        selectedFileName,
        selectedFileUrl,
        selectedFileDuration,
        isFileUploaded,
        attachedFileName,
        notesFileName,

        // Setters
        setDeleteDialogOpen,
        setEditSectionDialogOpen,
        setEditLectureDialogOpen,
        setVideoUploadDialogOpen,
        setCaptionDialogOpen,
        setAttachFileDialogOpen,
        setDescriptionDialogOpen,
        setNotesDialogOpen,
        setNewSectionName,
        setNewLectureName,
        setCaptionText,
        setDescriptionText,
        setNotesText,
        setSelectedFileName,
        setSelectedFileUrl,
        setSelectedFileDuration,
        setIsFileUploaded,
        setAttachedFileName,
        setNotesFileName,

        // Actions
        toggleLecture,
        addSection,
        addLecture,
        openEditSectionDialog,
        saveSectionName,
        openEditLectureDialog,
        saveLectureName,
        openVideoUploadDialog,
        uploadVideo,
        openCaptionDialog,
        saveCaption,
        openAttachFileDialog,
        attachFile,
        openDescriptionDialog,
        saveDescription,
        openNotesDialog,
        saveNotes,
        confirmDelete,
        handleDelete,
      }}
    >
      {children}
    </CurriculumContext.Provider>
  )
}

export const useCurriculum = () => {
  const context = useContext(CurriculumContext)
  if (context === undefined) {
    throw new Error("useCurriculum must be used within a CurriculumProvider")
  }
  return context
}
