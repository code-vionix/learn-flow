"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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

export default function CategorySelect({
  progress,
  setProgress,
  formData,
  setFormData,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(""); // reset subcategory on change
    setFormData("category", category.name); // Store selected category

    // Update progress when a category is selected
    if (category.name && !selectedCategory?.name) {
      setProgress(progress + 1); // Increment progress
    } else if (!category.name) {
      setProgress(progress - 1); // Decrement progress if no category selected
    }
  };

  const handleSubcategorySelect = (sub) => {
    setSelectedSubcategory(sub);
    setFormData("subcategory", sub); // Store selected subcategory

    // Update progress when a subcategory is selected
    if (sub && !selectedSubcategory) {
      setProgress(progress + 1); // Increment progress
    } else if (!sub) {
      setProgress(progress - 1); // Decrement progress if no subcategory selected
    }
  };

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
