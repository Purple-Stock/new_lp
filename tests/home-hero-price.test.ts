import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT } from "../lib/pricing";

test("home hero shows the advertised team price", () => {
  const source = readFileSync(
    join(process.cwd(), "components/desktop-landing-hero.tsx"),
    "utf8"
  );

  assert.match(source, /TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT|R\$ 59/);
  assert.match(source, /por equipe/);
  assert.match(source, /app-items-list-1200\.webp/);
  assert.match(source, /sizes=/);
  assert.ok(TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT.includes("59"));
});
