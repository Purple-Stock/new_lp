const test = require("node:test");
const assert = require("node:assert/strict");

const {
  analyzeSitemapXml,
  analyzeLlmsContent,
} = require("../scripts/lib/validators");

test("analyzeSitemapXml finds urls, duplicates and invalid metadata", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>https://example.com/about</loc>
    <priority>1.1</priority>
    <changefreq>sometimes</changefreq>
  </url>
  <url>
    <loc>https://example.com/about</loc>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>
</urlset>`;

  const result = analyzeSitemapXml(xml);

  assert.equal(result.urls.length, 3);
  assert.deepEqual(result.duplicates, ["https://example.com/about"]);
  assert.deepEqual(result.invalidPriorities, ["1.1"]);
  assert.deepEqual(result.invalidChangeFreqs, ["sometimes"]);
  assert.equal(result.uniqueUrlCount, 2);
});

test("analyzeLlmsContent checks required sections, features and industries", () => {
  const content = `# Purple Stock

## Sobre
Plataforma avançada de gestão de estoque com Next.js e React.

## Funcionalidades Principais
- [Controle](https://example.com/features/inventory-control)
- [App](https://example.com/features/inventory-app)

## Indústrias Atendidas
- [Construção](https://example.com/industrias/construction)

## Artigos e Conteúdo
## Informações Técnicas
## Tecnologias
## Suporte e Contato
`;

  const result = analyzeLlmsContent(content);

  assert.equal(result.headers, 8);
  assert.equal(result.sections, 7);
  assert.equal(result.links.length, 3);
  assert.equal(result.hasDescription, true);
  assert.equal(result.hasTechInfo, true);
  assert.equal(result.hasIndustryContext, true);
  assert.equal(result.missingSections.length, 1);
  assert.deepEqual(result.missingSections, ["Recursos e Ferramentas"]);
  assert.equal(result.missingFeatures.includes("qr-code-management"), true);
  assert.equal(result.missingIndustries.includes("retail"), true);
});
