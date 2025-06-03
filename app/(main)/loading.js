"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Preloader() {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 10)
        return newProgress > 100 ? 100 : newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="relative w-32 h-32 mb-4 animate-pulse">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="object-contain w-[100px] m-auto"
          priority
        />
      </div>

      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-500 transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>

      <p className="mt-4 text-sm text-primary-500">Loading... {loadingProgress}%</p>
    </div>
  )
}
