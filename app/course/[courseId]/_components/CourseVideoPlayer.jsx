'use client';
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';
import { useRef, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { Play } from 'lucide-react';
import { courseData } from '../data/coursesData';
const DynamicReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
});

export default function CourseVideoPlayer() {
    const moduleData = courseData[0]?.modules[0]?.lectures[0];


    const [url, setUrl] = useState(moduleData?.video_url);
    const [autoPlay, setAutoPlay] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        new Plyr(videoRef.current);
        setUrl(moduleData?.video_url)
    }, [moduleData]);

    const handlePlayButtonClick = () => {
        setShowPlayButton(false);
        setAutoPlay(true);
    };

    return (
        <main className="">
            <div className="w-[100%] m-auto !px-0">
                <div className="relative">
                    {showPlayButton && (
                        <button
                            onClick={handlePlayButtonClick}
                            className="absolute inset-0 flex items-center justify-center !bg-white  rounded-full md:w-[80px] md:h-[80px] w-[70px] h-[70px] m-auto text-black"
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