import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getPostBySlug } from "../lib/blog";
import {
  CONSTRUCTION_CLUSTER_POSTS,
  CONSTRUCTION_INDUSTRY_HREF,
} from "../lib/construction-cluster";
import { resolveIndustryRelatedPosts } from "../lib/industry-detail-helpers";
import { getIndustrySocialProof } from "../data/industry-social-proof";
import { findGlossaryTermBySlug } from "../data/glossary";

const CONSTRUCTION_CLUSTER = [
  {
    slug: "almoxarifado-de-obra-controle-materiais-canteiro",
    title: /almoxarifado de obra/i,
    sibling: /controle-ferramentas-obra-check-in-canteiro/,
  },
  {
    slug: "controle-ferramentas-obra-check-in-canteiro",
    title: /ferramentas de obra/i,
    sibling: /transferencia-materiais-entre-canteiros/,
  },
  {
    slug: "transferencia-materiais-entre-canteiros",
    title: /canteiros/i,
    sibling: /controle-ferramentas-obra-check-in-canteiro/,
  },
] as const;

for (const item of CONSTRUCTION_CLUSTER) {
  test(`construction cluster post "${item.slug}" has SERP copy and internal links`, async () => {
    const post = await getPostBySlug(item.slug);
    assert.ok(post, `expected published post ${item.slug}`);
    assert.match(post.meta.title, item.title);
    assert.ok(
      post.meta.title.length >= 30,
      `title too short: ${post.meta.title.length}`
    );
    assert.ok(
      post.meta.title.length <= 60,
      `title too long: ${post.meta.title.length}`
    );
    assert.ok(
      post.meta.excerpt.length >= 120,
      `excerpt too short: ${post.meta.excerpt.length}`
    );
    assert.ok(
      post.meta.excerpt.length <= 160,
      `excerpt too long: ${post.meta.excerpt.length}`
    );
    assert.match(post.content, /\/industrias\/construction/);
    assert.match(post.content, item.sibling);
    assert.match(post.content, /\/glossario\/almoxarifado-de-obra/);
  });
}

test("construction cluster list has the three published guides", () => {
  assert.equal(CONSTRUCTION_CLUSTER_POSTS.length, 3);
  assert.equal(CONSTRUCTION_INDUSTRY_HREF, "/industrias/construction");
});

test("construction industry page exposes the full cluster", () => {
  const proof = getIndustrySocialProof("construction");
  const posts = resolveIndustryRelatedPosts(proof);
  const hrefs = posts.map((post) => post.href);

  assert.equal(posts.length, 3);
  for (const clusterPost of CONSTRUCTION_CLUSTER_POSTS) {
    assert.ok(hrefs.includes(clusterPost.href), clusterPost.href);
  }
});

test("resolveIndustryRelatedPosts falls back to a single related blog", () => {
  const posts = resolveIndustryRelatedPosts({
    relatedBlogHref: "/blog/exemplo",
    relatedBlogLabel: "Exemplo",
  });
  assert.deepEqual(posts, [{ href: "/blog/exemplo", label: "Exemplo" }]);
});

test("glossary almoxarifado-de-obra links the construction cluster", () => {
  const term = findGlossaryTermBySlug("almoxarifado-de-obra");
  assert.ok(term?.relatedPosts);
  const slugs = term.relatedPosts.map((post) => post.slug);
  for (const clusterPost of CONSTRUCTION_CLUSTER_POSTS) {
    assert.ok(slugs.includes(clusterPost.slug), clusterPost.slug);
  }
});

test("almoxarifado resource page links construction cluster", async () => {
  const source = await readFile(
    path.join(process.cwd(), "app/recursos/controle-de-almoxarifado/page.tsx"),
    "utf8"
  );
  assert.match(source, /CONSTRUCTION_INDUSTRY_HREF/);
  assert.match(source, /CONSTRUCTION_CLUSTER_POSTS/);
  assert.match(source, /almoxarifado de obra/);
});
