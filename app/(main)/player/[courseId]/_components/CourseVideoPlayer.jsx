'use client';
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';
import { useRef, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { Play } from 'lucide-react';
import { courseData } from '../data/coursesData';
import { useCourseContext } from '@/povider/CourseProvider';
const DynamicReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
});

export default function CourseVideoPlayer() {
    const moduleData = courseData[0]?.modules[0]?.lectures[0];
    const { currentLecture } = useCourseContext()

    const [url, setUrl] = useState(currentLecture?.video_url);
    const [autoPlay, setAutoPlay] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        new Plyr(videoRef.current);
        setUrl(currentLecture?.video_url)
    }, [currentLecture]);

    const handlePlayButtonClick = () => {
        setShowPlayButton(false);
        setAutoPlay(true);
    };


    const updateUrl = (e) => {
        e.preventDefault();
        const form = e.target;
        setUrl(form.link.value);
        form.reset()
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const dataUrl = event.target.result;
            setUrl(dataUrl);
        };

        reader.readAsDataURL(file);
    };




    console.log("object...", currentLecture);
    return (
        <main className="">

            <div className="flex items-center justify-between border-b border-[gray] pb-2">
                <input type="file" onChange={handleFileChange} />

                <form onSubmit={updateUrl} className="flex items-center">
                    <input type="text" name='link' className="bg-[#0d3b4745] border border-[#12618b] px-3 py-1 w-[270px]" placeholder='video URL...' />  <input type="submit" value="preview" className="px-3 py-1 border border-[#0786c1] cursor-pointer bg-[#0786c1]" />
                </form>
            </div> <br />



            <div className="w-[100%] m-auto !px-0">
                <div className="relative">
                    {!autoPlay && showPlayButton && (
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