import React from 'react'

function JobInfo({heading, text}) {
  return (
    <div className='flex flex-col w-full  items-start justify-center gap-3 md:w-[40.5rem]'>
      <h1 className='font-medium text-xl text-gray-900'>{heading}</h1>
      <p className='font-normal text-base text-gray-600 '>{text}</p>
    </div>
  )
}

export default JobInfo