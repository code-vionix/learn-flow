"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const isRegisterPage = pathname === "/register";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo targetLink="/" className="text-black" />

        {/* Account Section */}
        <div className="flex items-center">
          {isLoginPage && (
            <>
              <span className="text-gray-600 mr-4">Don’t have an account?</span>
              <Link
                href="/register"
                className="bg-[#ff6347] text-white px-4 py-2"
              >
                Create Account
              </Link>
            </>
          )}

          {isRegisterPage && (
            <>
              <span className="text-gray-600 mr-4">
                Already have an account?
              </span>
              <Link href="/login" className="bg-[#ff6347] text-white px-4 py-2">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
