"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
// import { setCourseId } from "@/lib/redux/curriculumSlice"
// import { SectionItem } from "@/components/section-item"
// import { CoursePreviewModal } from "@/components/modals/course-preview-modal"
import { SectionItem } from "@/components/course/section-item";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useGetCourseByIdQuery } from "@/store/api/courseApi";
import { useAddNewModuleMutation } from "@/store/api/moduleApi";
import { useDispatch } from "react-redux";
import { setEditActiveTab } from "@/store/slice/courseUpdateSlice";
// import { useGetCurriculumQuery, useCreateSectionMutation } from "@/lib/redux/apiSlice"

export default function CourseCurriculumPage({ course }) {
  const dispatch = useDispatch();

  // RTK Query hooks
  const {
    data: courseData,
    isLoading,
    isError,
    error,
  } = useGetCourseByIdQuery(course?.id);
  // console.log(courseData);

  const [createSection, { isLoading: isCreatingSection }] =
    useAddNewModuleMutation();

  const handleAddSection = async () => {
    try {
      const res = await createSection({
        courseId: course?.id,
        title: `Section ${
          courseData?.modules.length ? courseData.modules.length + 1 : 1
        }: New Section`,
      }).unwrap();
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    dispatch(setEditActiveTab("publish"));
  };

  const handlePrevious = () => {
    dispatch(setEditActiveTab("advance"));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="m-4">
        {/* Progress steps */}

        {/* Curriculum builder */}
        <div className="mx-auto rounded-lg border bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Course Curriculum</h2>
          </div>

          {/* Error message */}
          {isError && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error ? error.message : "Failed to load curriculum"}
              </AlertDescription>
            </Alert>
          )}

          {/* Loading state */}
          {isLoading && (
            <div className="flex h-40 items-center justify-center">
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-2 text-sm text-gray-500">
                  Loading curriculum...
                </p>
              </div>
            </div>
          )}

          {/* Sections */}
          {!isLoading && courseData && (
            <div className="space-y-4">
              {courseData?.modules?.map((module) => (
                <SectionItem
                  key={module.id}
                  section={module}
                  courseId={course?.id}
                />
              ))}

              <Button
                variant="outline"
                className="w-full bg-orange-50 py-6 text-orange-500 hover:bg-orange-100 hover:text-orange-600"
                onClick={handleAddSection}
                // disabled={isCreatingSection}
              >
                {isCreatingSection ? (
                  <div className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </div>
                ) : (
                  "Add Sections"
                )}
              </Button>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline"
              disabled={isLoading || isCreatingSection}
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600"
              disabled={isLoading || isCreatingSection}
              onClick={handleNext}
            >
              Save & Next
            </Button>
          </div>
        </div>
      </main>
      {/* {curriculumData && <CoursePreviewModal isOpen={isPreviewModalOpen} onClose={closePreviewModal} />} */}
    </div>
  );
}
