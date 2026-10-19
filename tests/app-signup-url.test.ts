import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { APP_LOGIN_URL, APP_SIGNUP_URL } from "../lib/app-urls";

const HARDCODED_APP_ROOT = 'href="https://app.purplestock.com.br/"';

function source(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), "utf8");
}

test("app signup URL is the public trial destination", () => {
  assert.equal(APP_SIGNUP_URL, "https://app.purplestock.com.br/signup");
  assert.equal(APP_LOGIN_URL, "https://app.purplestock.com.br/");
});

test("home trial CTA points at signup, not app login", () => {
  const hero = source("components/desktop-landing-hero.tsx");
  assert.match(hero, /APP_SIGNUP_URL/);
  assert.doesNotMatch(hero, new RegExp(HARDCODED_APP_ROOT));
});

test("pricing, barcode footer, blog and money CTAs point at signup", () => {
  const files = [
    "app/precos/page.tsx",
    "components/barcode-tool-seo-footer.tsx",
    "components/blog-post-cta.tsx",
    "components/product-money-cta.tsx",
    "components/pre-footer-cta.tsx",
    "components/industry-detail-hero.tsx",
    "components/industry-detail-footer.tsx",
  ];

  for (const file of files) {
    const contents = source(file);
    assert.match(
      contents,
      /APP_SIGNUP_URL|buildAppSignupUrl/,
      `${file} should use the signup URL helper`
    );
    assert.doesNotMatch(
      contents,
      new RegExp(HARDCODED_APP_ROOT),
      `${file} still hardcodes app login`
    );
  }
});

test("navbar Entrar stays on app login", () => {
  const nav = source("components/navbar.tsx");
  assert.match(nav, /APP_LOGIN_URL/);
  assert.match(nav, /navbar_login/);
});
