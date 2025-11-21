"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export default function ColorPickerPage() {
  const [primaryHex, setPrimaryHex] = useState("#1e5a8a")
  const [accentHex, setAccentHex] = useState("#f59e0b")
  const [hslValues, setHslValues] = useState({ primary: "218 85% 35%", accent: "38 92% 50%" })

  // Convert hex to HSL
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
        case g: h = ((b - r) / d + 2) / 6; break
        case b: h = ((r - g) / d + 4) / 6; break
      }
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
  }

  const handlePrimaryChange = (hex: string) => {
    setPrimaryHex(hex)
    const hsl = hexToHsl(hex)
    setHslValues(prev => ({ ...prev, primary: hsl }))
  }

  const handleAccentChange = (hex: string) => {
    setAccentHex(hex)
    const hsl = hexToHsl(hex)
    setHslValues(prev => ({ ...prev, accent: hsl }))
  }

  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const cssCode = `:root {
  --primary: ${hslValues.primary};
  --accent: ${hslValues.accent};
}`

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Color Picker Tool</h1>
        <p className="text-muted-foreground mb-8">
          Pick colors from the original website and see them applied here
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Primary Color</CardTitle>
              <CardDescription>Main color (header, buttons, links)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="primary">Hex Color</Label>
                <Input
                  id="primary"
                  type="color"
                  value={primaryHex}
                  onChange={(e) => handlePrimaryChange(e.target.value)}
                  className="h-12 w-full"
                />
                <Input
                  type="text"
                  value={primaryHex}
                  onChange={(e) => handlePrimaryChange(e.target.value)}
                  className="mt-2"
                  placeholder="#000000"
                />
              </div>
              <div>
                <Label>HSL Value</Label>
                <div className="flex items-center gap-2">
                  <Input value={hslValues.primary} readOnly />
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => copyToClipboard(hslValues.primary)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div
                className="h-20 rounded-lg"
                style={{ backgroundColor: primaryHex }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accent Color</CardTitle>
              <CardDescription>Highlight color (CTAs, badges)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="accent">Hex Color</Label>
                <Input
                  id="accent"
                  type="color"
                  value={accentHex}
                  onChange={(e) => handleAccentChange(e.target.value)}
                  className="h-12 w-full"
                />
                <Input
                  type="text"
                  value={accentHex}
                  onChange={(e) => handleAccentChange(e.target.value)}
                  className="mt-2"
                  placeholder="#000000"
                />
              </div>
              <div>
                <Label>HSL Value</Label>
                <div className="flex items-center gap-2">
                  <Input value={hslValues.accent} readOnly />
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => copyToClipboard(hslValues.accent)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div
                className="h-20 rounded-lg"
                style={{ backgroundColor: accentHex }}
              />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>CSS Code to Update</CardTitle>
            <CardDescription>Copy this and update app/globals.css</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{cssCode}</code>
            </pre>
            <Button
              className="mt-4"
              onClick={() => copyToClipboard(cssCode)}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy CSS Code
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div
                className="p-6 rounded-lg text-white"
                style={{ backgroundColor: primaryHex }}
              >
                <h3 className="text-2xl font-bold mb-2">Primary Color Preview</h3>
                <p>This is how the primary color looks</p>
              </div>
              <div
                className="p-6 rounded-lg text-white"
                style={{ backgroundColor: accentHex }}
              >
                <h3 className="text-2xl font-bold mb-2">Accent Color Preview</h3>
                <p>This is how the accent color looks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">How to Use:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Open the original website: https://www.lotticodipaese.com/</li>
            <li>Press F12 → Use element picker to click on colored elements</li>
            <li>Copy the hex color code from the Styles panel</li>
            <li>Paste it in the color picker above</li>
            <li>Copy the generated CSS code</li>
            <li>Update app/globals.css with the new values</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

