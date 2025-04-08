import { Play, Upload } from "lucide-react";

export default function TrailerUploader() {
  return (
    <div>
      <h2 className="text-base font-medium text-gray-900 mb-4">
        Course Trailer
      </h2>
      <div className="border border-gray-200 p-4">
        <div className="bg-gray-50 p-6 flex flex-col items-center justify-center">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Play className="w-12 h-12 text-gray-400" />
          </div>
          <div className="text-sm text-gray-600 text-center mb-4">
            <p>
              Students who watch a well-made promo video are 5X more likely to
              enroll. That can go up to 10X!
            </p>
          </div>
          <button className="flex items-center px-4 py-2 text-orange-500 bg-orange-50 hover:bg-orange-100 transition">
            <Upload className="w-4 h-4 mr-2" />
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
}
