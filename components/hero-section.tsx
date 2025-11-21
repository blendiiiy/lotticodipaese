"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  description?: string
  ctaText?: string
  ctaLink?: string
  variant?: "primary" | "secondary"
}

export function HeroSection({
  title,
  description,
  ctaText = "SCOPRI DI PIÙ",
  ctaLink = "/contattaci",
  variant = "primary",
}: HeroSectionProps) {
  return (
    <section
      className={`relative min-h-[500px] flex items-center justify-center ${
        variant === "primary"
          ? "bg-gradient-to-br from-primary/10 via-background to-primary/5"
          : "bg-gradient-to-br from-primary/5 via-background to-primary/10"
      }`}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              {title}
            </h1>
            {description && (
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                {description}
              </p>
            )}
          </div>
          {ctaText && (
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

