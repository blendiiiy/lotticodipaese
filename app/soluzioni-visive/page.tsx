import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ImageWithFallback } from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Soluzioni Visive - Lenti Progressive, Monofocali e Anti Luce Blu",
  description: "Scopri le nostre soluzioni visive: lenti monofocali, progressive e anti-luce blu. Tecnologia all'avanguardia per una visione perfetta. Consulenza personalizzata a Paese, Treviso.",
  keywords: ["lenti progressive Paese", "lenti monofocali Treviso", "lenti anti luce blu", "lenti da vista", "lenti progressive prezzo", "lenti monofocali personalizzate", "protezione occhi schermo", "lenti computer"],
  openGraph: {
    title: "Soluzioni Visive - Lenti Progressive, Monofocali e Anti Luce Blu",
    description: "Scopri le nostre soluzioni visive: lenti monofocali, progressive e anti-luce blu. Tecnologia all'avanguardia per una visione perfetta.",
    url: "https://www.lotticodipaese.com/soluzioni-visive",
    type: "website",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00011.jpeg",
        width: 1200,
        height: 630,
        alt: "Soluzioni Visive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluzioni Visive",
    description: "Lenti progressive, monofocali e anti-luce blu. Tecnologia all'avanguardia a Paese, Treviso.",
  },
  alternates: {
    canonical: "/soluzioni-visive",
  },
}

export default function SoluzioniVisivePage() {
  return (
    <div className="container py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          SOLUZIONI VISIVE
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-lg">
          Tecnologia all'avanguardia per una visione perfetta
        </p>
      </div>

      <Tabs defaultValue="anti-luce-blu" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="anti-luce-blu">Anti Luce Blu</TabsTrigger>
          <TabsTrigger value="monofocali">Monofocali</TabsTrigger>
          <TabsTrigger value="progressive">Progressive</TabsTrigger>
        </TabsList>
        
        <TabsContent value="anti-luce-blu">
          <Card>
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src="/images/L'Ottico di Paese_files/image00011.jpeg"
                alt="Lenti anti luce blu"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                fallbackText="Lenti Anti Luce Blu"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">LENTI ANTI LUCE BLU</CardTitle>
              <CardDescription>Dì addio al mal di testa!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>PROTEZIONE PER I TUOI OCCHI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>VISIONE CHIARA E RILASSATA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>PERFORMANCE VISIVA OTTIMALE</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monofocali">
          <Card>
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src="/images/L'Ottico di Paese_files/Single-Vision-Lenses.webp"
                alt="Single Vision Lenses - Lenti Monofocali personalizzate"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                fallbackText="Lenti Monofocali"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">LENTI MONOFOCALI</CardTitle>
              <CardDescription>Visione chiara e precisa</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>LETTURA SENZA SFORZO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>VISIONE PERFETTA PER IL LAVORO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>GUIDA SICURA</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progressive">
          <Card>
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src="/images/L'Ottico di Paese_files/Progressive-Lenses.webp"
                alt="Progressive Lenses - Lenti Progressive per tutte le distanze"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                fallbackText="Lenti Progressive"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">LENTI PROGRESSIVE</CardTitle>
              <CardDescription>Visione perfetta da ogni distanza!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>VISIONE FLUIDA A TUTTE LE DISTANZE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>COMFORT VISIVO CONTINUO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>PRATICITÀ SENZA COMPROMESSI</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Più di 1000 montature selezionate</h2>
        <p className="text-muted-foreground mb-6">
          Selezioniamo con cura solo marchi di alta qualità!
        </p>
        <Button asChild>
          <Link href="/contattaci">SCOPRI DI PIÙ</Link>
        </Button>
      </div>
    </div>
  )
}

