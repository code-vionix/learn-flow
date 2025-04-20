import LectureItem from "./LectureItem";

export default function LectureList({
  section,
  toggleLecture,
  openVideoUploadDialog,
  openAttachFileDialog,
  openCaptionDialog,
  openDescriptionDialog,
  openNotesDialog,
  openEditLectureDialog,
  confirmDelete,
}) {
  return (
    <div className="space-y-2">
      {section.lectures.map((lecture) => (
        <LectureItem
          key={lecture.id}
          lecture={lecture}
          sectionId={section.id}
          toggleLecture={toggleLecture}
          openVideoUploadDialog={openVideoUploadDialog}
          openAttachFileDialog={openAttachFileDialog}
          openCaptionDialog={openCaptionDialog}
          openDescriptionDialog={openDescriptionDialog}
          openNotesDialog={openNotesDialog}
          openEditLectureDialog={openEditLectureDialog}
          confirmDelete={confirmDelete}
        />
      ))}
    </div>
  );
}
