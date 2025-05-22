import {
  BriefcaseBusiness,
  ClipboardList,
  MapPin,
  MoveRight,
} from "lucide-react";
import Link from "next/link";

function JobCard({position}) {
  return (
    <Link href={`/career/${position.id}`}>
    <div  className="lg:w-[26.5rem] p-6 bg-white">
    <div className="flex flex-col gap-6">
      <h2 className="font-medium text-xl text-gray-900">
        {position.jobTitle}
      </h2>
      <div className="flex gap-4">
        <span className="flex gap-2 items-center font-normal text-sm text-gray-700">
          <MapPin size={20} color="rgba(86, 79, 253, 1)" />
          {position.location}
        </span>
        <span className="flex gap-2 items-center font-normal text-sm text-gray-700">
          <BriefcaseBusiness size={20} color="rgba(35, 189, 51, 1)" />
          {position.type}
        </span>
        <span className="flex gap-2 items-center font-normal text-sm text-gray-700">
          <ClipboardList size={20} color="rgba(253, 142, 31, 1)" />
          {position.vacancy}
        </span>
      </div>
      <div className="w-full bg-gray-200 h-[1px]"></div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-base text-gray-400">
          <span className="text-primary-500">Deadline:</span>{" "}
          {position.deadline}
        </span>
        <span className="w-12 h-12 bg-primary-100 p-3">
          <MoveRight
            size={25}
            color="rgba(255, 102, 54, 1)"
            className="text-center"
          />
        </span>
      </div>
    </div>
  </div>
  </Link>
  )
}

export default JobCard