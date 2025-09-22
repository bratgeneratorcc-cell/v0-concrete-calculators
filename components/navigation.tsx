"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calculator, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", url: "/" },
    { label: "Sonotube Calculator", url: "/sonotube-concrete-calculator" },
    { label: "Pad Cost Calculator", url: "/concrete-pad-cost-calculator" },
    { label: "Block Fill Calculator", url: "/concrete-block-fill-calculator" },
  ]

  const isActive = (url: string) => pathname === url

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">Concrete Calculators</span>
            <span className="sm:hidden">Concrete Calc</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.url)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.url)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
