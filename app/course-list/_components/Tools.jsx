"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { course } from "@/data/dummyFilterData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Tools = () => {
  const [selectedOption, setSelectedOption] = useState([]); // for selected toots item

  const toggleOption = (item) => {
    setSelectedTools((prev) =>
      prev.includes(item) ? prev.filter((t) => t !== item) : [...prev, item]
    );
  };

  return (
    <>
      {course.categorys.map((category) => (
        <div key={category.id} className="p-4 mt-6 border rounded-sm w-full">
          {/* <h1 className="text-2xl text-black mb-2 pb-6 uppercase font-semibold border-b">
            Category
          </h1> */}
          <Accordion
            className="text-2xl text-black mb-2 pb-6 uppercase font-semibold"
            key={category.id}
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline text-base uppercase data-[state=open]:text-primary-500">
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
                          checked={selectedOption.includes(item.name)}
                          onCheckedChange={() => toggleOption(item.name)}
                          className="h-4 w-4 rounded border-gray-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                        />
                        <Label
                          htmlFor={item.name}
                          className={`${
                            selectedOption.includes(item.name)
                              ? "text-primary-500"
                              : "text-gray-700"
                          } ml-2 text-sm cursor-pointer`}
                        >
                          {item.name}
                        </Label>
                      </div>
                      <span className="text-sm text-gray-400">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </>
  );
};

export default Tools;
