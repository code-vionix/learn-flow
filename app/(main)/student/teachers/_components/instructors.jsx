"use client";

import InstractorCards from "./instructorCard";

export default function InstructorList({ instructors }) {
  return (
    <div className="flex flex-wrap gap-6 mb-10 justify-between">
      {instructors.map((instructor, index) => (
        <InstractorCards key={index} instructor={instructor} />
      ))}
    </div>
  );
}
