/**
 * Layout math for the public barcode print sheet (A4 / 60x40 thermal).
 * CSV in, cells out — the generator UI only renders.
 */

export const MAX_LABEL_SHEET_ROWS = 80;

export type LabelSheetPage = "a4";

export type LabelSheetTemplateId = "a4-2x7" | "a4-3x8" | "thermal-60x40";

export type LabelSheetTemplate = {
  id: LabelSheetTemplateId;
  name: string;
  page: LabelSheetPage;
  columns: number;
  rows: number;
  labelWidthMm: number;
  labelHeightMm: number;
  marginTopMm: number;
  marginLeftMm: number;
  gapXMm: number;
  gapYMm: number;
};

export type LabelRow = {
  sku: string;
  name: string;
};

export type LabelCell = {
  index: number;
  page: number;
  col: number;
  row: number;
};

export const LABEL_SHEET_TEMPLATES: LabelSheetTemplate[] = [
  {
    id: "a4-2x7",
    name: "A4 2×7 (Pimaco ~90×38 mm)",
    page: "a4",
    columns: 2,
    rows: 7,
    labelWidthMm: 96,
    labelHeightMm: 38,
    marginTopMm: 10,
    marginLeftMm: 8,
    gapXMm: 2,
    gapYMm: 2,
  },
  {
    id: "a4-3x8",
    name: "A4 3×8 (adesivo ~64×34 mm)",
    page: "a4",
    columns: 3,
    rows: 8,
    labelWidthMm: 64,
    labelHeightMm: 34,
    marginTopMm: 8,
    marginLeftMm: 7,
    gapXMm: 2,
    gapYMm: 2,
  },
  {
    id: "thermal-60x40",
    name: "Térmica 60×40 mm (Zebra)",
    page: "a4",
    columns: 1,
    rows: 7,
    labelWidthMm: 60,
    labelHeightMm: 40,
    marginTopMm: 8,
    marginLeftMm: 8,
    gapXMm: 0,
    gapYMm: 2,
  },
];

const HEADER_CELLS = new Set([
  "sku",
  "codigo",
  "código",
  "code",
  "ean",
  "barcode",
]);

function detectDelimiter(line: string): "," | ";" | "\t" {
  const comma = (line.match(/,/g) ?? []).length;
  const semi = (line.match(/;/g) ?? []).length;
  const tab = (line.match(/\t/g) ?? []).length;
  if (tab >= comma && tab >= semi && tab > 0) {
    return "\t";
  }
  if (semi > comma) {
    return ";";
  }
  return ",";
}

function splitCsvLine(line: string, delimiter: "," | ";" | "\t"): string[] {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      index += 1;
      continue;
    }
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === delimiter && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current.trim());
  return cells;
}

function isHeaderRow(cells: string[]): boolean {
  const first = (cells[0] ?? "").toLowerCase();
  return HEADER_CELLS.has(first);
}

export function parseLabelCsv(text: string): LabelRow[] {
  const rawLines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (rawLines.length === 0) {
    throw new Error(
      `Nenhuma linha com SKU. Recebido: ${JSON.stringify(text)} (esperado CSV sku,nome).`
    );
  }

  const delimiter = detectDelimiter(rawLines[0] ?? "");
  const start = isHeaderRow(splitCsvLine(rawLines[0] ?? "", delimiter)) ? 1 : 0;
  const rows: LabelRow[] = [];

  for (const line of rawLines.slice(start)) {
    const cells = splitCsvLine(line, detectDelimiter(line));
    const sku = (cells[0] ?? "").trim();
    if (!sku) {
      continue;
    }
    rows.push({ sku, name: (cells[1] ?? "").trim() });
    if (rows.length >= MAX_LABEL_SHEET_ROWS) {
      break;
    }
  }

  if (rows.length === 0) {
    throw new Error(
      `Nenhuma linha com SKU. Recebido: ${JSON.stringify(text)} (esperado CSV sku,nome).`
    );
  }

  return rows;
}

export function getLabelSheetTemplate(id: string): LabelSheetTemplate {
  const template = LABEL_SHEET_TEMPLATES.find((item) => item.id === id);
  if (!template) {
    const known = LABEL_SHEET_TEMPLATES.map((item) => item.id).join(", ");
    throw new Error(
      `Template de folha desconhecido: ${JSON.stringify(id)} (esperado ${known}).`
    );
  }
  return template;
}

export function layoutLabelCells(
  template: LabelSheetTemplate,
  count: number
): LabelCell[] {
  const perPage = template.columns * template.rows;
  return Array.from({ length: count }, (_, index) => {
    const page = Math.floor(index / perPage);
    const onPage = index % perPage;
    return {
      index,
      page,
      col: onPage % template.columns,
      row: Math.floor(onPage / template.columns),
    };
  });
}
