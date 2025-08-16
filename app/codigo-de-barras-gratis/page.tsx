"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Copy, BarChart3, Settings, Info, RefreshCw, QrCode } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import JsBarcode from "jsbarcode"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CodigoDeBarrasGratis() {
  const { language } = useLanguage()
  const t = translations[language]?.barcodeGenerator || translations.pt.barcodeGenerator
  
  const [generatorType, setGeneratorType] = useState<"barcode" | "qr">("barcode")
  const [barcodeData, setBarcodeData] = useState("123456789")
  const [barcodeType, setBarcodeType] = useState("CODE128")
  const [barcodeSize, setBarcodeSize] = useState("medium")
  const [showText, setShowText] = useState(true)
  const [barcodeColor, setBarcodeColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const [lineWidth, setLineWidth] = useState(2)
  const [height, setHeight] = useState(100)
  const [fontSize, setFontSize] = useState(20)
  
  // QR Code specific options
  const [qrData, setQrData] = useState("https://www.purplestock.com.br")
  const [qrSize, setQrSize] = useState(256)
  const [qrErrorCorrection, setQrErrorCorrection] = useState("M")
  const [qrMargin, setQrMargin] = useState(4)
  const [qrColor, setQrColor] = useState("#000000")
  const [qrBackgroundColor, setQrBackgroundColor] = useState("#FFFFFF")
  
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

  const qrErrorCorrectionLevels = [
    { value: "L", label: "Baixo (7%)", description: "Recupera até 7% dos dados" },
    { value: "M", label: "Médio (15%)", description: "Recupera até 15% dos dados" },
    { value: "Q", label: "Alto (25%)", description: "Recupera até 25% dos dados" },
    { value: "H", label: "Máximo (30%)", description: "Recupera até 30% dos dados" }
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

  const generateQRCode = async () => {
    if (!canvasRef.current || !qrData) return
    
    setIsGenerating(true)
    
    try {
      // Use a QR code generation library
      const QRCode = (await import('qrcode')).default
      
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (!ctx) return
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set background
      ctx.fillStyle = qrBackgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Generate QR code
      await QRCode.toCanvas(canvas, qrData, {
        width: qrSize,
        margin: qrMargin,
        color: {
          dark: qrColor,
          light: qrBackgroundColor
        },
        errorCorrectionLevel: qrErrorCorrection
      })
      
      // Center the QR code on the canvas
      const qrWidth = qrSize + (qrMargin * 2)
      const qrHeight = qrSize + (qrMargin * 2)
      const x = (canvas.width - qrWidth) / 2
      const y = (canvas.height - qrHeight) / 2
      
      // Create a temporary canvas to draw the centered QR code
      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = qrWidth
      tempCanvas.height = qrHeight
      const tempCtx = tempCanvas.getContext('2d')
      
      if (tempCtx) {
        tempCtx.drawImage(canvas, 0, 0)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = qrBackgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(tempCanvas, x, y)
      }
      
    } catch (error) {
      console.error('Erro ao gerar QR code:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const generateCode = () => {
    if (generatorType === "barcode") {
      generateBarcode()
    } else {
      generateQRCode()
    }
  }

  const downloadCode = () => {
    if (!canvasRef.current) return
    
    try {
      const canvas = canvasRef.current
      const link = document.createElement('a')
      const type = generatorType === "barcode" ? "barcode" : "qr"
      const data = generatorType === "barcode" ? barcodeData : qrData
      link.download = `${type}-${data}.png`
      link.href = canvas.toDataURL()
      link.click()
    } catch (error) {
      console.error('Erro ao baixar código:', error)
    }
  }

  const copyCode = async () => {
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
      console.error('Erro ao copiar código:', error)
    }
  }

  // Update canvas size when size option changes
  useEffect(() => {
    if (canvasRef.current) {
      if (generatorType === "barcode") {
        const size = sizeOptions.find(s => s.value === barcodeSize)
        if (size) {
          const [width, height] = size.dimensions.split("x").map(Number)
          canvasRef.current.width = width
          canvasRef.current.height = height
        }
      } else {
        // For QR codes, use square dimensions
        canvasRef.current.width = qrSize + 100
        canvasRef.current.height = qrSize + 100
      }
      generateCode()
    }
  }, [barcodeSize, qrSize, generatorType])

  // Generate code when parameters change
  useEffect(() => {
    if ((generatorType === "barcode" && barcodeData) || (generatorType === "qr" && qrData)) {
      generateCode()
    }
  }, [generatorType, barcodeData, barcodeType, showText, barcodeColor, backgroundColor, lineWidth, height, fontSize, qrData, qrErrorCorrection, qrMargin, qrColor, qrBackgroundColor])

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              {generatorType === "barcode" ? t.title : "Gerador de QR Code Grátis"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {generatorType === "barcode" ? t.description : "Crie QR codes profissionais para seu negócio. Suporte para URLs, texto, contatos e mais."}
            </p>
          </div>

          {/* Generator Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
              <button
                onClick={() => setGeneratorType("barcode")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  generatorType === "barcode"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <BarChart3 className="inline-block w-5 h-5 mr-2" />
                Código de Barras
              </button>
              <button
                onClick={() => setGeneratorType("qr")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  generatorType === "qr"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <QrCode className="inline-block w-5 h-5 mr-2" />
                QR Code
              </button>
            </div>
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
                  {/* Data Input */}
                  <div className="space-y-2">
                    <Label htmlFor="dataInput">
                      {generatorType === "barcode" ? t.configuration.data : "Dados do QR Code"}
                    </Label>
                    <Input
                      id="dataInput"
                      value={generatorType === "barcode" ? barcodeData : qrData}
                      onChange={(e) => {
                        if (generatorType === "barcode") {
                          setBarcodeData(e.target.value)
                        } else {
                          setQrData(e.target.value)
                        }
                      }}
                      placeholder={generatorType === "barcode" ? "123456789" : "https://exemplo.com"}
                      className="border-purple-200 focus:border-purple-500"
                    />
                    {generatorType === "qr" && (
                      <p className="text-xs text-gray-500">
                        Suporta URLs, texto, números de telefone, emails, coordenadas GPS e mais
                      </p>
                    )}
                  </div>

                  {/* Barcode Type - Only show for barcodes */}
                  {generatorType === "barcode" && (
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
                  )}

                  {/* QR Code Error Correction - Only show for QR codes */}
                  {generatorType === "qr" && (
                    <div className="space-y-2">
                      <Label htmlFor="qrErrorCorrection">Correção de Erro</Label>
                      <Select value={qrErrorCorrection} onValueChange={setQrErrorCorrection}>
                        <SelectTrigger className="border-purple-200 focus:border-purple-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {qrErrorCorrectionLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              <div>
                                <div className="font-medium">{level.label}</div>
                                <div className="text-sm text-gray-500">{level.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Size */}
                  <div className="space-y-2">
                    <Label htmlFor="size">
                      {generatorType === "barcode" ? t.configuration.size : "Tamanho"}
                    </Label>
                    {generatorType === "barcode" ? (
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
                    ) : (
                      <div className="space-y-2">
                        <Input
                          type="range"
                          id="qrSize"
                          min="128"
                          max="512"
                          step="32"
                          value={qrSize}
                          onChange={(e) => setQrSize(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="text-sm text-gray-500">{qrSize}x{qrSize}px</div>
                      </div>
                    )}
                  </div>

                  {/* Advanced Options - Only show for barcodes */}
                  {generatorType === "barcode" && (
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
                  )}

                  {/* QR Code Margin - Only show for QR codes */}
                  {generatorType === "qr" && (
                    <div className="space-y-2">
                      <Label htmlFor="qrMargin">Margem</Label>
                      <Input
                        type="range"
                        id="qrMargin"
                        min="0"
                        max="8"
                        step="1"
                        value={qrMargin}
                        onChange={(e) => setQrMargin(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-500">{qrMargin} módulos</div>
                    </div>
                  )}

                  {/* Colors */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="codeColor">
                        {generatorType === "barcode" ? t.configuration.barcodeColor : "Cor do QR Code"}
                      </Label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          id="codeColor"
                          value={generatorType === "barcode" ? barcodeColor : qrColor}
                          onChange={(e) => {
                            if (generatorType === "barcode") {
                              setBarcodeColor(e.target.value)
                            } else {
                              setQrColor(e.target.value)
                            }
                          }}
                          className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                        />
                        <Input
                          value={generatorType === "barcode" ? barcodeColor : qrColor}
                          onChange={(e) => {
                            if (generatorType === "barcode") {
                              setBarcodeColor(e.target.value)
                            } else {
                              setQrColor(e.target.value)
                            }
                          }}
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
                          value={generatorType === "barcode" ? backgroundColor : qrBackgroundColor}
                          onChange={(e) => {
                            if (generatorType === "barcode") {
                              setBackgroundColor(e.target.value)
                            } else {
                              setQrBackgroundColor(e.target.value)
                            }
                          }}
                          className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
                        />
                        <Input
                          value={generatorType === "barcode" ? backgroundColor : qrBackgroundColor}
                          onChange={(e) => {
                            if (generatorType === "barcode") {
                              setBackgroundColor(e.target.value)
                            } else {
                              setQrBackgroundColor(e.target.value)
                            }
                          }}
                          className="flex-1 border-purple-200 focus:border-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Options - Only show text option for barcodes */}
                  {generatorType === "barcode" && (
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
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button 
                      onClick={generateCode}
                      disabled={isGenerating}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <RefreshCw className={`h-4 w-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                      {isGenerating ? 'Gerando...' : 'Regenerar'}
                    </Button>
                    <Button 
                      onClick={downloadCode}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t.actions.download}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={copyCode}
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
              {/* Code Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {generatorType === "barcode" ? (
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                    ) : (
                      <QrCode className="h-5 w-5 text-purple-600" />
                    )}
                    {t.preview.title}
                  </CardTitle>
                  <CardDescription>{t.preview.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-6">
                    <div className="bg-white p-8 rounded-lg border-2 border-dashed border-purple-200 min-h-[300px] flex items-center justify-center">
                      {((generatorType === "barcode" && barcodeData) || (generatorType === "qr" && qrData)) ? (
                        <canvas
                          ref={canvasRef}
                          className="max-w-full h-auto border border-gray-200 rounded-lg"
                          style={{ 
                            backgroundColor: generatorType === "barcode" ? backgroundColor : qrBackgroundColor 
                          }}
                        />
                      ) : (
                        <div className="text-center text-gray-500">
                          {generatorType === "barcode" ? (
                            <BarChart3 className="h-16 w-16 mx-auto mb-2 text-gray-300" />
                          ) : (
                            <QrCode className="h-16 w-16 mx-auto mb-2 text-gray-300" />
                          )}
                          <p>{t.preview.enterData}</p>
                        </div>
                      )}
                    </div>
                    
                    {((generatorType === "barcode" && barcodeData) || (generatorType === "qr" && qrData)) && (
                      <div className="text-center space-y-2">
                        <p className="text-sm text-gray-600">
                          <strong>Tipo:</strong> {generatorType === "barcode" ? "Código de Barras" : "QR Code"}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Dados:</strong> {generatorType === "barcode" ? barcodeData : qrData}
                        </p>
                        {generatorType === "barcode" ? (
                          <p className="text-sm text-gray-600">
                            <strong>Formato:</strong> {barcodeTypes.find(t => t.value === barcodeType)?.label}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-600">
                            <strong>Tamanho:</strong> {qrSize}x{qrSize}px
                          </p>
                        )}
                        {generatorType === "barcode" && (
                          <p className="text-sm text-gray-600">
                            <strong>Dimensões:</strong> {sizeOptions.find(s => s.value === barcodeSize)?.dimensions}
                          </p>
                        )}
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
                      <TabsTrigger value="formats">
                        {generatorType === "barcode" ? "Formatos" : "Tipos de QR"}
                      </TabsTrigger>
                      <TabsTrigger value="usage">{t.information.usage.title}</TabsTrigger>
                      <TabsTrigger value="tips">{t.information.tips.title}</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="formats" className="mt-6">
                      <div className="space-y-4">
                        {generatorType === "barcode" ? (
                          // Barcode formats
                          barcodeTypes.map((type) => (
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
                          ))
                        ) : (
                          // QR Code types
                          [
                            { title: "URL", description: "Links para websites, redes sociais e aplicativos" },
                            { title: "Texto", description: "Mensagens, notas e informações estáticas" },
                            { title: "Contato (vCard)", description: "Informações de contato para agenda" },
                            { title: "Email", description: "Endereços de email com assunto e corpo" },
                            { title: "Telefone", description: "Números de telefone para ligação direta" },
                            { title: "SMS", description: "Mensagens de texto pré-formatadas" },
                            { title: "WiFi", description: "Configurações de rede WiFi" },
                            { title: "Localização", description: "Coordenadas GPS e endereços" }
                          ].map((type, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900">{type.title}</h4>
                                <p className="text-sm text-gray-600">{type.description}</p>
                              </div>
                            </div>
                          ))
                        )}
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
                        {generatorType === "barcode" ? (
                          // Barcode tips
                          t.information.tips.items.map((tip: { title: string; description: string }, index: number) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                              <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{tip.title}</h4>
                                <p className="text-sm text-gray-600">{tip.description}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          // QR Code tips
                          [
                            {
                              title: "Escolha o tamanho correto",
                              description: "Use tamanhos maiores para impressão e menores para uso digital"
                            },
                            {
                              title: "Configure a correção de erro",
                              description: "Use correção alta (H) para impressão e baixa (L) para uso digital"
                            },
                            {
                              title: "Teste antes de usar",
                              description: "Sempre teste o QR code com diferentes leitores antes da implementação"
                            },
                            {
                              title: "Mantenha contraste",
                              description: "Use cores contrastantes para melhor legibilidade"
                            }
                          ].map((tip, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                              <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{tip.title}</h4>
                                <p className="text-sm text-gray-600">{tip.description}</p>
                              </div>
                            </div>
                          ))
                        )}
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

