"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"

interface SmartVideoHeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  fallbackImage?: string
}

// Try multiple video paths
const VIDEO_PATHS = [
  "/videos/hero.mp4", // First check for hero.mp4
  "/videos/hero-video.mp4",
  "/videos/video.mp4",
  "/images/hero-video.mp4",
  "/images/video.mp4",
]

export function SmartVideoHero({
  title,
  subtitle,
  ctaText = "Book an Appointment",
  ctaLink = "/contattaci",
  secondaryCtaText = "Discover Services",
  secondaryCtaLink = "/servizi",
  fallbackImage,
}: SmartVideoHeroProps) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Try to find video
  useEffect(() => {
    const checkVideo = async () => {
      for (const path of VIDEO_PATHS) {
        try {
          const response = await fetch(path, { method: 'HEAD' })
          if (response.ok) {
            setVideoSrc(path)
            break
          }
        } catch (e) {
          // Continue to next path
        }
      }
    }
    checkVideo()
  }, [])

  // Ensure video autoplays and is always muted
  useEffect(() => {
    if (videoRef.current && videoSrc && !videoError) {
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }, [videoSrc, videoError])

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Video or Image Background */}
      <div className="absolute inset-0 z-0">
        {videoSrc && !videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay
            onError={() => setVideoError(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : fallbackImage ? (
          <Image
            src={fallbackImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full border-2 border-white/30 mb-8 shadow-xl">
            <Star className="h-5 w-5 text-accent" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">L'Ottico di Paese</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
            <span className="block mb-3">{title}</span>
            <span className="block mt-3 bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent drop-shadow-lg">
              {subtitle}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Personalized visual solutions with cutting-edge technology. 
            <span className="block mt-2 text-white/95">Your vision is our passion.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl font-bold">
              <Link href={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white text-white bg-white/20 hover:bg-white hover:text-primary backdrop-blur-md font-bold shadow-xl">
              <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}

