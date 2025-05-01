import AdvancedInformation from "./AdvancedInformation";
import BasicInformation from "./BasicInformation";
import CurriculumOverview from "./CurriculumOverview";
import Header from "./Header";

export default function CourseReview({ formData }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Course Review</h1>
          </div>

          <BasicInformation formData={formData} />
          <AdvancedInformation />
          <CurriculumOverview />
        </div>
      </main>
    </div>
  );
}
