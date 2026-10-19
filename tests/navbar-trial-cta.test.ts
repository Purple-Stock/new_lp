import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

function source(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), "utf8");
}

test("navbar shows Testar 7 dias signup before Entrar login", () => {
  const nav = source("components/navbar.tsx");

  assert.match(nav, /APP_SIGNUP_URL/);
  assert.match(nav, /navbar_trial/);
  assert.match(nav, /APP_LOGIN_URL/);
  assert.match(nav, /navbar_login/);

  const trialIdx = nav.indexOf("navbar_trial");
  const loginIdx = nav.indexOf("navbar_login");
  assert.ok(
    trialIdx >= 0 && loginIdx > trialIdx,
    "Testar 7 dias must appear before Entrar"
  );
});

test("desktop and mobile chrome both expose the trial CTA", () => {
  const nav = source("components/navbar.tsx");
  const trials = nav.match(/navbar_trial/g) ?? [];
  assert.ok(
    trials.length >= 2,
    `expected desktop + mobile trial CTAs, got ${trials.length}`
  );
});
