import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Apple from "@/public/images/app-store.png";
import Google from "@/public/images/google-play.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Footer Content (Flex Row) */}
        <div className="flex justify-between mt-12">
          {/* E-tutor Section - 1/5 width */}
          <div className="w-2/6  ">
            <h3 className="text-white text-lg font-semibold flex items-center">
              <span className="mr-2 text-orange-500 text-2xl">📚</span> Learn
              Flow
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-700 hover:bg-orange-500 rounded"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 hover:bg-orange-500 rounded"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-orange-500 hover:bg-orange-600 rounded"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 hover:bg-orange-500 rounded"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Other Sections - 4/5 width */}
          <div className="w-4/6 flex justify-between">
            {/* Top Categories */}
            <div>
              <h4 className="text-white font-semibold">TOP 4 CATEGORY</h4>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>Development</li>
                <li>Finance & Accounting</li>
                <li>Design</li>
                <li>Business</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold">QUICK LINKS</h4>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <Link href='/about'>About</Link>
                <Link href='/instructor' className="hover:text-primary-500 flex items-center">
                  Become Instructor →
                </Link>
                <Link href='/contact'>Contact</Link>
                <Link href='career'>Career</Link>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold">SUPPORT</h4>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Download Section */}
            <div>
              <h4 className="text-white font-semibold">DOWNLOAD OUR APP</h4>
              <div className="mt-2 space-y-2">
                <Card className="flex items-center justify-center gap-3 p-2 bg-gray-800 ">
                  <Image
                    src={Apple}
                    width={30}
                    height={30}
                    alt="App Store"
                    className="p-1"
                  />
                  <div>
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="text-white font-semibold font-sm">
                      App Store
                    </p>
                  </div>
                </Card>

                <Card className="flex items-center justify-center gap-3 p-2 bg-gray-800 ">
                  <Image
                    src={Google}
                    width={30}
                    height={30}
                    alt="App Store"
                    className="p-1"
                  />

                  <div>
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="text-white font-semibold text-sm">
                      Google Play
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Language Selector & Bottom Text */}
        <div className="mt-12 flex justify-between items-center">
          {/* Bottom Text */}
          <p className="text-center text-gray-500 text-sm mt-8">
            © 2021 - LearnFlow. Designed by{" "}
            <span className="text-white">Lws-Coders</span>. All rights reserved.
          </p>
          {/* Language Selector */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  className="w-36  bg-primary-500 hover:bg-primary-600 hover:text-white"
                >
                  Language
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>EngLish</DropdownMenuItem>
                <DropdownMenuItem>Bangla</DropdownMenuItem>
                <DropdownMenuItem>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </footer>
  );
}
