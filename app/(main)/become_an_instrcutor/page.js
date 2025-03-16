import React from 'react'
import Instructor_header from './_component/Instructor_header'
import Instructor_display_info from './_component/Instructor_display_info'
import Why_teaching from './_component/why_teaching'
import Become_successful from './_component/Become_successful'
import Instruct_rules from './_component/Instruct_rules'
import Help_center from './_component/Help_center'
import Success_story from './_component/Success_story'
import Cta from './_component/Cta'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

export default function Instructor_page() {
  return (
      <div className="">
          <CustomBreadcrumb />
          <div className="instructor-container bg-white overflow-hidden">
                <Instructor_header />    
          </div>
         <Instructor_display_info />
          <div className="instructor-container">
                <Why_teaching />
                <Become_successful />
                <Instruct_rules />
                <Help_center />
                <Success_story />
                <Cta /> 
          </div>
            </div>
  )
}
