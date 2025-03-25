import React from 'react'

function JobInfo({heading, text}) {
  return (
    <div className='flex flex-col items-start justify-center gap-3 w-[648px]'>
      <h1 className='font-medium text-xl text-gray-900'>{heading}</h1>
      <p className='font-normal text-base text-gray-600 '>{text}</p>
    </div>
  )
}

export default JobInfo