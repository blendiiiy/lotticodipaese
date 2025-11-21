"use client"

import { AnimatedCard } from "@/components/21dev/animated-card"
import { GlassmorphismCard } from "@/components/21dev/glassmorphism-card"
import { GradientButton } from "@/components/21dev/gradient-button"
import { SpotlightCard } from "@/components/21dev/spotlight-card"
import { Marquee } from "@/components/21dev/marquee"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Shield, Users, Star } from "lucide-react"

export default function Components21DevPage() {
  return (
    <div className="container py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">21.dev Components Showcase</h1>
        <p className="text-xl text-muted-foreground">
          Modern components inspired by 21.dev for your optician website
        </p>
      </div>

      {/* Animated Cards */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Animated Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedCard delay={0}>
            <div className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Check Up Visivo</h3>
              <p className="text-muted-foreground">Esame completo della vista</p>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.1}>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Garanzia</h3>
              <p className="text-muted-foreground">12 mesi di garanzia</p>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Assistenza</h3>
              <p className="text-muted-foreground">Supporto personalizzato</p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Glassmorphism Cards */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Glassmorphism Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassmorphismCard>
            <h3 className="text-2xl font-bold text-white mb-4">Lenti Anti Luce Blu</h3>
            <p className="text-white/90">
              Protezione per i tuoi occhi dalla luce blu emessa da schermi e dispositivi digitali.
            </p>
          </GlassmorphismCard>
          <GlassmorphismCard>
            <h3 className="text-2xl font-bold text-white mb-4">Lenti Progressive</h3>
            <p className="text-white/90">
              Visione perfetta da ogni distanza con comfort visivo continuo.
            </p>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Spotlight Cards */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Spotlight Cards (Hover Effect)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <SpotlightCard>
            <Eye className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Esame della Vista</h3>
            <p className="text-muted-foreground">Strumenti all'avanguardia</p>
          </SpotlightCard>
          <SpotlightCard>
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Garanzia Completa</h3>
            <p className="text-muted-foreground">12 mesi di copertura</p>
          </SpotlightCard>
          <SpotlightCard>
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Professionale</h3>
            <p className="text-muted-foreground">Esperti al tuo servizio</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Gradient Buttons */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Gradient Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <GradientButton variant="primary">Primary Gradient</GradientButton>
          <GradientButton variant="accent">Accent Gradient</GradientButton>
          <GradientButton variant="rainbow">Rainbow Gradient</GradientButton>
        </div>
      </section>

      {/* Marquee */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Marquee (Scrolling)</h2>
        <div className="rounded-lg border bg-muted p-4">
          <Marquee>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 px-4">
                <Star className="h-5 w-5 text-accent" />
                <span className="font-semibold">Testimonial {i}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Want More Components?</h3>
        <p className="text-muted-foreground mb-6">
          Visit <a href="https://21st.dev/studio" target="_blank" rel="noopener" className="text-primary hover:underline">21st.dev/studio</a> to browse thousands of components!
        </p>
        <p className="text-sm text-muted-foreground">
          Copy the code and paste it into <code className="bg-background px-2 py-1 rounded">components/21dev/</code>
        </p>
      </div>
    </div>
  )
}

