import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[600px] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Pagina non trovata</h2>
      <p className="text-muted-foreground mb-8">
        La pagina che stai cercando non esiste.
      </p>
      <Button asChild>
        <Link href="/">Torna alla Home</Link>
      </Button>
    </div>
  )
}

