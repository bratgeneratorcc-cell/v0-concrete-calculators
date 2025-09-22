import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConcretePadCostCalculator } from "@/components/concrete-pad-cost-calculator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, TrendingUp, Calculator } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Concrete Pad Cost Calculator - Estimate Your Costs",
  description:
    "Quickly estimate the cost of a concrete pad. Input dimensions, thickness, and price per cubic yard to get accurate project costs.",
}

export default function ConcretePadCostPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Concrete Pad Cost Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Plan your budget with this tool that estimates the total cost of concrete pads. Perfect for driveways,
            patios, garage floors, and foundation slabs.
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-16">
          <ConcretePadCostCalculator />
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How It Works</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                Enter pad length, width, thickness, and cost per cubic yard. The tool calculates total volume and
                project cost, helping you budget effectively for your concrete pad project.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Use This Tool</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Budget More Effectively
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get accurate cost estimates before starting your project to plan your budget and avoid overspending.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Avoid Surprise Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Know exactly how much concrete you need and what it will cost before contacting suppliers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Simple and Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Easy-to-use interface provides instant results without complex calculations or formulas.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Understanding Concrete Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Typical Price Ranges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Basic concrete: $100-$150 per cubic yard</li>
                  <li>• High-strength concrete: $150-$200 per cubic yard</li>
                  <li>• Decorative concrete: $200-$300 per cubic yard</li>
                  <li>• Delivery fees: $60-$200 per load</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Costs to Consider</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Site preparation and excavation</li>
                  <li>• Reinforcement (rebar or wire mesh)</li>
                  <li>• Labor for pouring and finishing</li>
                  <li>• Permits and inspections</li>
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
                  <Link href="/concrete-block-fill-calculator" className="text-primary hover:underline">
                    Concrete Block Fill Calculator
                  </Link>
                </CardTitle>
                <CardDescription>Calculate grout volume needed to fill hollow blocks.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Professional Tips */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Professional Tips</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Always order 5-10% extra concrete to account for spillage, uneven subgrade, and slight measurement
                    variations. Concrete prices can vary significantly by region and season.
                  </p>
                  <p className="text-muted-foreground">
                    For large projects or structural applications, consult with a licensed contractor to ensure proper
                    specifications and installation methods.
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
