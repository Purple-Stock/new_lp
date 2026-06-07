import assert from "node:assert/strict";
import test from "node:test";

import {
  buildAppUrl,
  getAppLoginUrl,
  getAppSignupUrl,
  getAppUrl,
} from "../lib/app";

const originalAppUrl = process.env.NEXT_PUBLIC_APP_URL;

test.after(() => {
  if (originalAppUrl === undefined) {
    delete process.env.NEXT_PUBLIC_APP_URL;
  } else {
    process.env.NEXT_PUBLIC_APP_URL = originalAppUrl;
  }
});

test("getAppUrl uses default gestaobem URL", () => {
  delete process.env.NEXT_PUBLIC_APP_URL;
  assert.equal(getAppUrl(), "https://app.gestaobem.com");
});

test("getAppUrl reads NEXT_PUBLIC_APP_URL", () => {
  process.env.NEXT_PUBLIC_APP_URL = "https://custom.example.com/";
  assert.equal(getAppUrl(), "https://custom.example.com");
});

test("getAppLoginUrl and getAppSignupUrl append routes", () => {
  delete process.env.NEXT_PUBLIC_APP_URL;
  assert.equal(getAppLoginUrl(), "https://app.gestaobem.com/login");
  assert.equal(getAppSignupUrl(), "https://app.gestaobem.com/sign_up");
});

test("buildAppUrl supports signup query params", () => {
  delete process.env.NEXT_PUBLIC_APP_URL;
  assert.equal(
    buildAppUrl("sign_up", {
      utm_source: "site",
      utm_medium: "organic",
      utm_campaign: "controle_almoxarifado",
    }),
    "https://app.gestaobem.com/sign_up?utm_source=site&utm_medium=organic&utm_campaign=controle_almoxarifado"
  );
});
