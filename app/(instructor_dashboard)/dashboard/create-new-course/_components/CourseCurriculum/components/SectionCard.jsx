// File: components/curriculum/SectionCard/index.jsx

import { Card } from "@/components/ui/card";
import LectureList from "./LectureList";
import SectionHeader from "./SectionHeader";

export default function SectionCard({
  section,
  index,
  setSections,
  sections,
  openEditSectionDialog,
  confirmDelete,
  toggleLecture,
  openVideoUploadDialog,
  openAttachFileDialog,
  openCaptionDialog,
  openDescriptionDialog,
  openNotesDialog,
  openEditLectureDialog,
}) {
  return (
    <Card className="p-4 bg-slate-50 border-slate-200">
      <SectionHeader
        section={section}
        index={index}
        setSections={setSections}
        sections={sections}
        openEditSectionDialog={openEditSectionDialog}
        confirmDelete={confirmDelete}
      />
      <LectureList
        section={section}
        toggleLecture={toggleLecture}
        openVideoUploadDialog={openVideoUploadDialog}
        openAttachFileDialog={openAttachFileDialog}
        openCaptionDialog={openCaptionDialog}
        openDescriptionDialog={openDescriptionDialog}
        openNotesDialog={openNotesDialog}
        openEditLectureDialog={openEditLectureDialog}
        confirmDelete={confirmDelete}
      />
    </Card>
  );
}
