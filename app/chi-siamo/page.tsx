import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/21dev/animated-card"
import { SpotlightCard } from "@/components/21dev/spotlight-card"
import { Users, Heart, Award, Sparkles, Target, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Chi Siamo - La Nostra Storia e Missione",
  description: "Scopri la storia di L'Ottico di Paese, un sogno di famiglia diventato realtà grazie alla passione di Fatjona e Labeat. Professionalità, competenza e servizio personalizzato a Paese, Treviso.",
  keywords: ["chi siamo ottico Paese", "storia ottico Treviso", "Fatjona Labeat ottico", "ottico professionale", "storia negozio occhiali", "team ottico Paese"],
  openGraph: {
    title: "Chi Siamo - La Nostra Storia e Missione",
    description: "Scopri la storia di L'Ottico di Paese, un sogno di famiglia diventato realtà grazie alla passione di Fatjona e Labeat.",
    url: "https://www.lotticodipaese.com/chi-siamo",
    type: "website",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
        width: 1200,
        height: 630,
        alt: "Chi Siamo - L'Ottico di Paese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi Siamo - L'Ottico di Paese",
    description: "Scopri la storia di L'Ottico di Paese, un sogno di famiglia diventato realtà.",
  },
  alternates: {
    canonical: "/chi-siamo",
  },
}

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,0,0,0.03),_transparent_50%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">La Nostra Storia</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              CHI SIAMO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Un sogno di famiglia diventato realtà grazie alla passione di Fatjona e Labeat
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 md:px-6 pb-28">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Story Cards */}
          <AnimatedCard delay={0.1}>
            <SpotlightCard>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Un Sogno di Famiglia Diventato Realtà
                  </h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    Nel cuore di <strong className="text-foreground">Paese, in provincia di Treviso</strong>, nasce <strong className="text-primary">L&apos;Ottico di Paese</strong>, 
                    un progetto che prende vita grazie alla passione e alla dedizione di due fratelli: 
                    <strong className="text-primary"> Fatjona e Labeat</strong>.
                  </p>
                  <p className="text-muted-foreground">
                    Spinti da un sogno comune e da una forte determinazione, hanno unito le loro competenze 
                    per creare uno spazio dove professionalità, innovazione e attenzione al cliente si incontrano. 
                    Sin dall&apos;inizio, il loro obiettivo è stato chiaro: offrire ai clienti soluzioni visive 
                    personalizzate, garantendo qualità e cura in ogni dettaglio.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <SpotlightCard>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    L&apos;OTTICO DI PAESE
                  </h2>
                </div>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    <strong className="text-primary">L&apos;Ottico di Paese</strong> non è solo un negozio di ottica, ma un punto di riferimento per la 
                    comunità locale, dove tecnologia all&apos;avanguardia e un approccio umano si fondono per 
                    offrire un servizio impeccabile.
                  </p>
                  <p className="text-muted-foreground">
                    Grazie alla loro passione, dedizione e visione comune, <strong className="text-foreground">Fatjona e Labeat</strong> continuano a 
                    far crescere questa realtà, mantenendo sempre al centro l&apos;attenzione per il cliente e 
                    l&apos;impegno costante nel migliorare ogni aspetto del servizio offerto.
                  </p>
                  <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <p className="font-semibold text-lg text-primary leading-relaxed">
                      Ti aspettiamo in negozio per offrirti un&apos;esperienza visiva su misura, con la stessa 
                      passione che ci guida fin dal primo giorno!
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </AnimatedCard>

          {/* Values Section */}
          <AnimatedCard delay={0.3}>
            <div className="bg-gradient-to-br from-primary/5 via-secondary/50 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">I Nostri Valori</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Cosa Ci Guida Ogni Giorno</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I principi che ispirano il nostro lavoro quotidiano
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <SpotlightCard>
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Professionalità</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Competenza e formazione continua per offrire sempre il meglio ai nostri clienti
                    </p>
                  </div>
                </SpotlightCard>

                <SpotlightCard>
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Innovazione</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Tecnologia all&apos;avanguardia per soluzioni moderne e performanti
                    </p>
                  </div>
                </SpotlightCard>

                <SpotlightCard>
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Attenzione al Cliente</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ogni cliente è unico e merita un servizio completamente personalizzato
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  )
}

