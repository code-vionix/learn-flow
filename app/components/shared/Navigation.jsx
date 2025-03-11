import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell, GraduationCap, Heart, Search, ShoppingCart } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h3 className=" text-2xl font-semibold flex items-center">
              <span className="mr-2 text-orange-500 text-4xl">📚</span> Learn
              Flow
            </h3>
            <div className="ml-10">
              <Select>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Browse" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="ml-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="What do you want to learn..."
                  className="w-64 pl-10  py-2"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="size-5 text-gray-600 cursor-pointer" />
            <Heart className="size-5 text-gray-600 cursor-pointer" />
            <ShoppingCart className="size-5 text-gray-600 cursor-pointer" />
            <Button className="text-primary-500 hover:text-orange-600 px-4 py-2 bg-primary-100 hover:bg-primary-200">
              Create Account
            </Button>
            <Button className="bg-primary-500 text-white px-4 py-2 hover:bg-primary-600">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
