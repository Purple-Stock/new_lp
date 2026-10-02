import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const deploy = JSON.parse(
  readFileSync(join(process.cwd(), ".cleat_deploy/deploy.json"), "utf8")
) as { build_command: string };

test("build_command starts with an executable, not export or VAR=value", () => {
  const first = deploy.build_command.trim().split(/\s+/)[0];
  assert.ok(first.length > 0);
  assert.doesNotMatch(first, /=/);
  assert.notEqual(first, "export");
});

test("build_command passes NEXT_PUBLIC vars via env and runs npm run build", () => {
  assert.match(deploy.build_command, /^env /);
  assert.match(
    deploy.build_command,
    /NEXT_PUBLIC_BASE_URL=https:\/\/www\.purplestock\.com\.br/
  );
  assert.match(deploy.build_command, /HUSKY=0/);
  assert.match(deploy.build_command, /npm run build/);
});
