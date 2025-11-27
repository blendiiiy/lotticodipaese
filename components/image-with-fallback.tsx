"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallbackText?: string
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackText,
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-muted text-muted-foreground ${className}`}>
        {fallbackText || alt}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`w-full h-full ${className}`}
      onError={() => setImgError(true)}
      unoptimized
    />
  )
}

