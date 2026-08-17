import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

test("privacy and terms routes exist and link from the footer", () => {
  const privacy = join(process.cwd(), "app/politica-de-privacidade/page.tsx");
  const terms = join(process.cwd(), "app/termos-de-uso/page.tsx");
  const footer = readFileSync(
    join(process.cwd(), "components/footer.tsx"),
    "utf8"
  );

  assert.equal(existsSync(privacy), true, `missing ${privacy}`);
  assert.equal(existsSync(terms), true, `missing ${terms}`);
  assert.match(
    readFileSync(join(process.cwd(), "lib/legal-pages.ts"), "utf8"),
    /Política de Privacidade/
  );
  assert.match(readFileSync(privacy, "utf8"), /PRIVACY_PAGE_TITLE/);
  assert.match(readFileSync(terms, "utf8"), /TERMS_PAGE_TITLE/);
  assert.match(footer, /politica-de-privacidade/);
  assert.match(footer, /termos-de-uso/);
});
