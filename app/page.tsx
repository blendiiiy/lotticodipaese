import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Eye, CheckCircle2, ArrowRight, Award, Heart, Star, Zap, Clock, Sparkles, TrendingUp, Phone, Calendar } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { TestimonialCard } from "@/components/testimonial-card"
import { TestimonialsColumns } from "@/components/21dev/testimonials-columns"
import { AnimatedCard } from "@/components/21dev/animated-card"
import { SpotlightCard } from "@/components/21dev/spotlight-card"
import { GradientButton } from "@/components/21dev/gradient-button"
import { SmartVideoHero } from "@/components/smart-video-hero"
import { ProductSpotlightHero } from "@/components/21dev/product-spotlight-hero"
import { LogoCloud } from "@/components/logo-cloud"
import type { Metadata } from "next"

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: "L'Ottico di Paese - Ottico Professionale a Paese Treviso | Esami Vista Gratuiti",
  description: "L'Ottico di Paese: ottico professionale a Paese, Treviso. Esami della vista gratuiti, lenti progressive, monofocali e anti-luce blu. Contattologia avanzata, riparazione occhiali e consulenza personalizzata. Garanzia 12 mesi. Via Guglielmo Marconi 7, Paese TV. Prenota la tua visita oggi!",
  keywords: [
    "ottico Paese",
    "ottico Treviso",
    "occhiali Paese",
    "occhiali Treviso",
    "esame vista gratuito Paese",
    "lenti progressive Paese",
    "lenti monofocali Treviso",
    "lenti anti luce blu",
    "contattologia Paese",
    "riparazione occhiali Treviso",
    "optometrista Paese",
    "oculista Paese",
    "occhiali da vista Paese",
    "montature occhiali Treviso",
    "consulenza occhiali Paese",
    "garanzia occhiali",
    "check up visivo gratuito"
  ],
  authors: [{ name: "L'Ottico di Paese" }],
  creator: "L'Ottico di Paese",
  publisher: "L'Ottico di Paese",
  metadataBase: new URL("https://www.lotticodipaese.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.lotticodipaese.com",
    siteName: "L'Ottico di Paese",
    title: "L'Ottico di Paese - Ottico Professionale a Paese Treviso",
    description: "Servizi professionali di optometria, contattologia e riparazione occhiali a Paese, Treviso. Esami della vista gratuiti e garanzia 12 mesi.",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
        width: 1200,
        height: 630,
        alt: "L'Ottico di Paese - Negozio Ottico Professionale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Ottico di Paese - Ottico Professionale a Paese Treviso",
    description: "Esami della vista gratuiti, lenti progressive e contattologia avanzata. Garanzia 12 mesi.",
    images: ["https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  const brands = [
    { name: "Lozza", src: "/images/L'Ottico di Paese_files/mark.jpg", alt: "Lozza - Occhiali originali dal 1878" },
    { name: "YALEA", src: "/images/L'Ottico di Paese_files/yalea.jpg", alt: "YALEA Eyewear" },
    { name: "SOHO LONDON", src: "/images/L'Ottico di Paese_files/logo1.png", alt: "SOHO LONDON Eyewear" },
    { name: "BUST-OUT EYEWEAR", src: "/images/L'Ottico di Paese_files/logo2.png", alt: "BUST-OUT EYEWEAR" },
    { name: "LIU•JO", src: "/images/L'Ottico di Paese_files/liujo.jpg", alt: "LIU•JO Eyewear" },
    { name: "centrostyle", src: "/images/L'Ottico di Paese_files/centrostyle.png", alt: "centrostyle around People" },
    { name: "RE.DA OCCHIALI", src: "/images/L'Ottico di Paese_files/logo3.jpg", alt: "RE.DA OCCHIALI" },
    { name: "Woodys", src: "/images/L'Ottico di Paese_files/logo4.png", alt: "Woodys Eyewear" },
    { name: "POLICE", src: "/images/L'Ottico di Paese_files/logo5.png", alt: "POLICE Eyewear" },
    { name: "FURLA EYEWEAR", src: "/images/L'Ottico di Paese_files/logo6.png", alt: "FURLA EYEWEAR" },
    { name: "TWINSET MILANO", src: "/images/L'Ottico di Paese_files/logo7.png", alt: "TWINSET MILANO" },
    { name: "VISIONARIO", src: "/images/L'Ottico di Paese_files/logo8.jpg", alt: "VISIONARIO" },
    { name: "Officine VINCI EYEWEAR", src: "/images/L'Ottico di Paese_files/vinci.jpg", alt: "Officine VINCI EYEWEAR" },
    { name: "Polaroid", src: "/images/L'Ottico di Paese_files/logo11.jpg", alt: "Polaroid Eyewear" },
    { name: "ST!NG", src: "/images/L'Ottico di Paese_files/logo12.webp", alt: "ST!NG Eyewear" },
    { name: "OLD SCHOOL EYEWEAR", src: "/images/L'Ottico di Paese_files/oldschool.jpg", alt: "OLD SCHOOL EYEWEAR" },
    { name: "GOODVISION", src: "/images/L'Ottico di Paese_files/logo-goodvision.png", alt: "GOODVISION - SEE GOOD FEEL GOOD" },
  ]

  // Enhanced Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "L'Ottico di Paese",
    "image": "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
    "description": "Ottico professionale a Paese, Treviso. Servizi di optometria, contattologia avanzata, riparazione occhiali. Esami della vista gratuiti e garanzia 12 mesi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Guglielmo Marconi, 7",
      "addressLocality": "Paese",
      "addressRegion": "TV",
      "postalCode": "31038",
      "addressCountry": "IT"
    },
    "telephone": "+390422450568",
    "email": "lotticodipaese@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "12:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "15:30",
        "closes": "19:30"
      }
    ],
    "serviceArea": {
      "@type": "City",
      "name": "Paese, Treviso"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.6736",
      "longitude": "12.1633"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Ottici Professionali",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Esame della Vista Gratuito",
            "description": "Check-up visivo completo con strumenti all'avanguardia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contattologia Avanzata",
            "description": "Consulenza personalizzata per lenti a contatto"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Riparazione Occhiali",
            "description": "Riparazione e manutenzione professionale occhiali"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lenti Progressive",
            "description": "Lenti progressive per visione perfetta a tutte le distanze"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lenti Anti Luce Blu",
            "description": "Protezione dagli schermi digitali"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150"
    }
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.lotticodipaese.com"
      }
    ]
  }

  return (
    <>
      {/* Enhanced Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Hero Section - Video Hero with Text */}
      <SmartVideoHero
        title="Where Your Vision"
        subtitle="Meets Precision and Style"
        ctaText="Book an Appointment"
        ctaLink="/contattaci"
        secondaryCtaText="Discover Services"
        secondaryCtaLink="/servizi"
        fallbackImage={encodeURI("/images/L'Ottico di Paese_files/image00017.jpeg")}
      />
      
      {/* Brands Section */}
      <LogoCloud
        logos={brands}
        title="Our Brands"
        subtitle="We carefully select only high-quality brands to offer you the best in style and technology"
      />
      
      {/* Why Choose Us - Premium Section */}
      <section className="py-28 bg-gradient-to-b from-white via-secondary/10 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professionalism, innovation, and customer care: this is our daily commitment to offer you the best viewing experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-lg">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Secure Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A full 12-month warranty on your new glasses. We're always here to help with any need.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Extended Warranty</span>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-lg">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Free Check Ups</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your vision is our first concern. Complete and professional exams with cutting-edge equipment.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Modern Tools</span>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shadow-lg">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Personalized Assistance</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We assist our clients in all their needs with dedicated advice and attention to detail.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Dedicated Consulting</span>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Services - Premium Cards with Images */}
      <section className="py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What We Can Do for You</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A team of professional Optometrists at your service with cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 group">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00017.jpeg"
                  alt="Free eye examination - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  fallbackText="Check Up Gratuiti"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Eye Check Up</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Complete eye examination with state-of-the-art equipment and professional optometrists.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>State-of-the-art equipment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Professional optometrists</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Continuous monitoring</span>
                  </li>
                </ul>
                <Button variant="outline" className="group/btn w-full" asChild>
                  <Link href="/servizi">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 group">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00008.jpeg"
                  alt="12 month warranty on glasses - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  fallbackText="Garanzia Sicura"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">12 Month Warranty</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Complete warranty on every purchased pair of glasses. Post-sale assistance always available.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Extended 12-month warranty</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Post-sale assistance</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Repairs included</span>
                  </li>
                </ul>
                <Button variant="outline" className="group/btn w-full" asChild>
                  <Link href="/servizi">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 group">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00004.jpeg"
                  alt="Personalized consultation for glasses - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  fallbackText="Assistenza Personalizzata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Personalized Consultation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dedicated assistance to find the perfect visual solution for your needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Personalized analysis</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Aesthetic consultation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Continuous support</span>
                  </li>
                </ul>
                <Button variant="outline" className="group/btn w-full" asChild>
                  <Link href="/servizi">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Lens Types - Premium Design with Spotlight Effect */}
      <section className="py-28 bg-gradient-to-b from-secondary/20 via-white to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Cutting-Edge Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For perfect vision in every situation of your daily life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <SpotlightCard className="relative">
              <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6 group">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00011.jpeg"
                  alt="Blue light filter lenses for eye protection - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  fallbackText="Lenti Anti Luce Blu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Blue Light Filter Lenses</h3>
              <p className="text-muted-foreground mb-6 text-lg">Say goodbye to headaches!</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Complete protection for your eyes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Clear and relaxed vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Optimal visual performance</span>
                </li>
              </ul>
              <Button variant="ghost" className="group/btn w-full" asChild>
                <Link href="/soluzioni-visive">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </SpotlightCard>

            <SpotlightCard className="relative">
              <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6 group">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/Single-Vision-Lenses.webp"
                  alt="Single Vision Lenses - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  fallbackText="Lenti Monofocali"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Single Vision Lenses</h3>
              <p className="text-muted-foreground mb-6 text-lg">Clear and precise vision</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Effortless reading</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Perfect vision for work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Safe and comfortable driving</span>
                </li>
              </ul>
              <Button variant="ghost" className="group/btn w-full" asChild>
                <Link href="/soluzioni-visive">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </SpotlightCard>

            <SpotlightCard className="relative">
              <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6 group">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/Progressive-Lenses.webp"
                  alt="Progressive Lenses for all distances - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  fallbackText="Lenti Progressive"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Progressive Lenses</h3>
              <p className="text-muted-foreground mb-6 text-lg">Perfect vision from every distance</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Smooth vision at all distances</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Continuous visual comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Practicality without compromise</span>
                </li>
              </ul>
              <Button variant="ghost" className="group/btn w-full" asChild>
                <Link href="/soluzioni-visive">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium with White Background */}
      <section className="py-28 bg-white relative overflow-hidden border-t border-border">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Book Now</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Book Your Visit</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Our team of professional Optometrists is at your service to provide you with the best visual experience
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GradientButton href="/contattaci" variant="primary" className="text-lg px-10 py-7 shadow-2xl">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </GradientButton>
              <a 
                href="tel:0422450568" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold h-14 px-10 py-7 border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl transition-all hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                0422 450968
              </a>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                <Clock className="inline h-4 w-4 mr-1" />
                Hours: Tuesday - Saturday 9:00-12:30 / 15:30-19:30
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - 21st.dev Component */}
      <TestimonialsColumns
        title="What Our Customers Say"
        subtitle="Our clients' satisfaction is our priority and the proof of our quality"
        testimonials={[
          {
            name: "Mario Rossi",
            rating: 5,
            text: "Excellent service! Very competent and professional staff. I found the perfect glasses for my needs. Highly recommended!",
            location: "Paese, TV"
          },
          {
            name: "Laura Bianchi",
            rating: 5,
            text: "Finally an optician who understands my needs. The progressive lenses are fantastic and the service was impeccable from start to finish.",
            location: "Treviso"
          },
          {
            name: "Giuseppe Verdi",
            rating: 5,
            text: "Great experience from start to finish. Personalized consultation, competitive prices and complete warranty. I will definitely come back!",
            location: "Paese, TV"
          }
        ]}
      />
    </>
  )
}
