export default function FormActions() {
  return (
    <div className="flex justify-between pt-6">
      <button
        type="button"
        className="px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
      >
        Save & Next
      </button>
    </div>
  );
}
