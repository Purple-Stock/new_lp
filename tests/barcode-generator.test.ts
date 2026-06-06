import { test } from "node:test";
import assert from "node:assert/strict";
import {
  BARCODE_SIZE_OPTIONS,
  buildDownloadFilename,
  buildQrPayload,
  computeEan13CheckDigit,
  resolveBarcodeValue,
  getBarcodeCanvasDimensions,
  getQrCanvasDimensions,
  normalizeUrlForQr,
  sanitizeBarcodeInput,
  validateBarcodeData,
  type BarcodeFormat,
} from "../lib/barcode-generator";

test("validateBarcodeData accepts non-empty CODE128 values", () => {
  assert.deepEqual(validateBarcodeData("CODE128", "ABC-123"), { valid: true });
});

test("validateBarcodeData rejects empty barcode data", () => {
  assert.deepEqual(validateBarcodeData("CODE128", ""), {
    valid: false,
    error: "Informe os dados do código de barras.",
  });
});

test("validateBarcodeData requires 12 or 13 digits for EAN13", () => {
  assert.deepEqual(validateBarcodeData("EAN13", "5901234123457"), {
    valid: true,
  });
  assert.deepEqual(validateBarcodeData("EAN13", "590123412345"), {
    valid: true,
  });
  assert.deepEqual(validateBarcodeData("EAN13", "5901234"), {
    valid: false,
    error: "EAN-13 exige 12 ou 13 dígitos numéricos.",
  });
});

test("validateBarcodeData requires 7 or 8 digits for EAN8", () => {
  assert.deepEqual(validateBarcodeData("EAN8", "9638507"), { valid: true });
  assert.deepEqual(validateBarcodeData("EAN8", "12345"), {
    valid: false,
    error: "EAN-8 exige 7 ou 8 dígitos numéricos.",
  });
});

test("validateBarcodeData requires 11 or 12 digits for UPC", () => {
  assert.deepEqual(validateBarcodeData("UPC", "03600029145"), { valid: true });
  assert.deepEqual(validateBarcodeData("UPC", "036000291452"), {
    valid: true,
  });
  assert.deepEqual(validateBarcodeData("UPC", "123"), {
    valid: false,
    error: "UPC-A exige 11 ou 12 dígitos numéricos.",
  });
});

test("validateBarcodeData requires even numeric length for ITF", () => {
  assert.deepEqual(validateBarcodeData("ITF", "123456"), { valid: true });
  assert.deepEqual(validateBarcodeData("ITF", "12345"), {
    valid: false,
    error: "ITF exige quantidade par de dígitos numéricos.",
  });
});

test("sanitizeBarcodeInput keeps only digits for numeric formats", () => {
  assert.equal(sanitizeBarcodeInput("EAN13", "590-1234abc"), "5901234");
  assert.equal(sanitizeBarcodeInput("CODE128", "ABC-123"), "ABC-123");
});

test("computeEan13CheckDigit returns checksum for 12 digits", () => {
  assert.equal(computeEan13CheckDigit("590123412345"), "7");
});

test("computeEan13CheckDigit returns null for invalid length", () => {
  assert.equal(computeEan13CheckDigit("123"), null);
});

test("resolveBarcodeValue appends EAN13 check digit for 12 digits", () => {
  assert.equal(resolveBarcodeValue("EAN13", "590123412345"), "5901234123457");
});

test("resolveBarcodeValue keeps 13-digit EAN13 unchanged", () => {
  assert.equal(resolveBarcodeValue("EAN13", "5901234123457"), "5901234123457");
});

test("normalizeUrlForQr adds https when protocol is missing", () => {
  assert.equal(
    normalizeUrlForQr("purplestock.com.br"),
    "https://purplestock.com.br"
  );
  assert.equal(
    normalizeUrlForQr("https://purplestock.com.br"),
    "https://purplestock.com.br"
  );
});

test("buildQrPayload builds wifi string", () => {
  assert.equal(
    buildQrPayload("wifi", {
      ssid: "Loja WiFi",
      password: "senha123",
      security: "WPA",
    }),
    "WIFI:T:WPA;S:Loja WiFi;P:senha123;;"
  );
});

test("buildQrPayload builds mailto link", () => {
  assert.equal(
    buildQrPayload("email", {
      email: "contato@empresa.com",
      subject: "Orçamento",
      body: "Olá",
    }),
    "mailto:contato@empresa.com?subject=Or%C3%A7amento&body=Ol%C3%A1"
  );
});

test("buildQrPayload builds tel link", () => {
  assert.equal(
    buildQrPayload("phone", { phone: "+55 11 99999-0000" }),
    "tel:+5511999990000"
  );
});

test("buildDownloadFilename sanitizes unsafe characters", () => {
  assert.equal(
    buildDownloadFilename("barcode", "ABC/123:test"),
    "barcode-ABC_123_test.png"
  );
});

test("getBarcodeCanvasDimensions resolves preset size", () => {
  assert.deepEqual(getBarcodeCanvasDimensions("medium", BARCODE_SIZE_OPTIONS), {
    width: 300,
    height: 150,
  });
});

test("getQrCanvasDimensions adds padding around qr size", () => {
  assert.deepEqual(getQrCanvasDimensions(256, 50), { width: 306, height: 306 });
});
