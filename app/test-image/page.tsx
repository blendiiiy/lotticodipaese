"use client"

import { ImageWithFallback } from "@/components/image-with-fallback"

const images = [
  "/images/L'Ottico di Paese_files/image00017.jpeg",
  "/images/L'Ottico di Paese_files/image00004.jpeg",
  "/images/L'Ottico di Paese_files/image00011.jpeg",
  "/images/L'Ottico di Paese_files/image00008.jpeg",
]

export default function TestImagePage() {
  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold mb-8">Image Test - Which image did you add?</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((src, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold">Image {index + 1}</h3>
            <p className="text-sm text-muted-foreground">{src}</p>
            <div className="relative h-64 rounded-lg overflow-hidden border-2">
              <ImageWithFallback
                src={src}
                alt={`Test image ${index + 1}`}
                width={600}
                height={400}
                fallbackText={`Image ${index + 1} not found`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <p className="font-semibold mb-2">Instructions:</p>
        <p className="text-sm">
          Check which image is the one you added. Then tell me which number it is (1, 2, 3, or 4) 
          and I'll update the homepage to use it correctly!
        </p>
      </div>
    </div>
  )
}

