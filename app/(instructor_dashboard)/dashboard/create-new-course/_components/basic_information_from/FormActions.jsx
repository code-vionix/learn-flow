// FormActions.jsx
export default function FormActions({ handleSaveAndNext }) {
  return (
    <div className="flex justify-between pt-6">
      <button
        type="button"
        className="px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={handleSaveAndNext} // Calls the passed function to log data
        className="px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
      >
        Save & Next
      </button>
    </div>
  );
}
