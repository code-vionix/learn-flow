"use client";

import React, { useState, useCallback } from "react";
import { Upload, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function ProfilePictureCard() {
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                alert("File size must be less than 1MB");
                return;
            }
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            setFile(file);
        }
    };

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            if (file.size > 1024 * 1024) {
                alert("File size must be less than 1MB");
                return;
            }
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            setFile(file);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'image/*': [],
        },
    });

    const deleteImage = (e) => {
        e.stopPropagation();
        setImageUrl("");
        setFile(null);
    };

    return (
        <Card className="border p-4">
            <div
                {...getRootProps()}
                className={`relative aspect-square w-full overflow-hidden ${isDragActive ? "bg-gray-300" : "bg-gray-100"
                    }`}
            >
                {imageUrl ? (
                    <Image
                        src={imageUrl || "/placeholder.svg"}
                        alt="Uploaded photo"
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gray-200">
                        <span className="text-sm text-gray-500">No image uploaded</span>
                    </div>
                )}
                <input id="photo-upload" type="file" accept="image/*" onChange={handleImageUpload} {...getInputProps()} className="hidden" />
                <label htmlFor="photo-upload" className="absolute bottom-0 left-0 right-0">
                    <div className="flex cursor-pointer items-center justify-center gap-2 bg-black/50 px-4 py-2 backdrop-blur-sm">
                        <Upload className="h-4 w-4 text-white" />
                        <span className="text-sm font-medium text-white">Upload Photo</span>
                    </div>
                </label>
                {imageUrl && (
                    <button
                        onClick={deleteImage}
                        className="absolute top-0 right-0 m-2 rounded-full bg-red-500 p-1 text-white"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                )}
            </div>
            <p className="mt-2 text-center text-xs text-gray-500">
                Image size should be under 1MB and image ratio needs to be 1:1
            </p>
        </Card>
    );
}