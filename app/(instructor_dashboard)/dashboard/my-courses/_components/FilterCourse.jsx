"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown, Search } from "lucide-react";
import { useState, useMemo } from "react";
import InstructorCourseCard from "./InstructorCourseCard";

export default function FilterCourse({ courses }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("Latest");
    const [status, setStatus] = useState("All Courses");

    const sortOptions = ["Latest", "Oldest", "A-Z", "Z-A"];
    const statusOptions = ["All Courses", "DRAFT", "ACTIVE", "COMPLETED", "ARCHIVED"];

    // Filtered and sorted courses
    const filteredCourses = useMemo(() => {
        let result = [...(courses || [])];

        // 1. Filter by search
        if (searchQuery) {
            result = result.filter((course) =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // 2. Filter by status
        if (status !== "All Courses") {
            result = result.filter((course) => course.status === status);
        }

        // 3. Sort by selected option
        switch (sortBy) {
            case "Latest":
                result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case "Oldest":
                result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            case "A-Z":
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }

        return result;
    }, [courses, searchQuery, sortBy, status]);

    return (
        <div className="w-full mx-auto mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="w-full md:w-2/5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Search:</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary text-sm"
                            placeholder="Search in your courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Sort By */}
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/5">
                    <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sort by:</label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full justify-between font-normal">
                                    {sortBy}
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full min-w-[8rem]">
                                {sortOptions.map((option) => (
                                    <DropdownMenuItem
                                        key={option}
                                        onClick={() => setSortBy(option)}
                                        className="flex items-center justify-between"
                                    >
                                        {option}
                                        {sortBy === option && <Check className="h-4 w-4 ml-2" />}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Status */}
                    <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status:</label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full justify-between font-normal">
                                    {status}
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full min-w-[8rem]">
                                {statusOptions.map((option) => (
                                    <DropdownMenuItem
                                        key={option}
                                        onClick={() => setStatus(option)}
                                        className="flex items-center justify-between"
                                    >
                                        {option}
                                        {status === option && <Check className="h-4 w-4 ml-2" />}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Render filtered courses here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <InstructorCourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No courses found.
                    </div>
                )}
            </div>
        </div>
    );
}
