import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function CourseListHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
        <p className="text-muted-foreground mt-1">
          Manage and organize your course catalog
        </p>
      </div>
      <Button
        className="sm:w-auto w-full rounded-none text-primary-500 bg-primary-100"
        asChild
      >
        <Link href="/dashboard/create-new-course">
          <Plus className="mr-2 h-4 w-4" />
          Create New Course
        </Link>
      </Button>
    </div>
  );
}
