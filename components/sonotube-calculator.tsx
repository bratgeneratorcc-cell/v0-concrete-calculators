"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function SonotubeCalculator() {
  const [tubeDiameter, setTubeDiameter] = useState("")
  const [tubeHeight, setTubeHeight] = useState("")
  const [numberOfTubes, setNumberOfTubes] = useState("1")
  const [result, setResult] = useState<{ cubicFeet: number; cubicYards: number } | null>(null)

  const calculateVolume = () => {
    if (!tubeDiameter || !tubeHeight || !numberOfTubes) return

    const diameter = Number.parseFloat(tubeDiameter)
    const height = Number.parseFloat(tubeHeight)
    const tubes = Number.parseInt(numberOfTubes)

    // Calculate volume for one tube in cubic inches
    const radius = diameter / 2
    const volumePerTubeInches = Math.PI * radius * radius * height

    // Convert to cubic feet and multiply by number of tubes
    const totalVolumeCubicFeet = (volumePerTubeInches * tubes) / 1728 // 1728 cubic inches = 1 cubic foot

    // Convert to cubic yards
    const totalVolumeCubicYards = totalVolumeCubicFeet / 27 // 27 cubic feet = 1 cubic yard

    setResult({
      cubicFeet: Math.round(totalVolumeCubicFeet * 100) / 100,
      cubicYards: Math.round(totalVolumeCubicYards * 100) / 100,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Sonotube Concrete Calculator
        </CardTitle>
        <CardDescription>Calculate the volume of concrete needed for cylindrical forms (Sonotubes)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="tube-diameter">Tube Diameter (inches)</Label>
            <Input
              id="tube-diameter"
              type="number"
              placeholder="Enter diameter"
              value={tubeDiameter}
              onChange={(e) => setTubeDiameter(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tube-height">Tube Height (inches)</Label>
            <Input
              id="tube-height"
              type="number"
              placeholder="Enter height"
              value={tubeHeight}
              onChange={(e) => setTubeHeight(e.target.value)}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="number-of-tubes">Number of Tubes</Label>
            <Input
              id="number-of-tubes"
              type="number"
              min="1"
              value={numberOfTubes}
              onChange={(e) => setNumberOfTubes(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateVolume} className="w-full" size="lg">
          Calculate Concrete Volume
        </Button>

        {result !== null && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold text-foreground">
                Volume needed: <span className="text-primary text-xl">{result.cubicFeet}</span> cubic feet
              </p>
              <p className="text-lg font-semibold text-foreground">
                Or: <span className="text-primary text-xl">{result.cubicYards}</span> cubic yards
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Consider ordering 10% extra to account for spillage and settling
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
