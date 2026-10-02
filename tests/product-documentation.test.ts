import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  DOCUMENTATION_LOCALES,
  getProductDocumentation,
} from "../lib/product-documentation";

const publicDir = join(process.cwd(), "public");

test("product documentation covers the six operating topics in every locale", () => {
  for (const locale of DOCUMENTATION_LOCALES) {
    const docs = getProductDocumentation(locale);
    assert.equal(docs.topics.length, 6, `${locale} should have 6 topics`);
    assert.deepEqual(
      docs.topics.map((topic) => topic.key),
      ["acesso", "equipes", "itens", "movimentos", "relatorios", "qr"]
    );
  }
});

test("every documentation topic has a screenshot, caption, and three how-to steps", () => {
  for (const locale of DOCUMENTATION_LOCALES) {
    const docs = getProductDocumentation(locale);
    for (const topic of docs.topics) {
      assert.match(
        topic.image.src,
        /^\/images\/docs\/.+\.(png|webp)$/,
        `${locale}/${topic.key} needs a docs screenshot`
      );
      assert.ok(
        topic.image.alt.length > 8,
        `${locale}/${topic.key} alt is too short`
      );
      assert.ok(
        topic.image.caption.length > 8,
        `${locale}/${topic.key} caption is too short`
      );
      assert.equal(
        topic.steps.length,
        3,
        `${locale}/${topic.key} should have 3 steps`
      );
      assert.equal(
        topic.actions.length,
        3,
        `${locale}/${topic.key} should have 3 actions`
      );
      assert.ok(
        topic.navLabel.length > 0 &&
          topic.navLabel.length <= topic.title.length,
        `${locale}/${topic.key} needs a compact nav label`
      );
      const imagePath = join(publicDir, topic.image.src.replace(/^\//, ""));
      assert.equal(
        existsSync(imagePath),
        true,
        `missing screenshot ${imagePath}`
      );
      for (const extra of topic.image.extras ?? []) {
        const extraPath = join(publicDir, extra.src.replace(/^\//, ""));
        assert.equal(existsSync(extraPath), true, `missing extra ${extraPath}`);
        assert.match(
          extra.appPath,
          /^\/[a-z0-9/_:-]+$/i,
          `${locale}/${topic.key} extra needs an app path`
        );
      }
    }
  }
});
