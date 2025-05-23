"use client";

import { LogOut, Settings as SettingsIcon, User } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserDropdown({ session, onClose }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const userRole = session.user.role;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-4 z-50 ring-1 ring-black ring-opacity-5 text-center"
    >
      <div className="flex justify-center mb-2">
        {session.user.image ? (
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={session.user.image}
              alt="User"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold">
            {session.user.name
              ? session.user.name.charAt(0).toUpperCase()
              : session.user.email.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <p className="mb-4 font-semibold text-gray-800">
        {session.user.name || session.user.email}
      </p>
      <hr className="mb-3" />

      <Link
        href={
          userRole === "TEACHER"
            ? "/dashboard"
            : userRole === "STUDENT"
              ? "/student"
              : "/"
        }
        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
        onClick={onClose}
      >
        <User className="mr-2 h-4 w-4" />
        Dashboard
      </Link>

      <Link
        href={
          userRole === "TEACHER"
            ? "/settings"
            : userRole === "STUDENT"
              ? "/student/settings"
              : "/settings"
        }
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={onClose}
      >
        <SettingsIcon className="mr-2 h-4 w-4" />
        Settings
      </Link>

      <button
        className="flex items-center w-full justify-center px-4 py-2 text-primary-500 hover:bg-primary-100 font-semibold"
        onClick={() => {
          onClose();
          signOut({
            redirect: true,
            callbackUrl: "http://localhost:3001",
          });
        }}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </button>
    </div>
  );
}
