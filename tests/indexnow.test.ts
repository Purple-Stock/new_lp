import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  INDEXNOW_KEY,
  buildIndexNowPayload,
  getIndexNowKeyPath,
} from "../lib/indexnow";

test("IndexNow key file matches the published key", () => {
  const file = readFileSync(
    join(process.cwd(), "public", `${INDEXNOW_KEY}.txt`),
    "utf8"
  ).trim();
  assert.equal(file, INDEXNOW_KEY);
  assert.equal(getIndexNowKeyPath(), `/${INDEXNOW_KEY}.txt`);
});

test("buildIndexNowPayload uses www host and absolute key location", () => {
  const payload = buildIndexNowPayload("www.purplestock.com.br", [
    "https://www.purplestock.com.br/",
  ]);
  assert.equal(payload.key, INDEXNOW_KEY);
  assert.match(payload.keyLocation, /purplestock\.com\.br/);
  assert.equal(payload.urlList.length, 1);
});
