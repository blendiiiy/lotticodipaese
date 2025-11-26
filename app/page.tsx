import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Eye, CheckCircle2, ArrowRight, Sparkles, Award, Heart, Star, Zap } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatsSection } from "@/components/stats-section"
import { AnimatedCard } from "@/components/21dev/animated-card"
import { SpotlightCard } from "@/components/21dev/spotlight-card"
import { GradientButton } from "@/components/21dev/gradient-button"
import { VideoHero } from "@/components/video-hero"
import { SmartVideoHero } from "@/components/smart-video-hero"
import { LogoCloud } from "@/components/logo-cloud"
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "L'Ottico di Paese",
    "image": "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
    "description": "Servizi professionali di optometria, contattologia e riparazione occhiali a Paese, Treviso.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Guglielmo Marconi, 7",
      "addressLocality": "Paese",
      "addressRegion": "TV",
      "postalCode": "31038",
      "addressCountry": "IT"
    },
    "telephone": "+390422450568",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Ottici",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Esame della Vista Gratuito"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contattologia Avanzata"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Riparazione Occhiali"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Smart Video Hero - Automatically finds video */}
      <SmartVideoHero
        title="Dove la Tua Visione"
        subtitle="Incontra Precisione e Stile"
        ctaText="Prenota una Visita"
        ctaLink="/contattaci"
        secondaryCtaText="Scopri i Servizi"
        secondaryCtaLink="/servizi"
        fallbackImage={encodeURI("/images/L'Ottico di Paese_files/image00017.jpeg")}
      />
      
      {/* Alternative: If video is in images folder, uncomment below and comment above */}
      {/* <VideoHero
        videoSrc={encodeURI("/images/L'Ottico di Paese_files/your-video.mp4")}
        poster={encodeURI("/images/L'Ottico di Paese_files/image00017.jpeg")}
        title="Dove la Tua Visione"
        subtitle="Incontra Precisione e Stile"
        ctaText="Prenota una Visita"
        ctaLink="/contattaci"
        secondaryCtaText="Scopri i Servizi"
        secondaryCtaLink="/servizi"
      /> */}

      {/* Stats Section */}
      <StatsSection />

      {/* Services - Premium Cards */}
      <section className="py-28 bg-gradient-to-b from-white to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">I Nostri Servizi</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Cosa Possiamo Fare per Te</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professionalità, innovazione e attenzione al cliente in ogni dettaglio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00017.jpeg"
                  alt="Esame della vista gratuito - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  fallbackText="Check Up Gratuiti"
                />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Check Up Gratuiti</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La tua vista è il nostro primo pensiero. Esami completi e professionali.
                </p>
                <Button variant="ghost" className="group/btn" asChild>
                  <Link href="/servizi">
                    Scopri di più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00008.jpeg"
                  alt="Garanzia 12 mesi su occhiali - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  fallbackText="Garanzia Sicura"
                />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Garanzia Sicura</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  12 mesi di garanzia completa sul tuo nuovo occhiale. Siamo sempre al tuo fianco.
                </p>
                <Button variant="ghost" className="group/btn" asChild>
                  <Link href="/servizi">
                    Scopri di più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00004.jpeg"
                  alt="Consulenza personalizzata occhiali - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  fallbackText="Assistenza Personalizzata"
                />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Assistenza Personalizzata</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Assistiamo il cliente in ogni sua esigenza con consulenza dedicata.
                </p>
                <Button variant="ghost" className="group/btn" asChild>
                  <Link href="/servizi">
                    Scopri di più
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Lens Types - Premium Design */}
      <section className="py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Le Nostre Soluzioni</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Tecnologia all&apos;Avanguardia</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Per una visione perfetta in ogni situazione
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <SpotlightCard className="relative">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/image00011.jpeg"
                  alt="Lenti anti luce blu per protezione occhi - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  fallbackText="Lenti Anti Luce Blu"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lenti Anti Luce Blu</h3>
              <p className="text-muted-foreground mb-4">Dì addio al mal di testa!</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Protezione per i tuoi occhi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Visione chiara e rilassata</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Performance visiva ottimale</span>
                </li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="relative">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/Single-Vision-Lenses.webp"
                  alt="Single Vision Lenses - Lenti Monofocali - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  fallbackText="Lenti Monofocali"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lenti Monofocali</h3>
              <p className="text-muted-foreground mb-4">Visione chiara e precisa</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Lettura senza sforzo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Visione perfetta per il lavoro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Guida sicura</span>
                </li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="relative">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src="/images/L'Ottico di Paese_files/Progressive-Lenses.webp"
                  alt="Progressive Lenses - Lenti Progressive per tutte le distanze - L'Ottico di Paese"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  fallbackText="Lenti Progressive"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lenti Progressive</h3>
              <p className="text-muted-foreground mb-4">Visione perfetta da ogni distanza</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Visione fluida a tutte le distanze</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Comfort visivo continuo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Praticità senza compromessi</span>
                </li>
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Brands/Sponsors Section */}
      <LogoCloud
        logos={brands}
        title="I Nostri Marchi"
        subtitle="Selezioniamo con cura solo marchi di alta qualità per offrirti il meglio"
      />

      {/* CTA Section - Premium */}
      <section className="py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Prenota Ora la Tua Visita</h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Il nostro team di Ottici Optometristi al tuo servizio
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton href="/contattaci" variant="accent" className="text-lg px-10 py-7">
                Prenota Ora
              </GradientButton>
              <a 
                href="tel:0422450568" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold h-14 px-10 py-7 border-2 border-white bg-white/90 text-primary hover:bg-white hover:text-primary shadow-xl transition-all"
              >
                0422 450968
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium */}
      <section className="py-28 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonianze</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Cosa Dicono i Nostri Clienti</h2>
            <p className="text-xl text-muted-foreground">
              La soddisfazione dei nostri clienti è la nostra priorità
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Mario Rossi"
              rating={5}
              text="Servizio eccellente! Personale molto competente e professionale. Ho trovato gli occhiali perfetti."
              location="Paese, TV"
            />
            <TestimonialCard
              name="Laura Bianchi"
              rating={5}
              text="Finalmente un ottico che capisce le mie esigenze. Le lenti progressive sono fantastiche!"
              location="Treviso"
            />
            <TestimonialCard
              name="Giuseppe Verdi"
              rating={5}
              text="Ottima esperienza dall'inizio alla fine. Consulenza personalizzata e prezzi competitivi."
              location="Paese, TV"
            />
          </div>
        </div>
      </section>
    </>
  )
}
