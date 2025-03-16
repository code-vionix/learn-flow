import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function FilterSection() {
  return (
    <div className="grid grid-cols-12 gap-24 pt-4 pb-4">
      {/* Search Input */}
      <div className="col-span-12 md:col-span-6 flex flex-col">
        <label className="text-sm text-gray-500 mb-1">Search:</label>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-4 text-gray-400" />
          <Input
            placeholder="Search in your teachers..."
            className="pl-10 w-full"
          />
        </div>
      </div>

      {/* Courses Dropdown */}
      <div className="col-span-12 md:col-span-4 flex flex-col">
        <label className="text-sm text-gray-500">Courses:</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="math">Mathematics</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="history">History</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Teachers Dropdown */}
      <div className="col-span-12 md:col-span-2 flex flex-col">
        <label className="text-sm text-gray-500">Teacher:</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Teachers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Teachers</SelectItem>
            <SelectItem value="john">John Doe</SelectItem>
            <SelectItem value="jane">Jane Smith</SelectItem>
            <SelectItem value="michael">Michael Johnson</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
