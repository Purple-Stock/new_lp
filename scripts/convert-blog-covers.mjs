import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SLUGS = [
  "como-usar-qr-code-controle-estoque",
  "como-implantar-qr-code-no-almoxarifado",
  "rastreabilidade-de-estoque-com-qr-code",
  "organizar-almoxarifado-qr-code",
  "inventario-rotativo-como-fazer",
  "codigo-de-barras-no-estoque-como-implementar",
  "checklist-codigo-barras-pme",
  "sistema-de-estoque-vs-planilha-excel-2026",
  "planilha-de-estoque-vs-app",
  "aplicativo-para-controle-de-estoque",
  "como-fazer-inventario-ciclico",
  "como-reduzir-ruptura-de-estoque",
  "erros-comuns-no-almoxarifado",
  "sistema-de-almoxarifado-para-pme",
  "controle-de-almoxarifado-excel-vs-sistema",
  "estoque-fisico-nao-bate-com-sistema",
  "sistema-de-almoxarifado-como-escolher",
  "reducao-ruptura-estoque",
  "indicadores-essenciais-estoque",
  "como-aumentar-acuracidade-de-estoque",
  "como-escolher-sistema-de-estoque-2026",
  "erp-para-estoque-quando-usar",
  "open-erp-o-que-e-e-quando-usar",
  "sistema-pcp-para-industria-como-implementar",
  "sistemas-de-almoxarifado-comparativo-para-pme",
  "software-para-inventario-de-estoque",
  "guia-completo-sistema-de-estoque",
  "vmi-vs-estoque-proprio-comparativo",
  "estoque-terceirizado-3pl-guia-completo",
];

const DOWNLOADS = path.resolve(process.env.HOME ?? "", "Downloads");
const OUT_DIR = path.resolve("public/images/blog/covers");
const FALLBACK_3PL = path.resolve("public/images/warehouse-control.png");

const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 750; // 16:10
const MAX_BYTES = 120 * 1024;

function findSource(slug) {
  if (!fs.existsSync(DOWNLOADS)) return null;
  const entries = fs.readdirSync(DOWNLOADS);
  const normalized = slug.toLowerCase();
  const matches = entries
    .filter((name) => {
      const lower = name.toLowerCase();
      return lower.startsWith(normalized) && /\.(png|jpe?g|webp)$/i.test(lower);
    })
    .map((name) => path.join(DOWNLOADS, name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);

  return matches[0] ?? null;
}

async function encodeCover(inputPath, outputPath) {
  let quality = 82;
  let buffer;

  for (let attempt = 0; attempt < 8; attempt++) {
    buffer = await sharp(inputPath)
      .rotate()
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: "cover",
        position: "centre",
      })
      .webp({ quality, effort: 6 })
      .toBuffer();

    if (buffer.length <= MAX_BYTES || quality <= 58) break;
    quality -= 4;
  }

  fs.writeFileSync(outputPath, buffer);
  return { bytes: buffer.length, quality };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const report = [];

  for (const slug of SLUGS) {
    const outFile = path.join(OUT_DIR, `${slug}.webp`);
    let source = findSource(slug);
    let note = "";

    if (!source && slug === "estoque-terceirizado-3pl-guia-completo") {
      source = FALLBACK_3PL;
      note = "fallback: warehouse-control.png (capa dedicada ainda não gerada)";
    }

    if (!source) {
      report.push({ slug, status: "MISSING", note });
      continue;
    }

    const { bytes, quality } = await encodeCover(source, outFile);
    report.push({
      slug,
      status: "OK",
      source: path.basename(source),
      kb: Math.round(bytes / 1024),
      quality,
      note,
    });
  }

  console.log(JSON.stringify(report, null, 2));
  const missing = report.filter((r) => r.status !== "OK");
  if (missing.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
