import { Button } from "@/components/ui/button";
import GridSeparator from "./GridSeparator";

const InstructorNewsletter = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="instructor-container">
                <GridSeparator
                    isRight={false}
                    imgHeight='h-[350px]'
                    maskColor='bg-gray-900'
                    maskHeight='h-[110px]'
                    maskWidth='w-[100px]'
                    rightColStyle='lg:pl-14'
                    title="Start teaching with us and inspire others"
                    description="Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries."
                    bgImg="bg-[url('/images/Union(3).png')] bg-cover"
                >
                    <Button className="bg-primary-500 mt-4 text-white">Register Now</Button>
                </GridSeparator>
            </div>
        </div>
    );
};

export default InstructorNewsletter;