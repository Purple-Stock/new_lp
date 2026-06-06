export type BarcodeFormat =
  | "CODE128"
  | "CODE39"
  | "EAN13"
  | "EAN8"
  | "UPC"
  | "ITF14"
  | "CODABAR"
  | "ITF";

export type QrPreset = "url" | "text" | "email" | "phone" | "sms" | "wifi";

export type ValidationResult =
  | { valid: true }
  | { valid: false; error: string };

export type BarcodeSizeOption = {
  value: string;
  label: string;
  dimensions: string;
};

export const BARCODE_SIZE_OPTIONS: BarcodeSizeOption[] = [
  { value: "small", label: "Pequeno", dimensions: "200x100" },
  { value: "medium", label: "Médio", dimensions: "300x150" },
  { value: "large", label: "Grande", dimensions: "400x200" },
  { value: "xlarge", label: "Extra Grande", dimensions: "500x250" },
];

export type QrPresetInput = {
  url?: string;
  text?: string;
  email?: string;
  subject?: string;
  body?: string;
  phone?: string;
  message?: string;
  ssid?: string;
  password?: string;
  security?: "WPA" | "WEP" | "nopass";
};

const NUMERIC_FORMATS: BarcodeFormat[] = [
  "EAN13",
  "EAN8",
  "UPC",
  "ITF14",
  "ITF",
];

function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function sanitizeBarcodeInput(
  format: BarcodeFormat,
  data: string
): string {
  if (NUMERIC_FORMATS.includes(format)) {
    return onlyDigits(data);
  }

  return data.trim();
}

export function validateBarcodeData(
  format: BarcodeFormat,
  data: string
): ValidationResult {
  const sanitized = sanitizeBarcodeInput(format, data);

  if (!sanitized) {
    return {
      valid: false,
      error: "Informe os dados do código de barras.",
    };
  }

  if (format === "EAN13") {
    if (!/^\d{12,13}$/.test(sanitized)) {
      return {
        valid: false,
        error: "EAN-13 exige 12 ou 13 dígitos numéricos.",
      };
    }
    return { valid: true };
  }

  if (format === "EAN8") {
    if (!/^\d{7,8}$/.test(sanitized)) {
      return {
        valid: false,
        error: "EAN-8 exige 7 ou 8 dígitos numéricos.",
      };
    }
    return { valid: true };
  }

  if (format === "UPC") {
    if (!/^\d{11,12}$/.test(sanitized)) {
      return {
        valid: false,
        error: "UPC-A exige 11 ou 12 dígitos numéricos.",
      };
    }
    return { valid: true };
  }

  if (format === "ITF" || format === "ITF14") {
    if (!/^\d+$/.test(sanitized)) {
      return {
        valid: false,
        error: "ITF exige apenas dígitos numéricos.",
      };
    }

    if (sanitized.length % 2 !== 0) {
      return {
        valid: false,
        error: "ITF exige quantidade par de dígitos numéricos.",
      };
    }

    return { valid: true };
  }

  return { valid: true };
}

export function resolveBarcodeValue(
  format: BarcodeFormat,
  data: string
): string {
  const sanitized = sanitizeBarcodeInput(format, data);

  if (format === "EAN13" && sanitized.length === 12) {
    const checkDigit = computeEan13CheckDigit(sanitized);
    return checkDigit ? `${sanitized}${checkDigit}` : sanitized;
  }

  return sanitized;
}

export function computeEan13CheckDigit(twelveDigits: string): string | null {
  const digits = onlyDigits(twelveDigits);
  if (digits.length !== 12) {
    return null;
  }

  const sum = digits
    .split("")
    .map(Number)
    .reduce((total, digit, index) => {
      const multiplier = index % 2 === 0 ? 1 : 3;
      return total + digit * multiplier;
    }, 0);

  const checkDigit = (10 - (sum % 10)) % 10;
  return String(checkDigit);
}

export function normalizeUrlForQr(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export function buildQrPayload(preset: QrPreset, input: QrPresetInput): string {
  switch (preset) {
    case "url":
      return normalizeUrlForQr(input.url ?? "");
    case "text":
      return (input.text ?? "").trim();
    case "email": {
      const email = (input.email ?? "").trim();
      if (!email) {
        return "";
      }

      const params = new URLSearchParams();
      if (input.subject?.trim()) {
        params.set("subject", input.subject.trim());
      }
      if (input.body?.trim()) {
        params.set("body", input.body.trim());
      }

      const query = params.toString();
      return query ? `mailto:${email}?${query}` : `mailto:${email}`;
    }
    case "phone": {
      const phone = onlyDigits(input.phone ?? "");
      return phone ? `tel:+${phone}` : "";
    }
    case "sms": {
      const phone = onlyDigits(input.phone ?? "");
      if (!phone) {
        return "";
      }

      const message = (input.message ?? "").trim();
      return message
        ? `sms:+${phone}?body=${encodeURIComponent(message)}`
        : `sms:+${phone}`;
    }
    case "wifi": {
      const ssid = (input.ssid ?? "").trim();
      if (!ssid) {
        return "";
      }

      const security = input.security ?? "WPA";
      const password = (input.password ?? "").trim();
      return `WIFI:T:${security};S:${ssid};P:${password};;`;
    }
    default:
      return "";
  }
}

export function buildDownloadFilename(
  generatorType: "barcode" | "qr",
  data: string
): string {
  const safeData = data
    .trim()
    .replace(/[^a-zA-Z0-9-_]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 48);

  const suffix = safeData || "codigo";
  return `${generatorType}-${suffix}.png`;
}

export function getBarcodeCanvasDimensions(
  sizeKey: string,
  sizeOptions: BarcodeSizeOption[] = BARCODE_SIZE_OPTIONS
): { width: number; height: number } {
  const option = sizeOptions.find((size) => size.value === sizeKey);
  if (!option) {
    return { width: 300, height: 150 };
  }

  const [width, height] = option.dimensions.split("x").map(Number);
  return { width, height };
}

export function getQrCanvasDimensions(
  qrSize: number,
  padding = 100
): { width: number; height: number } {
  const dimension = qrSize + padding;
  return { width: dimension, height: dimension };
}
