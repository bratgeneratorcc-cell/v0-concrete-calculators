"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function ConcreteBlockFillCalculator() {
  const [wallLength, setWallLength] = useState("")
  const [wallHeight, setWallHeight] = useState("")
  const [blockSize, setBlockSize] = useState("")
  const [fillPercentage, setFillPercentage] = useState("100")
  const [result, setResult] = useState<{ cubicFeet: number; cubicYards: number } | null>(null)

  const calculateFill = () => {
    if (!wallLength || !wallHeight || !blockSize || !fillPercentage) return

    const length = Number.parseFloat(wallLength)
    const height = Number.parseFloat(wallHeight)
    const fillPercent = Number.parseFloat(fillPercentage) / 100

    // Parse block dimensions (e.g., "16x8x8" -> [16, 8, 8])
    const [blockLength, blockHeight, blockWidth] = blockSize.split("x").map(Number)

    // Convert to feet
    const blockLengthFt = blockLength / 12
    const blockHeightFt = blockHeight / 12
    const blockWidthFt = blockWidth / 12

    // Calculate number of blocks
    const blocksHorizontal = Math.ceil(length / blockLengthFt)
    const blocksVertical = Math.ceil(height / blockHeightFt)
    const totalBlocks = blocksHorizontal * blocksVertical

    // Calculate hollow volume per block (assuming 50% hollow for standard blocks)
    const blockVolume = blockLengthFt * blockHeightFt * blockWidthFt
    const hollowVolumePerBlock = blockVolume * 0.5 // Standard hollow blocks are ~50% hollow

    // Calculate total fill volume
    const totalFillVolumeCubicFeet = totalBlocks * hollowVolumePerBlock * fillPercent
    const totalFillVolumeCubicYards = totalFillVolumeCubicFeet / 27

    setResult({
      cubicFeet: Math.round(totalFillVolumeCubicFeet * 100) / 100,
      cubicYards: Math.round(totalFillVolumeCubicYards * 100) / 100,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Concrete Block Fill Calculator
        </CardTitle>
        <CardDescription>
          Estimate grout volume required to fill hollow concrete blocks for walls or projects
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="wall-length">Wall Length (ft)</Label>
            <Input
              id="wall-length"
              type="number"
              placeholder="Enter length"
              value={wallLength}
              onChange={(e) => setWallLength(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="wall-height">Wall Height (ft)</Label>
            <Input
              id="wall-height"
              type="number"
              placeholder="Enter height"
              value={wallHeight}
              onChange={(e) => setWallHeight(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="block-size">Block Size (inches)</Label>
            <Select value={blockSize} onValueChange={setBlockSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select block size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16x8x8">16" x 8" x 8"</SelectItem>
                <SelectItem value="12x8x8">12" x 8" x 8"</SelectItem>
                <SelectItem value="8x8x8">8" x 8" x 8"</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fill-percentage">Fill Percentage (%)</Label>
            <Input
              id="fill-percentage"
              type="number"
              min="1"
              max="100"
              value={fillPercentage}
              onChange={(e) => setFillPercentage(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateFill} className="w-full" size="lg">
          Calculate Grout Volume
        </Button>

        {result !== null && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold text-foreground">
                Grout needed: <span className="text-primary text-xl">{result.cubicFeet}</span> cubic feet
              </p>
              <p className="text-lg font-semibold text-foreground">
                Or: <span className="text-primary text-xl">{result.cubicYards}</span> cubic yards
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Add 10% extra for spillage and to ensure complete filling
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
