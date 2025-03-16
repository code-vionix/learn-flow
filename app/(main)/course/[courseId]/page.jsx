import React from 'react';
import WatchingCourseWrapper from './_components/WatchingCourseWrapper';
import WatchingCourseHeader from './_components/WatchingCourseHeader';
import { courseData } from './data/coursesData';
import CourseContent from './_components/CourseContent';

const CourseWatchingPage = () => {
    const data = courseData[0];
    return (
        <div className='bg-white'>
            <WatchingCourseHeader data={data} />
            <WatchingCourseWrapper>
                <CourseContent data={data} />
            </WatchingCourseWrapper>
            <br /> <br />
        </div>
    );
};

export default CourseWatchingPage;