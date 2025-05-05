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

const FilterCategoryLists = ({ category }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Get selected categories from URL
  const selectedCategories = searchParams.get("category")?.split(",") || [];

  const toggleCategory = (cat) => {
    const newSelectedCategories = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];

    const params = new URLSearchParams(searchParams);
    if (newSelectedCategories.length > 0) {
      params.set("category", newSelectedCategories.join(","));
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Accordion key={category.id} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline data-[state=open]:text-primary-500">
          {category.name}
        </AccordionTrigger>
        <AccordionContent>
          <div>
            {category?.SubCategory?.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-2 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Checkbox
                    id={item.name}
                    checked={selectedCategories.includes(item.name)}
                    onCheckedChange={() => toggleCategory(item.name)}
                    className="h-4 w-4 rounded border-gray-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                  />
                  <Label
                    htmlFor={item.name}
                    className={`${
                      selectedCategories.includes(item.name)
                        ? "text-primary-500"
                        : "text-gray-700"
                    } ml-2 text-sm cursor-pointer`}
                  >
                    {item.name}
                  </Label>
                </div>
                <span className="text-sm text-gray-400">{item.count}</span>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterCategoryLists;
