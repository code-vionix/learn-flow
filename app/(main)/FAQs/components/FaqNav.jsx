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
    <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Frequently asked questions
            </h1>
            <div className="flex gap-4">
              <Select value={role} onValueChange={handleRoleChange} >
                <SelectTrigger className="w-[200px]">
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