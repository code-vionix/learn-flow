/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import CurriculumHeader from "./components/CurriculumHeader";
import SectionCard from "./components/SectionCard";
import AttachFileDialog from "./dialogs/AttachFileDialog";
import CaptionDialog from "./dialogs/CaptionDialog";
import DeleteConfirmationDialog from "./dialogs/DeleteConfirmationDialog";
import DescriptionDialog from "./dialogs/DescriptionDialog";
import EditLectureDialog from "./dialogs/EditLectureDialog";
import EditSectionDialog from "./dialogs/EditSectionDialog";
import NotesDialog from "./dialogs/NotesDialog";
import VideoUploadDialog from "./dialogs/VideoUploadDialog";
import useCurriculumHandlers from "./hooks/useCurriculumHandlers";

export default function CourseCurriculum() {
  const {
    sections,
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
    openVideoUploadDialog,
  } = useCurriculumHandlers();

  return (
    <div className="max-w-7xl mx-auto py-4">
      <CurriculumHeader />

      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionCard
            key={section.id}
            section={section}
            index={index}
            sections={sections}
            setSections={setSections}
            openEditSectionDialog={openEditSectionDialog}
            confirmDelete={confirmDelete}
            toggleLecture={toggleLecture}
            openVideoUploadDialog={openVideoUploadDialog}
            openAttachFileDialog={openAttachFileDialog}
            openCaptionDialog={openCaptionDialog}
            openDescriptionDialog={openDescriptionDialog}
            openNotesDialog={openNotesDialog}
            openEditLectureDialog={openEditLectureDialog}
          />
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
        <Button
          className="bg-orange-500 hover:bg-orange-600"
          onClick={() => {
            // Log the sections or other relevant data
            console.log("Sections Data:", sections);
          }}
        >
          Save & Next
        </Button>
      </div>

      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        setOpen={setDeleteDialogOpen}
        itemToDelete={itemToDelete}
        handleDelete={handleDelete}
      />

      <EditSectionDialog
        open={editSectionDialogOpen}
        setOpen={setEditSectionDialogOpen}
        newSectionName={newSectionName}
        setNewSectionName={setNewSectionName}
        saveSectionName={saveSectionName}
      />

      <EditLectureDialog
        open={editLectureDialogOpen}
        setOpen={setEditLectureDialogOpen}
        newLectureName={newLectureName}
        setNewLectureName={setNewLectureName}
        saveLectureName={saveLectureName}
      />

      <VideoUploadDialog
        open={videoUploadDialogOpen}
        setOpen={setVideoUploadDialogOpen}
        isFileUploaded={isFileUploaded}
        triggerFileInput={triggerFileInput}
        handleFileSelect={handleFileSelect}
        fileInputRef={fileInputRef}
        selectedFileName={selectedFileName}
        selectedFileUrl={selectedFileUrl}
        selectedFileDuration={selectedFileDuration}
        uploadVideo={uploadVideo}
        resetVideoUpload={() => {
          setIsFileUploaded(false);
          setSelectedFileName("");
          setSelectedFileUrl("");
        }}
      />

      <CaptionDialog
        open={captionDialogOpen}
        setOpen={setCaptionDialogOpen}
        captionText={captionText}
        setCaptionText={setCaptionText}
        saveCaption={saveCaption}
      />

      <AttachFileDialog
        open={attachFileDialogOpen}
        setOpen={setAttachFileDialogOpen}
        attachedFileName={attachedFileName}
        triggerAttachFileInput={triggerAttachFileInput}
        attachFileInputRef={attachFileInputRef}
        handleAttachFileSelect={handleAttachFileSelect}
        attachFile={attachFile}
      />

      <DescriptionDialog
        open={descriptionDialogOpen}
        setOpen={setDescriptionDialogOpen}
        descriptionText={descriptionText}
        setDescriptionText={setDescriptionText}
        saveDescription={saveDescription}
      />

      <NotesDialog
        open={notesDialogOpen}
        setOpen={setNotesDialogOpen}
        notesText={notesText}
        setNotesText={setNotesText}
        notesFileName={notesFileName}
        triggerNotesFileInput={triggerNotesFileInput}
        notesFileInputRef={notesFileInputRef}
        handleNotesFileSelect={handleNotesFileSelect}
        saveNotes={saveNotes}
      />
    </div>
  );
}
