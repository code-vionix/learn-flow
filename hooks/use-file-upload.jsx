"use client"

import { useRef, useState } from "react"

export function useFileUpload(options = {}) {
  const { accept = "*/*", onFileSelect } = options

  const [fileName, setFileName] = useState("")
  const [fileUrl, setFileUrl] = useState("")
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setFileName(file.name)

      // Create a temporary URL for the file if needed
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        const url = URL.createObjectURL(file)
        setFileUrl(url)
      }

      if (onFileSelect) {
        onFileSelect(file)
      }
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const resetFile = () => {
    setFileName("")
    setFileUrl("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return {
    fileName,
    fileUrl,
    fileInputRef,
    handleFileSelect,
    triggerFileInput,
    resetFile,
    fileInputProps: {
      type: "file",
      ref: fileInputRef,
      className: "hidden",
      accept,
      onChange: handleFileSelect,
    },
  }
}
