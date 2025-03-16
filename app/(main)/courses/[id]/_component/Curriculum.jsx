"use client";
import { ChevronDown, Clock, File, FolderOpen, Play } from "lucide-react";
import { useState } from "react";

function Curriculum() {
  const [openSection, setOpenSection] = useState(0);

  const sections = [
    {
      title: "Getting Started",
      lectures: 4,
      duration: "51m",
      items: [
        { title: "What's is Webflow?", duration: "07:31", type: "video" },
        { title: "Sign up in Webflow", duration: "07:31", type: "video" },
        {
          title: "Webflow Terms & Conditions",
          duration: "5.3 MB",
          type: "file",
          fileSize: "5.3 MB",
        },
        { title: "Teaser of Webflow", duration: "07:31", type: "video" },
        {
          title: "Practice Project",
          duration: "5.3 MB",
          type: "file",
          fileSize: "5.3 MB",
        },
      ],
    },
    {
      title: "Secret of Good Design",
      lectures: 52,
      duration: "5h 49m",
    },
    {
      title: "Practice Design Like an Artist",
      lectures: 43,
      duration: "53m",
    },
    {
      title: "Web Development (webflow)",
      lectures: 137,
      duration: "10h 6m",
    },
    {
      title: "Secrets of Making Money Freelancing",
      lectures: 21,
      duration: "38m",
    },
    {
      title: "Advanced",
      lectures: 39,
      duration: "91m",
    },
  ];

  return (
    <div className="">
      <div className="w-full mx-auto">
        <div className="bg-white  ">
          {/* Header */}
          <div className="p-6 border-b border-[#E9EAF0]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-[#1D2026]">
                Curriculum
              </h2>
              <div className="flex items-center gap-6 text-sm text-[#4E5566]">
                <div className="flex items-center gap-2">
                  <FolderOpen size={20} className="text-[#FF6636]" />
                  <span>6 Sections</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play size={20} className="text-[#564FFD]" />
                  <span>202 lectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#FD8E1F]" />
                  <span>19h 37m</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#E9EAF0]">
            {" "}
            {/* Sections */}
            {sections.map((section, index) => (
              <div
                key={index}
                className="border-b border-[#E9EAF0] last:border-b-0"
              >
                <div
                  className="p-5 flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setOpenSection(openSection === index ? -1 : index)
                  }
                >
                  <div className="flex items-center gap-2">
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${openSection === index ? "rotate-180 text-[#FF6636]" : "text-[#6E7485]"}`}
                    />
                    <span
                      className={`text-base ${openSection === index ? "text-[#FF6636]" : "text-[#1D2026]"}`}
                    >
                      {section.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#4E5566]">
                    <div className="flex items-center gap-2">
                      <Play size={20} className="text-[#564FFD]" />
                      <span>{section.lectures} lectures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={20} className="text-[#FD8E1F]" />
                      <span>{section.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Section Items */}
                {openSection === index && section.items && (
                  <div className="px-5 pb-4">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center py-2 text-sm"
                      >
                        <div className="flex items-center gap-2">
                          {item.type === "video" ? (
                            <Play size={16} className="text-[#1D2026]" />
                          ) : (
                            <File size={16} className="text-[#1D2026]" />
                          )}
                          <span className="text-[#4E5566]">{item.title}</span>
                        </div>
                        <span className="text-[#8C94A3]">
                          {item.fileSize || item.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
