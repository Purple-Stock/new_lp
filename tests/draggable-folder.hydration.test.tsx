import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import React from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { DraggableFolder } from "../components/draggable-folder";

function withSsrEnvironment<T>(fn: () => T): T {
  const prevDocument = global.document;
  const prevWindow = global.window;

  // @ts-expect-error simulate SSR environment
  delete global.document;
  // @ts-expect-error simulate SSR environment
  delete global.window;

  try {
    return fn();
  } finally {
    global.document = prevDocument;
    global.window = prevWindow;
  }
}

function setupDom(serverHtml: string) {
  const dom = new JSDOM(
    `<!DOCTYPE html><html><body><div id="root">${serverHtml}</div></body></html>`,
    { url: "http://localhost" }
  );
  // @ts-expect-error assigning jsdom globals
  global.document = dom.window.document;
  // @ts-expect-error assigning jsdom globals
  global.window = dom.window;
  // @ts-expect-error assigning jsdom globals
  global.localStorage = dom.window.localStorage;
  return dom;
}

test("DraggableFolder does not cause hydration mismatch when used inside a layout", async () => {
  const element = (
    <div className="wrapper">
      <DraggableFolder
        label="Inventário"
        folderColor="blue"
        storageKey="window-app-left-inventory"
      />
      <div id="sibling">Sibling content</div>
    </div>
  );

  const serverHtml = withSsrEnvironment(() => renderToString(element));

  assert.ok(
    !serverHtml.includes("fixed") && !serverHtml.includes("cursor-move"),
    "Server should not render the draggable fixed wrapper"
  );

  setupDom(serverHtml);
  const rootElement = document.getElementById("root")!;

  const recoverableErrors: unknown[] = [];
  const consoleErrors: string[] = [];
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    consoleErrors.push(args.map(String).join(" "));
    originalError.apply(console, args);
  };

  const root = hydrateRoot(rootElement, element, {
    onRecoverableError: (err) => {
      recoverableErrors.push(err);
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 50));

  root.unmount();
  console.error = originalError;

  const hydrationErrors = [
    ...recoverableErrors.map((e) =>
      e instanceof Error ? e.message : String(e)
    ),
    ...consoleErrors.filter(
      (msg) =>
        msg.includes("Hydration") ||
        msg.includes("hydration") ||
        msg.includes("did not match") ||
        msg.includes("early update")
    ),
  ];

  assert.deepEqual(
    hydrationErrors,
    [],
    `Expected no hydration errors, but got:\n${hydrationErrors.join("\n")}`
  );
});

test("DraggableFolder renders null during SSR", () => {
  const html = withSsrEnvironment(() =>
    renderToString(
      <DraggableFolder label="Test" folderColor="green" storageKey="test" />
    )
  );

  assert.equal(html, "", "DraggableFolder should render nothing on the server");
});

test("DraggableFolder uses initialPosition when slot element is missing", async () => {
  setupDom("");

  const container = document.createElement("div");
  document.body.appendChild(container);

  const element = (
    <DraggableFolder
      label="Test"
      folderColor="blue"
      storageKey="missing-slot"
      initialPosition={{ x: 120, y: 340 }}
    />
  );

  const root = hydrateRoot(container, element);

  await new Promise((resolve) => setTimeout(resolve, 50));

  const portalDiv = document.body.querySelector(".fixed.select-none");
  assert.ok(portalDiv, "Portal should be rendered after mount");

  const style = (portalDiv as HTMLElement).style;
  assert.equal(
    style.left,
    "120px",
    "Should use initialPosition.x when slot is missing"
  );
  assert.equal(
    style.top,
    "340px",
    "Should use initialPosition.y when slot is missing"
  );

  root.unmount();
});

test("DraggableFolder uses slot element position over initialPosition", async () => {
  setupDom("");

  const slot = document.createElement("div");
  slot.id = "folder-slot-slot-with-position";
  slot.style.position = "absolute";
  slot.style.left = "500px";
  slot.style.top = "200px";
  document.body.appendChild(slot);

  slot.getBoundingClientRect = () =>
    ({
      left: 500,
      top: 200,
      width: 0,
      height: 0,
      right: 500,
      bottom: 200,
      x: 500,
      y: 200,
    }) as DOMRect;

  const container = document.createElement("div");
  document.body.appendChild(container);

  const element = (
    <DraggableFolder
      label="Test"
      folderColor="blue"
      storageKey="slot-with-position"
      initialPosition={{ x: 10, y: 10 }}
    />
  );

  const root = hydrateRoot(container, element);

  await new Promise((resolve) => setTimeout(resolve, 50));

  const portalDiv = document.body.querySelector(".fixed.select-none");
  assert.ok(portalDiv, "Portal should be rendered after mount");

  const style = (portalDiv as HTMLElement).style;
  assert.equal(style.left, "500px", "Should use slot left position");
  assert.equal(style.top, "200px", "Should use slot top position");

  root.unmount();
});

test("DraggableFolder renders inside portalContainer with absolute positioning", async () => {
  setupDom("");

  const portalContainer = document.createElement("div");
  portalContainer.style.position = "relative";
  portalContainer.style.width = "800px";
  portalContainer.style.height = "600px";
  document.body.appendChild(portalContainer);

  const wrapper = document.createElement("div");
  document.body.appendChild(wrapper);

  const element = (
    <DraggableFolder
      label="Contained"
      folderColor="purple"
      storageKey="contained-test"
      initialPosition={{ x: 50, y: 100 }}
      portalContainer={portalContainer}
    />
  );

  const root = hydrateRoot(wrapper, element);
  await new Promise((resolve) => setTimeout(resolve, 50));

  // Portal should be inside the container, not in body
  const folderInContainer = portalContainer.querySelector(
    ".absolute.select-none"
  );
  assert.ok(
    folderInContainer,
    "Folder should be rendered inside portalContainer"
  );

  const folderInBody = document.body.querySelector(".fixed.select-none");
  assert.ok(!folderInBody, "Folder should NOT be rendered in body as fixed");

  const style = (folderInContainer as HTMLElement).style;
  assert.equal(
    style.left,
    "50px",
    "Should use initialPosition.x relative to container"
  );
  assert.equal(
    style.top,
    "100px",
    "Should use initialPosition.y relative to container"
  );

  root.unmount();
});

test("DraggableFolder positions relative to portalContainer when slot exists", async () => {
  setupDom("");

  const portalContainer = document.createElement("div");
  portalContainer.style.position = "relative";
  portalContainer.style.width = "800px";
  portalContainer.style.height = "600px";
  // Simulate the container being offset from the viewport
  portalContainer.style.marginLeft = "100px";
  portalContainer.style.marginTop = "50px";
  document.body.appendChild(portalContainer);

  const slot = document.createElement("div");
  slot.id = "folder-slot-contained-slot";
  // Slot is inside container at (40, 80) relative to container
  slot.style.position = "absolute";
  slot.style.left = "40px";
  slot.style.top = "80px";
  portalContainer.appendChild(slot);

  // Mock getBoundingClientRect for container and slot
  const containerRect = {
    left: 100,
    top: 50,
    width: 800,
    height: 600,
    right: 900,
    bottom: 650,
    x: 100,
    y: 50,
  };
  portalContainer.getBoundingClientRect = () => containerRect as DOMRect;

  const slotRect = {
    left: 140,
    top: 130,
    width: 0,
    height: 0,
    right: 140,
    bottom: 130,
    x: 140,
    y: 130,
  };
  slot.getBoundingClientRect = () => slotRect as DOMRect;

  const wrapper = document.createElement("div");
  document.body.appendChild(wrapper);

  const element = (
    <DraggableFolder
      label="Contained"
      folderColor="purple"
      storageKey="contained-slot"
      initialPosition={{ x: 10, y: 10 }}
      portalContainer={portalContainer}
    />
  );

  const root = hydrateRoot(wrapper, element);
  await new Promise((resolve) => setTimeout(resolve, 50));

  const folderInContainer = portalContainer.querySelector(
    ".absolute.select-none"
  );
  assert.ok(
    folderInContainer,
    "Folder should be rendered inside portalContainer"
  );

  // Position should be relative to container: 140-100=40, 130-50=80
  const style = (folderInContainer as HTMLElement).style;
  assert.equal(
    style.left,
    "40px",
    "Should compute slot position relative to container left"
  );
  assert.equal(
    style.top,
    "80px",
    "Should compute slot position relative to container top"
  );

  root.unmount();
});
