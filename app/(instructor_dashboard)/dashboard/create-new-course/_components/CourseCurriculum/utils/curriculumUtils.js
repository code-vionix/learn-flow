// utils/curriculumUtils.js

// Find a lecture
export const findLecture = (sections, sectionId, lectureId) => {
  return sections
    .find((section) => section.id === sectionId)
    ?.lectures.find((lecture) => lecture.id === lectureId);
};

// Update a field in a lecture
export const updateLectureField = (
  sections,
  { sectionId, lectureId },
  field,
  value
) => {
  return sections.map((section) => {
    if (section.id === sectionId) {
      return {
        ...section,
        lectures: section.lectures.map((lecture) =>
          lecture.id === lectureId ? { ...lecture, [field]: value } : lecture
        ),
      };
    }
    return section;
  });
};

// Update a whole lecture object with new fields
export const updateLecture = (sections, sectionId, lectureId, updates) => {
  return sections.map((section) => {
    if (section.id === sectionId) {
      return {
        ...section,
        lectures: section.lectures.map((lecture) =>
          lecture.id === lectureId ? { ...lecture, ...updates } : lecture
        ),
      };
    }
    return section;
  });
};

// Update a section's field
export const updateSectionField = (sections, sectionId, field, value) => {
  return sections.map((section) =>
    section.id === sectionId ? { ...section, [field]: value } : section
  );
};

// Remove a lecture
export const removeLecture = (sections, sectionId, lectureId) => {
  return sections.map((section) => {
    if (section.id === sectionId) {
      return {
        ...section,
        lectures: section.lectures.filter(
          (lecture) => lecture.id !== lectureId
        ),
      };
    }
    return section;
  });
};

// Remove a section
export const removeSection = (sections, sectionId) => {
  return sections.filter((section) => section.id !== sectionId);
};
