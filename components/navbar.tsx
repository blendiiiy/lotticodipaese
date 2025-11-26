"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navItems = [
  { href: "/soluzioni-visive", label: "SOLUZIONI VISIVE" },
  { href: "/servizi", label: "SERVIZI" },
  { href: "/contattologia", label: "CONTATTOLOGIA" },
  { href: "/chi-siamo", label: "CHI SIAMO" },
  { href: "/blog", label: "BLOG" },
  { href: "/contattaci", label: "CONTATTACI" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="hidden md:flex items-center">
          <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            <a
              href="https://wa.me/393404617078"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 w-full">
              <a
                href="https://wa.me/393404617078"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrivici su WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

