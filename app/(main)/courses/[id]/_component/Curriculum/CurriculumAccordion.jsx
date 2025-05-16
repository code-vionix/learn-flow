"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Clock, File, Play } from "lucide-react";
import { useState } from "react";

export default function CurriculumAccordion({ sections = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border rounded-md divide-y bg-white"
      onValueChange={(val) => {
        const idx = val?.split("-")[1]; // "section-0" => 0
        setOpenIndex(val ? Number(idx) : null);
      }}
    >
      {sections.map((section, index) => {
        const lessons = section.lessons || [];
        const totalDuration = lessons.reduce(
          (sum, lesson) => sum + (lesson.estimatedTime || 0),
          0
        );
        const durationText =
          totalDuration >= 60
            ? `${Math.floor(totalDuration / 60)}h ${totalDuration % 60}m`
            : `${totalDuration}m`;

        const isOpen = openIndex === index;

        return (
          <AccordionItem
            key={index}
            value={`section-${index}`}
            className="px-0"
          >
            <AccordionTrigger className="py-4 px-4 hover:no-underline">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 text-[#FD4D0C]"
                        : "rotate-0 text-gray-400"
                    }`}
                    size={18}
                  />
                  <span
                    className={`font-semibold text-[15px] ${
                      isOpen ? "text-[#FD4D0C]" : "text-[#1D2026]"
                    }`}
                  >
                    {section.title}
                  </span>
                </div>
                <span className="text-sm flex gap-5 items-center">
                  <span className="flex gap-1 items-center text-[#564FFD]">
                    <Play size={16} />
                    {lessons.length} lectures
                  </span>
                  <span className="flex gap-1 items-center text-[#FD8E1F]">
                    <Clock size={16} />
                    {durationText}
                  </span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 px-4">
              {lessons.map((lesson, i) => (
                <div
                  key={lesson.id}
                  className="flex justify-between items-center py-2 text-sm text-[#1D2026] border-b last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    {lesson.videoUrl ? (
                      <Play size={14} className="text-gray-700" />
                    ) : (
                      <File size={14} className="text-gray-700" />
                    )}
                    <span>{lesson.title}</span>
                  </div>
                  <span className="text-[#8C94A3] text-xs">
                    {lesson.estimatedTime
                      ? `${lesson.estimatedTime}m`
                      : lesson.fileSize || "--"}
                  </span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
