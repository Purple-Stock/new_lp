import test from "node:test";
import assert from "node:assert/strict";
import { getLatestPosts } from "../lib/blog";

test("getLatestPosts returns at most limit items sorted by date desc", async () => {
  const posts = await getLatestPosts(3);
  assert.ok(posts.length <= 3);
  if (posts.length >= 2) {
    const a = new Date(posts[0].date).getTime();
    const b = new Date(posts[1].date).getTime();
    assert.ok(a >= b);
  }
});
