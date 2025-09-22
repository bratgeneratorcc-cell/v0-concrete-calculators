import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SonotubeCalculator } from "@/components/sonotube-calculator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Target, CalculatorIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sonotube Concrete Calculator - Estimate Concrete Volume",
  description:
    "Calculate how much concrete you need for Sonotube projects. Input diameter, height, and number of tubes to get instant volume results.",
}

export default function SonotubePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Sonotube Concrete Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tool for estimating the volume of concrete required for cylindrical forms (Sonotubes). Perfect for fence
            posts, deck supports, and foundation piers.
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-16">
          <SonotubeCalculator />
        </div>

        {/* How to Use It */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Use It</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                Enter tube diameter, height, and number of tubes to calculate cubic feet and cubic yards of concrete.
                The calculator uses the standard cylindrical volume formula (π × r² × h) to provide accurate results for
                your Sonotube projects.
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
                  <Target className="h-5 w-5 text-primary" />
                  Avoids Under/Over-ordering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get precise volume calculations to order exactly the right amount of concrete for your project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Instant and Free
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No registration required. Get immediate results with our easy-to-use calculator interface.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalculatorIcon className="h-5 w-5 text-primary" />
                  Multiple Tube Sizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supports any diameter and height combination, perfect for various Sonotube applications.
                </p>
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
                  <Link href="/concrete-pad-cost-calculator" className="text-primary hover:underline">
                    Concrete Pad Cost Calculator
                  </Link>
                </CardTitle>
                <CardDescription>Estimate the total cost of concrete pads and slabs.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Link href="/concrete-block-fill-calculator" className="text-primary hover:underline">
                    Concrete Block Fill Calculator
                  </Link>
                </CardTitle>
                <CardDescription>Calculate grout volume needed to fill hollow blocks.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Accuracy Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Professional Applications</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Sonotubes are commonly used for fence posts, deck footings, mailbox posts, and foundation piers. Our
                    calculator provides accurate volume estimates based on standard cylindrical geometry formulas.
                  </p>
                  <p className="text-muted-foreground">
                    For structural applications, always consult with a licensed engineer to ensure proper concrete
                    strength and installation methods meet local building codes.
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
