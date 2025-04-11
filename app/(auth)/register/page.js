import React from 'react'
import registerImage from "@/public/images/Illustrations.png";
import Image from 'next/image'
import RegisterForm from '../_components/RegisterForm'

function RegistationPage() {
  return (
    <div className="flex items-center justify-between overflow-hidden gap-32 h-[91vh] w-full ">
      <Image
        src={registerImage}
        alt=""
        width={836}
        height={992}
        className="object-fit"
      />
      <div className="flex items-center justify-center w-full">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegistationPage