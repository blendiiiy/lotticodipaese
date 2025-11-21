import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Come Scegliere gli Occhiali Perfetti per la Forma del Tuo Viso?",
  description: "Consigli pratici per trovare la montatura perfetta in base alla forma del tuo viso. Guida completa alla scelta degli occhiali.",
}

export default function BlogPostPage() {
  return (
    <div className="container py-20">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
          Come Scegliere gli Occhiali Perfetti per la Forma del Tuo Viso?
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Scegliere gli occhiali giusti non è solo una questione di diottrie, ma anche di estetica!
        </p>

        <p className="text-lg mb-8">
          Ecco alcuni consigli pratici per trovare la montatura perfetta in base alla forma del tuo viso.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Viso Ovale</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quasi ogni montatura si adatta bene. Sperimenta con modelli audaci!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Viso Rotondo</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Opta per montature rettangolari per aggiungere definizione.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Viso Quadrato</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Modelli rotondi o ovali ammorbidiscono i tratti decisi!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Viso a Cuore</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Montature leggere e ovali bilanciano la fronte più ampia</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <p className="text-lg font-semibold">
            Vieni a trovarci in negozio per una consulenza personalizzata e prova diverse montature 
            finché non trovi quella perfetta per te!
          </p>
        </div>
      </article>
    </div>
  )
}

