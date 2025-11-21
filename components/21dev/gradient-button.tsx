"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: "primary" | "accent" | "rainbow"
}

export function GradientButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
}: GradientButtonProps) {
  const gradientClasses = {
    primary: "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
    accent: "bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70",
    rainbow: "bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90",
  }

  const button = (
    <Button
      className={cn(
        "text-white border-0 shadow-lg hover:shadow-xl transition-all",
        gradientClasses[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  )

  if (href) {
    return <a href={href}>{button}</a>
  }

  return button
}

