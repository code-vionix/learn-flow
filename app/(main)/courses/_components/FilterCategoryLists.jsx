"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const FilterCategoryLists = ({ category, onFilterChange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectedCategories = searchParams.get("category")?.split(",") || [];
  const selectedSubcategories = searchParams.get("subcategory")?.split(",") || [];

  const toggleCategory = (cat, subCat) => {
    const isCategoryChecked = !selectedCategories.includes(cat);
    const isSubcategoryChecked = !selectedSubcategories.includes(subCat);

    let newSelectedCategories = [...selectedCategories];
    let newSelectedSubcategories = [...selectedSubcategories];

    // Toggle category
    if (isCategoryChecked) {
      newSelectedCategories.push(cat);
    } else {
      newSelectedCategories = newSelectedCategories.filter((c) => c !== cat);
    }

    // Toggle subcategory
    if (isSubcategoryChecked) {
      newSelectedSubcategories.push(subCat);
    } else {
      newSelectedSubcategories = newSelectedSubcategories.filter((s) => s !== subCat);
    }

    const params = new URLSearchParams(searchParams);
    if (newSelectedCategories.length > 0) {
      params.set("category", newSelectedCategories.join(","));
    } else {
      params.delete("category");
    }

    if (newSelectedSubcategories.length > 0) {
      params.set("subcategory", newSelectedSubcategories.join(","));
    } else {
      params.delete("subcategory");
    }

    const newUrl = `${pathname}?${params.toString()}`;

    // Log the updated URL to console
    console.log("Updated URL query:", newUrl);

    router.push(newUrl, { scroll: false });

    if (onFilterChange) {
      onFilterChange("category", isCategoryChecked);
      onFilterChange("subcategory", isSubcategoryChecked);
    }
  };

  return (
    <Accordion key={category.id} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline data-[state=open]:text-primary-500">
          {category.name}
        </AccordionTrigger>
        <AccordionContent>
          <div>
            {category?.SubCategory?.map((item) => {
              const isSubcategoryChecked = selectedSubcategories.includes(item.name);

              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between py-2 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <Checkbox
                      id={item.name}
                      checked={isSubcategoryChecked}
                      onCheckedChange={() => toggleCategory(category.name, item.name)}
                      className="h-4 w-4 rounded border-gray-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                    />
                    <Label
                      htmlFor={item.name}
                      className={`${
                        isSubcategoryChecked ? "text-primary-500" : "text-gray-700"
                      } ml-2 text-sm cursor-pointer`}
                    >
                      {item.name}
                    </Label>
                  </div>
                  <span className="text-sm text-gray-400">{item.count}</span>
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterCategoryLists;
