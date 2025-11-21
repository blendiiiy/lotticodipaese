"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

interface VideoHeroProps {
  videoSrc: string
  poster?: string
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function VideoHero({
  videoSrc,
  poster,
  title,
  subtitle,
  ctaText = "Prenota una Visita",
  ctaLink = "/contattaci",
  secondaryCtaText = "Scopri i Servizi",
  secondaryCtaLink = "/servizi",
}: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          loop
          muted={isMuted}
          playsInline
          autoPlay
          onError={(e) => {
            // Fallback to image if video fails to load
            const target = e.target as HTMLVideoElement
            if (target.parentElement && poster) {
              target.style.display = 'none'
            }
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback image if video doesn't exist */}
        {poster && (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">L'Ottico di Paese</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            {title}
            <span className="block mt-2 bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
            Soluzioni visive personalizzate con tecnologia all'avanguardia. 
            <span className="block mt-1">La tua vista è la nostra passione.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-xl">
              <Link href={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-white/80 text-white bg-white/20 hover:bg-white hover:text-primary backdrop-blur-md font-semibold">
              <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white" />
          )}
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30"
          onClick={toggleMute}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </Button>
      </div>
    </section>
  )
}
