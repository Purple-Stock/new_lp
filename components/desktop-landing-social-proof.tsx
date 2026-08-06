"use client";

import Image from "next/image";
import Link from "next/link";
import type {
  LandingLanguage,
  LandingLogoCase,
} from "@/lib/desktop-landing-copy";

type DesktopLandingSocialProofProps = {
  language: LandingLanguage;
  logoCases: LandingLogoCase[];
};

function pick(
  language: LandingLanguage,
  pt: string,
  en: string,
  fr: string
): string {
  if (language === "pt") return pt;
  if (language === "en") return en;
  return fr;
}

const INDUSTRY_CHIPS: {
  href: string;
  pt: string;
  en: string;
  fr: string;
}[] = [
  {
    href: "/industrias/audiovisual",
    pt: "Audiovisual →",
    en: "Audiovisual →",
    fr: "Audiovisuel →",
  },
  {
    href: "/industrias/events",
    pt: "Eventos →",
    en: "Events →",
    fr: "Evenements →",
  },
  {
    href: "/industrias/telecomunicacoes",
    pt: "Telecom →",
    en: "Telecom →",
    fr: "Telecom →",
  },
  {
    href: "/industrias/automotivo",
    pt: "Autopeças →",
    en: "Auto parts →",
    fr: "Pieces auto →",
  },
  {
    href: "/industrias/odontologico",
    pt: "Odontológico →",
    en: "Dental →",
    fr: "Dentaire →",
  },
];

export function DesktopLandingSocialProof({
  language,
  logoCases,
}: DesktopLandingSocialProofProps) {
  return (
    <div className="pt-12 pb-8">
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
          {pick(
            language,
            "Empresas que usam Purple Stock na operação",
            "Teams running operations with Purple Stock",
            "Equipes qui operent avec Purple Stock"
          )}
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base">
          {pick(
            language,
            "Do estoque clássico ao check-in de equipamentos — forte em produtoras, eventos, telecom, dentário e autopeças.",
            "From classic inventory to equipment check-in — strong for production, events, telecom, dental, and auto parts.",
            "Du stock classique au check-in d'equipements — fort pour productions, evenements, telecom, dentaire et pieces auto."
          )}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {INDUSTRY_CHIPS.map((chip) => (
            <Link
              key={chip.href}
              href={chip.href}
              className="ps-badge-violet px-3 py-1.5 text-xs font-semibold normal-case tracking-normal"
            >
              {pick(language, chip.pt, chip.en, chip.fr)}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {logoCases.map((logoCase) => (
          <div key={logoCase.name} className="ps-card group p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-14 items-center justify-center">
                <Image
                  src={logoCase.logo}
                  alt={logoCase.name}
                  width={logoCase.width}
                  height={logoCase.height}
                  className={`h-full w-auto object-contain ${logoCase.maxWidth}`}
                />
              </div>
              <span className="ps-badge-violet px-2 py-1">
                {logoCase.sector ||
                  pick(language, "Caso rápido", "Quick case", "Cas rapide")}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {logoCase.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
