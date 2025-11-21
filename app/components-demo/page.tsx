"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"
import { TestimonialCard } from "@/components/testimonial-card"
import { FeatureCard } from "@/components/feature-card"
import { Eye, Shield, Users } from "lucide-react"

export default function ComponentsDemoPage() {
  return (
    <div className="container py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Components Demo</h1>
        <p className="text-muted-foreground">
          All available components for the website
        </p>
      </div>

      <div className="space-y-12">
        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Cards</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Another Card</CardTitle>
                <CardDescription>With different content</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More content here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Third Card</CardTitle>
                <CardDescription>Last one</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Final card content</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Feature Cards</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Eye}
              title="Check Up Visivo"
              description="Esame completo della vista"
              features={["Strumenti moderni", "Professionisti esperti", "Risultati precisi"]}
            />
            <FeatureCard
              icon={Shield}
              title="Garanzia"
              description="12 mesi di garanzia"
              features={["Assistenza completa", "Manutenzione inclusa"]}
            />
            <FeatureCard
              icon={Users}
              title="Assistenza"
              description="Supporto personalizzato"
              features={["Consulenza dedicata", "Follow-up garantito"]}
            />
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Mario Rossi"
              rating={5}
              text="Ottimo servizio, personale molto professionale e competente!"
              location="Paese, TV"
            />
            <TestimonialCard
              name="Laura Bianchi"
              rating={5}
              text="Finalmente ho trovato gli occhiali perfetti per me. Consigliatissimo!"
              location="Treviso"
            />
            <TestimonialCard
              name="Giuseppe Verdi"
              rating={4}
              text="Servizio eccellente e prezzi competitivi. Tornerò sicuramente!"
            />
          </div>
        </section>

        {/* Tabs */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Tabs</h2>
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList>
              <TabsTrigger value="tab1">Lenti Monofocali</TabsTrigger>
              <TabsTrigger value="tab2">Lenti Progressive</TabsTrigger>
              <TabsTrigger value="tab3">Lenti Anti Luce Blu</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lenti Monofocali</CardTitle>
                  <CardDescription>Visione chiara e precisa</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Le lenti monofocali offrono una correzione visiva per una singola distanza.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lenti Progressive</CardTitle>
                  <CardDescription>Visione perfetta da ogni distanza</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Le lenti progressive offrono una visione fluida a tutte le distanze.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lenti Anti Luce Blu</CardTitle>
                  <CardDescription>Protezione per i tuoi occhi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Proteggi i tuoi occhi dalla luce blu emessa da schermi e dispositivi digitali.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Dialog */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Dialog / Modal</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog component. You can put any content here.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Dialog content goes here...</p>
              </div>
            </DialogContent>
          </Dialog>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  )
}

