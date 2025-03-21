import React from 'react'
import whatsapp from '@/public/icons/whatsapp.svg'
import Image from 'next/image'

function Whatsapp() {
  return (
    <Image
    src={whatsapp}
    alt='whatsapp'
    width={20}
    height={20}
    />
  )
}

export default Whatsapp