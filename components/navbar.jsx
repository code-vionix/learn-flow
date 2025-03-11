import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold">
          shadcn/ui Components
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium">
            Components
          </Link>
          <Link href="/theme" className="text-sm font-medium">
            Theme
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

