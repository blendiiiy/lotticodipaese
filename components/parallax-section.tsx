"use client"

import { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
}

export function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10">
        {children}
      </div>
    </section>
  )
}

