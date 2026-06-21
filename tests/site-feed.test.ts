import test from "node:test";
import assert from "node:assert/strict";
import {
  BLOG_RSS_PATH,
  getBlogRssFeedHref,
  getBlogRssFeedTitle,
} from "../lib/site-feed";

test("blog RSS feed helpers expose stable path and absolute URL", () => {
  assert.equal(BLOG_RSS_PATH, "/feed.xml");
  assert.equal(getBlogRssFeedTitle(), "Purple Stock Blog RSS");
  assert.equal(
    getBlogRssFeedHref("https://www.purplestock.com.br"),
    "https://www.purplestock.com.br/feed.xml"
  );
});
