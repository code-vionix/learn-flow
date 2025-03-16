'use client';
import React, { useEffect, useState } from 'react';

const WatchCourseNavigateBar = () => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setActiveLink(hash);
        } else {
            setActiveLink('#LecturesDescription');
        }
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        window.location.hash = link;
    };

    return (
        <div className="w-full md:block hidden border-b border-gray-200 mt-6 border-t">
            <div className="flex space-x-8">
                <a
                    href="#LecturesDescription"
                    onClick={() => handleLinkClick('#LecturesDescription')}
                    className={`relative !text-[16px] hover:text-primary-400 py-4 text-sm font-medium transition-colors duration-200 text-gray-900 ${activeLink === '#LecturesDescription' ? 'border-b-2 border-orange-400' : ''}`}
                >
                    Description
                </a>

                <a
                    href="#LecturesNotes"
                    onClick={() => handleLinkClick('#LecturesNotes')}
                    className={`relative !text-[16px] hover:text-primary-400 py-4 text-sm font-medium transition-colors duration-200 text-gray-900 ${activeLink === '#LecturesNotes' ? 'border-b-2 border-orange-400' : ''}`}
                >
                    Lectures Notes
                </a>

                <a
                    href="#attach-files"
                    onClick={() => handleLinkClick('#attach-files')}
                    className={`relative !text-[16px] hover:text-primary-400 py-4 text-sm font-medium transition-colors duration-200 text-gray-900 ${activeLink === '#attach-files' ? 'border-b-2 border-orange-400' : ''}`}
                >
                    Attach File
                    <span className="ml-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium rounded-md bg-orange-100 text-orange-500">
                        3
                    </span>
                </a>

                <a
                    href="#comments"
                    onClick={() => handleLinkClick('#comments')}
                    className={`relative !text-[16px] hover:text-primary-400 py-4 text-sm font-medium transition-colors duration-200 text-gray-900 ${activeLink === '#comments' ? 'border-b-2 border-orange-400' : ''}`}
                >
                    Comments
                </a>
            </div>
        </div>
    );
};

export default WatchCourseNavigateBar;