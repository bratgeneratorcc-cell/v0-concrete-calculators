"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator, DollarSign } from "lucide-react"

export function ConcretePadCostCalculator() {
  const [padLength, setPadLength] = useState("")
  const [padWidth, setPadWidth] = useState("")
  const [thickness, setThickness] = useState("4")
  const [costPerCubicYard, setCostPerCubicYard] = useState("150")
  const [result, setResult] = useState<{ volume: number; cost: number } | null>(null)

  const calculateCost = () => {
    if (!padLength || !padWidth || !thickness || !costPerCubicYard) return

    const length = Number.parseFloat(padLength)
    const width = Number.parseFloat(padWidth)
    const thicknessInches = Number.parseFloat(thickness)
    const pricePerYard = Number.parseFloat(costPerCubicYard)

    // Convert thickness from inches to feet
    const thicknessFeet = thicknessInches / 12

    // Calculate volume in cubic feet
    const volumeCubicFeet = length * width * thicknessFeet

    // Convert to cubic yards
    const volumeCubicYards = volumeCubicFeet / 27

    // Calculate total cost
    const totalCost = volumeCubicYards * pricePerYard

    setResult({
      volume: Math.round(volumeCubicYards * 100) / 100,
      cost: Math.round(totalCost * 100) / 100,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Concrete Pad Cost Calculator
        </CardTitle>
        <CardDescription>
          Plan your budget with this tool that estimates the total cost of concrete pads
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pad-length">Pad Length (ft)</Label>
            <Input
              id="pad-length"
              type="number"
              placeholder="Enter length"
              value={padLength}
              onChange={(e) => setPadLength(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pad-width">Pad Width (ft)</Label>
            <Input
              id="pad-width"
              type="number"
              placeholder="Enter width"
              value={padWidth}
              onChange={(e) => setPadWidth(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="thickness">Thickness (inches)</Label>
            <Input id="thickness" type="number" value={thickness} onChange={(e) => setThickness(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cost-per-yard">Cost per Cubic Yard ($)</Label>
            <Input
              id="cost-per-yard"
              type="number"
              value={costPerCubicYard}
              onChange={(e) => setCostPerCubicYard(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateCost} className="w-full" size="lg">
          Calculate Project Cost
        </Button>

        {result !== null && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <p className="text-lg font-semibold text-foreground">
                  Volume: <span className="text-primary text-xl">{result.volume}</span> cubic yards
                </p>
              </div>
              <p className="text-2xl font-bold text-primary">Estimated Cost: ${result.cost.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">
                Price includes concrete only. Add 10-15% for delivery, labor, and finishing costs.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
