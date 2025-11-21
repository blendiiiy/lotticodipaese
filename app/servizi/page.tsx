import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureCard } from "@/components/feature-card"
import { Eye, Home, Contact, Wrench, Sparkles, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Servizi Professionali di Optometria e Contattologia",
  description: "Servizi professionali di optometria, contattologia, riparazione occhiali e consulenza estetica personalizzata a Paese, Treviso. Esami della vista gratuiti, montature personalizzate e assistenza completa.",
  keywords: ["servizi ottici Paese", "optometrista Treviso", "esame vista gratuito", "riparazione occhiali", "consulenza estetica occhiali", "montature personalizzate", "contattologia avanzata", "servizi ottici professionali"],
  openGraph: {
    title: "Servizi Professionali di Optometria a Paese, Treviso",
    description: "Servizi professionali di optometria, contattologia, riparazione occhiali e consulenza estetica personalizzata. Esami della vista gratuiti.",
    url: "https://www.lotticodipaese.com/servizi",
    type: "website",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
        width: 1200,
        height: 630,
        alt: "Servizi Professionali di Optometria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servizi Professionali di Optometria",
    description: "Servizi professionali di optometria, contattologia e riparazione occhiali a Paese, Treviso.",
  },
  alternates: {
    canonical: "/servizi",
  },
}

export default function ServiziPage() {
  return (
    <div className="container py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          I NOSTRI SERVIZI
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-lg">
          Servizi professionali per la tua vista
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <FeatureCard
          icon={Eye}
          title="La tua vista al centro"
          description="Controllo visivo, visione perfetta."
          imageSrc="/images/L'Ottico di Paese_files/image00017.jpeg"
          imageAlt="Esame della vista gratuito"
          features={[
            "ESAME DELLA VISTA GRATUITO",
            "Esame Computerizzato della Vista",
            "Monitoraggio Periodico"
          ]}
        />

        <FeatureCard
          icon={Home}
          title="ESAME DELLA VISTA A DOMICILIO"
          description="L'Ottico di Paese offre il servizio di Controllo della Vista a Domicilio, su appuntamento."
          imageSrc="/images/L'Ottico di Paese_files/image00004.jpeg"
          imageAlt="Esame della vista a domicilio"
          features={["Chiamaci per fissare la tua visita gratuita"]}
        />

        <FeatureCard
          icon={Contact}
          title="CONTATTOLOGIA AVANZATA"
          description="Soluzioni personalizzate per chi sceglie la libertà delle lenti a contatto"
          imageSrc="/images/L'Ottico di Paese_files/image00011.jpeg"
          imageAlt="Contattologia avanzata"
          features={[
            "Consulenza Personalizzata",
            "Applicazione e Manutenzione",
            "Assistenza Post-Vendita"
          ]}
        />

        <FeatureCard
          icon={Wrench}
          title="RIPARAZIONE E MANUTENZIONE OCCHIALI"
          description="Per noi, i tuoi occhiali sono un investimento prezioso."
          imageSrc="/images/L'Ottico di Paese_files/image00008.jpeg"
          imageAlt="Riparazione occhiali"
          features={[
            "Riparazioni rapide",
            "Pulizia Professionale",
            "Regolazione Montature"
          ]}
        />

        <FeatureCard
          icon={Sparkles}
          title="CONSULENZA ESTETICA PERSONALIZZATA"
          description="Gli occhiali sono un accessorio che racconta chi sei."
          imageSrc="/images/L'Ottico di Paese_files/Consulenza-immagine-3.webp"
          imageAlt="Consulenza estetica personalizzata occhiali"
          imageFit="contain"
          imageHeight="h-80"
          features={[
            "Montatura Perfetta per il Tuo Viso",
            "Colore e Stile Adeguati",
            "Solo marchi selezionati"
          ]}
        />
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">PRENOTA ORA LA TUA VISITA</h2>
        <p className="mb-4">Il nostro team di Ottici Optometristi al tuo servizio!</p>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <h3 className="font-semibold mb-2">CHECK UP VISIVO</h3>
              <ul className="space-y-1 text-sm">
                <li>• Strumenti ultima generazione</li>
                <li>• Optometristi Professionisti</li>
                <li>• Monitoraggio e aggiornamento Lenti</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Oculistica</h3>
              <ul className="space-y-1 text-sm">
                <li>• Professionisti a tua disposizione</li>
                <li>• Visita completa</li>
                <li>• Analisi dell'occhiale più giusto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

