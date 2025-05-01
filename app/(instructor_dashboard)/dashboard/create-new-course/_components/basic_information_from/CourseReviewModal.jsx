import CourseReview1 from "../CoursePreview/CourseReview";

export default function CourseReviewModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-blue-500 w-4/5 max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-black"
        >
          ✕
        </button>
        <CourseReview1 />
      </div>
    </div>
  );
}
