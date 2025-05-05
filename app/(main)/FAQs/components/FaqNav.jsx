import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import React from 'react'

function FaqNav({role,setRole,setSelectedTopic,topics,setExpandedQuestion}) {

  const handleRoleChange = (newRole) => {
    console.log(newRole);
    
    setRole(newRole);
    setSelectedTopic(topics[newRole][0]);
    setExpandedQuestion(null);
  };
  
  return (
    <div className=" py-6 w-full flex flex-col lg:flex-row lg:justify-between  items-center justify-center ">
            <h1 className="lg:text-4xl text-3xl  text-center lg:font-semibold text-gray-900 mb-4">
              Frequently asked questions
            </h1>
            <div className="flex gap-4">
              <Select value={role} onValueChange={handleRoleChange} >
                <SelectTrigger className="w-[7.5rem]">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="instructor">Instructor</SelectItem>
                </SelectContent>
              </Select>
            
            </div>
          </div>

  )
}

export default FaqNav