export default function FormHeader({ title }) {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-primary-100 text-primary-500 hover:bg-gray-100 transition-colors font-bold">
            Save
          </button>
          <button className="px-4 py-2 bg-white text-orange-500 hover:bg-orange-50 transition-colors font-bold">
            Save & Preview
          </button>
        </div>
      </div>
    </div>
  );
}
