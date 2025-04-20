"use client";
import { useState } from "react";
import CourseReview from "../CoursePreview/CoursePreview";

export default function FormHeader({ title, formData }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="border-b">
        <div className="max-w-7xl mx-auto py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-primary-100 text-primary-500 hover:bg-gray-100 transition-colors font-bold"
              onClick={() => console.log("Save clicked")}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-white text-orange-500 hover:bg-orange-50 transition-colors font-bold"
              onClick={() => setShowModal(true)}
            >
              Save & Preview
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowModal(false)} // click outside to close
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <CourseReview formData={formData} />
          </div>
        </div>
      )}
    </>
  );
}
