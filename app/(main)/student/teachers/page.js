import { getInstructors } from "@/lib/fetchData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FilterSection from "./_components/filter";
import InstructorList from "./_components/instructors";

export default async function Teachers() {
  const instructors = await getInstructors();
  return (
    <main className="min-h-screen">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold text-gray-900">
          Instructors ({instructors.length})
        </h1>

        <FilterSection />

        <InstructorList instructors={instructors} />

        <div className="flex items-center mb-10 justify-center space-x-3">
          {/* Previous Button */}
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50 text-orange-500 hover:bg-orange-100">
            <ArrowLeft size={18} />
          </button>

          {/* Page Numbers */}
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50 text-gray-900 hover:bg-orange-100">
            01
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500 text-white">
            02
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50 text-gray-900 hover:bg-orange-100">
            03
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50 text-orange-500">
            04
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50 text-gray-900 hover:bg-orange-100">
            05
          </button>

          {/* Next Button */}
          <button className="w-10 h-10  rounded-full flex items-center justify-center bg-orange-50 text-orange-500 hover:bg-orange-100">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}
