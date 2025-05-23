"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import AuthButtons from "./AuthButtons";
import BrowseSelect from "./BrowseSelect";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Scroll handler for sticky nav
  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > 50);
    }
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
          {/* Left: Logo + Browse + Search */}
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
              <BrowseSelect />
            </div>

            <SearchBar />
          </div>

          {/* Right: Icons + Auth / User Dropdown */}
          <div className="flex items-center space-x-4 relative">
            <NavIcons />

            {session?.user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="focus:outline-none"
                >
                  <Image
                    src={session.user.image || "/images/default-avatar.png"}
                    alt="User"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                  />
                </button>

                {dropdownOpen && (
                  <UserDropdown
                    session={session}
                    onClose={() => setDropdownOpen(false)}
                  />
                )}
              </div>
            ) : (
              <AuthButtons />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
