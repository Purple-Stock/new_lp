import test from "node:test";
import assert from "node:assert/strict";
import {
  getLabelSheetTemplate,
  layoutLabelCells,
  MAX_LABEL_SHEET_ROWS,
  parseLabelCsv,
} from "../lib/barcode-label-sheet";

test("parseLabelCsv reads sku and name and skips a header row", () => {
  const rows = parseLabelCsv("sku,nome\nLED-50,Par LED 50\nCAM-A7,Sony A7");
  assert.deepEqual(rows, [
    { sku: "LED-50", name: "Par LED 50" },
    { sku: "CAM-A7", name: "Sony A7" },
  ]);
});

test("parseLabelCsv accepts tab and semicolon separators", () => {
  const rows = parseLabelCsv("LED-50\tPar LED\nCAM-A7;Sony A7");
  assert.equal(rows[0]?.sku, "LED-50");
  assert.equal(rows[1]?.sku, "CAM-A7");
  assert.equal(rows[1]?.name, "Sony A7");
});

test("parseLabelCsv keeps a sku-only line and caps the sheet", () => {
  const lines = [
    "sku,nome",
    ...Array.from({ length: 120 }, (_, index) => `SKU-${index},Item ${index}`),
  ];
  const rows = parseLabelCsv(lines.join("\n"));
  assert.equal(rows.length, MAX_LABEL_SHEET_ROWS);
  assert.equal(parseLabelCsv("LED-50\n").length, 1);
  assert.equal(parseLabelCsv("LED-50\n")[0]?.name, "");
});

test("parseLabelCsv names the empty payload in the error", () => {
  assert.throws(() => parseLabelCsv("   \n\n"), /nenhuma linha com SKU/i);
  assert.throws(() => parseLabelCsv("   \n\n"), /recebido/i);
});

test("A4 2x7 and thermal 60x40 templates fit locadora labels", () => {
  const a4 = getLabelSheetTemplate("a4-2x7");
  const thermal = getLabelSheetTemplate("thermal-60x40");
  assert.equal(a4.columns, 2);
  assert.equal(a4.rows, 7);
  assert.equal(a4.page, "a4");
  assert.equal(thermal.columns, 1);
  assert.ok(thermal.labelWidthMm >= 50);
  assert.ok(thermal.labelHeightMm >= 30);
});

test("getLabelSheetTemplate names the unknown id", () => {
  assert.throws(() => getLabelSheetTemplate("avery-xyz"), /avery-xyz/);
  assert.throws(() => getLabelSheetTemplate("avery-xyz"), /a4-2x7/);
});

test("layoutLabelCells paginates past one 2x7 sheet", () => {
  const template = getLabelSheetTemplate("a4-2x7");
  const cells = layoutLabelCells(template, 15);
  assert.equal(cells.length, 15);
  assert.equal(cells[0]?.page, 0);
  assert.equal(cells[0]?.col, 0);
  assert.equal(cells[0]?.row, 0);
  assert.equal(cells[13]?.page, 0);
  assert.equal(cells[13]?.col, 1);
  assert.equal(cells[13]?.row, 6);
  assert.equal(cells[14]?.page, 1);
  assert.equal(cells[14]?.col, 0);
  assert.equal(cells[14]?.row, 0);
});
