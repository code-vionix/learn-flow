"use client";

import { Button } from "@/components/ui/button";
import { useCourseContext } from "@/povider/CourseProvider";
import Image from "next/image";
import AttachFiles from "./AttachFiles";
import CourseComment from "./Components/CourseComment";
import CourseVideoPlayer from "./CourseVideoPlayer";
import LecturesInfo from "./LecturesInfo";
import WatchCourseNavigateBar from "./WatchCourseNavigateBar";
import WatchingCourseContent from "./WatchingCourseContent";
import LectureNotes from "./LectureNotes";

const WatchingCoursePreview = ({ course, sections, enrollments }) => {
  const { currentPlay, currentLesson } = useCourseContext();
  const moduleData = sections?.data[0];
  const lectureData = moduleData?.lessons?.[0];

  const title = currentLesson?.title || lectureData?.title || "Lecture Title";
  const description = currentLesson?.content || "No description provided.";
  const note = currentLesson?.note;
  const attachments = currentLesson?.attachment || [];
  const lessonId = currentLesson?.id ||lectureData?.id;

  return (
    <div>
      <CourseVideoPlayer modules={sections.data} />

      <div className="mt-2">
        <h1 className="md:text-[32px] text-[25px] font-semibold">{title}</h1>

        <div className="md:flex items-center justify-between md:mt-0 mt-4 border-t">
          <div className="md:flex items-center gap-3">
            <div className="flex mt-3 -space-x-2 overflow-hidden">
              {enrollments?.slice(0, 4).map((enrollment, idx) => (
                <Image
                  key={idx}
                  width={500}
                  height={500}
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                  src={
                    enrollment?.user?.imageUrl ||
                    "https://via.placeholder.com/40x40.png?text=U"
                  }
                  alt="avatar"
                />
              ))}
            </div>

            <div className="md:block flex gap-2 items-center">
              <h2 className="font-semibold text-[16px]">
                {enrollments?.length || 0}
              </h2>
              <h3 className="text-gray-500 text-[14px]">Students watching</h3>
            </div>
          </div>

          <div className="flex items-center text-[#6E7485] font-[400] gap-3">
            <p>
              Last updated:{" "}
              <span className="text-[#1D2026]">
                {new Date(course?.updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
            <p>
              Comments: <span className="text-[#1D2026]">{currentLesson?.comment?.length || 0}</span>
            </p>
          </div>
        </div>

        <div className="md:hidden block">
          <WatchingCourseContent />
        </div>

        <WatchCourseNavigateBar lessonId={lessonId} />

        <LecturesInfo
          key="description"
          id="LecturesDescription"
          title="Lectures Description"
          description={description}
        />

        <LectureNotes note={note} />

        <AttachFiles attachments={attachments} />

        <div id="comments">
          <CourseComment lessonId={lessonId} />
        </div>
      </div>
    </div>
  );
};

export default WatchingCoursePreview;
