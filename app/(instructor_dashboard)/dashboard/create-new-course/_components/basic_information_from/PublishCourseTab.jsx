export default function PublishCourseTab() {
  return (
    <div className="flex items-center py-4 text-sm font-medium cursor-pointer text-gray-500">
      <div className="flex items-center justify-center w-6 h-6 mr-2 bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      </div>
      <span>Publish Course</span>
    </div>
  );
}
