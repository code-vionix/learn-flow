"use client";
import {
  ChartNoAxesColumnIncreasing,
  CirclePlus,
  CreditCard,
  Layers,
  MessageCircleMore,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/dashboard",
    icon: <ChartNoAxesColumnIncreasing />,
    label: "Dashboard",
  },
  {
    href: "/dashboard/create-new-course",
    icon: <CirclePlus />,
    label: "Create New Course",
  },
  {
    href: "/dashboard/my-courses",
    icon: <Layers />,
    label: "My Courses",
  },
  {
    href: "/dashboard/earning",
    icon: <CreditCard />,
    label: "Earning",
  },
  {
    href: "/dashboard/message",
    icon: <MessageCircleMore />,
    label: "Message",
    badge: 3,
  },
  {
    href: "/dashboard/settings",
    icon: <Settings />,
    label: "Setting",
  },
];

const DashboardNavbar = () => {
  const pathname = usePathname().toLowerCase();
  console.log(pathname);

  return (
    <div>
      <nav className="flex mt-3 flex-col justify-center text-gray-500 items-center">
        {links.map(({ href, icon, label, badge }) => (
          <Link
            key={href}
            href={href}
            className={`py-3 text-sm transition-all px-5 w-full flex items-center gap-2 relative ${
              pathname === href
                ? "bg-primary-500 text-white"
                : "hover:bg-primary-500 hover:text-white"
            }`}
          >
            {icon}
            {label}
            {badge && (
              <span className="w-5 h-5 text-center py-0.5 rounded-full bg-primary-500 text-xs absolute right-5 top-1/4 text-white">
                {badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DashboardNavbar;
