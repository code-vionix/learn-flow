import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FooterBottom() {
  return (
    <div className="mt-12 flex justify-between items-center">
      <p className="text-center text-gray-500 text-sm mt-8">
        © 2021 - LearnFlow. Designed by{" "}
        <span className="text-white">Lws-Coders</span>. All rights reserved.
      </p>
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
