/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import FormHeader from "../basic_information_from/FormHeader";
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

export default function CourseCurriculum({ title, okkkkejiknBack, onNext }) {
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
    <>
      <FormHeader
        title="Course Curriculum
"
      />
      <div className="max-w-7xl mx-auto py-4">
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
          className="w-full h-12 mt-4 py-3 text-primary-500 bg-primary-100 hover:bg-primary-200 rounded-none border-0"
          onClick={addSection}
        >
          Add Sections
        </Button>

        <div className="flex justify-between mt-28">
          <Button
            onClick={() => onBack()}
            variant="outline"
            className="rounded-none hover:bg-primary-100  h-14 w-32"
          >
            Previous
          </Button>
          <Button
            className="bg-primary-500 hover:bg-primary-600 h-14 rounded-none border-0 w-40"
            onClick={() => {
              // Log the sections or other relevant data

              onNext();
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
    </>
  );
}
