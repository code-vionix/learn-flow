"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";
import { useState } from "react";

const FilterCard = ({ title, items, onFilterChange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Get the selected filters from URL
  const selectedOptions = searchParams.get(title)?.split(",") || [];

  // State to control "See More"
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, 5);

  const toggleOption = (item) => {
    const itemStr = item.toString();
    const isChecked = !selectedOptions.includes(itemStr);
    const newSelectedOptions = isChecked
      ? [...selectedOptions, itemStr]
      : selectedOptions.filter((opt) => opt !== itemStr);

    const params = new URLSearchParams(searchParams);
    if (newSelectedOptions.length > 0) {
      params.set(title, newSelectedOptions.join(","));
    } else {
      params.delete(title);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    // Notify parent to update hasCount
    if (onFilterChange) {
      onFilterChange(title, isChecked);
    }
  };

  return (
    <div className="p-4 mt-6 border rounded-sm w-full">
      <Accordion
        className="text-2xl text-black mb-2 pb-6 uppercase font-semibold"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline text-base uppercase data-[state=open]:text-primary-500">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            <div>
              {displayedItems?.map((item) => {
                const itemStr = item.toString();
                const isChecked = selectedOptions.includes(itemStr);
                return (
                  <div
                    key={itemStr}
                    className="flex items-center justify-between py-2 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Checkbox
                        id={itemStr}
                        checked={isChecked}
                        onCheckedChange={() => toggleOption(itemStr)}
                        className="h-4 w-4 rounded border-gray-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                      />
                      <Label
                        htmlFor={itemStr}
                        className={`${
                          isChecked ? "text-primary-500" : "text-gray-700"
                        } ml-2 text-sm cursor-pointer`}
                      >
                        {title.toLowerCase() === "rating" ? (
                          <span>
                            <Star className="h-4 w-4 inline-block text-yellow-400 fill-current" />
                            {` ${itemStr} Star`}
                          </span>
                        ) : (
                          itemStr
                        )}
                      </Label>
                    </div>
                  </div>
                );
              })}

              {items.length > 5 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="mt-2 text-sm text-primary-500 hover:underline"
                >
                  {showAll ? "See Less" : "See More"}
                </button>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterCard;
