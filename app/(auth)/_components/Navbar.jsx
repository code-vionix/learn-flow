"use client";

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
        <Link href="/" className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#ff6347]"
          >
            {/* ... SVG paths remain unchanged ... */}
            <path
              d="M21.9999 10.0001V8.00005C21.9999 7.00005 21.9999 6.00005 21.0999 5.10005C20.1999 4.20005 19.1999 4.00005 17.9999 4.00005H5.99994C4.79994 4.00005 3.79994 4.20005 2.89994 5.10005C1.99994 6.00005 1.99994 7.00005 1.99994 8.00005V16.0001C1.99994 17.0001 1.99994 18.0001 2.89994 18.9001C3.79994 19.8001 4.79994 20.0001 5.99994 20.0001H11.9999"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 10.5C12 9.12 13.12 8 14.5 8H16.5C17.88 8 19 9.12 19 10.5V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
            <path
              d="M5 8H8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 19.5C17.933 19.5 19.5 17.933 19.5 16C19.5 14.067 17.933 12.5 16 12.5C14.067 12.5 12.5 14.067 12.5 16C12.5 17.933 14.067 19.5 16 19.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
            <path
              d="M21.9999 21.9999L19.9999 19.9999"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2 text-xl font-semibold">E-tutor</span>
        </Link>

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
