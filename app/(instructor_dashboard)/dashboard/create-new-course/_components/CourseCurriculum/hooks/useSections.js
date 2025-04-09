import { useState } from "react";

export function useSections() {
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

  const toggleLecture = (sectionId, lectureId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) => {
              if (lecture.id === lectureId) {
                return { ...lecture, isOpen: !lecture.isOpen };
              }
              return { ...lecture, isOpen: false };
            }),
          };
        }
        return section;
      })
    );
  };

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      name: "New section",
      lectures: [],
    };
    setSections([...sections, newSection]);
  };

  const addLecture = (sectionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: [
              ...section.lectures,
              { id: `lecture-${Date.now()}`, name: "New lecture", isOpen: false },
            ],
          };
        }
        return section;
      })
    );
  };

  const updateSectionName = (sectionId, newName) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId ? { ...section, name: newName } : section
      )
    );
  };

  const updateLectureName = (sectionId, lectureId, newName) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === lectureId ? { ...lecture, name: newName } : lecture
            ),
          };
        }
        return section;
      })
    );
  };

  const deleteSection = (sectionId) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };

  const deleteLecture = (sectionId, lectureId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: section.lectures.filter(
              (lecture) => lecture.id !== lectureId
            ),
          };
        }
        return section;
      })
    );
  };

  return {
    sections,
    toggleLecture,
    addSection,
    addLecture,
    updateSectionName,
    updateLectureName,
    deleteSection,
    deleteLecture,
  };
}
