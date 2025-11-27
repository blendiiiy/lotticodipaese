"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles, Star, Eye, Shield, Users } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { cn } from "@/lib/utils"

interface ProductSpotlightHeroProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  products?: Array<{
    title: string
    description: string
    image: string
    icon?: React.ReactNode
    badge?: string
  }>
}

const defaultProducts = [
  {
    title: "Lenti Progressive",
    description: "Visione perfetta a tutte le distanze",
    image: "/images/L'Ottico di Paese_files/Progressive-Lenses.webp",
    icon: <Eye className="h-6 w-6" />,
    badge: "Popolare"
  },
  {
    title: "Lenti Anti Luce Blu",
    description: "Protezione completa per i tuoi occhi",
    image: "/images/L'Ottico di Paese_files/image00011.jpeg",
    icon: <Shield className="h-6 w-6" />,
    badge: "Novità"
  },
  {
    title: "Consulenza Personalizzata",
    description: "Assistenza dedicata per ogni esigenza",
    image: "/images/L'Ottico di Paese_files/image00004.jpeg",
    icon: <Users className="h-6 w-6" />,
    badge: "Premium"
  },
]

export function ProductSpotlightHero({
  title = "Dove la Tua Visione",
  subtitle = "Incontra Precisione e Stile",
  description = "Scopri le nostre soluzioni visive all'avanguardia, progettate per offrirti il massimo comfort e la migliore qualità.",
  ctaText = "Prenota una Visita",
  ctaLink = "/contattaci",
  secondaryCtaText = "Scopri di Più",
  secondaryCtaLink = "/servizi",
  products = defaultProducts,
}: ProductSpotlightHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [products.length])

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(useTransform(mouseX, [0, 1000], [-50, 50]), springConfig)
  const y = useSpring(useTransform(mouseY, [0, 1000], [-50, 50]), springConfig)

  useEffect(() => {
    mouseX.set(mousePosition.x)
    mouseY.set(mousePosition.y)
  }, [mousePosition, mouseX, mouseY])

  return (
    <section 
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(29,78,216,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(43,96,56,0.1),transparent_50%)]" />
        
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                L'Ottico di Paese
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block">{title}</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                {subtitle}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button asChild size="lg" className="text-base px-8 py-6 shadow-xl group/btn">
                <Link href={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 py-6">
                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Clienti Soddisfatti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anni di Esperienza</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Qualità Garantita</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Product Cards Container */}
            <div className="relative h-[600px]">
              {products.map((product, index) => {
                const isActive = index === activeIndex
                const offset = index - activeIndex
                const absOffset = Math.abs(offset)
                
                return (
                  <motion.div
                    key={index}
                    className={cn(
                      "absolute inset-0 cursor-pointer",
                      isActive && "z-10"
                    )}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.4,
                      x: offset * 20,
                      y: offset * 10,
                      zIndex: isActive ? 10 : 5 - absOffset,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{
                      scale: isActive ? 1.05 : 0.9,
                    }}
                  >
                    <div className="relative h-full w-full rounded-3xl overflow-hidden bg-card border-2 border-border shadow-2xl group">
                      {/* Image */}
                      <div className="relative h-full w-full overflow-hidden">
                        <div className="absolute inset-0">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.title}
                            width={800}
                            height={600}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            fallbackText={product.title}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                        
                        {/* Badge */}
                        {product.badge && (
                          <div className="absolute top-6 left-6 z-20">
                            <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold shadow-lg">
                              {product.badge}
                            </span>
                          </div>
                        )}

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                          <div className="space-y-4">
                            {/* Icon */}
                            {product.icon && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: isActive ? 1 : 0 }}
                                transition={{ delay: 0.2 }}
                                className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30"
                              >
                                {product.icon}
                              </motion.div>
                            )}

                            {/* Title */}
                            <motion.h3
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ 
                                y: isActive ? 0 : 20,
                                opacity: isActive ? 1 : 0.5
                              }}
                              transition={{ delay: 0.3 }}
                              className="text-3xl md:text-4xl font-bold text-white"
                            >
                              {product.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ 
                                y: isActive ? 0 : 20,
                                opacity: isActive ? 1 : 0.5
                              }}
                              transition={{ delay: 0.4 }}
                              className="text-lg text-white/90"
                            >
                              {product.description}
                            </motion.p>

                            {/* CTA */}
                            {isActive && (
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                <Button
                                  asChild
                                  variant="secondary"
                                  className="mt-4 bg-white text-primary hover:bg-white/90"
                                >
                                  <Link href={ctaLink} className="flex items-center gap-2">
                                    Scopri di più
                                    <ArrowRight className="h-4 w-4" />
                                  </Link>
                                </Button>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* Spotlight Effect on Active */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

