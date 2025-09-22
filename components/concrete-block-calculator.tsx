"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function ConcreteBlockCalculator() {
  const [wallLength, setWallLength] = useState("")
  const [wallHeight, setWallHeight] = useState("")
  const [blockSize, setBlockSize] = useState("")
  const [mortarGap, setMortarGap] = useState("0.375")
  const [result, setResult] = useState<number | null>(null)

  const calculateBlocks = () => {
    if (!wallLength || !wallHeight || !blockSize) return

    const length = Number.parseFloat(wallLength)
    const height = Number.parseFloat(wallHeight)
    const mortar = Number.parseFloat(mortarGap)

    // Parse block dimensions (e.g., "16x8x8" -> [16, 8, 8])
    const [blockLength, blockHeight] = blockSize.split("x").map(Number)

    // Convert to feet and add mortar
    const blockLengthFt = (blockLength + mortar) / 12
    const blockHeightFt = (blockHeight + mortar) / 12

    // Calculate blocks needed
    const blocksHorizontal = Math.ceil(length / blockLengthFt)
    const blocksVertical = Math.ceil(height / blockHeightFt)
    const totalBlocks = blocksHorizontal * blocksVertical

    // Add 5% waste allowance
    const blocksWithWaste = Math.ceil(totalBlocks * 1.05)

    setResult(blocksWithWaste)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Concrete Block Calculator
        </CardTitle>
        <CardDescription>Calculate the number of concrete blocks needed for your wall project</CardDescription>
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
            <Label htmlFor="mortar-gap">Mortar Gap (inches)</Label>
            <Input
              id="mortar-gap"
              type="number"
              step="0.125"
              value={mortarGap}
              onChange={(e) => setMortarGap(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateBlocks} className="w-full" size="lg">
          Calculate Blocks Needed
        </Button>

        {result !== null && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
            <p className="text-lg font-semibold text-foreground">
              Total blocks needed: <span className="text-primary text-xl">{result}</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">(Includes 5% waste allowance)</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
