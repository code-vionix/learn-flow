import { Check } from 'lucide-react'
import React from 'react'

function JobRequirementAndBenefit({heading, isBenefit,requirementAndBenefit}) {
  return (
    <div className='flex flex-col items-start justify-center gap-3 w-[648px]'>
    <h1 className='font-medium text-xl text-gray-900'>{heading}</h1>
    <ul className='font-normal text-base text-gray-600 '>
          { [
        "Vestibulum hendrerit facilisis libero, pretium condimentum ipsum vulputate at.",
        "Quisque varius auctor augue id blandit. ",
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "Ut ut magna condimentum, pharetra est nec, lacinia nulla.",
        "Aliquam tempus mollis sem eget ullamcorper. ",
        "Donec non orci eget lorem laoreet ullamcorper et et magna. ",
        "Donec non orci eget lorem laoreet ullamcorper et et magna. ",
        "Nam bibendum tristique nibh id tristique.",
        "Vestibulum lorem libero, rutrum vitae tincidunt quis, sodales quis neque.",
      ].map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              {isBenefit ? (<Check color='rgba(35, 189, 51, 1)' size={25}/>):(<span className="w-2 h-2 mt-2 bg-gray-500 rounded-full"></span>)}
              
              <span>{item}</span>
            </li>
          ))}
        </ul>
  </div>
  )
}

export default JobRequirementAndBenefit