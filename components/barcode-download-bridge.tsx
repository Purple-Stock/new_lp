"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackSeoCtaClick } from "@/lib/analytics";
import { APP_SIGNUP_URL } from "@/lib/app-urls";
import { BARCODE_DOWNLOAD_BRIDGE } from "@/lib/barcode-download-bridge";

type BarcodeDownloadBridgeProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function BarcodeDownloadBridge({
  open,
  onOpenChange,
}: BarcodeDownloadBridgeProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="ps-display text-xl text-brand-ink">
              {BARCODE_DOWNLOAD_BRIDGE.title}
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-slate-600">
              {BARCODE_DOWNLOAD_BRIDGE.body}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:justify-start">
            <Button asChild className="ps-btn-primary">
              <Link
                href={APP_SIGNUP_URL}
                onClick={() =>
                  trackSeoCtaClick({
                    cta_name: "barcode_download_modal",
                    cta_target: "app",
                    page_section: "barcode_download",
                    query_cluster: "codigo-de-barras-gratis",
                  })
                }
              >
                {BARCODE_DOWNLOAD_BRIDGE.trialLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="ps-btn-outline"
              onClick={() => onOpenChange(false)}
            >
              {BARCODE_DOWNLOAD_BRIDGE.dismissLabel}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border-soft bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(24,18,38,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm font-medium text-brand-ink">
            {BARCODE_DOWNLOAD_BRIDGE.stickyLabel}
          </p>
          <Link
            href={APP_SIGNUP_URL}
            className="ps-btn-primary inline-flex px-4 py-2 text-sm"
            onClick={() =>
              trackSeoCtaClick({
                cta_name: "barcode_sticky_cta",
                cta_target: "app",
                page_section: "barcode_sticky",
                query_cluster: "codigo-de-barras-gratis",
              })
            }
          >
            {BARCODE_DOWNLOAD_BRIDGE.trialLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
