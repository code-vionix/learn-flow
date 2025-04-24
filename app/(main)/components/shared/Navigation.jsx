"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell, Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 bg-white shadow-md py-3"
          : "relative bg-transparent py-5"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left: Logo + Search */}
          <div className="flex items-center">
            <h3 className="text-2xl font-semibold flex items-center">
              <span className="mr-2">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </span>
              E-tutor
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
                  className="w-64 pl-10 py-2"
                />
              </div>
            </div>
          </div>

          {/* Right: Icons + Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Bell className="size-5 text-gray-600 cursor-pointer" />
            <Link href="/student/wishlist">
              <Heart className="size-5 text-gray-600 cursor-pointer" />
            </Link>
            <Link href="/shopping-cart">
              <ShoppingCart className="size-5 text-gray-600 cursor-pointer" />
            </Link>

            <Link href="/register">
              <Button className="text-primary-500 rounded-none hover:text-orange-600 px-4 py-2 bg-primary-100 hover:bg-primary-200">
                Create Account
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-primary-500 rounded-none text-white px-4 py-2 hover:bg-primary-600">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
