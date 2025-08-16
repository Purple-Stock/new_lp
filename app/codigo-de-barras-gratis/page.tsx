"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Copy, BarChart3, Settings, Info, RefreshCw } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import JsBarcode from "jsbarcode"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CodigoDeBarrasGratis() {
  const { language } = useLanguage()
  const t = translations[language]?.barcodeGenerator || translations.pt.barcodeGenerator
  
  const [barcodeData, setBarcodeData] = useState("123456789")
  const [barcodeType, setBarcodeType] = useState("CODE128")
  const [barcodeSize, setBarcodeSize] = useState("medium")
  const [showText, setShowText] = useState(true)
  const [barcodeColor, setBarcodeColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const [lineWidth, setLineWidth] = useState(2)
  const [height, setHeight] = useState(100)
  const [fontSize, setFontSize] = useState(20)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const barcodeTypes = [
    { value: "CODE128", label: "Code 128", description: "Alfanumérico, compacto" },
    { value: "CODE39", label: "Code 39", description: "Alfanumérico, industrial" },
    { value: "EAN13", label: "EAN-13", description: "Produtos comerciais" },
    { value: "EAN8", label: "EAN-8", description: "Produtos pequenos" },
    { value: "UPC", label: "UPC-A", description: "Varejo norte-americano" },
    { value: "ITF14", label: "ITF-14", description: "Logística e transporte" },
    { value: "CODABAR", label: "Codabar", description: "Bibliotecas e saúde" },
    { value: "ITF", label: "ITF", description: "Interleaved 2 of 5" }
  ]

  const sizeOptions = [
    { value: "small", label: "Pequeno", dimensions: "200x100" },
    { value: "medium", label: "Médio", dimensions: "300x150" },
    { value: "large", label: "Grande", dimensions: "400x200" },
    { value: "xlarge", label: "Extra Grande", dimensions: "500x250" }
  ]

  const generateBarcode = () => {
    if (!canvasRef.current || !barcodeData) return
    
    setIsGenerating(true)
    
    try {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (!ctx) return
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set background
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Generate barcode
      JsBarcode(canvas, barcodeData, {
        format: barcodeType,
        width: lineWidth,
        height: height,
        displayValue: showText,
        fontSize: fontSize,
        margin: 10,
        background: backgroundColor,
        lineColor: barcodeColor,
        textAlign: 'center',
        textPosition: 'bottom',
        textMargin: 5
      })
    } catch (error) {
      console.error('Erro ao gerar código de barras:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadBarcode = () => {
    if (!canvasRef.current) return
    
    try {
      const canvas = canvasRef.current
      const link = document.createElement('a')
      link.download = `barcode-${barcodeType}-${barcodeData}.png`
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('Erro ao baixar código de barras:', error)
    }
  }

  const copyBarcode = async () => {
    if (!canvasRef.current) return
    
    try {
      const canvas = canvasRef.current
      canvas.toBlob(async (blob) => {
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob
            })
          ])
        }
      })
    } catch (error) {
      console.error('Erro ao copiar código de barras:', error)
    }
  }

  // Update canvas size when size option changes
  useEffect(() => {
    if (canvasRef.current) {
      const size = sizeOptions.find(s => s.value === barcodeSize)
      if (size) {
        const [width, height] = size.dimensions.split("x").map(Number)
        canvasRef.current.width = width
        canvasRef.current.height = height
        generateBarcode()
      }
    }
  }, [barcodeSize])

  // Generate barcode when parameters change
  useEffect(() => {
    if (barcodeData) {
      generateBarcode()
    }
  }, [barcodeData, barcodeType, showText, barcodeColor, backgroundColor, lineWidth, height, fontSize])

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-600" />
                    {t.configuration.title}
                  </CardTitle>
                  <CardDescription>{t.configuration.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Barcode Data */}
                  <div className="space-y-2">
                    <Label htmlFor="barcodeData">{t.configuration.data}</Label>
                    <Input
                      id="barcodeData"
                      value={barcodeData}
                      onChange={(e) => setBarcodeData(e.target.value)}
                      placeholder="123456789"
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>

                  {/* Barcode Type */}
                  <div className="space-y-2">
                    <Label htmlFor="barcodeType">{t.configuration.type}</Label>
                    <Select value={barcodeType} onValueChange={setBarcodeType}>
                      <SelectTrigger className="border-purple-200 focus:border-purple-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {barcodeTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div>
                              <div className="font-medium">{type.label}</div>
                              <div className="text-sm text-gray-500">{type.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Size */}
                  <div className="space-y-2">
                    <Label htmlFor="barcodeSize">{t.configuration.size}</Label>
                    <Select value={barcodeSize} onValueChange={setBarcodeSize}>
                      <SelectTrigger className="border-purple-200 focus:border-purple-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sizeOptions.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            <div>
                              <div className="font-medium">{size.label}</div>
                              <div className="text-sm text-gray-500">{size.dimensions}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Advanced Options */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="lineWidth">Largura da Linha</Label>
                      <Input
                        type="range"
                        id="lineWidth"
                        min="1"
                        max="5"
                        step="0.5"
                        value={lineWidth}
                        onChange={(e) => setLineWidth(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-500">{lineWidth}px</div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="height">Altura</Label>
                      <Input
                        type="range"
                        id="height"
                        min="50"
                        max="200"
                        step="10"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-500">{height}px</div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fontSize">Tamanho da Fonte</Label>
                      <Input
                        type="range"
                        id="fontSize"
                        min="12"
                        max="32"
                        step="2"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-500">{fontSize}px</div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="barcodeColor">{t.configuration.barcodeColor}</Label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          id="barcodeColor"
                          value={barcodeColor}
                          onChange={(e) => setBarcodeColor(e.target.value)}
                          className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                        />
                        <Input
                          value={barcodeColor}
                          onChange={(e) => setBarcodeColor(e.target.value)}
                          className="flex-1 border-purple-200 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="backgroundColor">{t.configuration.backgroundColor}</Label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          id="backgroundColor"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                        />
                        <Input
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="flex-1 border-purple-200 focus:border-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="showText"
                        checked={showText}
                        onChange={(e) => setShowText(e.target.checked)}
                        className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                      />
                      <Label htmlFor="showText">{t.configuration.showText}</Label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button 
                      onClick={generateBarcode}
                      disabled={isGenerating}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <RefreshCw className={`h-4 w-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                      {isGenerating ? 'Gerando...' : 'Regenerar'}
                    </Button>
                    <Button 
                      onClick={downloadBarcode}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t.actions.download}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={copyBarcode}
                      className="w-full border-purple-200 hover:border-purple-300 hover:bg-purple-50"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview and Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Barcode Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    {t.preview.title}
                  </CardTitle>
                  <CardDescription>{t.preview.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-6">
                    <div className="bg-white p-8 rounded-lg border-2 border-dashed border-purple-200 min-h-[300px] flex items-center justify-center">
                      {barcodeData ? (
                        <canvas
                          ref={canvasRef}
                          className="max-w-full h-auto border border-gray-200 rounded-lg"
                          style={{ backgroundColor: backgroundColor }}
                        />
                      ) : (
                        <div className="text-center text-gray-500">
                          <BarChart3 className="h-16 w-16 mx-auto mb-2 text-gray-300" />
                          <p>{t.preview.enterData}</p>
                        </div>
                      )}
                    </div>
                    
                    {barcodeData && (
                      <div className="text-center space-y-2">
                        <p className="text-sm text-gray-600">
                          <strong>{t.preview.type}:</strong> {barcodeTypes.find(t => t.value === barcodeType)?.label}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>{t.preview.data}:</strong> {barcodeData}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>{t.preview.dimensions}:</strong> {sizeOptions.find(s => s.value === barcodeSize)?.dimensions}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Information Tabs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-purple-600" />
                    {t.information.title}
                  </CardTitle>
                  <CardDescription>{t.information.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="formats" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="formats">{t.information.formats.title}</TabsTrigger>
                      <TabsTrigger value="usage">{t.information.usage.title}</TabsTrigger>
                      <TabsTrigger value="tips">{t.information.tips.title}</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="formats" className="mt-6">
                      <div className="space-y-4">
                        {barcodeTypes.map((type) => (
                          <div key={type.value} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium text-gray-900">{type.label}</h4>
                              <p className="text-sm text-gray-600">{type.description}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {(t.information.formats as any)[type.value] || (t.information.formats as any).default}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="usage" className="mt-6">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                            <h4 className="font-medium text-purple-900 mb-2">{t.information.usage.retail.title}</h4>
                            <p className="text-sm text-purple-700">{t.information.usage.retail.description}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                            <h4 className="font-medium text-blue-900 mb-2">{t.information.usage.logistics.title}</h4>
                            <p className="text-sm text-blue-700">{t.information.usage.logistics.description}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                            <h4 className="font-medium text-green-900 mb-2">{t.information.usage.healthcare.title}</h4>
                            <p className="text-sm text-green-700">{t.information.usage.healthcare.description}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                            <h4 className="font-medium text-orange-900 mb-2">{t.information.usage.manufacturing.title}</h4>
                            <p className="text-sm text-orange-700">{t.information.usage.manufacturing.description}</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tips" className="mt-6">
                      <div className="space-y-4">
                        {t.information.tips.items.map((tip: { title: string; description: string }, index: number) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                            <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{tip.title}</h4>
                              <p className="text-sm text-gray-600">{tip.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
