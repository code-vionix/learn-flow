"use client"

import { useState, useEffect } from "react"
import { Search, Bell, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { setCourseId } from "@/lib/redux/curriculumSlice"
import { SectionItem } from "@/components/section-item"
import { CoursePreviewModal } from "@/components/modals/course-preview-modal"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { useGetCurriculumQuery, useCreateSectionMutation } from "@/lib/redux/apiSlice"

export default function CourseCurriculumPage() {
  const dispatch = useAppDispatch()
  const courseId = useAppSelector((state) => state.curriculum.courseId) || "course-123" // Default course ID
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)
  const { toast } = useToast()

  // Set the course ID in the Redux store
  useEffect(() => {
    dispatch(setCourseId(courseId))
  }, [dispatch, courseId])

  // RTK Query hooks
  const { data: curriculumData, isLoading, isError, error } = useGetCurriculumQuery(courseId)

  const [createSection, { isLoading: isCreatingSection }] = useCreateSectionMutation()

  const handleAddSection = async () => {
    try {
      await createSection({
        courseId,
        title: `Section ${curriculumData?.sections.length ? curriculumData.sections.length + 1 : 1}: New Section`,
      }).unwrap()

      toast({
        title: "Section added",
        description: "New section has been added successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add section",
        variant: "destructive",
      })
    }
  }

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true)
  }

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="container mx-auto py-6">
        {/* Progress steps */}
        <div className="mx-auto mb-8 grid max-w-4xl grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Basic Information</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Advance Information</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                <path d="M2 20h20"></path>
                <path d="M14 12v.01"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Curriculum</p>
              <p className="text-xs text-muted-foreground">{curriculumData?.sections.length || 0}/12</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Publish Course</p>
            </div>
          </div>
        </div>

        {/* Curriculum builder */}
        <div className="mx-auto max-w-4xl rounded-lg border bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Course Curriculum</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={isLoading || isCreatingSection}>
                Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-orange-50 text-orange-500 hover:bg-orange-100 hover:text-orange-600"
                onClick={openPreviewModal}
                disabled={isLoading || isCreatingSection}
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
                {error instanceof Error ? error.message : "Failed to load curriculum"}
              </AlertDescription>
            </Alert>
          )}

          {/* Loading state */}
          {isLoading && (
            <div className="flex h-40 items-center justify-center">
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-2 text-sm text-gray-500">Loading curriculum...</p>
              </div>
            </div>
          )}

          {/* Sections */}
          {!isLoading && curriculumData && (
            <div className="space-y-4">
              {curriculumData.sections.map((section) => (
                <SectionItem key={section.id} section={section} />
              ))}

              {/* Add Sections button */}
              <Button
                variant="outline"
                className="w-full bg-orange-50 py-6 text-orange-500 hover:bg-orange-100 hover:text-orange-600"
                onClick={handleAddSection}
                disabled={isCreatingSection}
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
            <Button variant="outline" disabled={isLoading || isCreatingSection}>
              Previous
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" disabled={isLoading || isCreatingSection}>
              Save & Next
            </Button>
          </div>
        </div>
      </main>
      {curriculumData && <CoursePreviewModal isOpen={isPreviewModalOpen} onClose={closePreviewModal} />}
    </div>
  )
}
