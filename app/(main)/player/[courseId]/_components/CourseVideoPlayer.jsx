"use client";
import { useCourseContext } from "@/povider/CourseProvider";
import { Play } from "lucide-react";
import dynamic from "next/dynamic";
import "plyr/dist/plyr.css";
import { useEffect, useMemo, useState } from "react";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function CourseVideoPlayer({ courseId, modules }) {
  const { currentLesson } = useCourseContext();
  console.log("currentlession", currentLesson);

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

  const updateUrl = (e) => {
    e.preventDefault();
    const form = e.target;
    setUrl(form.link.value);
    form.reset();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setUrl(e.target.result);
    };
    reader.readAsDataURL(file);
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
      {/* Instructor tools - show only in development mode */}
      {process.env.NODE_ENV === "development" && (
        <div className="flex items-center justify-between border-b border-gray-400 pb-2">
          <input type="file" onChange={handleFileChange} />
          <form onSubmit={updateUrl} className="flex items-center gap-2">
            <input
              type="text"
              name="link"
              className="bg-[#0d3b4745] border border-[#12618b] px-3 py-1 w-[270px] rounded"
              placeholder="Enter video URL..."
            />
            <input
              type="submit"
              value="Preview"
              className="px-3 py-1 border border-[#0786c1] cursor-pointer bg-[#0786c1] text-white rounded"
            />
          </form>
        </div>
      )}

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
