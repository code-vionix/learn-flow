import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Copyright from "./Copyright";

export default function FooterBottom() {
  return (
    <div className="mt-12 flex justify-between items-center">
      <Copyright />
      <div>
        <Select>
          <SelectTrigger className="w-36 border-gray-600">
            <SelectValue placeholder="Lenguage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">English</SelectItem>
            <SelectItem value="option2">Bangla</SelectItem>
            <SelectItem value="option3">Arabic</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
