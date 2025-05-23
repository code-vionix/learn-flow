"use client";
import "plyr/dist/plyr.css";
import { useEffect, useRef, useState } from "react";

import { useCourseContext } from "@/povider/CourseProvider";
import { Play } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function CourseVideoPlayer({ courseId, modules }) {
  const { currentLesson } = useCourseContext(courseId);
  // fallback lesson if context not ready yet
  const fallbackLesson = modules?.[0]?.lessons?.[0];
  const lesson = currentLesson || fallbackLesson;
  const [url, setUrl] = useState(lesson?.videoUrl || "");
  const [autoPlay, setAutoPlay] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    let player;
    import("plyr").then((module) => {
      const Plyr = module.default;
      if (videoRef.current) {
        player = new Plyr(videoRef.current);
      }
    });

    return () => {
      if (player && typeof player.destroy === "function") {
        player.destroy();
      }
    };
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
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataUrl = event.target.result;
      setUrl(dataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // fallback rendering if lesson is not yet loaded
  if (!lesson) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading video...</p>
      </div>
    );
  }

  return (
    <main className="">
      <div className="flex items-center justify-between border-b border-[gray] pb-2">
        <input type="file" onChange={handleFileChange} />

        <form onSubmit={updateUrl} className="flex items-center">
          <input
            type="text"
            name="link"
            className="bg-[#0d3b4745] border border-[#12618b] px-3 py-1 w-[270px]"
            placeholder="video URL..."
          />
          <input
            type="submit"
            value="preview"
            className="px-3 py-1 border border-[#0786c1] cursor-pointer bg-[#0786c1]"
          />
        </form>
      </div>
      <br />
      <div className="w-[100%] m-auto !px-0">
        <div className="relative">
          {!autoPlay && showPlayButton && (
            <button
              onClick={handlePlayButtonClick}
              className="absolute inset-0 flex items-center justify-center !bg-white rounded-full md:w-[80px] md:h-[80px] w-[70px] h-[70px] m-auto text-black z-10"
            >
              <Play />
            </button>
          )}
          <DynamicReactPlayer
            url={url}
            playing={autoPlay}
            controls={true}
            volume={0.5}
            width="100%"
            className="border-2 rounded-lg lg:!h-[550px] md:!h-[500px] !h-[200px] overflow-hidden bg-primary-500"
          />
        </div>
      </div>
    </main>
  );
}
