"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GraduationCap, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function BrowseSelect() {
  const { data: session } = useSession();

  return (
    <>
      {session?.user && session?.user?.role.toLowerCase() === "student" ? (
        <Link
          href={`/student`}
          className="border bg-gray-50 hover:bg-primary-500 hover:text-white duration-150 border-gray-200 px-4 py-1 flex items-center gap-1.5"
        >
          <User className="text-sm" strokeWidth={1} /> Profile
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-36 border bg-white px-4 py-2 hover:bg-primary-500 hover:text-white text-left duration-150">
              Browse...
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem asChild>
              <Link
                href="/instructor_profile"
                className="w-full flex items-center gap-2"
              >
                <User className="w-4 h-4" strokeWidth={1.5} />
                My Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/student" className="w-full flex items-center gap-2">
                <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
                Student Profile
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
