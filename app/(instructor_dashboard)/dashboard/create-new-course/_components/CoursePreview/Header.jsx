import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className="text-green-500 border-green-200 bg-green-50"
          >
            Review Mode
          </Badge>
        </div>
      </div>
    </header>
  );
}
