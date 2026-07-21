"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Box,
  Download,
  Copy,
  BarChart3,
  Settings,
  Info,
  RefreshCw,
  QrCode,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import JsBarcode from "jsbarcode";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { QRCodeErrorCorrectionLevel } from "qrcode";
import {
  BARCODE_SIZE_OPTIONS,
  buildDownloadFilename,
  buildQrPayload,
  computeEan13CheckDigit,
  getBarcodeCanvasDimensions,
  getQrCanvasDimensions,
  resolveBarcodeValue,
  sanitizeBarcodeInput,
  validateBarcodeData,
  type BarcodeFormat,
  type QrPreset,
  type QrPresetInput,
} from "@/lib/barcode-generator";

const BARCODE_TYPES = [
  {
    value: "CODE128",
    label: "Code 128",
    description: "Alfanumérico, compacto",
  },
  {
    value: "CODE39",
    label: "Code 39",
    description: "Alfanumérico, industrial",
  },
  { value: "EAN13", label: "EAN-13", description: "Produtos comerciais" },
  { value: "EAN8", label: "EAN-8", description: "Produtos pequenos" },
  { value: "UPC", label: "UPC-A", description: "Varejo norte-americano" },
  { value: "ITF14", label: "ITF-14", description: "Logística e transporte" },
  { value: "CODABAR", label: "Codabar", description: "Bibliotecas e saúde" },
  { value: "ITF", label: "ITF", description: "Interleaved 2 of 5" },
];

const QR_PRESETS: { value: QrPreset; label: string }[] = [
  { value: "url", label: "URL / Link" },
  { value: "text", label: "Texto" },
  { value: "email", label: "Email" },
  { value: "phone", label: "Telefone" },
  { value: "sms", label: "SMS" },
  { value: "wifi", label: "WiFi" },
];

const QR_ERROR_CORRECTION_LEVELS = [
  { value: "L", label: "Baixo (7%)", description: "Recupera até 7% dos dados" },
  {
    value: "M",
    label: "Médio (15%)",
    description: "Recupera até 15% dos dados",
  },
  {
    value: "Q",
    label: "Alto (25%)",
    description: "Recupera até 25% dos dados",
  },
  {
    value: "H",
    label: "Máximo (30%)",
    description: "Recupera até 30% dos dados",
  },
];

export default function CodigoDeBarrasGratis() {
  const { language } = useLanguage();
  const t =
    translations[language]?.barcodeGenerator ||
    translations.pt.barcodeGenerator;

  const [generatorType, setGeneratorType] = useState<"barcode" | "qr">(
    "barcode"
  );
  const [barcodeData, setBarcodeData] = useState("123456789");
  const [barcodeType, setBarcodeType] = useState("CODE128");
  const [barcodeSize, setBarcodeSize] = useState("medium");
  const [showText, setShowText] = useState(true);
  const [barcodeColor, setBarcodeColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [lineWidth, setLineWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const [fontSize, setFontSize] = useState(20);

  const [qrPreset, setQrPreset] = useState<QrPreset>("url");
  const [qrFields, setQrFields] = useState<QrPresetInput>({
    url: "https://www.purplestock.com.br",
  });
  const [qrSize, setQrSize] = useState(256);
  const [qrErrorCorrection, setQrErrorCorrection] =
    useState<QRCodeErrorCorrectionLevel>("M");
  const [qrMargin, setQrMargin] = useState(4);
  const [qrColor, setQrColor] = useState("#000000");
  const [qrBackgroundColor, setQrBackgroundColor] = useState("#FFFFFF");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const barcodeValidation = useMemo(
    () => validateBarcodeData(barcodeType as BarcodeFormat, barcodeData),
    [barcodeData, barcodeType]
  );

  const resolvedBarcodeValue = useMemo(
    () => resolveBarcodeValue(barcodeType as BarcodeFormat, barcodeData),
    [barcodeData, barcodeType]
  );

  const effectiveQrPayload = useMemo(
    () => buildQrPayload(qrPreset, qrFields),
    [qrFields, qrPreset]
  );

  const ean13Suggestion = useMemo(() => {
    if (barcodeType !== "EAN13") {
      return null;
    }

    const digits = sanitizeBarcodeInput("EAN13", barcodeData);
    if (digits.length !== 12) {
      return null;
    }

    return computeEan13CheckDigit(digits);
  }, [barcodeData, barcodeType]);

  const updateQrField = useCallback(
    <K extends keyof QrPresetInput>(field: K, value: QrPresetInput[K]) => {
      setQrFields((current) => ({ ...current, [field]: value }));
    },
    []
  );

  const handleQrPresetChange = useCallback((preset: QrPreset) => {
    setQrPreset(preset);
    setGenerationError(null);

    if (preset === "url") {
      setQrFields({ url: "https://www.purplestock.com.br" });
      return;
    }

    if (preset === "text") {
      setQrFields({ text: "" });
      return;
    }

    if (preset === "email") {
      setQrFields({ email: "", subject: "", body: "" });
      return;
    }

    if (preset === "phone") {
      setQrFields({ phone: "" });
      return;
    }

    if (preset === "sms") {
      setQrFields({ phone: "", message: "" });
      return;
    }

    setQrFields({ ssid: "", password: "", security: "WPA" });
  }, []);

  const renderBarcodePreview = useCallback((): string | null => {
    if (!canvasRef.current || !resolvedBarcodeValue) {
      return null;
    }

    if (!barcodeValidation.valid) {
      return barcodeValidation.error;
    }

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return null;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      JsBarcode(canvas, resolvedBarcodeValue, {
        format: barcodeType,
        width: lineWidth,
        height: height,
        displayValue: showText,
        fontSize: fontSize,
        margin: 10,
        background: backgroundColor,
        lineColor: barcodeColor,
        textAlign: "center",
        textPosition: "bottom",
        textMargin: 5,
      });

      return null;
    } catch (error) {
      return error instanceof Error
        ? error.message
        : "Não foi possível gerar o código de barras.";
    }
  }, [
    backgroundColor,
    barcodeColor,
    barcodeType,
    barcodeValidation,
    fontSize,
    height,
    lineWidth,
    resolvedBarcodeValue,
    showText,
  ]);

  const renderQrPreview = useCallback(async (): Promise<string | null> => {
    if (!canvasRef.current || !effectiveQrPayload) {
      return "Preencha os dados do QR Code para gerar a visualização.";
    }

    try {
      const QRCode = (await import("qrcode")).default;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return null;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = qrBackgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await QRCode.toCanvas(canvas, effectiveQrPayload, {
        width: qrSize,
        margin: qrMargin,
        color: {
          dark: qrColor,
          light: qrBackgroundColor,
        },
        errorCorrectionLevel: qrErrorCorrection,
      });

      const qrWidth = qrSize + qrMargin * 2;
      const qrHeight = qrSize + qrMargin * 2;
      const x = (canvas.width - qrWidth) / 2;
      const y = (canvas.height - qrHeight) / 2;

      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = qrWidth;
      tempCanvas.height = qrHeight;
      const tempCtx = tempCanvas.getContext("2d");

      if (tempCtx) {
        tempCtx.drawImage(canvas, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = qrBackgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempCanvas, x, y);
      }

      return null;
    } catch (error) {
      return error instanceof Error
        ? error.message
        : "Não foi possível gerar o QR Code.";
    }
  }, [
    effectiveQrPayload,
    qrBackgroundColor,
    qrColor,
    qrErrorCorrection,
    qrMargin,
    qrSize,
  ]);

  const refreshPreview = useCallback(async () => {
    if (generatorType === "barcode") {
      if (!barcodeData || !barcodeValidation.valid) {
        return;
      }

      const error = renderBarcodePreview();
      if (error) {
        console.error("Erro ao gerar código de barras:", error);
      }
      return;
    }

    if (!effectiveQrPayload) {
      return;
    }

    const error = await renderQrPreview();
    if (error) {
      console.error("Erro ao gerar QR code:", error);
    }
  }, [
    barcodeData,
    barcodeValidation.valid,
    effectiveQrPayload,
    generatorType,
    renderBarcodePreview,
    renderQrPreview,
  ]);

  const generateCode = useCallback(async () => {
    setIsGenerating(true);
    setGenerationError(null);

    const error =
      generatorType === "barcode"
        ? renderBarcodePreview()
        : await renderQrPreview();

    if (error) {
      setGenerationError(error);
      console.error("Erro ao gerar código:", error);
    }

    setIsGenerating(false);
  }, [generatorType, renderBarcodePreview, renderQrPreview]);

  const downloadCode = () => {
    if (!canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      const link = document.createElement("a");
      const type = generatorType === "barcode" ? "barcode" : "qr";
      const data =
        generatorType === "barcode" ? resolvedBarcodeValue : effectiveQrPayload;
      link.download = buildDownloadFilename(type, data);
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Erro ao baixar código:", error);
    }
  };

  const copyCode = async () => {
    if (!canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        if (!blob) {
          setCopyFeedback("Não foi possível copiar a imagem.");
          return;
        }

        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);
        setCopyFeedback("Imagem copiada para a área de transferência.");
      });
    } catch (error) {
      setCopyFeedback("Não foi possível copiar a imagem.");
      console.error("Erro ao copiar código:", error);
    }
  };

  // Update canvas size when size option changes
  useEffect(() => {
    if (canvasRef.current) {
      if (generatorType === "barcode") {
        const { width, height } = getBarcodeCanvasDimensions(
          barcodeSize,
          BARCODE_SIZE_OPTIONS
        );
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      } else {
        const { width, height } = getQrCanvasDimensions(qrSize);
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
      void refreshPreview();
    }
  }, [barcodeSize, generatorType, qrSize, refreshPreview]);

  useEffect(() => {
    void refreshPreview();
  }, [refreshPreview]);

  useEffect(() => {
    if (!copyFeedback) {
      return;
    }

    const timeout = window.setTimeout(() => setCopyFeedback(null), 2400);
    return () => window.clearTimeout(timeout);
  }, [copyFeedback]);

  return (
    <div className="ps-landing-canvas relative min-h-screen overflow-x-hidden">
      <div className="ps-landing-bg" aria-hidden="true">
        <div className="ps-landing-bg-glow" />
        <div className="ps-landing-bg-lines" />
      </div>
      <Navbar />

      <main className="relative z-[1] pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-panel overflow-hidden">
            <div className="ps-panel-chrome relative flex items-center justify-between px-4 py-2.5 sm:px-5">
              <div className="flex items-center gap-[6px]" aria-hidden="true">
                <span className="h-[12px] w-[12px] rounded-full bg-[#e86a63] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                <span className="h-[12px] w-[12px] rounded-full bg-[#e9b54c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                <span className="h-[12px] w-[12px] rounded-full bg-[#4ab96a] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
              </div>

              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded bg-brand-ui-primary shadow-sm">
                  <Box className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[12px] font-semibold tracking-wide text-slate-600">
                  Purple Stock · Gerador
                </span>
              </div>

              <span className="text-[10px] font-medium text-slate-400">
                {language === "pt"
                  ? "Ferramenta gratuita"
                  : language === "fr"
                    ? "Outil gratuit"
                    : "Free tool"}
              </span>
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-12 text-center">
                <div className="ps-badge-violet mb-4 inline-flex items-center px-4 py-2 text-sm normal-case tracking-normal">
                  {generatorType === "barcode" ? (
                    <BarChart3 className="mr-2 h-4 w-4" />
                  ) : (
                    <QrCode className="mr-2 h-4 w-4" />
                  )}
                  {language === "pt"
                    ? "Ferramenta gratuita"
                    : language === "fr"
                      ? "Outil gratuit"
                      : "Free tool"}
                </div>
                <h1 className="ps-display mb-4 text-4xl md:text-5xl">
                  {generatorType === "barcode"
                    ? t.title
                    : "Gerador de QR Code Grátis"}
                </h1>
                <p className="ps-lead mx-auto max-w-3xl text-xl">
                  {generatorType === "barcode"
                    ? t.description
                    : "Crie QR codes profissionais para seu negócio. Suporte para URLs, texto, contatos e mais."}
                </p>
              </div>

              <div className="mb-8 flex justify-center">
                <div className="ps-section-surface inline-flex rounded-lg p-1">
                  <button
                    onClick={() => setGeneratorType("barcode")}
                    className={`rounded-md px-6 py-3 font-medium transition-all duration-200 ${
                      generatorType === "barcode"
                        ? "bg-brand-ui-primary text-white shadow-sm"
                        : "text-slate-600 hover:bg-white hover:text-brand-ui-primary"
                    }`}
                  >
                    <BarChart3 className="mr-2 inline-block h-5 w-5" />
                    Código de Barras
                  </button>
                  <button
                    onClick={() => setGeneratorType("qr")}
                    className={`rounded-md px-6 py-3 font-medium transition-all duration-200 ${
                      generatorType === "qr"
                        ? "bg-brand-ui-primary text-white shadow-sm"
                        : "text-slate-600 hover:bg-white hover:text-brand-ui-primary"
                    }`}
                  >
                    <QrCode className="mr-2 inline-block h-5 w-5" />
                    QR Code
                  </button>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Configuration Panel */}
                <div className="lg:col-span-1">
                  <Card className="ps-card sticky top-24 border-brand-border-soft shadow-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-brand-ink">
                        <Settings className="h-5 w-5 text-brand-ui-primary" />
                        {t.configuration.title}
                      </CardTitle>
                      <CardDescription>
                        {t.configuration.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {generatorType === "barcode" ? (
                        <div className="space-y-2">
                          <Label htmlFor="dataInput">
                            {t.configuration.data}
                          </Label>
                          <Input
                            id="dataInput"
                            value={barcodeData}
                            onChange={(e) => {
                              setGenerationError(null);
                              setBarcodeData(
                                sanitizeBarcodeInput(
                                  barcodeType as BarcodeFormat,
                                  e.target.value
                                )
                              );
                            }}
                            placeholder="123456789"
                            className="border-brand-border-soft focus:border-brand-ui-primary"
                          />
                          {!barcodeValidation.valid && (
                            <p className="text-xs text-red-600">
                              {barcodeValidation.error}
                            </p>
                          )}
                          {ean13Suggestion && (
                            <button
                              type="button"
                              className="text-xs font-medium text-brand-link-blue hover:underline"
                              onClick={() =>
                                setBarcodeData(
                                  `${barcodeData}${ean13Suggestion}`
                                )
                              }
                            >
                              Completar dígito verificador EAN-13 (
                              {ean13Suggestion})
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="qrPreset">Tipo de conteúdo</Label>
                            <Select
                              value={qrPreset}
                              onValueChange={(value) =>
                                handleQrPresetChange(value as QrPreset)
                              }
                            >
                              <SelectTrigger className="border-brand-border-soft focus:border-brand-ui-primary">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {QR_PRESETS.map((preset) => (
                                  <SelectItem
                                    key={preset.value}
                                    value={preset.value}
                                  >
                                    {preset.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          {qrPreset === "url" && (
                            <div className="space-y-2">
                              <Label htmlFor="qrUrl">URL</Label>
                              <Input
                                id="qrUrl"
                                value={qrFields.url ?? ""}
                                onChange={(e) =>
                                  updateQrField("url", e.target.value)
                                }
                                placeholder="purplestock.com.br"
                                className="border-brand-border-soft focus:border-brand-ui-primary"
                              />
                            </div>
                          )}

                          {qrPreset === "text" && (
                            <div className="space-y-2">
                              <Label htmlFor="qrText">Texto</Label>
                              <Input
                                id="qrText"
                                value={qrFields.text ?? ""}
                                onChange={(e) =>
                                  updateQrField("text", e.target.value)
                                }
                                placeholder="Mensagem ou identificador"
                                className="border-brand-border-soft focus:border-brand-ui-primary"
                              />
                            </div>
                          )}

                          {qrPreset === "email" && (
                            <div className="space-y-3">
                              <div className="space-y-2">
                                <Label htmlFor="qrEmail">Email</Label>
                                <Input
                                  id="qrEmail"
                                  value={qrFields.email ?? ""}
                                  onChange={(e) =>
                                    updateQrField("email", e.target.value)
                                  }
                                  placeholder="contato@empresa.com"
                                  className="border-brand-border-soft focus:border-brand-ui-primary"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="qrSubject">Assunto</Label>
                                <Input
                                  id="qrSubject"
                                  value={qrFields.subject ?? ""}
                                  onChange={(e) =>
                                    updateQrField("subject", e.target.value)
                                  }
                                  placeholder="Opcional"
                                  className="border-brand-border-soft focus:border-brand-ui-primary"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="qrBody">Mensagem</Label>
                                <Input
                                  id="qrBody"
                                  value={qrFields.body ?? ""}
                                  onChange={(e) =>
                                    updateQrField("body", e.target.value)
                                  }
                                  placeholder="Opcional"
                                  className="border-brand-border-soft focus:border-brand-ui-primary"
                                />
                              </div>
                            </div>
                          )}

                          {(qrPreset === "phone" || qrPreset === "sms") && (
                            <div className="space-y-2">
                              <Label htmlFor="qrPhone">Telefone</Label>
                              <Input
                                id="qrPhone"
                                value={qrFields.phone ?? ""}
                                onChange={(e) =>
                                  updateQrField("phone", e.target.value)
                                }
                                placeholder="+55 11 99999-0000"
                                className="border-brand-border-soft focus:border-brand-ui-primary"
                              />
                            </div>
                          )}

                          {qrPreset === "sms" && (
                            <div className="space-y-2">
                              <Label htmlFor="qrMessage">Mensagem SMS</Label>
                              <Input
                                id="qrMessage"
                                value={qrFields.message ?? ""}
                                onChange={(e) =>
                                  updateQrField("message", e.target.value)
                                }
                                placeholder="Texto pré-preenchido"
                                className="border-brand-border-soft focus:border-brand-ui-primary"
                              />
                            </div>
                          )}

                          {qrPreset === "wifi" && (
                            <div className="space-y-3">
                              <div className="space-y-2">
                                <Label htmlFor="qrSsid">
                                  Nome da rede (SSID)
                                </Label>
                                <Input
                                  id="qrSsid"
                                  value={qrFields.ssid ?? ""}
                                  onChange={(e) =>
                                    updateQrField("ssid", e.target.value)
                                  }
                                  placeholder="WiFi da loja"
                                  className="border-brand-border-soft focus:border-brand-ui-primary"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="qrPassword">Senha</Label>
                                <Input
                                  id="qrPassword"
                                  type="password"
                                  value={qrFields.password ?? ""}
                                  onChange={(e) =>
                                    updateQrField("password", e.target.value)
                                  }
                                  placeholder="Senha da rede"
                                  className="border-brand-border-soft focus:border-brand-ui-primary"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="qrSecurity">Segurança</Label>
                                <Select
                                  value={qrFields.security ?? "WPA"}
                                  onValueChange={(value) =>
                                    updateQrField(
                                      "security",
                                      value as QrPresetInput["security"]
                                    )
                                  }
                                >
                                  <SelectTrigger className="border-brand-border-soft focus:border-brand-ui-primary">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="WPA">
                                      WPA / WPA2
                                    </SelectItem>
                                    <SelectItem value="WEP">WEP</SelectItem>
                                    <SelectItem value="nopass">
                                      Aberta
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}

                          {effectiveQrPayload && (
                            <p className="rounded-lg border border-brand-border-soft bg-brand-surface-soft/70 px-3 py-2 text-xs text-slate-600 break-all">
                              <span className="font-medium text-brand-ink">
                                Conteúdo gerado:
                              </span>{" "}
                              {effectiveQrPayload}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Barcode Type - Only show for barcodes */}
                      {generatorType === "barcode" && (
                        <div className="space-y-2">
                          <Label htmlFor="barcodeType">
                            {t.configuration.type}
                          </Label>
                          <Select
                            value={barcodeType}
                            onValueChange={(value) => {
                              setBarcodeType(value);
                              setBarcodeData((current) =>
                                sanitizeBarcodeInput(
                                  value as BarcodeFormat,
                                  current
                                )
                              );
                              setGenerationError(null);
                            }}
                          >
                            <SelectTrigger className="border-brand-border-soft focus:border-brand-ui-primary">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {BARCODE_TYPES.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  <div>
                                    <div className="font-medium">
                                      {type.label}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                      {type.description}
                                    </div>
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
                          <Label htmlFor="qrErrorCorrection">
                            Correção de Erro
                          </Label>
                          <Select
                            value={qrErrorCorrection}
                            onValueChange={(value) =>
                              setQrErrorCorrection(
                                value as QRCodeErrorCorrectionLevel
                              )
                            }
                          >
                            <SelectTrigger className="border-brand-border-soft focus:border-brand-ui-primary">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {QR_ERROR_CORRECTION_LEVELS.map((level) => (
                                <SelectItem
                                  key={level.value}
                                  value={level.value}
                                >
                                  <div>
                                    <div className="font-medium">
                                      {level.label}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                      {level.description}
                                    </div>
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
                          {generatorType === "barcode"
                            ? t.configuration.size
                            : "Tamanho"}
                        </Label>
                        {generatorType === "barcode" ? (
                          <Select
                            value={barcodeSize}
                            onValueChange={setBarcodeSize}
                          >
                            <SelectTrigger className="border-brand-border-soft focus:border-brand-ui-primary">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {BARCODE_SIZE_OPTIONS.map((size) => (
                                <SelectItem key={size.value} value={size.value}>
                                  <div>
                                    <div className="font-medium">
                                      {size.label}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                      {size.dimensions}
                                    </div>
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
                              onChange={(e) =>
                                setQrSize(Number(e.target.value))
                              }
                              className="w-full"
                            />
                            <div className="text-sm text-slate-500">
                              {qrSize}x{qrSize}px
                            </div>
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
                              onChange={(e) =>
                                setLineWidth(Number(e.target.value))
                              }
                              className="w-full"
                            />
                            <div className="text-sm text-slate-500">
                              {lineWidth}px
                            </div>
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
                              onChange={(e) =>
                                setHeight(Number(e.target.value))
                              }
                              className="w-full"
                            />
                            <div className="text-sm text-slate-500">
                              {height}px
                            </div>
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
                              onChange={(e) =>
                                setFontSize(Number(e.target.value))
                              }
                              className="w-full"
                            />
                            <div className="text-sm text-slate-500">
                              {fontSize}px
                            </div>
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
                            onChange={(e) =>
                              setQrMargin(Number(e.target.value))
                            }
                            className="w-full"
                          />
                          <div className="text-sm text-slate-500">
                            {qrMargin} módulos
                          </div>
                        </div>
                      )}

                      {/* Colors */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="codeColor">
                            {generatorType === "barcode"
                              ? t.configuration.barcodeColor
                              : "Cor do QR Code"}
                          </Label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              id="codeColor"
                              value={
                                generatorType === "barcode"
                                  ? barcodeColor
                                  : qrColor
                              }
                              onChange={(e) => {
                                if (generatorType === "barcode") {
                                  setBarcodeColor(e.target.value);
                                } else {
                                  setQrColor(e.target.value);
                                }
                              }}
                              className="w-10 h-10 rounded border border-brand-border-soft cursor-pointer"
                            />
                            <Input
                              value={
                                generatorType === "barcode"
                                  ? barcodeColor
                                  : qrColor
                              }
                              onChange={(e) => {
                                if (generatorType === "barcode") {
                                  setBarcodeColor(e.target.value);
                                } else {
                                  setQrColor(e.target.value);
                                }
                              }}
                              className="flex-1 border-brand-border-soft focus:border-brand-ui-primary"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="backgroundColor">
                            {t.configuration.backgroundColor}
                          </Label>
                          <div className="flex items-center gap-2">
                            <input
                              type="color"
                              id="backgroundColor"
                              value={
                                generatorType === "barcode"
                                  ? backgroundColor
                                  : qrBackgroundColor
                              }
                              onChange={(e) => {
                                if (generatorType === "barcode") {
                                  setBackgroundColor(e.target.value);
                                } else {
                                  setQrBackgroundColor(e.target.value);
                                }
                              }}
                              className="w-10 h-10 rounded border border-brand-border-soft cursor-pointer"
                            />
                            <Input
                              value={
                                generatorType === "barcode"
                                  ? backgroundColor
                                  : qrBackgroundColor
                              }
                              onChange={(e) => {
                                if (generatorType === "barcode") {
                                  setBackgroundColor(e.target.value);
                                } else {
                                  setQrBackgroundColor(e.target.value);
                                }
                              }}
                              className="flex-1 border-brand-border-soft focus:border-brand-ui-primary"
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
                              className="rounded border-brand-border-soft text-brand-ui-primary focus:ring-brand-ui-primary"
                            />
                            <Label htmlFor="showText">
                              {t.configuration.showText}
                            </Label>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="space-y-3 pt-4">
                        {generationError && (
                          <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                            {generationError}
                          </p>
                        )}

                        <Button
                          onClick={generateCode}
                          disabled={
                            isGenerating ||
                            (generatorType === "barcode" &&
                              !barcodeValidation.valid)
                          }
                          variant="outline"
                          className="ps-btn-outline w-full"
                        >
                          <RefreshCw
                            className={`mr-2 h-4 w-4 ${isGenerating ? "animate-spin" : ""}`}
                          />
                          {isGenerating ? "Gerando..." : "Regenerar"}
                        </Button>
                        <Button
                          onClick={downloadCode}
                          className="ps-btn-primary w-full"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          {t.actions.download}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={copyCode}
                          className="ps-btn-outline w-full"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copiar
                        </Button>
                        {copyFeedback && (
                          <p className="text-center text-xs text-emerald-700">
                            {copyFeedback}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Preview and Information */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Code Preview */}
                  <Card className="ps-card border-brand-border-soft shadow-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-brand-ink">
                        {generatorType === "barcode" ? (
                          <BarChart3 className="h-5 w-5 text-brand-ui-primary" />
                        ) : (
                          <QrCode className="h-5 w-5 text-brand-ui-primary" />
                        )}
                        {t.preview.title}
                      </CardTitle>
                      <CardDescription>{t.preview.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center space-y-6">
                        <div className="flex min-h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-brand-border-soft bg-brand-surface-soft/60 p-8">
                          {(generatorType === "barcode" &&
                            barcodeData &&
                            barcodeValidation.valid) ||
                          (generatorType === "qr" && effectiveQrPayload) ? (
                            <canvas
                              ref={canvasRef}
                              className="h-auto max-w-full rounded-lg border border-brand-border-soft"
                              style={{
                                backgroundColor:
                                  generatorType === "barcode"
                                    ? backgroundColor
                                    : qrBackgroundColor,
                              }}
                            />
                          ) : (
                            <div className="text-center text-slate-500">
                              {generatorType === "barcode" ? (
                                <BarChart3 className="mx-auto mb-2 h-16 w-16 text-slate-300" />
                              ) : (
                                <QrCode className="mx-auto mb-2 h-16 w-16 text-slate-300" />
                              )}
                              <p>{t.preview.enterData}</p>
                            </div>
                          )}
                        </div>

                        {((generatorType === "barcode" &&
                          barcodeData &&
                          barcodeValidation.valid) ||
                          (generatorType === "qr" && effectiveQrPayload)) && (
                          <div className="space-y-2 text-center">
                            <p className="text-sm text-slate-600">
                              <strong>Tipo:</strong>{" "}
                              {generatorType === "barcode"
                                ? "Código de Barras"
                                : "QR Code"}
                            </p>
                            <p className="text-sm text-slate-600">
                              <strong>Dados:</strong>{" "}
                              {generatorType === "barcode"
                                ? resolvedBarcodeValue
                                : effectiveQrPayload}
                            </p>
                            {generatorType === "barcode" ? (
                              <p className="text-sm text-slate-600">
                                <strong>Formato:</strong>{" "}
                                {
                                  BARCODE_TYPES.find(
                                    (t) => t.value === barcodeType
                                  )?.label
                                }
                              </p>
                            ) : (
                              <p className="text-sm text-slate-600">
                                <strong>Tamanho:</strong> {qrSize}x{qrSize}px
                              </p>
                            )}
                            {generatorType === "barcode" && (
                              <p className="text-sm text-slate-600">
                                <strong>Dimensões:</strong>{" "}
                                {
                                  BARCODE_SIZE_OPTIONS.find(
                                    (s) => s.value === barcodeSize
                                  )?.dimensions
                                }
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Information Tabs */}
                  <Card className="ps-card border-brand-border-soft shadow-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-brand-ink">
                        <Info className="h-5 w-5 text-brand-ui-primary" />
                        {t.information.title}
                      </CardTitle>
                      <CardDescription>
                        {t.information.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="formats" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-brand-surface-soft">
                          <TabsTrigger value="formats">
                            {generatorType === "barcode"
                              ? "Formatos"
                              : "Tipos de QR"}
                          </TabsTrigger>
                          <TabsTrigger value="usage">
                            {t.information.usage.title}
                          </TabsTrigger>
                          <TabsTrigger value="tips">
                            {t.information.tips.title}
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="formats" className="mt-6">
                          <div className="space-y-4">
                            {generatorType === "barcode"
                              ? // Barcode formats
                                BARCODE_TYPES.map((type) => (
                                  <div
                                    key={type.value}
                                    className="flex items-start gap-3 rounded-lg border border-brand-border-soft p-3"
                                  >
                                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-ui-primary"></div>
                                    <div>
                                      <h4 className="font-medium text-brand-ink">
                                        {type.label}
                                      </h4>
                                      <p className="text-sm text-slate-600">
                                        {type.description}
                                      </p>
                                      <p className="mt-1 text-xs text-slate-500">
                                        {t.information.formats[
                                          type.value as keyof typeof t.information.formats
                                        ] ?? t.information.formats.default}
                                      </p>
                                    </div>
                                  </div>
                                ))
                              : // QR Code types
                                [
                                  {
                                    title: "URL",
                                    description:
                                      "Links para websites, redes sociais e aplicativos",
                                  },
                                  {
                                    title: "Texto",
                                    description:
                                      "Mensagens, notas e informações estáticas",
                                  },
                                  {
                                    title: "Contato (vCard)",
                                    description:
                                      "Informações de contato para agenda",
                                  },
                                  {
                                    title: "Email",
                                    description:
                                      "Endereços de email com assunto e corpo",
                                  },
                                  {
                                    title: "Telefone",
                                    description:
                                      "Números de telefone para ligação direta",
                                  },
                                  {
                                    title: "SMS",
                                    description:
                                      "Mensagens de texto pré-formatadas",
                                  },
                                  {
                                    title: "WiFi",
                                    description: "Configurações de rede WiFi",
                                  },
                                  {
                                    title: "Localização",
                                    description: "Coordenadas GPS e endereços",
                                  },
                                ].map((type, index) => (
                                  <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-lg border border-brand-border-soft p-3"
                                  >
                                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-ui-primary"></div>
                                    <div>
                                      <h4 className="font-medium text-brand-ink">
                                        {type.title}
                                      </h4>
                                      <p className="text-sm text-slate-600">
                                        {type.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="usage" className="mt-6">
                          <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="ps-proof-card p-4">
                                <h4 className="mb-2 font-medium text-brand-ink">
                                  {t.information.usage.retail.title}
                                </h4>
                                <p className="text-sm text-slate-600">
                                  {t.information.usage.retail.description}
                                </p>
                              </div>
                              <div className="rounded-lg border border-brand-border-soft bg-brand-surface-soft/80 p-4">
                                <h4 className="mb-2 font-medium text-brand-ink">
                                  {t.information.usage.logistics.title}
                                </h4>
                                <p className="text-sm text-slate-600">
                                  {t.information.usage.logistics.description}
                                </p>
                              </div>
                              <div className="rounded-lg border border-brand-border-soft bg-brand-surface-soft/80 p-4">
                                <h4 className="mb-2 font-medium text-brand-ink">
                                  {t.information.usage.healthcare.title}
                                </h4>
                                <p className="text-sm text-slate-600">
                                  {t.information.usage.healthcare.description}
                                </p>
                              </div>
                              <div className="ps-callout p-4">
                                <h4 className="mb-2 font-medium text-brand-link-blue">
                                  {t.information.usage.manufacturing.title}
                                </h4>
                                <p className="text-sm text-slate-600">
                                  {
                                    t.information.usage.manufacturing
                                      .description
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="tips" className="mt-6">
                          <div className="space-y-4">
                            {generatorType === "barcode"
                              ? // Barcode tips
                                t.information.tips.items.map(
                                  (
                                    tip: { title: string; description: string },
                                    index: number
                                  ) => (
                                    <div
                                      key={index}
                                      className="flex items-start gap-3 rounded-lg border border-brand-border-soft p-3"
                                    >
                                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-ui-primary/10 text-sm font-medium text-brand-ui-primary">
                                        {index + 1}
                                      </div>
                                      <div>
                                        <h4 className="font-medium text-brand-ink">
                                          {tip.title}
                                        </h4>
                                        <p className="text-sm text-slate-600">
                                          {tip.description}
                                        </p>
                                      </div>
                                    </div>
                                  )
                                )
                              : // QR Code tips
                                [
                                  {
                                    title: "Escolha o tamanho correto",
                                    description:
                                      "Use tamanhos maiores para impressão e menores para uso digital",
                                  },
                                  {
                                    title: "Configure a correção de erro",
                                    description:
                                      "Use correção alta (H) para impressão e baixa (L) para uso digital",
                                  },
                                  {
                                    title: "Teste antes de usar",
                                    description:
                                      "Sempre teste o QR code com diferentes leitores antes da implementação",
                                  },
                                  {
                                    title: "Mantenha contraste",
                                    description:
                                      "Use cores contrastantes para melhor legibilidade",
                                  },
                                ].map((tip, index) => (
                                  <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-lg border border-brand-border-soft p-3"
                                  >
                                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-ui-primary/10 text-sm font-medium text-brand-ui-primary">
                                      {index + 1}
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-brand-ink">
                                        {tip.title}
                                      </h4>
                                      <p className="text-sm text-slate-600">
                                        {tip.description}
                                      </p>
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
        </div>
      </main>

      <section className="relative z-[1] border-t border-brand-border-soft bg-white/80 px-4 py-10 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="ps-display mb-3 text-xl font-semibold text-brand-ink md:text-2xl">
            {language === "pt"
              ? "Use código de barras no estoque de verdade"
              : language === "fr"
                ? "Utilisez les codes-barres en stock"
                : "Use barcodes in real inventory ops"}
          </h2>
          <p className="mb-5 text-sm text-slate-600 md:text-base">
            {language === "pt"
              ? "Gerou a etiqueta? Veja como implantar código de barras no almoxarifado e no dia a dia da operação."
              : language === "fr"
                ? "Étiquette prête ? Découvrez comment déployer le code-barres en entrepôt."
                : "Label ready? See how to roll barcodes into warehouse workflows."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <Link
              href="/blog/codigo-de-barras-no-estoque-como-implementar"
              className="rounded-full border border-brand-border-soft bg-white px-4 py-2 text-brand-ui-primary transition hover:border-brand-ui-primary"
            >
              {language === "pt"
                ? "Como implementar código de barras"
                : "How to implement barcodes"}
            </Link>
            <Link
              href="/blog/checklist-codigo-barras-pme"
              className="rounded-full border border-brand-border-soft bg-white px-4 py-2 text-brand-ui-primary transition hover:border-brand-ui-primary"
            >
              {language === "pt"
                ? "Checklist código de barras para PME"
                : "Barcode checklist for SMBs"}
            </Link>
          </div>
        </div>
      </section>

      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}
