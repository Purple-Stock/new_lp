import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const CORNERSTONE_SLUGS = [
  "inventario-fisico-passo-a-passo-2026",
  "abc-curva-abc-estoque-pme",
];

test("Sobre page links to cornerstone blog posts", () => {
  const source = readFileSync(
    join(process.cwd(), "app/sobre/page.tsx"),
    "utf8"
  );

  assert.match(source, /Leia também/);

  for (const slug of CORNERSTONE_SLUGS) {
    assert.match(source, new RegExp(`/blog/${slug}`));
  }
});
