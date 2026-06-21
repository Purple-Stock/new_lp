import test from "node:test";
import assert from "node:assert/strict";
import { analyzeLlmsContent } from "../scripts/lib/validators";

test("llms route content passes required sections", async () => {
  const { GET } = await import("../app/llms.txt/route");
  const response = await GET();
  const content = await response.text();
  const result = analyzeLlmsContent(content);

  assert.equal(
    result.missingSections.length,
    0,
    result.missingSections.join(", ")
  );
});
