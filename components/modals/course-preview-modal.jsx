"use client";

import { useState } from "react";
import {
  X,
  Play,
  FileText,
  Video,
  File,
  AlignLeft,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

export function CoursePreviewModal({
  isOpen,
  onClose,
  courseData,
  initialTab = "curriculum",
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  console.log(courseData);
  if (!isOpen) return null;

  // Calculate total lectures
  const totalLectures = courseData?.modules.reduce(
    (total, module) => total + (module?.lessons?.length || 0),
    0
  );

  // Calculate estimated duration (mock data)
  const estimatedHours = Math.floor(totalLectures * 0.5);

  const getContentIcon = (contentType) => {
    switch (contentType) {
      case "video":
        return <Video className="h-4 w-4 text-blue-500" />;
      case "file":
        return <File className="h-4 w-4 text-green-500" />;
      case "captions":
        return <FileText className="h-4 w-4 text-yellow-500" />;
      case "description":
        return <AlignLeft className="h-4 w-4 text-purple-500" />;
      case "notes":
        return <BookOpen className="h-4 w-4 text-orange-500" />;
      default:
        return <Play className="h-4 w-4 text-gray-500" />;
    }
  };

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
          <div className="flex h-[90vh] flex-col overflow-y-auto">
            {/* Course Header */}
            <div className="bg-gray-50 p-6">
              <h1 className="mb-2 text-2xl font-bold">{courseData?.title}</h1>
              <p className="mb-4 text-gray-600">{courseData?.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <span>{totalLectures} Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-gray-500" />
                  <span>
                    Approx. {courseData?.duration} {courseData?.durationUnit}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                  <span>Beginner Level</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex-1 overflow-y-auto"
            >
              <div className="border-b">
                <TabsList className="mx-6 w-auto">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent
                value="curriculum"
                className="flex-1 overflow-auto p-6 data-[state=active]:flex-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Course Content</h3>
                    <div className="text-sm text-gray-500">
                      {courseData?.modules?.length} Modules • {totalLectures}{" "}
                      Lessons • {courseData?.duration}{" "}
                      {courseData?.durationUnit} total length
                    </div>
                  </div>

                  <Accordion type="multiple" className="w-full">
                    {courseData?.modules?.map((module) => (
                      <AccordionItem key={module.id} value={module.id}>
                        <AccordionTrigger className="hover:bg-gray-50 hover:no-underline">
                          <div className="flex flex-1 items-center justify-between pr-4 text-left">
                            <span>{module.title}</span>
                            <span className="text-sm text-gray-500">
                              {module?.lessons?.length} Lessons
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          {module?.lessons?.map((lesson) => (
                            <AccordionItem key={lesson.id} value={lesson.id}>
                              <AccordionTrigger className="hover:bg-gray-50 hover:no-underline">
                                <li className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50">
                                  {getContentIcon(
                                    lesson.contentType || "video"
                                  )}
                                  <span>{lesson.title}</span>
                                  {lesson.contentType && (
                                    <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-xs capitalize text-gray-700">
                                      {lesson.contentType}
                                    </span>
                                  )}
                                </li>
                              </AccordionTrigger>
                              <AccordionContent>
                                {lesson.videoUrl && (
                                  <div className="aspect-video w-full max-w-2xl mx-auto">
                                    <iframe
                                      src={lesson.videoUrl}
                                      title="Lesson Video"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                      className="w-full h-full rounded-md border"
                                    />
                                  </div>
                                )}
                                {lesson.content && (
                                  <div className="p-4">
                                    <h3 className="mb-3 text-lg font-medium">
                                      Content
                                    </h3>
                                    <p>{lesson.content}</p>
                                  </div>
                                )}
                                {lesson.caption && (
                                  <div className="p-4">
                                    <h3 className="mb-3 text-lg font-medium">
                                      Caption
                                    </h3>
                                    <p>{lesson.caption}</p>
                                  </div>
                                )}
                                {lesson?.note?.length > 0 && (
                                  <div className="p-4">
                                    <h3 className="mb-3 text-lg font-medium">
                                      Note
                                    </h3>
                                    <p>{lesson?.note[0]?.title}</p>
                                    <Link
                                      href={lesson?.note[0]?.content}
                                      target="_blank"
                                      className="text-blue-500 hover:underline mt-2 block py-2 border border-gray-200 rounded-md p-2 w-fit"
                                    >
                                      Download
                                    </Link>
                                  </div>
                                )}
                                {lesson?.attachment?.length > 0 && (
                                  <div className="p-4">
                                    <h3 className="mb-3 text-lg font-medium">
                                      Attachment
                                    </h3>
                                    {lesson?.attachment.map((attachment) => (
                                      <div key={attachment.id}>
                                        {attachment.url.split(",").map(
                                          (url) =>
                                            url && (
                                              <Link
                                                key={url}
                                                href={url}
                                                target="_blank"
                                                className="text-blue-500 hover:underline mt-2 block py-2 border border-gray-200 rounded-md p-2 w-fit"
                                              >
                                                Download
                                              </Link>
                                            )
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent
                value="overview"
                className="overflow-auto p-6 data-[state=active]:flex-1"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium">Description</h3>
                    <p className="text-gray-700">{courseData?.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">
                      What You&apos;ll Learn
                    </h3>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      {courseData?.learnings?.map((item) => (
                        <li className="flex items-start gap-2" key={item.id}>
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
                          <span>{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">Requirements</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      {courseData?.PreRequirement?.map((item) => (
                        <li key={item.id}>{item.description}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">
                      Target Audience
                    </h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      {courseData?.targetAudiences?.map((item) => (
                        <li key={item.id}>{item.description}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="instructor"
                className="overflow-auto p-6 data-[state=active]:flex-1"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={
                          courseData?.teacher?.imageUrl || "/placeholder.svg"
                        }
                        alt="Instructor"
                        className="h-full w-full object-cover"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        {courseData?.teacher?.firstName +
                          " " +
                          courseData?.teacher?.lastName}
                      </h3>
                      <p className="text-gray-500">
                        {courseData?.teacher?.description}
                      </p>
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
                    <h3 className="mb-3 text-lg font-medium">
                      About the Instructor
                    </h3>
                    <p className="text-gray-700">{courseData?.teacher?.bio}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
