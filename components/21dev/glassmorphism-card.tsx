"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
}

export function GlassmorphismCard({ children, className }: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20",
        "bg-white/10 backdrop-blur-xl",
        "shadow-2xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  )
}

