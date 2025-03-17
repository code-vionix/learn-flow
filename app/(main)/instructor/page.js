import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import React from 'react'
import InstructorHeader from './_component/InstructorHeader'
import InstructorDisplayInfo from './_component/InstructorDisplayInfo'
import WhyTeaching from './_component/WhyTeaching'
import BecomeSuccessful from './_component/BecomeSuccessful'
import InstructRules from './_component/InstructRules'
import HelpCenter from './_component/HelpCenter'
import SuccessStory from './_component/SuccessStory'
import Cta from './_component/Cta'
import InstructorNewsletter from './_component/InstructorNewslettar'

export default function Instructor_page() {
  return (
    <div className="">
      <CustomBreadcrumb />
      <InstructorHeader />
      <InstructorDisplayInfo />
      <WhyTeaching />
      <BecomeSuccessful />
      <InstructRules />
      <HelpCenter />
      <SuccessStory />
      <Cta />
      <InstructorNewsletter />
    </div>
  )
}
