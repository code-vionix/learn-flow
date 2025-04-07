/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const demoCategories = [
  {
    name: "Development",
    subcategories: [
      "Web Development",
      "Mobile Development",
      "Game Development",
    ],
  },
  {
    name: "Design",
    subcategories: ["UI/UX Design", "Graphic Design", "3D & Animation"],
  },
  {
    name: "Marketing",
    subcategories: ["Digital Marketing", "SEO", "Content Marketing"],
  },
];

export default function CategorySelect({ progress, setProgress }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [hasCounted, setHasCounted] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(""); // reset subcategory on change
  };

  const handleSubcategorySelect = (sub) => {
    setSelectedSubcategory(sub);
  };

  // useEffect to track and update progress only once when both values are filled
  useEffect(() => {
    const isFilled = selectedCategory && selectedSubcategory;

    if (isFilled && !hasCounted) {
      setProgress(progress + 1);
      setHasCounted(true);
    }

    if (!isFilled && hasCounted) {
      setProgress(progress - 1);
      setHasCounted(false);
    }
  }, [selectedCategory, selectedSubcategory]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Category Dropdown */}
      <div className="space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Course Category
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 outline-none flex items-center justify-between bg-white text-left">
              {selectedCategory?.name || "Select a category"}
              <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {demoCategories.map((category) => (
              <DropdownMenuItem
                key={category.name}
                onClick={() => handleCategorySelect(category)}
              >
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Subcategory Dropdown */}
      <div className="space-y-2">
        <label
          htmlFor="subcategory"
          className="block text-sm font-medium text-gray-700"
        >
          Sub-category
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              disabled={!selectedCategory}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 outline-none flex items-center justify-between bg-white text-left disabled:opacity-50"
            >
              {selectedSubcategory || "Select a sub-category"}
              <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {selectedCategory?.subcategories?.map((sub, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleSubcategorySelect(sub)}
              >
                {sub}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
