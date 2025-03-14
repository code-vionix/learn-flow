import React from 'react';
import WatchingCourseWrapper from './_components/WatchingCourseWrapper';
import WatchingCourseHeader from './_components/WatchingCourseHeader';
import CourseContent from './_components/CourseContent';

const CourseWatchingPage = () => {

    return (
        <div className='bg-white'>
            <WatchingCourseHeader />
            <WatchingCourseWrapper>
                <CourseContent />
            </WatchingCourseWrapper>
            <br /> <br />
        </div>
    );
};

export default CourseWatchingPage;