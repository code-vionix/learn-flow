import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import StudentList from "./StudentList";
import ComposeButton from "./ComposeButton";
import SearchStudent from "./SearchStudent";

const LeftStudentBar = ({ students }) => {
  return (
    <aside className="border p-4 bg-white h-[600px] overflow-hidden">
      <ComposeButton />
      <SearchStudent />

      {/* Scrollable Sidebar */}
      <StudentList students={students} />
    </aside>
  );
};

export default LeftStudentBar;
