import { Download } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function ProfileBanner({
  name = "Vako Shvili",
  email = "vako.shvili@gmail.com",
  avatarUrl = "https://s3-alpha-sig.figma.com/img/29bd/96c4/72eab052ddcd508f02e69e7f0166dd61?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k5anUZX--3TaSVJsixxvTolwYzFwB1OrFZz~Fhar2EjrE8pwju8TdDIRppvrXOEcfQnPi6W9WEHE14I3MeqRwiph-k-Yl2ThXeTwmUa8Y93sJbLR4FOXnV7KGpxGKxeyWMm4TSwH-YizswyTfUbib14uGmXDyDN1dCpo5zZ3mOkCQMGKWgApiLCd3OJZ~r~7XL6stuLU1yXEYjcyt5UA2dcdzNnavwJXouIJrbw7Qo1~Zp28Ay1oEOVcTlYrt1QwDhMe9coY2N9WiwtvZGa--S2Fe2CnuKp3iCPBzUoScQFquj5OfKndZ809PpSRu2vI~EwEcTZI3ar~VeSMFsthcA__",
  completedSteps = 1,
  totalSteps = 4,
}) {
  const completionPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="flex items-center justify-between w-full px-8 py-4 bg-secondary-900">
      <div className="flex items-center gap-4 w-1/4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/10">
          <Image
            src={avatarUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-white">{name}</h2>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 w-4/5">
        <div className="flex flex-col w-4/5">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-sm text-white">
              {completedSteps}/{totalSteps} Steps
            </span>
            <div className="w-[312px] h-4 bg-gray-600  overflow-hidden">
              <div
                className="h-full bg-green-500 "
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span className="text-sm text-white">
              {completionPercentage}% Completed
            </span>
          </div>
        </div>
        <div className="w-1/5 flex justify-between items-center">
          <Button className="bg-primary-500 hover:bg-primary-600 text-white ">
            Edit Biography
          </Button>
          <Button variant="ghost" size="icon" className="text-white ">
            <Download className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
