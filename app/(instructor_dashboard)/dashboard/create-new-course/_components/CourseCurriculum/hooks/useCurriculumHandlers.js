// File: hooks/useCurriculumHandlers.js
import { useRef, useState } from "react";

export default function useCurriculumHandlers() {
  const [sections, setSections] = useState([
    {
      id: "section-1",
      name: "Section name",
      lectures: [
        { id: "lecture-1", name: "Lecture name", isOpen: false },
        { id: "lecture-2", name: "Lecture name", isOpen: true },
      ],
    },
  ]);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [editSectionDialogOpen, setEditSectionDialogOpen] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState(null);
  const [newSectionName, setNewSectionName] = useState("");

  const [editLectureDialogOpen, setEditLectureDialogOpen] = useState(false);
  const [currentLectureInfo, setCurrentLectureInfo] = useState(null);
  const [newLectureName, setNewLectureName] = useState("");

  const [videoUploadDialogOpen, setVideoUploadDialogOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const [selectedFileDuration, setSelectedFileDuration] = useState("");
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const fileInputRef = useRef(null);

  const [captionDialogOpen, setCaptionDialogOpen] = useState(false);
  const [captionText, setCaptionText] = useState("");

  const [attachFileDialogOpen, setAttachFileDialogOpen] = useState(false);
  const [attachedFileName, setAttachedFileName] = useState("");
  const attachFileInputRef = useRef(null);

  const [descriptionDialogOpen, setDescriptionDialogOpen] = useState(false);
  const [descriptionText, setDescriptionText] = useState("");

  const [notesDialogOpen, setNotesDialogOpen] = useState(false);
  const [notesText, setNotesText] = useState("");
  const [notesFileName, setNotesFileName] = useState("");
  const notesFileInputRef = useRef(null);

  const toggleLecture = (sectionId, lectureId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => ({
              ...lecture,
              isOpen: lecture.id === lectureId ? !lecture.isOpen : false,
            })),
          };
        }
        return section;
      })
    );
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: `section-${Date.now()}`,
        name: "New section",
        lectures: [],
      },
    ]);
  };

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
          };
        }
        return section;
      })
    );
  };

  const confirmDelete = (type, sectionId, lectureId = null) => {
    setItemToDelete({ type, sectionId, lectureId });
    setDeleteDialogOpen(true);
  };

  const handleDelete = () => {
    if (!itemToDelete) return;

    if (itemToDelete.type === "section") {
      setSections(
        sections.filter((section) => section.id !== itemToDelete.sectionId)
      );
    } else if (itemToDelete.type === "lecture") {
      setSections(
        sections.map((section) => {
          if (section.id === itemToDelete.sectionId) {
            return {
              ...section,
              lectures: section.lectures.filter(
                (l) => l.id !== itemToDelete.lectureId
              ),
            };
          }
          return section;
        })
      );
    }

    setDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const openEditSectionDialog = (sectionId) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      setCurrentSectionId(sectionId);
      setNewSectionName(section.name);
      setEditSectionDialogOpen(true);
    }
  };

  const saveSectionName = () => {
    if (!currentSectionId) return;
    setSections(
      sections.map((section) =>
        section.id === currentSectionId
          ? { ...section, name: newSectionName || "Untitled Section" }
          : section
      )
    );
    setEditSectionDialogOpen(false);
  };

  const openEditLectureDialog = (sectionId, lectureId) => {
    const lecture = sections
      .find((s) => s.id === sectionId)
      ?.lectures.find((l) => l.id === lectureId);
    if (lecture) {
      setCurrentLectureInfo({ sectionId, lectureId });
      setNewLectureName(lecture.name);
      setEditLectureDialogOpen(true);
    }
  };

  const saveLectureName = () => {
    if (!currentLectureInfo) return;
    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === currentLectureInfo.lectureId
                ? { ...lecture, name: newLectureName || "Untitled Lecture" }
                : lecture
            ),
          };
        }
        return section;
      })
    );
    setEditLectureDialogOpen(false);
  };

  const openVideoUploadDialog = (sectionId, lectureId) => {
    setCurrentLectureInfo({ sectionId, lectureId });
    setVideoUploadDialogOpen(true);
    setSelectedFileName("");
    setIsFileUploaded(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFileName(file.name);
    setSelectedFileUrl(URL.createObjectURL(file));
    setSelectedFileDuration(
      `1:${String(Math.floor(Math.random() * 59)).padStart(2, "0")}`
    );
    setIsFileUploaded(true);
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const uploadVideo = () => {
    if (!currentLectureInfo || !selectedFileName) return;
    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === currentLectureInfo.lectureId
                ? {
                    ...lecture,
                    videoFile: selectedFileName,
                    videoDuration: selectedFileDuration,
                  }
                : lecture
            ),
          };
        }
        return section;
      })
    );
    setVideoUploadDialogOpen(false);
  };

  const openCaptionDialog = (sectionId, lectureId) => {
    const lecture = sections
      .find((s) => s.id === sectionId)
      ?.lectures.find((l) => l.id === lectureId);
    setCurrentLectureInfo({ sectionId, lectureId });
    setCaptionText(lecture?.caption || "");
    setCaptionDialogOpen(true);
  };

  const saveCaption = () => {
    if (!currentLectureInfo) return;
    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === currentLectureInfo.lectureId
                ? { ...lecture, caption: captionText }
                : lecture
            ),
          };
        }
        return section;
      })
    );
    setCaptionDialogOpen(false);
  };

  const openAttachFileDialog = (sectionId, lectureId) => {
    setCurrentLectureInfo({ sectionId, lectureId });
    setAttachFileDialogOpen(true);
    setAttachedFileName("");
  };

  const handleAttachFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) setAttachedFileName(file.name);
  };

  const triggerAttachFileInput = () => attachFileInputRef.current?.click();

  const attachFile = () => {
    if (!currentLectureInfo || !attachedFileName) return;
    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === currentLectureInfo.lectureId
                ? { ...lecture, attachedFile: attachedFileName }
                : lecture
            ),
          };
        }
        return section;
      })
    );
    setAttachFileDialogOpen(false);
  };

  const openDescriptionDialog = (sectionId, lectureId) => {
    const lecture = sections
      .find((s) => s.id === sectionId)
      ?.lectures.find((l) => l.id === lectureId);
    setCurrentLectureInfo({ sectionId, lectureId });
    setDescriptionText(lecture?.description || "");
    setDescriptionDialogOpen(true);
  };

  const saveDescription = () => {
    if (!currentLectureInfo) return;
    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === currentLectureInfo.lectureId
                ? { ...lecture, description: descriptionText }
                : lecture
            ),
          };
        }
        return section;
      })
    );
    setDescriptionDialogOpen(false);
  };

  const openNotesDialog = (sectionId, lectureId) => {
    const lecture = sections
      .find((s) => s.id === sectionId)
      ?.lectures.find((l) => l.id === lectureId);
    setCurrentLectureInfo({ sectionId, lectureId });
    setNotesText(lecture?.notes || "");
    setNotesFileName("");
    setNotesDialogOpen(true);
  };

  const handleNotesFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) setNotesFileName(file.name);
  };

  const triggerNotesFileInput = () => notesFileInputRef.current?.click();

  const saveNotes = () => {
    if (!currentLectureInfo) return;
    setSections(
      sections.map((section) => {
        if (section.id === currentLectureInfo.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === currentLectureInfo.lectureId
                ? { ...lecture, notes: notesText }
                : lecture
            ),
          };
        }
        return section;
      })
    );
    setNotesDialogOpen(false);
  };

  return {
    sections,
    openVideoUploadDialog,
    setSections,
    toggleLecture,
    addSection,
    addLecture,
    deleteDialogOpen,
    setDeleteDialogOpen,
    itemToDelete,
    confirmDelete,
    handleDelete,
    editSectionDialogOpen,
    setEditSectionDialogOpen,
    currentSectionId,
    newSectionName,
    setNewSectionName,
    openEditSectionDialog,
    saveSectionName,
    editLectureDialogOpen,
    setEditLectureDialogOpen,
    currentLectureInfo,
    newLectureName,
    setNewLectureName,
    openEditLectureDialog,
    saveLectureName,
    videoUploadDialogOpen,
    setVideoUploadDialogOpen,
    isFileUploaded,
    selectedFileName,
    selectedFileUrl,
    selectedFileDuration,
    fileInputRef,
    triggerFileInput,
    handleFileSelect,
    uploadVideo,
    captionDialogOpen,
    setCaptionDialogOpen,
    captionText,
    setCaptionText,
    openCaptionDialog,
    saveCaption,
    attachFileDialogOpen,
    setAttachFileDialogOpen,
    attachedFileName,
    attachFileInputRef,
    triggerAttachFileInput,
    handleAttachFileSelect,
    openAttachFileDialog,
    attachFile,
    descriptionDialogOpen,
    setDescriptionDialogOpen,
    descriptionText,
    setDescriptionText,
    openDescriptionDialog,
    saveDescription,
    notesDialogOpen,
    setNotesDialogOpen,
    notesText,
    setNotesText,
    notesFileName,
    notesFileInputRef,
    triggerNotesFileInput,
    handleNotesFileSelect,
    openNotesDialog,
    saveNotes,
  };
}
