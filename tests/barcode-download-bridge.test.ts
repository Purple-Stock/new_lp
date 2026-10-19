import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { BARCODE_DOWNLOAD_BRIDGE } from "../lib/barcode-download-bridge";
import { APP_SIGNUP_URL } from "../lib/app-urls";

function source(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), "utf8");
}

test("post-download bridge copy invites a 7-day trial without card", () => {
  assert.match(BARCODE_DOWNLOAD_BRIDGE.title, /estoque/i);
  assert.match(BARCODE_DOWNLOAD_BRIDGE.body, /7 dias/i);
  assert.match(BARCODE_DOWNLOAD_BRIDGE.body, /sem cartão/i);
  assert.match(BARCODE_DOWNLOAD_BRIDGE.trialLabel, /7 dias/i);
  assert.match(BARCODE_DOWNLOAD_BRIDGE.stickyLabel, /7 dias/i);
});

test("barcode download bridge component points at signup", () => {
  const component = source("components/barcode-download-bridge.tsx");
  assert.match(component, /APP_SIGNUP_URL/);
  assert.match(component, /BARCODE_DOWNLOAD_BRIDGE/);
  assert.match(component, /barcode_download_modal/);
  assert.match(component, /barcode_sticky_cta/);
  assert.doesNotMatch(component, /href="https:\/\/app\.purplestock\.com\.br\/"/);
});

test("barcode generator page opens the bridge after PNG download", () => {
  const page = source("app/codigo-de-barras-gratis/page.tsx");
  assert.match(page, /BarcodeDownloadBridge/);
  assert.match(page, /setBridgeOpen\(true\)/);
  assert.match(page, /downloadCode/);
});
