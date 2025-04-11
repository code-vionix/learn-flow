"use client";

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

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    const category = demoCategories.find((cat) => cat.name === categoryName);
    setSelectedCategory(category);
    setSelectedSubcategory("");
    setFormData("category", category?.name || "");

    if (category && !formData.category) {
      setProgress(progress + 1);
    } else if (!category && formData.category) {
      setProgress(progress - 1);
    }
  };

  const handleSubcategoryChange = (e) => {
    const sub = e.target.value;
    setSelectedSubcategory(sub);
    setFormData("subcategory", sub);

    if (sub && !formData.subcategory) {
      setProgress(progress + 1);
    } else if (!sub && formData.subcategory) {
      setProgress(progress - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Category Select */}
      <div className="space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Course Category
        </label>
        <select
          id="category"
          value={selectedCategory?.name || ""}
          onChange={handleCategoryChange}
          className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 outline-none"
        >
          <option value="">Select a category</option>
          {demoCategories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory Select */}
      <div className="space-y-2">
        <label
          htmlFor="subcategory"
          className="block text-sm font-medium text-gray-700"
        >
          Sub-category
        </label>
        <select
          id="subcategory"
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          disabled={!selectedCategory}
          className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:ring-orange-500 outline-none disabled:opacity-50"
        >
          <option value="">Select a sub-category</option>
          {selectedCategory?.subcategories?.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
