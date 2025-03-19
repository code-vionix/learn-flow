import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ data, period, handleFilterChange }) {
  return (
    <DropdownMenu className="px-4 py-4">
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-6 text-xs font-normal">
          {period} <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data.map((item) => (
          <DropdownMenuItem key={item} onClick={() => handleFilterChange(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
