import React from 'react'
import registerImage from "@/public/images/Illustrations.png";
import Image from 'next/image'
import RegisterForm from '../_components/RegisterForm'

function RegistationPage() {
  return (
    <div className="pr-72 flex items-center justify-center overflow-hidden gap-32 h-screen w-screen">
      <Image
        src={registerImage}
        alt=""
        width={836}
        height={992}
        className="object-fit"
      />
      <div className="flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegistationPage