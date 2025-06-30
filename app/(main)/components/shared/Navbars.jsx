/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbars() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/instructor", label: "Become an Instructor" },
  ];
  return (
    <nav className="bg-primary text-gray-300">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Left - Navigation Links */}
          <div className="flex items-center space-x-6 text-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right - Currency & Language Dropdowns */}
          {/* <div className="flex items-center space-x-6 text-sm">
            <button className="flex items-center hover:text-white">
              USD <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <button className="flex items-center hover:text-white">
              English <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
