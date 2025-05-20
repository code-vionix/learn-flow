"use client";

import { useState, useEffect } from "react";
import { Search, Bell, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  useAddNewModuleMutation,
  useGetModuleByCourseIdQuery,
} from "@/store/api/moduleApi";
import { SectionItem } from "@/components/course/section-item";
import { useGetCourseByIdQuery } from "@/store/api/courseApi";
import { CoursePreviewModal } from "@/components/modals/course-preview-modal";
import { setActiveTab } from "@/store/slice/courseCreateSlice";

export default function CourseCurriculumPage() {
  const dispatch = useDispatch();
  const courseId = useSelector((state) => state.course.courseId);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  console.log(courseId);

  // RTK Query hooks
  const {
    data: courseData,
    isLoading,
    isError,
    error,
  } = useGetCourseByIdQuery(courseId);
  // console.log(courseData);

  const [createSection, { isLoading: isCreatingSection }] =
    useAddNewModuleMutation();

  const handleAddSection = async () => {
    try {
      const res = await createSection({
        courseId,
        title: `Module ${
          courseData?.modules.length ? courseData.modules.length + 1 : 1
        }: New Module`,
      }).unwrap();
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  const handleNext = () => {
    dispatch(setActiveTab("publish"));
  };

  return (
    <div className="min-h-screen ">
      {/* Main content */}
      <main className="m-4">
        {/* Progress steps */}

        {/* Curriculum builder */}
        <div className="mx-auto rounded-lg border  p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Course Curriculum</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                //  disabled={isLoading || isCreatingSection}
              >
                Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-orange-50 text-orange-500 hover:bg-orange-100 hover:text-orange-600"
                onClick={openPreviewModal}
                // disabled={isLoading || isCreatingSection}
              >
                Save & Preview
              </Button>
            </div>
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
            <div className="space-y-4 bg-white">
              {courseData?.modules?.map((module) => (
                <SectionItem key={module.id} section={module} />
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
                  "Add Modules"
                )}
              </Button>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-between">
            <Button variant="outline" disabled={isLoading || isCreatingSection}>
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
      {courseData && (
        <CoursePreviewModal
          courseData={courseData}
          isOpen={isPreviewModalOpen}
          onClose={closePreviewModal}
        />
      )}
    </div>
  );
}
