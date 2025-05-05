"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FilterWithPrice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial values from URL or default to 0
  const initialMin = Number(searchParams.get("minPrice")) || 0;
  const initialMax = Number(searchParams.get("maxPrice")) || 0;
  const initialPaid = searchParams.get("paid") === "true";
  const initialFree = searchParams.get("free") === "true";

  const [priceRange, setPriceRange] = useState([initialMin, initialMax]);
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [filters, setFilters] = useState({
    paid: initialPaid,
    free: initialFree,
  });

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    // Only set minPrice and maxPrice if either is not zero
    if (minPrice !== 0 || maxPrice !== 0) {
      params.set("minPrice", String(minPrice));
      params.set("maxPrice", String(maxPrice));
    } else {
      params.delete("minPrice");
      params.delete("maxPrice");
    }

    // Set or delete 'paid' and 'free'
    filters.paid ? params.set("paid", "true") : params.delete("paid");
    filters.free ? params.set("free", "true") : params.delete("free");

    router.push(`?${params.toString()}`, { scroll: false });
  }, [minPrice, maxPrice, filters, router, searchParams]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const handleInputChange = (e, type) => {
    const value = Number(e.target.value);
    if (type === "min") {
      setMinPrice(value);
      setPriceRange([value, maxPrice]);
    } else {
      setMaxPrice(value);
      setPriceRange([minPrice, value]);
    }
  };

  const toggleFilter = (type) => {
    setFilters((prev) => ({ ...prev, [type]: !prev[type] }));
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
            PRICE
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-5">
              {/* Slider */}
              <div className="mb-3">
                <Slider
                  value={priceRange}
                  onValueChange={handleSliderChange}
                  min={0}
                  max={5000}
                  step={10}
                  className="text-orange-500 bg-orange-400"
                />
              </div>

              {/* Input Fields */}
              <div className="flex items-center gap-2 my-6">
                <Input
                  type="number"
                  value={minPrice}
                  onChange={(e) => handleInputChange(e, "min")}
                  placeholder="$ min"
                  className="w-full text-sm"
                />
                <Input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => handleInputChange(e, "max")}
                  placeholder="$ max"
                  className="w-full text-sm"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-2 text-sm">
                <label className="flex cursor-pointer items-center gap-2">
                  <Checkbox
                    checked={filters.paid}
                    onCheckedChange={() => toggleFilter("paid")}
                  />
                  Paid
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <Checkbox
                    checked={filters.free}
                    onCheckedChange={() => toggleFilter("free")}
                  />
                  Free
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterWithPrice;
