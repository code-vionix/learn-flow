"use client";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ToolsCategoryFilter = () => {
  const [istittle, setIstittle] = useState(true);
  const [selectedTools, setSelectedTools] = useState([]);

  const toggleTool = (item) => {
    setSelectedTools((prev) =>
      prev.includes(item) ? prev.filter((t) => t !== item) : [...prev, item]
    );
  };

  return (
    <div className="p-4 w-[312px] max-w-[312px] mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <Card className="border border-gray-200 w-full py-3">
        <CardHeader
          className={`px-4 py-3 ${
            istittle ? "border-b" : "border-none"
          } flex flex-row items-center justify-between space-y-0`}
        >
          <h3 className="font-medium text-lg tracking-wide uppercase">TOOLS</h3>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-gray-500 transition-transform cursor-pointer",
              !istittle && "rotate-180"
            )}
            onClick={() => setIstittle(!istittle)}
          />
        </CardHeader>
        <CardContent
          className={cn(
            "p-0 transition-all duration-200",
            !istittle && "hidden"
          )}
        >
          <div className="">
            {data?.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Checkbox
                    id={item.name}
                    checked={
                      tittle === "ratting"
                        ? selectedRatting.includes(item.name)
                        : tittle === "tools"
                        ? selectedTools.includes(item.name)
                        : selectedCourseLevel.includes(item.name)
                    }
                    onCheckedChange={() => toggleTool(item.name)}
                    className="h-4 w-4 rounded border-gray-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500"
                  />
                  <Label
                    htmlFor={item.name}
                    className={`${
                      selectedTools.includes(item.name)
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolsCategoryFilter;
