"use client";

import { Plus, Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormHeader from "../basic_information_from/FormHeader";

// 🧠 Mock all instructors from backend
const allInstructors = [
  {
    id: "1",
    name: "Alice Johnson",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Bob Smith",
    role: "Frontend Developer",
    avatar: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Carol Nguyen",
    role: "Backend Developer",
    avatar: "/placeholder.svg",
  },
];

export default function CoursePublish({ title }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstructors, setSelectedInstructors] = useState([]);

  // ✅ Filter instructors: not already added + search match
  const filteredInstructors = allInstructors.filter(
    (instructor) =>
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedInstructors.some((i) => i.id === instructor.id)
  );

  const addInstructor = (instructor) => {
    setSelectedInstructors([...selectedInstructors, instructor]);
    setSearchTerm("");
  };

  const removeInstructor = (id) => {
    setSelectedInstructors((prev) =>
      prev.filter((instructor) => instructor.id !== id)
    );
  };

  return (
    <>
      <FormHeader title={title} />
      <div className="container mx-auto px-4 py-6 space-y-10">
        {/* 📩 Message Section */}
        <section>
          <h2 className="text-lg font-medium mb-4">Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Welcome Message
              </label>
              <Textarea
                placeholder="Enter course starting message here..."
                className="min-h-[120px] border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Congratulations Message
              </label>
              <Textarea
                placeholder="Enter your course completed message here..."
                className="min-h-[120px] border-gray-300"
              />
            </div>
          </div>
        </section>

        {/* 👨‍🏫 Instructor Section */}
        <section>
          <h2 className="text-lg font-medium mb-4">
            Add Instructor (
            {selectedInstructors.length.toString().padStart(2, "0")})
          </h2>

          {/* 🔍 Search Input */}
          <div className="relative mb-4">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search instructor..."
              className="pl-10 border-gray-300 w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* 🔍 Search Result Dropdown */}
            {searchTerm && filteredInstructors.length > 0 && (
              <div className="absolute z-10 bg-white shadow-md border w-full mt-1 rounded-md max-h-48 overflow-y-auto">
                {filteredInstructors.map((instructor) => (
                  <div
                    key={instructor.id}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => addInstructor(instructor)}
                  >
                    <Image
                      src={instructor.avatar}
                      alt={instructor.name}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{instructor.name}</p>
                      <p className="text-xs text-gray-500">{instructor.role}</p>
                    </div>
                    <Plus size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 🧑‍🏫 Selected Instructor Cards */}
          {selectedInstructors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {selectedInstructors.map((instructor) => (
                <Card
                  key={instructor.id}
                  className="flex items-center p-3 bg-gray-50"
                >
                  <Image
                    src={instructor.avatar}
                    alt={instructor.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{instructor.name}</p>
                    <p className="text-sm text-gray-500">{instructor.role}</p>
                  </div>
                  <button
                    onClick={() => removeInstructor(instructor.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No instructors added yet.</p>
          )}
        </section>

        {/* 🚀 Footer Navigation */}
        <div className="mt-12 flex justify-between">
          <Button variant="outline" className="text-gray-700">
            Prev Step
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Submit For Review
          </Button>
        </div>
      </div>
    </>
  );
}
