import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="w-2/6">
      <h1 className="text-white text-3xl font-semibold flex items-center p-4">
        <span className="mr-2 text-orange-500 text-2xl">📚</span> Learn Flow
      </h1>
      <p className="text-gray-400 text-sm mt-2 max-w-sm p-4">
        Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
        mattis odio at.
      </p>
      <div className="flex space-x-3 mt-4 p-4">
        <a href="#" className="p-2 bg-gray-700 hover:bg-orange-500 ">
          <Facebook className="h-4 w-4 text-white" />
        </a>
        <a href="#" className="p-2 bg-gray-700 hover:bg-orange-500 ">
          <Instagram className="h-4 w-4 text-white" />
        </a>
        <a href="#" className="p-2 bg-gray-700 hover:bg-orange-500 ">
          <Linkedin className="h-4 w-4 text-white" />
        </a>
        <a href="#" className="p-2 bg-gray-700 hover:bg-orange-500 ">
          <Twitter className="h-4 w-4 text-white" />
        </a>
      </div>
    </div>
  );
}
