"use client"

import { ImageWithFallback } from "@/components/image-with-fallback"

interface Logo {
  name: string
  src: string
  alt: string
}

interface LogoCloudProps {
  logos: Logo[]
  title?: string
  subtitle?: string
}

export function LogoCloud({ logos, title, subtitle }: LogoCloudProps) {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Logo grid - Seamless scrolling */}
          <div className="overflow-hidden">
            <div className="flex gap-8 md:gap-12 items-center justify-start animate-scroll hover:[animation-play-state:paused]">
              {/* First set */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 md:h-24 lg:h-28 px-4 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <div className="relative w-full h-full max-w-[180px] md:max-w-[200px]">
                    <ImageWithFallback
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={120}
                      className="w-full h-full object-contain"
                      fallbackText=""
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 md:h-24 lg:h-28 px-4 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <div className="relative w-full h-full max-w-[180px] md:max-w-[200px]">
                    <ImageWithFallback
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={120}
                      className="w-full h-full object-contain"
                      fallbackText=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

