import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 py-2 text-sm text-gray-600 ">
      <Link href={"/"}>
        <span>Home</span>
      </Link>
      <ArrowRight className="w-3 h-3" />
      <span>Development</span>
      <ArrowRight className="w-3 h-3" />
      <span>Web Development</span>
      <ArrowRight className="w-3 h-3" />
      <span>Webflow</span>
    </nav>
  );
}
