"use client"

import { ImageWithFallback } from "@/components/image-with-fallback"
import { useState } from "react"

export default function TestImagesPage() {
  const [imagePath, setImagePath] = useState("/images/lenti-anti-luce-blu.jpg")

  const testImages = [
    "/images/lenti-anti-luce-blu.jpg",
    "/images/lenti-monofocali.jpg",
    "/images/lenti-progressive.jpg",
    "/images/montature.jpg",
  ]

  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="mb-8">
        <p className="mb-4">Test if images are loading correctly:</p>
        <div className="space-y-4">
          {testImages.map((img) => (
            <div key={img} className="border p-4 rounded">
              <p className="font-semibold mb-2">{img}</p>
              <div className="h-48 w-full border rounded overflow-hidden">
                <ImageWithFallback
                  src={img}
                  alt="Test image"
                  width={400}
                  height={200}
                  fallbackText={`Image not found: ${img}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted p-4 rounded">
        <h2 className="font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>If you see "Image not found" text, the image is missing</li>
          <li>If you see the actual image, it's working correctly!</li>
          <li>Add images to <code className="bg-background px-1 rounded">public/images/</code> folder</li>
          <li>Use the exact filenames shown above</li>
        </ol>
      </div>
    </div>
  )
}

