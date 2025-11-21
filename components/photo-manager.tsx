"use client"

import { useState } from "react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Check, X } from "lucide-react"

interface PhotoManagerProps {
  photos: Array<{
    path: string
    name: string
    usedIn: string[]
  }>
}

export function PhotoManager({ photos }: PhotoManagerProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all ${
              selectedPhoto === photo.path
                ? "ring-2 ring-primary"
                : "hover:shadow-lg"
            }`}
            onClick={() => setSelectedPhoto(photo.path)}
          >
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src={photo.path}
                alt={photo.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
                fallbackText={photo.name}
              />
            </div>
            <CardContent className="p-4">
              <p className="text-sm font-medium truncate">{photo.name}</p>
              {photo.usedIn.length > 0 && (
                <p className="text-xs text-muted-foreground mt-1">
                  Used in: {photo.usedIn.join(", ")}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedPhoto && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Photo Details</CardTitle>
            <CardDescription>Selected: {selectedPhoto}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={selectedPhoto}
                  alt="Selected photo"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                  fallbackText="Photo preview"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setSelectedPhoto(null)}>
                  <X className="mr-2 h-4 w-4" />
                  Close
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

