import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function InstractorCards({ instructor }) {
  return (
    <div className="flex flex-col items-center w-[342px] h-[545px] border  bg-white ">
      <div
        className="w-full h-[312px] bg-cover bg-center  shadow-[inset_0_-1px_0_#E9EAF0]"
        style={{
          backgroundImage: `url(${instructor.image || "/default-image.jpg"})`,
        }}
      />
      <div className="flex flex-col items-center mt-4 w-full">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-medium text-[#1D2026] mb-1">
            {instructor.name}
          </h3>
          <p className="text-md text-[#8C94A3]">{instructor.role}</p>
        </div>

        {/* Divider */}
        <div className="w-[340px] border-t border-[#E9EAF0]" />

        <div className="flex justify-between items-center w-full mt-5 mb-2 px-6">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-[#FD8E1F] fill-[#FD8E1F]" />
            <span className="text-md font-medium text-[#4E5566]">
              {instructor.rating}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-md font-medium text-[#4E5566]">
              {instructor.students}
            </span>
            <span className="text-md text-[#8C94A3] ml-1">students</span>
          </div>
        </div>

        {/* Send Message Button */}
        <Button
          variant="link"
          className="mt-4 w-[300px] p-6 text-lg font-medium text-primary-500 bg-primary-100 rounded-md"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}
