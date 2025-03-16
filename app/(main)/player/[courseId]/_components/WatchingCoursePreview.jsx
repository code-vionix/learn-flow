'use client';

import { Button } from "@/components/ui/button";
import CourseVideoPlayer from "./CourseVideoPlayer";
import { courseData } from "../data/coursesData";
import Image from "next/image";
import WatchCourseNavigateBar from "./WatchCourseNavigateBar";
import LecturesInfo from "./LecturesInfo";
import AttachFiles from "./AttachFiles";
import CourseComment from "./CourseComments";
import WatchingCourseContent from "./WatchingCourseContent";
import { useCourseContext } from "@/povider/CourseProvider";

const WatchingCoursePreview = () => {
    const moduleData = courseData[0]?.modules[0];
    const lectureData = courseData[0]?.modules[0]?.lectures[0];
    const { currentPlay, currentLecture } = useCourseContext();

    console.log("context........", currentPlay);
    return (
        <div>
            <CourseVideoPlayer />
            <div className="md:hidden mt-3 mb-2 justify-end flex md:items-center items-start gap-3">
                <Button className="bg-white border w-full text-sm text-black px-6 duration-300 hover:bg-primary-50 shadow-none font-[400]">
                    Write a Review
                </Button>
                <Button className="bg-primary-500 w-full text-sm text-white px-6 duration-300 hover:bg-primary-400 shadow-none font-[400]">
                    Next lecture
                </Button>
            </div>

            <div className="mt-2">
                <h1 className="md:text-[32px] text-[25px] font-semibold">{currentLecture?.lectureName}</h1>

                <div className="md:flex items-center justify-between md:border-none md:mt-0 mt-4 border-t ">
                    <div className="md:flex items-center gap-3">
                        <div className="flex mt-3 -space-x-2 overflow-hidden">
                            <Image
                                width={500}
                                height={500}
                                className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="avatar"
                            />
                            <Image
                                width={500}
                                height={500}
                                className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="avatar"
                            />
                            <Image
                                width={500}
                                height={500}
                                className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt="avatar"
                            />
                            <Image
                                width={500}
                                height={500}
                                className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="avatar"
                            />
                        </div>

                        <div className="md:block flex gap-2 items-center">
                            <h2 className=" font-semibold !text-[16px]">524</h2>
                            <h3 className=" text-gray-500 !text-[14px]">Students watching</h3>
                        </div>
                    </div>

                    <div className="flex items-center text-[#6E7485] font-[400] gap-3">
                        <p className="">Last updated: <span className="text-[#1D2026]">Oct, 26, 2025</span></p>
                        <p className="">Comments: <span className="text-[#1D2026]">12</span></p>
                    </div>
                </div>

                <div className="md:hidden block">
                    <WatchingCourseContent />
                </div>

                <WatchCourseNavigateBar />
                <LecturesInfo
                    key={'description'}
                    id={'LecturesDescription'}
                    title={'Lectures Description'}
                    description={lectureData?.description}

                />
                <LecturesInfo
                    key={'notes'}
                    id={'LecturesNotes'}
                    title={'Lectures Notes'}
                    description={lectureData?.notes?.details}
                    isDownloadable={true}
                    downloadUrl={lectureData?.notes?.file}
                />
                <AttachFiles data={lectureData?.attachments} />


                <div id="comments">
                    <CourseComment />
                </div>
            </div>
        </div>
    );
};

export default WatchingCoursePreview;