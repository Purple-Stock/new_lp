import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

function source(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), "utf8");
}

test("signup CTAs fire signup_started", () => {
  const files = [
    "components/desktop-landing-hero.tsx",
    "components/navbar.tsx",
    "components/barcode-download-bridge.tsx",
    "components/blog-post-cta.tsx",
    "components/product-money-cta.tsx",
    "app/precos/page.tsx",
    "components/barcode-tool-seo-footer.tsx",
  ];

  for (const file of files) {
    const contents = source(file);
    assert.match(
      contents,
      /trackSignupStarted/,
      `${file} should fire signup_started`
    );
  }
});
