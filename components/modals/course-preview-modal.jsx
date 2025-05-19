"use client"

import { useState } from "react"
import { X, Play, FileText, Video, File, AlignLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/redux/hooks"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export function CoursePreviewModal({ isOpen, onClose }) {
  const sections = useAppSelector((state) => state.curriculum.sections)
  const [activeTab, setActiveTab] = useState("curriculum")

  if (!isOpen) return null

  // Calculate total lectures
  const totalLectures = sections.reduce((total, section) => total + section.lectures.length, 0)

  // Calculate estimated duration (mock data)
  const estimatedHours = Math.floor(totalLectures * 0.5)

  const getContentIcon = (contentType) => {
    switch (contentType) {
      case "video":
        return <Video className="h-4 w-4 text-blue-500" />
      case "file":
        return <File className="h-4 w-4 text-green-500" />
      case "captions":
        return <FileText className="h-4 w-4 text-yellow-500" />
      case "description":
        return <AlignLeft className="h-4 w-4 text-purple-500" />
      case "notes":
        return <BookOpen className="h-4 w-4 text-orange-500" />
      default:
        return <Play className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-bold">Course Preview</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex h-full flex-col overflow-hidden">
            {/* Course Header */}
            <div className="bg-gray-50 p-6">
              <h1 className="mb-2 text-2xl font-bold">Complete Web Development Course</h1>
              <p className="mb-4 text-gray-600">
                Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span>{totalLectures} lectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-gray-500" />
                  <span>Approx. {estimatedHours} hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                  <span>Beginner Level</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden">
              <div className="border-b">
                <TabsList className="mx-6 w-auto">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="curriculum" className="flex-1 overflow-auto p-6 data-[state=active]:flex-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Course Content</h3>
                    <div className="text-sm text-gray-500">
                      {sections.length} sections • {totalLectures} lectures • {estimatedHours}h total length
                    </div>
                  </div>

                  <Accordion type="multiple" className="w-full">
                    {sections.map((section) => (
                      <AccordionItem key={section.id} value={section.id}>
                        <AccordionTrigger className="hover:bg-gray-50 hover:no-underline">
                          <div className="flex flex-1 items-center justify-between pr-4 text-left">
                            <span>{section.title}</span>
                            <span className="text-sm text-gray-500">{section.lectures.length} lectures</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 py-2">
                            {section.lectures.map((lecture) => (
                              <li key={lecture.id} className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50">
                                {getContentIcon(lecture.contentType)}
                                <span>{lecture.title}</span>
                                {lecture.contentType && (
                                  <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs capitalize text-gray-700">
                                    {lecture.contentType}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="overview" className="overflow-auto p-6 data-[state=active]:flex-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium">Description</h3>
                    <p className="text-gray-700">
                      This comprehensive course will take you from beginner to professional web developer.
                      You&apos;ll learn all the tools and technologies needed to build full-stack web applications.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">What You&apos;ll Learn</h3>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Build responsive websites with HTML, CSS, and JavaScript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Create dynamic web applications with React</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Build RESTful APIs with Node.js and Express</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Work with databases like MongoDB and PostgreSQL</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">Requirements</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      <li>Basic computer knowledge</li>
                      <li>No prior programming experience needed</li>
                      <li>A computer with internet access</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">Target Audience</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      <li>Beginners with no coding experience</li>
                      <li>Students looking to build a portfolio of web projects</li>
                      <li>Professionals transitioning to web development</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="overflow-auto p-6 data-[state=active]:flex-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Instructor"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <p className="text-gray-500">Web Development Instructor</p>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span className="text-sm">10+ courses</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                            />
                          </svg>
                          <span className="text-sm">50,000+ students</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">About the Instructor</h3>
                    <p className="text-gray-700">
                      John Doe is a professional web developer with over 10 years of experience in the industry. He has
                      worked with companies like Google, Facebook, and Amazon, and now focuses on teaching the next
                      generation of web developers.
                    </p>
                    <p className="mt-2 text-gray-700">
                      His teaching style is practical and project-based, ensuring that students not only learn the
                      theory but also how to apply it in real-world scenarios.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
