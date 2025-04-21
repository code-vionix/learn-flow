import React from 'react'

function JobNature({heading , jobLocation, jobType, officeHours}) {
  return (
    <div className='flex flex-col items-start justify-center gap-3 w-full md:w-[40rem]'>
    <h1 className='font-medium text-xl text-gray-900'>{heading}</h1>
    <div className='font-normal text-base text-gray-600 flex flex-col gap-1'>
      <span>Job Type: {jobType}</span>
      <span>Office Hours: {officeHours}</span>
    </div>
    <p className='font-normal text-base text-gray-600 '><span className='font-semibold'>Location:</span> {jobLocation}</p>
  </div>
  )
}

export default JobNature