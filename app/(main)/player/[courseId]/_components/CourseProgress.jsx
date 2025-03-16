"use client"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function CourseProgress() {
    const [progress, setProgress] = useState(13)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-full h-1 mt-2 !rounded-none green-progress !bg-success" />
}
