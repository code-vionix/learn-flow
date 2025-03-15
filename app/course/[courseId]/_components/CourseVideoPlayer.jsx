'use client';
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';
import { useRef, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { Play } from 'lucide-react';
const DynamicReactPlayer = dynamic(() => import('react-player'), {
    ssr: false,
});

export default function CourseVideoPlayer() {
    const [url, setUrl] = useState('https://www.youtube.com/watch?v=b8NxzFyGKtQ&ab_channel=Quran');
    const [autoPlay, setAutoPlay] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const player = new Plyr(videoRef.current);
    }, []);

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

        reader.readAsDataURL(file);
    };

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
            <div className="hidden items-center justify-between border-b border-[gray] pb-2">
                <h3 className="font-bold text-xl">NTube</h3>
                <input type="file" onChange={handleFileChange} />
                <form onSubmit={updateUrl} className="flex items-center">
                    <input
                        type="text"
                        name="link"
                        className="bg-primary border border-[#12618b] px-3 py-1 w-[270px]"
                        placeholder="video URL..."
                    />
                    <input
                        type="submit"
                        value="preview"
                        className="px-3 py-1 border border-[#0786c1] cursor-pointer bg-[#0786c1]"
                    />
                </form>
            </div>
        </main>
    );
}