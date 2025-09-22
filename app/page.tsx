import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConcreteBlockCalculator } from "@/components/concrete-block-calculator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Concrete Block Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            An online tool to estimate the number of blocks needed for your wall projects. Ideal for builders,
            contractors, and DIY users who want accurate calculations to save time and money.
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-16">
          <ConcreteBlockCalculator />
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How the Calculator Works</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                Enter wall length, height, block size, and mortar spacing. The tool calculates the total blocks required
                with an extra 5% waste allowance to ensure you have enough materials for your project.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Benefits of Using Our Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Saves Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instantly calculate block requirements without manual math or complex formulas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Reduces Waste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accurate calculations help you order the right amount of materials, minimizing waste and costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Free & Easy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No registration required. Simple interface that anyone can use for project planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Other Concrete Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Accuracy and Reliability</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Our formulas are based on standard block dimensions and industry guidelines from trusted sources
                    like the American Concrete Institute (ACI) and National Ready Mixed Concrete Association (NRMCA).
                  </p>
                  <p className="text-muted-foreground">
                    For professional projects, always consult a licensed contractor or engineer for exact requirements
                    and local building code compliance.
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
