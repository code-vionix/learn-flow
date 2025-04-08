import { Play, Upload } from "lucide-react";

export default function CourseMediaUploader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div>
        <h2 className="text-base font-medium text-gray-900 mb-4">
          Course Thumbnail
        </h2>
        <div className="">
          <div className=" flex justify-between gap-8">
            <div className="w-56 h-40 bg-gray-100 flex items-center justify-center mb-4">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="text-sm text-gray-600 flex flex-col gap-8 relative">
              <div className="top-0">
                <p>Upload your course Thumbnail here.</p>
                <p className="font-semibold">Important guidelines:</p>
                <p>
                  1200×800 pixels or 12:8 Ratio. Supported format:
                  <span className="text-gray-700 font-medium">
                    .jpg, .jpeg, or .png
                  </span>
                </p>
              </div>

              <button className="flex items-center px-4 py-2 w-48 h-12 text-orange-500 bg-orange-50 hover:bg-orange-100 transition">
                Upload Image
                <Upload className="w-4 h-4 ml-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Trailer */}
      <div>
        <h2 className="text-base font-medium text-gray-900 mb-4">
          Course Trailer
        </h2>
        <div className="">
          <div className="flex justify-between gap-8">
            <div className="w-56 h-40 bg-gray-100  flex items-center justify-center mb-4">
              <Play className="w-12 h-12 text-gray-400" />
            </div>
            <div className="text-sm text-gray-600 mb-4  flex flex-col gap-8">
              <div>
                <p>
                  Students who watch a well-made promo video are <br />
                  <span className="font-medium text-gray-700">
                    5X more likely
                  </span>
                  to enroll in your course. We’ve seen that statistic go up to
                  <br />
                  <span className="font-medium text-gray-700">10X</span> for
                  exceptionally awesome videos.
                </p>
              </div>
              <button className="flex items-center px-4 py-2 w-48 h-12 text-orange-500 bg-orange-50 hover:bg-orange-100 transition">
                Upload Video
                <Upload className="w-4 h-4 ml-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
