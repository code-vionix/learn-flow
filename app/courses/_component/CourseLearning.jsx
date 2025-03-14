import { CheckCircle } from "lucide-react";

export default function CourseLearning() {
  return (
    <div className="bg-[#E1F7E366] p-10 space-y-5 rounded-lg">
      <h2 className="text-2xl font-semibold">
        What you will learn in this course
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-2">
            <CheckCircle className="w-6 h-6 text-[#23BD33] flex-shrink-0" />
            <p className="text-gray-700">
              You will learn how to design beautiful websites...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
