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

const FilterCard = ({ title, items }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Get the selected filters from URL
  const selectedOptions = searchParams.get(title)?.split(",") || [];

  const toggleOption = (item) => {
    const newSelectedOptions = selectedOptions.includes(item)
      ? selectedOptions.filter((opt) => opt !== item)
      : [...selectedOptions, item];

    const params = new URLSearchParams(searchParams);
    if (newSelectedOptions.length > 0) {
      params.set(title, newSelectedOptions.join(","));
    } else {
      params.delete(title);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
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
              {items?.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-2 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <Checkbox
                      id={item}
                      checked={selectedOptions.includes(item.toString())}
                      onCheckedChange={() => toggleOption(item.toString())}
                      className="h-4 w-4 rounded border-gray-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                    />
                    <Label
                      htmlFor={item.toString()}
                      className={`${
                        selectedOptions.includes(item.toString())
                          ? "text-primary-500"
                          : "text-gray-700"
                      } ml-2 text-sm cursor-pointer`}
                    >
                      {title.toLowerCase() === "rating" ? (
                        <span>
                          <Star className="h-4 w-4 inline-block text-yellow-400 fill-current" />
                          {`    ${item}  Star`}
                        </span>
                      ) : (
                        item
                      )}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterCard;
