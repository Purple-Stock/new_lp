"use client";

import Link from "next/link";
import { Box, Globe, RefreshCw, ArrowRight, Sparkles } from "lucide-react";
import type { LandingLanguage } from "@/lib/desktop-landing-copy";

type DesktopLandingWindowChromeProps = {
  language: LandingLanguage;
  onReload: () => void;
  onScrollTop: () => void;
  onOpenApp: () => void;
  onBack: () => void;
  onForward: () => void;
  onCycleLanguage: () => void;
  onOpenPricing: () => void;
};

export function DesktopLandingWindowChrome({
  language,
  onReload,
  onScrollTop,
  onOpenApp,
  onBack,
  onForward,
  onCycleLanguage,
  onOpenPricing,
}: DesktopLandingWindowChromeProps) {
  const onlineLabel =
    language === "pt" ? "Online" : language === "fr" ? "En ligne" : "Online";
  const workspaceLabel =
    language === "pt"
      ? "Workspace de Operação"
      : language === "fr"
        ? "Espace des Operations"
        : "Operations Workspace";

  return (
    <>
      <div className="main-box-header ps-panel-chrome relative flex flex-shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-[6px] group">
            <button
              type="button"
              className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ff5f57] to-[#e0443e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ff6b63] hover:to-[#e34a42] group-hover:scale-105"
              onClick={onReload}
              aria-label="Reload page"
              title="Reload page"
            >
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d0000] font-bold">
                ↻
              </span>
            </button>
            <button
              type="button"
              className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#ffbd2e] to-[#e5a319] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#ffc940] hover:to-[#e5ae25] group-hover:scale-105"
              onClick={onScrollTop}
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] text-[#4d3800] font-bold">
                −
              </span>
            </button>
            <button
              type="button"
              className="relative h-[12px] w-[12px] rounded-full bg-gradient-to-b from-[#28c840] to-[#1aab2c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.06)] transition-all hover:from-[#34d44c] hover:to-[#26b738] group-hover:scale-105"
              onClick={onOpenApp}
              aria-label="Open Purple Stock app"
              title="Open Purple Stock app"
            >
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[6px] text-[#003d00]">
                ⤢
              </span>
            </button>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Link
            href="/"
            className="flex h-4 w-4 items-center justify-center rounded bg-brand-ui-primary shadow-sm"
            aria-label="Go to homepage"
            title="Go to homepage"
          >
            <Box className="w-2.5 h-2.5 text-white" strokeWidth={3} />
          </Link>
          <span className="text-[12px] font-semibold text-slate-600 tracking-wide">
            Purple Stock OS
          </span>
          <span className="text-[10px] text-slate-400 font-medium">v2.0</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] text-emerald-600 font-medium">
              {onlineLabel}
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium hidden md:block">
            {workspaceLabel}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-brand-border-soft/80 bg-brand-surface-soft/60 px-4 py-2 sm:px-5 flex-shrink-0">
        <div className="flex items-center gap-1">
          <button
            className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
            onClick={onBack}
            aria-label="Back"
            title="Back"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={2.5} />
          </button>
          <button
            className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
            onClick={onForward}
            aria-label="Forward"
            title="Forward"
          >
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
          <div className="w-px h-4 bg-slate-200 mx-1" />
          <button
            className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
            onClick={onReload}
            aria-label="Reload page"
            title="Reload page"
          >
            <RefreshCw className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-1">
          <button
            className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
            onClick={onCycleLanguage}
            aria-label="Switch language"
            title="Switch language"
          >
            <Globe className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
          <button
            className="p-1.5 rounded-md hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-slate-600"
            onClick={onOpenPricing}
            aria-label="Open pricing"
            title="Open pricing"
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </>
  );
}
