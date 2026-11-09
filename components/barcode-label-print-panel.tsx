"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import JsBarcode from "jsbarcode";
import { APP_SIGNUP_URL } from "@/lib/app-urls";
import {
  LABEL_SHEET_TEMPLATES,
  getLabelSheetTemplate,
  layoutLabelCells,
  parseLabelCsv,
  type LabelRow,
  type LabelSheetTemplateId,
} from "@/lib/barcode-label-sheet";
import { TEAM_PLAN_TRIAL_DAYS } from "@/lib/pricing";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SAMPLE_CSV = `sku,nome
LED-50,Par LED 50
CAM-A7,Sony A7
MIC-01,Shure SM58
CAB-XLR,Cabo XLR 10m`;

function LabelBarcodeMark({ sku }: { sku: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    try {
      JsBarcode(ref.current, sku, {
        format: "CODE128",
        displayValue: true,
        fontSize: 10,
        margin: 2,
        height: 36,
        width: 1.1,
        background: "#ffffff",
        lineColor: "#111111",
      });
    } catch {
      ref.current.replaceChildren();
    }
  }, [sku]);

  return <svg ref={ref} role="img" aria-label={sku} className="h-16 w-full" />;
}

export function BarcodeLabelPrintPanel() {
  const [csv, setCsv] = useState(SAMPLE_CSV);
  const [templateId, setTemplateId] = useState<LabelSheetTemplateId>("a4-2x7");

  const parsed = useMemo(() => {
    try {
      return { rows: parseLabelCsv(csv), error: "" };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "CSV sem SKU válido.";
      return { rows: [] as LabelRow[], error: message };
    }
  }, [csv]);

  const template = getLabelSheetTemplate(templateId);
  const cells = layoutLabelCells(template, parsed.rows.length);
  const pageCount = (cells.at(-1)?.page ?? 0) + (parsed.rows.length ? 1 : 0);
  const pages = Array.from({ length: pageCount }, (_, page) =>
    cells.filter((cell) => cell.page === page)
  );

  function printSheet() {
    const root = document.getElementById("imprimir");
    if (root) {
      root.setAttribute("data-printed", "1");
    }
    window.print();
  }

  return (
    <section
      id="imprimir"
      data-row-count={parsed.rows.length}
      data-template={templateId}
      className="relative z-[1] border-t border-brand-border-soft bg-white px-4 py-12 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="barcode-print-controls">
          <h2 className="ps-display text-xl font-semibold text-brand-ink md:text-2xl">
            Imprimir lote em folha A4 ou térmica
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Cole o CSV (sku, nome), escolha A4 2×7, A4 3×8 ou térmica 60×40 mm
            (Zebra) e imprima. Até 80 linhas. Code 128 no navegador.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Label htmlFor="label-csv">CSV do lote</Label>
              <Textarea
                id="label-csv"
                value={csv}
                onChange={(event) => setCsv(event.currentTarget.value)}
                onInput={(event) => setCsv(event.currentTarget.value)}
                rows={8}
                className="mt-2 font-mono text-sm"
                spellCheck={false}
              />
              {parsed.error ? (
                <p className="mt-2 text-sm text-red-600">{parsed.error}</p>
              ) : (
                <p className="mt-2 text-sm text-slate-500">
                  {parsed.rows.length} etiqueta(s) · {pageCount} página(s)
                </p>
              )}
            </div>
            <div className="space-y-3">
              <Label htmlFor="label-template">Folha</Label>
              <select
                id="label-template"
                value={templateId}
                onChange={(event) =>
                  setTemplateId(event.target.value as LabelSheetTemplateId)
                }
                className="mt-2 w-full rounded-md border border-brand-border-soft bg-white px-3 py-2 text-sm"
              >
                {LABEL_SHEET_TEMPLATES.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <Button
                id="print-sheet"
                type="button"
                onClick={printSheet}
                disabled={parsed.rows.length === 0}
                className="w-full"
              >
                Imprimir folha
              </Button>
              <p className="text-sm text-slate-600">
                Gerou a etiqueta? Teste {TEAM_PLAN_TRIAL_DAYS} dias no estoque
                com o mesmo código.{" "}
                <Link
                  href={APP_SIGNUP_URL}
                  className="font-semibold text-brand-ui-primary underline"
                >
                  Abrir teste grátis
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="barcode-print-sheet mt-8 space-y-8">
          {pages.map((pageCells, pageIndex) => (
            <div
              key={pageIndex}
              className="barcode-print-page relative border border-dashed border-slate-300 bg-white"
              style={{
                width: "210mm",
                minHeight: "297mm",
              }}
            >
              {pageCells.map((cell) => {
                const row = parsed.rows[cell.index];
                if (!row) {
                  return null;
                }
                return (
                  <div
                    key={cell.index}
                    className="absolute box-border overflow-hidden border border-slate-200 p-1"
                    style={{
                      left: `${template.marginLeftMm + cell.col * (template.labelWidthMm + template.gapXMm)}mm`,
                      top: `${template.marginTopMm + cell.row * (template.labelHeightMm + template.gapYMm)}mm`,
                      width: `${template.labelWidthMm}mm`,
                      height: `${template.labelHeightMm}mm`,
                    }}
                  >
                    <p className="truncate text-[10px] font-semibold text-slate-800">
                      {row.name || row.sku}
                    </p>
                    <LabelBarcodeMark sku={row.sku} />
                    <p className="truncate text-[9px] text-slate-500">
                      {row.sku}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
