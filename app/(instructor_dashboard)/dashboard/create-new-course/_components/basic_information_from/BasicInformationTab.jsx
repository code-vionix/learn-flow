import { CheckCircle } from "lucide-react";

export default function BasicInformationTab({ progress }) {
  const totalInput = 10;
  const isCompleted = progress === totalInput;

  return (
    <div className="flex items-center py-4 text-sm font-medium cursor-pointer text-gray-700 border-b-4 border-primary-500">
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
          className="text-gray-700"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      </div>
      <span>Basic Information</span>

      {isCompleted ? (
        <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
      ) : (
        <span className="ml-2 text-green-500 text-xs">
          {progress}/{totalInput}
        </span>
      )}
    </div>
  );
}
