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
                    bgImg="bg-[url('https://s3-alpha-sig.figma.com/img/a6d0/b752/3995ee8bda333ff925e69d9447385d46?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qjt-wotLgL2pWCA9x13L4NLM0IHhw50mCVjXJSi5Y088CF1IDyTxJthBrPWvRXrF8HVmeHfWxsRngpXxwB2XE4juoiP1l0ayssEfDwVGdLdOe8p1X0~0kshLtfG4wfeN0oc8n~~mK3v9P8bBl4r2M7md2qQJOQQda5zb~uo-gP51tAPfkv79QNifI~KNoK0Qto7ZkiOV34OpZm0bTRPmUiYlxmHhYMg0JYQcfKp6uMRvthJB1gKZQpw2xzkhdTSYTro06rF5QEvQXx5-gW2bpcOXQFRTJgdywT0yrIUAApMfmloSZn9x0Wdc8P6goyaFjItjXlbwMI-fZmYHd5TJeg__')] bg-cover"
                >
                    <Button className="bg-primary-500 mt-4 text-white">Register Now</Button>
                </GridSeparator>
            </div>
        </div>
    );
};

export default InstructorNewsletter;