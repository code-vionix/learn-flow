"use client";
import { useCourseContext } from "@/povider/CourseProvider";
import { Play } from "lucide-react";
import dynamic from "next/dynamic";
import "plyr/dist/plyr.css";
import { useEffect, useMemo, useState } from "react";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function CourseVideoPlayer({ modules }) {
  const { currentLesson } = useCourseContext();
  console.log("currentLesson", currentLesson);

  const lesson = useMemo(
    () => currentLesson || modules?.[0]?.lessons?.[0],
    [currentLesson, modules]
  );

  const [url, setUrl] = useState("");
  const [autoPlay, setAutoPlay] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    setUrl(lesson?.videoUrl || "");
    setAutoPlay(true);
    setShowPlayButton(true);
  }, [lesson]);

  const handlePlayButtonClick = () => {
    setShowPlayButton(false);
    setAutoPlay(true);
  };

  if (!lesson) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 animate-pulse">
        <p className="text-gray-400">Loading video...</p>
      </div>
    );
  }

  return (
    <main className="w-full">
      <div className="relative w-full my-4">
        {!autoPlay && showPlayButton && (
          <button
            onClick={handlePlayButtonClick}
            className="absolute inset-0 flex items-center justify-center bg-white rounded-full w-[70px] h-[70px] md:w-[80px] md:h-[80px] m-auto z-10"
          >
            <Play />
          </button>
        )}

        <DynamicReactPlayer
          url={url}
          playing={autoPlay}
          controls
          volume={0.5}
          width="100%"
          height="100%"
          className="border-2 rounded-lg overflow-hidden bg-primary-500 lg:!h-[550px] md:!h-[500px] !h-[200px]"
          onError={() => {
            alert("There was an issue playing the video.");
          }}
        />
      </div>
    </main>
  );
}
