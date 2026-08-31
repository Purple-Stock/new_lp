import test from "node:test";
import assert from "node:assert/strict";
import {
  BARCODE_TOOL_PAGE_DESCRIPTION,
  BARCODE_TOOL_PAGE_TITLE,
  HOME_PAGE_DESCRIPTION,
  HOME_PAGE_DOCUMENT_TITLE,
  HOME_PAGE_TITLE,
  PRICING_PAGE_DESCRIPTION,
  PRICING_PAGE_TITLE,
} from "../lib/seo-page-copy";

test("home SERP title includes brand, avoids /time jargon, and stays short", () => {
  assert.match(HOME_PAGE_TITLE, /Purple Stock/);
  assert.doesNotMatch(HOME_PAGE_TITLE, /\/time/);
  assert.ok(
    HOME_PAGE_TITLE.length <= 60,
    `home title is ${HOME_PAGE_TITLE.length} chars: ${HOME_PAGE_TITLE}`
  );
  assert.equal(HOME_PAGE_DOCUMENT_TITLE, HOME_PAGE_TITLE);
});

test("home and pricing copy say equipe instead of SERP jargon /time", () => {
  assert.match(HOME_PAGE_DESCRIPTION, /equipe/);
  assert.doesNotMatch(HOME_PAGE_DESCRIPTION, /\/time/);
  assert.match(PRICING_PAGE_TITLE, /equipe/);
  assert.doesNotMatch(PRICING_PAGE_TITLE, /Purple Stock/);
  assert.doesNotMatch(PRICING_PAGE_TITLE, /\/time/);
  assert.match(PRICING_PAGE_DESCRIPTION, /equipe/);
});

test("barcode tool title puts EAN/QR before the brand suffix", () => {
  assert.match(BARCODE_TOOL_PAGE_TITLE, /EAN/i);
  assert.match(BARCODE_TOOL_PAGE_TITLE, /QR/i);
  assert.match(BARCODE_TOOL_PAGE_TITLE, /grátis/i);
  assert.doesNotMatch(BARCODE_TOOL_PAGE_TITLE, /Purple Stock/);
  assert.ok(
    BARCODE_TOOL_PAGE_TITLE.length <= 50,
    `barcode title is ${BARCODE_TOOL_PAGE_TITLE.length} chars`
  );
  assert.ok(BARCODE_TOOL_PAGE_DESCRIPTION.length >= 120);
  assert.ok(BARCODE_TOOL_PAGE_DESCRIPTION.length <= 160);
});
