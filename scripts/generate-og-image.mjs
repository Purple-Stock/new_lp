import { chromium } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, "../public");

const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        width: 1200px;
        height: 630px;
        overflow: hidden;
        font-family: Poppins, system-ui, sans-serif;
        background: #141416;
        color: #fff;
      }

      .canvas {
        position: relative;
        width: 1200px;
        height: 630px;
        overflow: hidden;
      }

      .pattern {
        position: absolute;
        inset: 0;
        opacity: 0.08;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%239333e9' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 34h20v14H18z'/%3E%3Cpath d='M22 34v-6h12v6'/%3E%3Cpath d='M58 24v28M44 38h28'/%3E%3Cpath d='M86 30c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z'/%3E%3Cpath d='M20 78h16v10H20z'/%3E%3Cpath d='M24 78v-4h8v4'/%3E%3Cpath d='M52 72l8 16 8-16z'/%3E%3Cpath d='M88 74h14v14H88z'/%3E%3Cpath d='M95 74v-4h4v4'/%3E%3C/g%3E%3C/svg%3E");
      }

      .glow {
        position: absolute;
        width: 520px;
        height: 520px;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
      }

      .glow-left {
        left: -120px;
        top: 120px;
        background: rgba(147, 51, 233, 0.2);
      }

      .glow-right {
        right: -80px;
        top: 40px;
        background: rgba(31, 92, 153, 0.14);
      }

      .content {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1.05fr;
        height: 100%;
        padding: 72px 64px 64px 72px;
        gap: 24px;
        align-items: center;
      }

      .brand {
        display: flex;
        flex-direction: column;
        gap: 28px;
        max-width: 460px;
      }

      .logo-row {
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .logo {
        width: 72px;
        height: 72px;
        border-radius: 18px;
        background: linear-gradient(135deg, #9333e9 0%, #7928ca 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 18px 40px rgba(147, 51, 233, 0.32);
      }

      .logo svg {
        width: 38px;
        height: 38px;
      }

      .eyebrow {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.55);
      }

      .title {
        font-size: 64px;
        line-height: 0.98;
        letter-spacing: -0.03em;
        font-weight: 700;
      }

      .title span {
        display: block;
        color: rgba(255, 255, 255, 0.92);
      }

      .title .accent {
        color: #c4b5fd;
      }

      .tagline {
        font-size: 22px;
        line-height: 1.45;
        color: rgba(255, 255, 255, 0.72);
        max-width: 420px;
      }

      .url {
        font-size: 18px;
        font-weight: 600;
        color: #a78bfa;
        letter-spacing: 0.01em;
      }

      .device-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(18px);
      }

      .phone {
        width: 290px;
        height: 590px;
        border-radius: 42px;
        padding: 12px;
        background: linear-gradient(160deg, #c4b5fd 0%, #7c3aed 48%, #5b21b6 100%);
        box-shadow:
          0 30px 80px rgba(0, 0, 0, 0.55),
          inset 0 1px 0 rgba(255, 255, 255, 0.25);
        position: relative;
      }

      .phone::before {
        content: '';
        position: absolute;
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
        width: 92px;
        height: 24px;
        border-radius: 16px;
        background: #1a1028;
        z-index: 2;
      }

      .screen {
        width: 100%;
        height: 100%;
        border-radius: 32px;
        overflow: hidden;
        background: #0f1115;
        padding: 42px 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .screen-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 4px 2px;
      }

      .screen-brand {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.88);
      }

      .screen-brand-icon {
        width: 22px;
        height: 22px;
        border-radius: 7px;
        background: rgba(147, 51, 233, 0.22);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #c4b5fd;
        font-size: 10px;
      }

      .screen-icons {
        display: flex;
        gap: 8px;
        color: rgba(255, 255, 255, 0.45);
        font-size: 11px;
      }

      .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      .card {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 10px 8px;
      }

      .card-label {
        font-size: 7px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.45);
        margin-bottom: 6px;
      }

      .card-value {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .card-value.items {
        color: #c4b5fd;
      }

      .card-value.inbound {
        color: #34d399;
      }

      .card-value.outbound {
        color: #f87171;
      }

      .chart-card {
        flex: 1;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 14px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .chart-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .chart-title {
        font-size: 10px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.88);
      }

      .chart-badge {
        font-size: 7px;
        color: rgba(255, 255, 255, 0.45);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 999px;
        padding: 3px 7px;
      }

      .chart-svg {
        width: 100%;
        height: 150px;
      }

      .stock-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .stock-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
      }

      .stock-name {
        font-size: 9px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.82);
      }

      .stock-qty {
        font-size: 9px;
        font-weight: 700;
        color: #a78bfa;
      }
    </style>
  </head>
  <body>
    <div class="canvas">
      <div class="pattern"></div>
      <div class="glow glow-left"></div>
      <div class="glow glow-right"></div>

      <div class="content">
        <section class="brand">
          <div class="logo-row">
            <div class="logo">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(16, 16) scale(0.12)">
                  <path fill="#ffffff" d="M0,-100 L86,-50 L86,50 L0,100 L-86,50 L-86,-50 Z"/>
                  <path fill="#9333e9" d="M30,-50 L-15,10 H15 L-10,55 L40,0 H15 Z"/>
                </g>
              </svg>
            </div>
            <div class="eyebrow">Purple Stock</div>
          </div>

          <h1 class="title">
            <span>Purple Stock</span>
            <span class="accent">Estoque</span>
          </h1>

          <p class="tagline">
            Controle de estoque com QR Code no celular e no almoxarifado
          </p>

          <p class="url">purplestock.com.br</p>
        </section>

        <div class="device-wrap">
          <div class="phone">
            <div class="screen">
              <div class="screen-top">
                <div class="screen-brand">
                  <div class="screen-brand-icon">▦</div>
                  <span>Estoque</span>
                </div>
                <div class="screen-icons">◔ ◷</div>
              </div>

              <div class="cards">
                <div class="card">
                  <div class="card-label">Itens</div>
                  <div class="card-value items">1.248</div>
                </div>
                <div class="card">
                  <div class="card-label">Entradas</div>
                  <div class="card-value inbound">+86</div>
                </div>
                <div class="card">
                  <div class="card-label">Saídas</div>
                  <div class="card-value outbound">-42</div>
                </div>
              </div>

              <div class="chart-card">
                <div class="chart-head">
                  <div class="chart-title">Movimentação do estoque</div>
                  <div class="chart-badge">30 dias</div>
                </div>
                <svg
                  class="chart-svg"
                  viewBox="0 0 240 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35" />
                      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="120" x2="240" y2="120" stroke="rgba(255,255,255,0.08)" />
                  <line x1="0" y1="90" x2="240" y2="90" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="60" x2="240" y2="60" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="30" x2="240" y2="30" stroke="rgba(255,255,255,0.05)" />
                  <path
                    d="M0 118 C24 114 36 108 48 100 C72 88 84 80 108 68 C132 56 156 44 180 34 C204 24 222 16 240 10 L240 150 L0 150 Z"
                    fill="url(#area)"
                  />
                  <path
                    d="M0 118 C24 114 36 108 48 100 C72 88 84 80 108 68 C132 56 156 44 180 34 C204 24 222 16 240 10"
                    stroke="#a78bfa"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <circle cx="240" cy="10" r="4" fill="#a78bfa" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;

const pngPath = path.join(publicDir, "og-image.png");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({ path: pngPath, omitBackground: false });
await browser.close();

console.log("OK: Purple Stock OG preview generated (catalog-style)");
