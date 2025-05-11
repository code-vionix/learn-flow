"use client";

import { Eye, MoreVertical, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import CourseListHeader from "./_components/CourseListHeader";
import SearchFilter from "./_components/SearchFilter";
import { course as courseData } from "./_components/data";

export default function CourseList() {
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");

  const filteredCourses = useMemo(() => {
    return courseData.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = status === "all" || course.status === status;

      const matchesCategory =
        category === "all" ||
        course.category.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, status, category]);

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

          <div className="border rounded-md overflow-hidden shadow-sm bg-white">
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-100">
              <h2 className="text-lg font-semibold">Course List</h2>
              <p className="text-sm text-gray-500">
                Total: {filteredCourses.length} courses
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
                  {filteredCourses.map((course) => (
                    <tr key={course.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-20 rounded overflow-hidden border bg-gray-100 flex-shrink-0">
                            <Image
                              src={course.thumbnail || "/placeholder.svg"}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium line-clamp-1 max-w-[200px]">
                              {course.title}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">
                              {course.subtitle}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{course.category}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          {course.discountPrice ? (
                            <>
                              <span className="font-medium text-green-600">
                                ${course.discountPrice}
                              </span>
                              <span className="text-xs text-gray-400 line-through">
                                ${course.price}
                              </span>
                            </>
                          ) : (
                            <span className="font-medium">${course.price}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                            course.status === "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {course.status === "published"
                            ? "Published"
                            : "Draft"}
                        </span>
                      </td>
                      <td className="px-6 py-4">{course.students}</td>
                      <td className="px-6 py-4">{course.lastUpdated}</td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Link
                          href={`/preview?id=${course.id}`}
                          className="inline-flex items-center gap-1 px-2 py-1 border rounded hover:bg-gray-100"
                        >
                          <Eye className="w-4 h-4" /> Preview
                        </Link>
                        <button
                          onClick={() => setEditData(course)}
                          className="inline-flex items-center gap-1 px-2 py-1 border rounded hover:bg-gray-100"
                        >
                          <Pencil className="w-4 h-4" /> Edit
                        </button>
                        <details className="inline-block relative">
                          <summary className="list-none px-2 py-1 border rounded cursor-pointer hover:bg-gray-100 inline-flex items-center gap-1">
                            <MoreVertical className="w-4 h-4" /> More
                          </summary>
                          <div className="absolute right-0 mt-1 bg-white border rounded shadow-md z-10">
                            <Link
                              href={`/courses/${course.id}/edit`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Edit Course
                            </Link>
                            <Link
                              href={`/courses/${course.id}/curriculum`}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Edit Curriculum
                            </Link>
                            <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">
                              Delete Course
                            </button>
                          </div>
                        </details>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {editData && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-md p-6 w-full max-w-md relative shadow-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Edit Course Pricing
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Update the price and discount for your course.
                </p>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium"
                    >
                      Price ($)
                    </label>
                    <input
                      id="price"
                      type="number"
                      defaultValue={editData.price}
                      step="0.01"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="discount"
                      className="block text-sm font-medium"
                    >
                      Discount ($)
                    </label>
                    <input
                      id="discount"
                      type="number"
                      defaultValue={editData.discountPrice || ""}
                      step="0.01"
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      id="published"
                      type="checkbox"
                      defaultChecked={editData.status === "published"}
                    />
                    <label htmlFor="published">Published</label>
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <button
                    onClick={() => setEditData(null)}
                    className="px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Save logic here
                      setEditData(null);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
