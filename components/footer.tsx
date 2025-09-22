import { Shield, Users, BookOpen, Calculator } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-lg text-foreground">Concrete Calculators</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional construction planning tools for accurate material estimation and cost planning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Concrete Block Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/sonotube-concrete-calculator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sonotube Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/concrete-pad-cost-calculator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pad Cost Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/concrete-block-fill-calculator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Block Fill Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Expert Authors */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Expert Authors</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Content written and reviewed by civil engineers and construction experts with 10+ years of experience in
              concrete construction and material estimation.
            </p>
          </div>

          {/* Trusted Sources */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Trusted Sources</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• American Concrete Institute (ACI)</li>
              <li>• National Ready Mixed Concrete Association (NRMCA)</li>
              <li>• ASTM International Standards</li>
              <li>• International Building Code (IBC)</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                All calculations provided are estimates only and should be used for preliminary planning purposes.
                Actual material requirements may vary based on site conditions, local building codes, and specific
                project requirements. Always consult with a licensed contractor, structural engineer, or building
                professional for final planning and to ensure compliance with local building codes and safety standards.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Concrete Calculators. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Professional construction planning tools</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
