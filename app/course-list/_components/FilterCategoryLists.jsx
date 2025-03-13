import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const FilterCategoryLists = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  console.log(selectedCategory);

  const toggleCategory = (cat) => {
    setSelectedCategory((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <Accordion key={category.id} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline data-[state=open]:text-primary-500">
          {category.title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="">
            {category?.subCategory?.map((item) => (
              <div
                key={item.name}
                className={`flex items-center justify-between  py-2 hover:bg-gray-50`}
              >
                <div className="flex items-center">
                  <Checkbox
                    id={item.name}
                    checked={selectedCategory.includes(item.name)}
                    onCheckedChange={() => toggleCategory(item.name)}
                    className="h-4 w-4 rounded border-gray-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                  />
                  <Label
                    htmlFor={item.name}
                    className={`${
                      selectedCategory.includes(item.name)
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
