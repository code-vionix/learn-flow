
const CourseSkaliton = () => {
    return (
        <div className="flex flex-col items-center w-[244px] bg-white border border-[#E9EAF0] animate-pulse">
            <div className="w-full h-[244px] bg-[#F3F4F6] shadow-[inset_0_-1px_0_#E9EAF0]" />

            <div className="flex flex-col items-center gap-4 p-4 w-full">
                <div className="text-center w-full">
                    <div className="h-4 w-3/4 bg-[#E5E7EB] rounded mx-auto mb-2" />
                    <div className="h-3 w-1/2 bg-[#E5E7EB] rounded mx-auto" />
                </div>
            </div>

            <div className="flex py-3 border-t justify-between items-center w-full px-4">
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-[#E5E7EB] rounded" />
                    <div className="h-3 w-6 bg-[#E5E7EB] rounded" />
                </div>
                <div className="flex items-center gap-1">
                    <div className="h-3 w-6 bg-[#E5E7EB] rounded" />
                    <div className="h-3 w-10 bg-[#F9FAFB] rounded" />
                </div>
            </div>
        </div>
    );
};

export default CourseSkaliton;