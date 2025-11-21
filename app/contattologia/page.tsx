import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, GraduationCap, Heart, CheckCircle2 } from "lucide-react"
import { ImageWithFallback } from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Contattologia Avanzata - Lenti a Contatto Personalizzate",
  description: "Servizi professionali di contattologia avanzata. Lenti a contatto personalizzate, consulenza specialistica e assistenza continua a Paese, Treviso. Visite di controllo gratuite.",
  keywords: ["contattologia Paese", "lenti a contatto Treviso", "contattologia avanzata", "lenti a contatto personalizzate", "visita contattologia", "lenti giornaliere", "lenti mensili", "servizi contattologia"],
  openGraph: {
    title: "Contattologia Avanzata - Lenti a Contatto Personalizzate",
    description: "Servizi professionali di contattologia avanzata. Lenti a contatto personalizzate, consulenza specialistica e assistenza continua.",
    url: "https://www.lotticodipaese.com/contattologia",
    type: "website",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00011.jpeg",
        width: 1200,
        height: 630,
        alt: "Contattologia Avanzata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contattologia Avanzata",
    description: "Servizi professionali di contattologia avanzata. Lenti a contatto personalizzate a Paese, Treviso.",
  },
  alternates: {
    canonical: "/contattologia",
  },
}

export default function ContattologiaPage() {
  return (
    <div className="container py-20">
      {/* Hero Section with Image */}
      <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12">
        <ImageWithFallback
          src="/images/L'Ottico di Paese_files/image00011.jpeg"
          alt="Contattologia Avanzata - Lenti a contatto personalizzate"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
          fallbackText="Contattologia Avanzata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
          <div className="container px-4 md:px-6 py-12 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              CONTATTOLOGIA AVANZATA
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-white/90">
              Soluzioni personalizzate per chi sceglie la libertà delle lenti a contatto
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src="/images/L'Ottico di Paese_files/image00017.jpeg"
              alt="Visita specialistica contattologia"
              width={400}
              height={300}
              className="object-cover w-full h-full"
              fallbackText="Visita Specialistica"
            />
          </div>
          <CardHeader>
            <Eye className="h-12 w-12 text-primary mb-4" />
            <CardTitle>Visita Specialistica</CardTitle>
            <CardDescription>
              Il nostro percorso inizia con una visita approfondita dove valuteremo:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>La salute oculare generale</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>La curvatura e le caratteristiche della cornea</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Le tue abitudini quotidiane</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Ogni occhio è unico, e noi lo sappiamo.
            </p>
          </CardContent>
        </Card>

        <Card>
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src="/images/L'Ottico di Paese_files/image00004.jpeg"
              alt="Tipi di lenti a contatto"
              width={400}
              height={300}
              className="object-cover w-full h-full"
              fallbackText="Le Nostre Lenti"
            />
          </div>
          <CardHeader>
            <GraduationCap className="h-12 w-12 text-primary mb-4" />
            <CardTitle>LE NOSTRE LENTI</CardTitle>
            <CardDescription>Offriamo una vasta gamma di soluzioni:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Lenti giornaliere usa e getta</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Lenti mensili</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Lenti toriche</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Lenti multifocali</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Lenti rigide e gas-permeabili</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src="/images/L'Ottico di Paese_files/image00008.jpeg"
              alt="Educazione e manutenzione lenti a contatto"
              width={400}
              height={300}
              className="object-cover w-full h-full"
              fallbackText="Educazione e Manutenzione"
            />
          </div>
          <CardHeader>
            <Heart className="h-12 w-12 text-primary mb-4" />
            <CardTitle>Educazione e Manutenzione</CardTitle>
            <CardDescription>
              Ti guideremo su ogni aspetto:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Come pulire e conservare le lenti</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>I tempi di utilizzo consigliati</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Cosa evitare per mantenere gli occhi sani</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle>Assistenza Continua</CardTitle>
          <CardDescription>
            Il nostro servizio non termina in negozio:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Controlli periodici gratuiti</h4>
              <p className="text-sm text-muted-foreground">
                Monitoraggio continuo della tua salute visiva
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Consulenze personalizzate</h4>
              <p className="text-sm text-muted-foreground">
                Supporto dedicato per ogni tua esigenza
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Aggiornamenti costanti</h4>
              <p className="text-sm text-muted-foreground">
                Resta informato sulle ultime novità
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

