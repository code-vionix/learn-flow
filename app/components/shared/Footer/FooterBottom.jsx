import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function FooterBottom() {
  return (
    <div className="mt-12 flex justify-between items-center">
      <p className="text-center text-gray-500 text-sm mt-8">
        © 2021 - LearnFlow. Designed by{" "}
        <span className="text-white">Lws-Coders</span>. All rights reserved.
      </p>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-36 bg-primary-500 hover:bg-primary-600 text-white">
              Language
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Bangla</DropdownMenuItem>
            <DropdownMenuItem>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
