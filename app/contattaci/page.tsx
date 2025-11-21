import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { SpotlightCard } from "@/components/21dev/spotlight-card"
import { AnimatedCard } from "@/components/21dev/animated-card"

export const metadata: Metadata = {
  title: "Contattaci - L'Ottico di Paese",
  description: "Contatta L'Ottico di Paese. Siamo a tua disposizione per prenotare una visita o rispondere alle tue domande. Via Guglielmo Marconi, 7, 31038 Paese TV. Telefono: 0422 450568.",
  keywords: ["contatti ottico Paese", "prenota visita ottico", "ottico Paese telefono", "indirizzo ottico Treviso", "orari ottico Paese", "contatta ottico"],
  openGraph: {
    title: "Contattaci - L'Ottico di Paese",
    description: "Contatta L'Ottico di Paese. Siamo a tua disposizione per prenotare una visita o rispondere alle tue domande.",
    url: "https://www.lotticodipaese.com/contattaci",
    type: "website",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
        width: 1200,
        height: 630,
        alt: "Contattaci - L'Ottico di Paese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contattaci - L'Ottico di Paese",
    description: "Contatta L'Ottico di Paese per prenotare una visita o rispondere alle tue domande.",
  },
  alternates: {
    canonical: "/contattaci",
  },
}

export default function ContattaciPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,0,0,0.03),_transparent_50%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Siamo Qui per Te</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              CONTATTACI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Siamo qui per aiutarti. Contattaci per prenotare una visita o per qualsiasi domanda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="container px-4 md:px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <AnimatedCard delay={0.1}>
              <SpotlightCard>
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">DOVE SIAMO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      Via Guglielmo Marconi, 7<br />
                      31038 Paese TV
                    </p>
                    <Button asChild variant="outline" className="mt-4 w-full" size="sm">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Via+Guglielmo+Marconi+7,+31038+Paese+TV"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apri su Google Maps
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <SpotlightCard>
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">ORARI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-lg mb-1">MARTEDI' - SABATO</p>
                        <p className="text-base text-muted-foreground">
                          9.00-12:30 / 15:30-19:30
                        </p>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm text-muted-foreground font-medium">DOMENICA E LUNEDI'</p>
                        <p className="text-sm text-muted-foreground">Chiuso</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <SpotlightCard>
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">TELEFONO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-xl font-bold">
                        <a href="tel:0422450568" className="hover:text-primary transition-colors">
                          0422 450568
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        NEGOZIO / LABORATORIO
                      </p>
                      <Button asChild variant="outline" className="w-full mt-2" size="sm">
                        <a href="tel:0422450568">
                          Chiama Ora
                          <Phone className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <SpotlightCard>
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">EMAIL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-4 break-all">
                      <a href="mailto:info@lotticodipaese.com" className="hover:text-primary transition-colors">
                        info@lotticodipaese.com
                      </a>
                    </p>
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <a href="mailto:info@lotticodipaese.com">
                        Invia Email
                        <Mail className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </AnimatedCard>
          </div>

          {/* WhatsApp & Contact Form */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <AnimatedCard delay={0.5}>
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 text-center h-full flex flex-col justify-center shadow-xl">
                <MessageCircle className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Scrivici su WhatsApp</h2>
                <p className="mb-8 text-white/90 leading-relaxed">
                  Per una risposta rapida, contattaci direttamente su WhatsApp!
                </p>
                <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-white/90 shadow-xl">
                  <a
                    href="https://wa.me/393516023436?text=Buongiorno,%20vi%20contatto%20per%20avere%20informazioni%20sui%20vostri%20servizi%20ottici.%20Grazie!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Apri WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <SpotlightCard>
                <div className="p-6">
                  <ContactForm />
                </div>
              </SpotlightCard>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  )
}

