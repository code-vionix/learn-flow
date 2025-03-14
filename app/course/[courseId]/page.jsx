import React from 'react';
import WatchingCourseWrapper from './_components/WatchingCourseWrapper';
import WatchingCourseHeader from './_components/WatchingCourseHeader';
import WatchingCourseContent from './_components/WatchingCourseContent';
import WatchingCoursePreview from './_components/WatchingCoursePreview';

const CourseWatchingPage = () => {

    return (
        <div className='bg-white'>
            <WatchingCourseHeader />
            <WatchingCourseWrapper>
                <div className="mt-3 lg:flex grid-cols-3 gap-4">
                    <div className="col-span-2 md:p-2 lg:w-[65%] w-full">
                        <WatchingCoursePreview />
                    </div>
                    <div className="md:block hidden lg:w-[35%] w-full">
                        <WatchingCourseContent />
                    </div>
                </div>
            </WatchingCourseWrapper>
            <br /> <br />
        </div>
    );
};

export default CourseWatchingPage;