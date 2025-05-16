import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Breadcrumb({ categoryName, subCategoryName }) {
  return (
    <nav className="flex items-center gap-2 py-4 text-sm text-gray-600 ">
      <Link href={"/"}>
        <span>Home</span>
      </Link>
      <ArrowRight className="w-3 h-3" />
      <span>courses</span>
      <ArrowRight className="w-3 h-3" />
      <span>{categoryName}</span>
      <ArrowRight className="w-3 h-3" />
      <span>{subCategoryName}</span>
    </nav>
  );
}
