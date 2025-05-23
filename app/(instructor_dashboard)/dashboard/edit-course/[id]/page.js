"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Info, FileText, BookOpen, Upload } from "lucide-react";
import { CourseBasicForm } from "./_components/CourseBasicForm";
import { useSelector } from "react-redux";
import { setEditActiveTab } from "@/store/slice/courseUpdateSlice";
import { useDispatch } from "react-redux";
import CourseAdvanceForm from "./_components/CourseAdvanceForm";
import CourseCurriculumForm from "./_components/CourseCurriculumForm";
import PublishCourseForm from "./_components/PublishCourseForm";
import { useParams } from "next/navigation";
import { useGetCourseByIdQuery } from "@/store/api/courseApi";

export default function CourseForm() {
  const activetab = useSelector((state) => state.courseUpdate.activeTab);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data: course } = useGetCourseByIdQuery(id);

  // for handle tabs
  const handleTabChange = (newValue) => {
    dispatch(setEditActiveTab(newValue));
  };

  return (
    <div className="w-full bg-white rounded-md shadow-sm">
      <Tabs
        value={activetab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="flex w-full justify-between bg-white border-b border-gray-200 p-0 h-auto">
          <TabsTrigger
            value="basic"
            className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:text-primary-500 rounded-none bg-transparent hover:bg-gray-50"
          >
            <Info className="h-5 w-5" />
            <span>Basic Information</span>
          </TabsTrigger>
          <TabsTrigger
            value="advance"
            className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:text-primary-500 rounded-none bg-transparent hover:bg-gray-50"
          >
            <FileText className="h-5 w-5" />
            <span>Advance Information</span>
          </TabsTrigger>
          <TabsTrigger
            value="curriculum"
            className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:text-primary-500 rounded-none bg-transparent hover:bg-gray-50"
          >
            <BookOpen className="h-5 w-5" />
            <span>Curriculum</span>
          </TabsTrigger>
          <TabsTrigger
            value="publish"
            className="flex items-center gap-2 px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:text-primary-500 rounded-none bg-transparent hover:bg-gray-50"
          >
            <Upload className="h-5 w-5" />
            <span>Publish Course</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="p-6">
          <CourseBasicForm course={course} />
        </TabsContent>

        <TabsContent value="advance" className="p-6">
          <CourseAdvanceForm course={course} />
        </TabsContent>

        <TabsContent value="curriculum" className="p-6">
          <CourseCurriculumForm course={course} />
        </TabsContent>

        <TabsContent value="publish" className="p-6">
          <PublishCourseForm course={course} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
