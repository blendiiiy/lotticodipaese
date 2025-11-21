import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SpotlightCard } from "@/components/21dev/spotlight-card"
import { AnimatedCard } from "@/components/21dev/animated-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Eye, Shield, Sun, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import { ImageWithFallback } from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Blog - Consigli sulla Salute degli Occhi e Cura della Vista",
  description: "Consigli e informazioni utili sulla salute degli occhi, scelta degli occhiali e cura della vista. Guide professionali per la protezione degli occhi e scelta della montatura perfetta.",
  keywords: ["blog salute occhi", "consigli optometria", "come scegliere occhiali", "cura della vista", "salute degli occhi", "guide occhiali", "protezione occhi", "consigli ottico"],
  openGraph: {
    title: "Blog - Consigli sulla Salute degli Occhi",
    description: "Consigli e informazioni utili sulla salute degli occhi, scelta degli occhiali e cura della vista.",
    url: "https://www.lotticodipaese.com/blog",
    type: "website",
    images: [
      {
        url: "https://www.lotticodipaese.com/images/L'Ottico di Paese_files/image00017.jpeg",
        width: 1200,
        height: 630,
        alt: "Blog - Consigli sulla Salute degli Occhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Consigli sulla Salute degli Occhi",
    description: "Consigli e informazioni utili sulla salute degli occhi e cura della vista.",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Come Scegliere gli Occhiali Perfetti per la Forma del Tuo Viso?",
      description: "Scegliere gli occhiali giusti non è solo una questione di diottrie, ma anche di estetica! Scopri come trovare la montatura perfetta per te.",
      slug: "come-scegliere-occhiali-forma-viso",
      icon: Eye,
      image: "/images/L'Ottico di Paese_files/image00017.jpeg",
      category: "Consigli",
      featured: true,
    },
    {
      title: "Protezione dai Raggi UV: Perché è Importante?",
      description: "I raggi ultravioletti possono danneggiare gli occhi. Scopri come proteggere la tua vista con lenti adeguate e abitudini corrette.",
      slug: "protezione-raggi-uv",
      icon: Sun,
      image: "/images/L'Ottico di Paese_files/image00011.jpeg",
      category: "Salute",
      featured: false,
    },
    {
      title: "Lenti Anti Luce Blu: Cosa Devi Sapere",
      description: "Passi molte ore davanti allo schermo? Le lenti anti luce blu possono aiutare a ridurre l'affaticamento visivo. Scopri di più.",
      slug: "lenti-anti-luce-blu",
      icon: Shield,
      image: "/images/L'Ottico di Paese_files/image00004.jpeg",
      category: "Tecnologia",
      featured: false,
    },
    {
      title: "Quando Fare un Controllo della Vista?",
      description: "Un controllo regolare della vista è essenziale per mantenere la salute degli occhi. Ecco quando e perché è importante prenotare una visita.",
      slug: "controllo-vista",
      icon: Clock,
      image: "/images/L'Ottico di Paese_files/image00008.jpeg",
      category: "Salute",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,0,0,0.03),_transparent_50%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Consigli e Informazioni</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              BLOG
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Consigli utili sulla salute degli occhi, scelta degli occhiali e cura della vista
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <div className="container px-4 md:px-6 pb-28">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => {
            const Icon = post.icon
            return (
              <AnimatedCard key={post.slug} delay={0.1}>
                <SpotlightCard>
                  <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl">
                    <div className="relative h-64 md:h-full min-h-[300px]">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        fallbackText={post.title}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-semibold">
                          <Sparkles className="h-4 w-4" />
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-4">{post.title}</CardTitle>
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {post.description}
                      </CardDescription>
                      <Button asChild className="w-fit group" size="lg">
                        <Link href={`/blog/${post.slug}`}>
                          Leggi l'articolo completo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedCard>
            )
          })}

          {/* Other Blog Posts */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Altri Articoli</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.filter(post => !post.featured).map((post, index) => {
                const Icon = post.icon
                return (
                  <AnimatedCard key={post.slug} delay={index * 0.1}>
                    <SpotlightCard>
                      <div className="overflow-hidden rounded-t-2xl">
                        <div className="relative h-48 w-full">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                            fallbackText={post.title}
                          />
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl mb-3 line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="mb-6 leading-relaxed line-clamp-3">
                          {post.description}
                        </CardDescription>
                        <Button asChild variant="ghost" className="w-full group">
                          <Link href={`/blog/${post.slug}`}>
                            Leggi di più
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </SpotlightCard>
                  </AnimatedCard>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

