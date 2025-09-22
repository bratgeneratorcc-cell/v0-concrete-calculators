import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConcreteBlockFillCalculator } from "@/components/concrete-block-fill-calculator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, Calculator } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Concrete Block Fill Calculator - Estimate Grout Needed",
  description:
    "Find out how much grout or concrete fill you need to fill hollow blocks. Input wall dimensions and block size for quick results.",
}

export default function ConcreteBlockFillPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Concrete Block Fill Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Estimate grout volume required to fill hollow concrete blocks for walls or projects. Essential for
            structural reinforcement and increased wall strength.
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-16">
          <ConcreteBlockFillCalculator />
        </div>

        {/* How to Use It */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Use It</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                Enter wall length, height, block size, and fill percentage. The calculator provides total volume in
                cubic feet and cubic yards based on standard hollow block dimensions (approximately 50% hollow space).
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Avoid Over-ordering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Calculate exact grout requirements to prevent waste and reduce material costs for your project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Accurate Calculations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Based on standard hollow block dimensions and industry-standard fill percentages for reliable results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Quick and Reliable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instant results with flexible fill percentage options for partial or complete block filling.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fill Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">When to Fill Concrete Blocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Structural Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Retaining walls requiring extra strength</li>
                  <li>• Foundation walls in high-load areas</li>
                  <li>• Seismic zones requiring reinforcement</li>
                  <li>• Walls supporting heavy loads</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fill Percentages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 100%: Maximum strength applications</li>
                  <li>• 50-75%: Standard reinforcement</li>
                  <li>• 25-50%: Partial fill for insulation</li>
                  <li>• Vertical cells only: Common practice</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Calculators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Other Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Link href="/" className="text-primary hover:underline">
                    Concrete Block Calculator
                  </Link>
                </CardTitle>
                <CardDescription>Calculate the number of blocks needed for wall construction.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Link href="/sonotube-concrete-calculator" className="text-primary hover:underline">
                    Sonotube Concrete Calculator
                  </Link>
                </CardTitle>
                <CardDescription>Calculate concrete volume for cylindrical forms and posts.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Link href="/concrete-pad-cost-calculator" className="text-primary hover:underline">
                    Concrete Pad Cost Calculator
                  </Link>
                </CardTitle>
                <CardDescription>Estimate the total cost of concrete pads and slabs.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Professional Guidelines */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Professional Guidelines</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Grout filling increases wall strength significantly and is often required by building codes for
                    structural applications. Use high-strength grout (2000+ PSI) for load-bearing walls.
                  </p>
                  <p className="text-muted-foreground">
                    Always consult structural engineering specifications and local building codes to determine required
                    fill percentages and grout strength for your specific application.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
