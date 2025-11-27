"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navItems = [
  { href: "/soluzioni-visive", label: "SOLUTIONS" },
  { href: "/servizi", label: "SERVICES" },
  { href: "/contattologia", label: "CONTACTOLOGY" },
  { href: "/chi-siamo", label: "ABOUT US" },
  { href: "/blog", label: "BLOG" },
  { href: "/contattaci", label: "CONTACT US" },
]

export function NavbarSections() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium text-foreground/70",
                  "hover:text-primary transition-colors",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary",
                  "after:scale-x-0 after:transition-transform after:duration-300",
                  "hover:after:scale-x-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-1 py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium text-foreground/80",
                  "hover:text-primary hover:bg-secondary/50 rounded-md",
                  "transition-colors"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}


