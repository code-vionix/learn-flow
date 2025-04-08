import { CheckCircle } from "lucide-react";

export default function AdvanceInformationTab({ isActive }) {
  const totalInput = 6; // Adjust based on your actual fields
  const progress = 5;
  const isCompleted = progress === totalInput;

  return (
    <div
      className={`flex items-center py-4 text-sm font-medium cursor-pointer ${
        isActive ? "font-bold border-b-4 border-orange-500" : "text-gray-500"
      }`}
    >
      <div
        className={`flex items-center justify-center w-6 h-6 mr-2 rounded bg-gray-100 ${
          isActive ? "" : "text-gray-500"
        }`}
      >
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
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
        </svg>
      </div>
      <span>Advance Information</span>

      {isCompleted ? (
        <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
      ) : progress > 0 ? (
        <span className="ml-2 text-green-500 text-xs">
          {progress}/{totalInput}
        </span>
      ) : null}
    </div>
  );
}
