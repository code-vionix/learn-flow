"use client";

import { Eye, MoreVertical, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import CourseListHeader from "./_components/CourseListHeader";
import SearchFilter from "./_components/SearchFilter";
import { useSession } from "next-auth/react";
import { useGetInstructorByIdQuery } from "@/store/api/instructorApi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useDeleteCourseMutation } from "@/store/api/courseApi";
import { setEditActiveTab } from "@/store/slice/courseUpdateSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function CourseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  const router = useRouter();

  const { data: session } = useSession();
  const { data, isLoading, isError } = useGetInstructorByIdQuery(
    session?.user?.id || ""
  );
  const [
    deleteCourse,
    {
      isLoading: isDeleting,
      isSuccess: deleteSuccess,
      isError: deleteError,
      error: deleteErrorMessage,
    },
  ] = useDeleteCourseMutation(); // Destructure the delete mutation hook

  const handleDeleteCourse = async (courseId, courseTitle) => {
    if (
      window.confirm(
        `Are you sure you want to delete the course "${courseTitle}"? This action cannot be undone.`
      )
    ) {
      try {
        await deleteCourse(courseId).unwrap();
        console.log(`${courseTitle} deleted successfully!`);
        // RTK Query's `invalidatesTags: ["courses"]` in courseApi should automatically re-fetch
        // the list. If not, you might need to manually refetch:
        // refetch();
      } catch (err) {
        // toast.error(`Failed to delete ${courseTitle}: ${err.data?.message || err.error}`); // Example error toast
        console.error(`Failed to delete ${courseTitle}:`, err);
      }
    }
  };

  const courses = data?.data?.myCourses || [];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course?.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course?.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        status.toLowerCase() === "all" ||
        course?.status.toLowerCase() === status.toLowerCase();

      const matchesCategory =
        category === "all" ||
        course?.category?.name?.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, status, category, courses]);

  if (isError) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 items-center justify-center">
        <p className="text-lg text-red-500">Error loading courses.</p>
      </div>
    );
  }

  console.log("test", filteredCourses);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 container py-8">
        <div className="space-y-6">
          <CourseListHeader />
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            status={status}
            setStatus={setStatus}
            category={category}
            setCategory={setCategory}
          />

          <div className="border rounded-md  shadow-sm bg-white">
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-100">
              <h2 className="text-lg font-semibold">Course List</h2>
              <p className="text-sm text-gray-500">
                Total: {data?.data?.totalCourses} courses
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left px-6 py-3 w-[300px]">Course</th>
                    <th className="text-left px-6 py-3">Category</th>
                    <th className="text-left px-6 py-3">Price</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Students</th>
                    <th className="text-left px-6 py-3">Last Updated</th>
                    <th className="text-right px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td
                        colSpan="8"
                        className="py-12 text-center text-success-500"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <svg
                            className="animate-spin h-5 w-5 text-success-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Loading courses...</span>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredCourses?.map((course) => (
                      <tr
                        key={course?.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-20 rounded overflow-hidden border bg-gray-100 flex-shrink-0">
                              <Image
                                src={course?.thumbnail || "/placeholder.svg"}
                                alt={course?.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium line-clamp-1 max-w-[200px]">
                                {course?.title}
                              </div>
                              <div className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">
                                {course?.subtitle}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">{course?.category?.name}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            {course?.discountPrice ? (
                              <>
                                <span className="font-medium text-green-600">
                                  ${course?.discountPrice}
                                </span>
                                <span className="text-xs text-gray-400 line-through">
                                  ${course?.price}
                                </span>
                              </>
                            ) : (
                              <span className="font-medium">
                                ${course?.price}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex capitalize items-center px-2 py-1 rounded text-xs font-medium ${
                              course?.status.toLowerCase() === "published"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {course?.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {course?.enrollments.length}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(course?.updatedAt).toLocaleDateString()}
                        </td>
                        <td className="!pr-4 py-4 w-[190px] text-right space-x-2">
                          <Link
                            href={`/preview?id=${course?.id}`}
                            className="inline-flex items-center gap-1 px-2 py-1 border rounded hover:bg-gray-100"
                          >
                            <Eye className="w-4 h-4" /> Preview
                          </Link>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button
                                className="inline-flex items-center gap-1 px-2 py-1 border rounded cursor-pointer hover:bg-gray-100"
                                aria-label="More actions"
                              >
                                <MoreVertical className="w-4 h-4" /> More
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuItem asChild>
                                <div
                                  onClick={() => {
                                    dispatch(setEditActiveTab("basic"));
                                    router.push(
                                      `/dashboard/edit-course/${course?.id}`
                                    );
                                  }}
                                  className="block cursor-pointer text-success-500 hover:bg-success-100 px-4 py-2 hover:bg-gray-100 w-full text-left"
                                >
                                  <Pencil /> Edit Course
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                asChild
                                onClick={() => {
                                  dispatch(setEditActiveTab("curriculum"));
                                  router.push(
                                    `/dashboard/edit-course/${course?.id}`
                                  );
                                }}
                              >
                                <div className="block cursor-pointer text-success-500 hover:bg-success-100 px-4 py-2 hover:bg-gray-100 w-full text-left">
                                  <Pencil /> Edit Curriculum
                                </div>
                              </DropdownMenuItem>

                              <DropdownMenuItem asChild>
                                <button
                                  disabled={isDeleting}
                                  onClick={() =>
                                    handleDeleteCourse(
                                      course?.id,
                                      course?.title
                                    )
                                  }
                                  className="flex cursor-pointer !rounded items-center gap-1 !w-full text-left !px-4 py-2 text-danger-600 hover:bg-danger-100"
                                >
                                  <Trash size={20} />
                                  {isDeleting ? "Deleting..." : "Delete Course"}
                                </button>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          {/*                         
                      <details className="inline-block relative">
                          <summary className="list-none px-2 py-1 border rounded cursor-pointer hover:bg-gray-100 inline-flex items-center gap-1">
                            <MoreVertical className="w-4 h-4" /> More
                          </summary>
                          <div className="absolute right-0 mt-1 bg-white border rounded shadow-md z-10">
                            <Link
                              href={`/courses/${course?.id}/edit`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Edit Course
                            </Link>
                            <Link
                              href={`/courses/${course?.id}/curriculum`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Edit Curriculum
                            </Link>
                            <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">
                              Delete Course
                            </button>
                          </div>
                        </details> */}
                        </td>
                      </tr>
                    ))
                  )}
                  {!isLoading &&
                    filteredCourses &&
                    filteredCourses.length === 0 && (
                      <tr>
                        <td colSpan="8" className="text-center py-12">
                          No courses found
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
