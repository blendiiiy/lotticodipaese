"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Button
        asChild
        size="lg"
        className="rounded-full h-16 w-16 p-0 bg-green-600 hover:bg-green-700 shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300"
        aria-label="Scrivici su WhatsApp"
      >
        <a
          href="https://wa.me/393404617078"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </Button>
    </div>
  )
}

