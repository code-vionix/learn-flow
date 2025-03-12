import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="w-2/6">
      <h3 className="text-white text-lg font-semibold flex items-center">
        <span className="mr-2 text-orange-500 text-2xl">📚</span> Learn Flow
      </h3>
      <p className="text-gray-400 text-sm mt-2">
        Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
        mattis odio at.
      </p>
      <div className="flex space-x-3 mt-4">
        <a href="#" className="p-2 bg-gray-700 hover:bg-orange-500 rounded">
          <Facebook className="h-4 w-4 text-white" />
        </a>
        <a href="#" className="p-2 bg-gray-700 hover:bg-orange-500 rounded">
          <Instagram className="h-4 w-4 text-white" />
        </a>
        <a href="#" className="p-2 bg-orange-500 hover:bg-orange-600 rounded">
          <Linkedin className="h-4 w-4 text-white" />
        </a>
        <a href="#" className="p-2 bg-gray-700 hover:bg-orange-500 rounded">
          <Twitter className="h-4 w-4 text-white" />
        </a>
      </div>
    </div>
  );
}
