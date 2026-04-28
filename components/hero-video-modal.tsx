"use client";

import { PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type HeroVideoModalProps = {
  language: "pt" | "en" | "fr";
  onOpen: (ctaName: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function HeroVideoModal({
  language,
  onOpen,
  open,
  onOpenChange,
}: HeroVideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={
            language === "pt"
              ? "Abrir demonstração em vídeo"
              : language === "en"
                ? "Open video demo"
                : "Ouvrir la demonstration video"
          }
          className="absolute inset-0 flex items-center justify-center rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          onClick={() => onOpen("desktop_video_overlay")}
        >
          <span className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-purple-600 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-purple-500/50">
            <span className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-purple-600 border-t-transparent" />
          </span>
        </button>
      </DialogTrigger>

      <div className="mt-6 flex justify-center">
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:from-purple-700 hover:to-purple-800"
            onClick={() => onOpen("desktop_watch_demo_button")}
          >
            <PlayCircle
              className="mr-2 h-5 w-5"
              strokeWidth={2.5}
              style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
            />
            {language === "pt"
              ? "Ver Demonstração"
              : language === "en"
                ? "Watch demo"
                : "Voir la demonstration"}
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent className="max-w-4xl w-full p-0 bg-black">
        <DialogTitle className="sr-only">
          {language === "pt"
            ? "Demonstração do Purple Stock"
            : language === "en"
              ? "Purple Stock Demo"
              : "Démo Purple Stock"}
        </DialogTitle>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src="https://www.youtube.com/embed/fD4amz78t8c?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
