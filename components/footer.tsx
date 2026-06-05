"use client";

import Link from "next/link";
import {
  Instagram,
  Youtube,
  Linkedin,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageCircle,
  PlayCircle,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppUrl } from "@/lib/contact";
import { translations } from "@/utils/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const navigation = {
    purplestock: [{ name: t.industries, href: "/industrias" }],
    resources: [
      { name: t.blog, href: "/blog" },
      { name: t.glossary, href: "/glossario" },
    ],
    social: [
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/purplestockapp/",
      },
      {
        name: "Youtube",
        icon: Youtube,
        href: "https://www.youtube.com/@PurpleStock_",
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/company/purple-stock",
      },
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      text:
        language === "pt"
          ? "matheus.puppe@purplestock.com.br"
          : language === "en"
            ? "contact@purplestock.com.br"
            : "contact@purplestock.com.br",
      href: "mailto:matheus.puppe@purplestock.com.br",
    },
    {
      icon: Phone,
      text: "+55 (11) 99559-7242",
      href: "tel:+5511995597242",
    },
    {
      icon: MapPin,
      text:
        language === "pt"
          ? "São Paulo, Brasil"
          : language === "en"
            ? "São Paulo, Brazil"
            : "São Paulo, Brésil",
      href: null,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-brand-border-soft bg-transparent text-brand-ink">
      <div className="relative mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="ps-panel overflow-hidden">
          <div className="ps-panel-chrome flex items-center justify-between px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-[6px]" aria-hidden="true">
              <span className="h-[12px] w-[12px] rounded-full bg-[#e86a63] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
              <span className="h-[12px] w-[12px] rounded-full bg-[#e9b54c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
              <span className="h-[12px] w-[12px] rounded-full bg-[#4ab96a] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-brand-ui-primary shadow-sm">
                <Box className="h-2.5 w-2.5 text-white" strokeWidth={3} />
              </div>
              <span className="text-[12px] font-semibold tracking-[0.08em] text-slate-600">
                Purple Stock
              </span>
              <span className="text-[10px] font-medium text-slate-400">
                {language === "pt"
                  ? "info"
                  : language === "fr"
                    ? "info"
                    : "info"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-medium text-emerald-600">
                {language === "pt"
                  ? "Online"
                  : language === "fr"
                    ? "En ligne"
                    : "Online"}
              </span>
            </div>
          </div>

          <div className="space-y-10 px-5 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
              <div>
                <Link href="/" className="inline-block group">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-ui-primary shadow-sm transition-transform duration-200 group-hover:scale-[1.03]">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">
                        Purple Stock
                      </div>
                      <div className="text-[11px] font-medium tracking-[0.04em] text-slate-500">
                        {language === "pt"
                          ? "Controle de estoque com QR Code"
                          : language === "en"
                            ? "Inventory control with QR code"
                            : "Controle de stock avec QR code"}
                      </div>
                    </div>
                  </div>
                </Link>

                <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
                  {language === "pt"
                    ? "Fluxo único para entrada, saída, transferência, ajuste e inventário, com rastreabilidade clara para a operação agir sem improviso."
                    : language === "en"
                      ? "One flow for inbound, outbound, transfers, adjustments, and counts, with clear traceability for operations teams."
                      : "Un seul flux pour entrees, sorties, transferts, ajustements et inventaires, avec une tracabilite claire pour l'equipe."}
                </p>

                <div className="mt-5 flex gap-2">
                  {navigation.social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors duration-200 hover:border-violet-200 hover:text-violet-700"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  {t.purpleStock}
                </h3>
                <ul className="space-y-2.5">
                  {navigation.purplestock.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm text-slate-600 transition-colors duration-200 hover:text-violet-700"
                      >
                        <ArrowRight className="mr-2 h-3.5 w-3.5 text-violet-400 transition-transform duration-200 group-hover:translate-x-1" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  {t.resources}
                </h3>
                <ul className="space-y-2.5">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
                      >
                        <ArrowRight className="mr-2 h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                  {language === "pt"
                    ? "Contato"
                    : language === "en"
                      ? "Contact"
                      : "Contact"}
                </h3>

                <address className="space-y-2.5 not-italic">
                  {contactInfo.map((item, index) =>
                    item.href ? (
                      <Link
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-3 text-slate-600 transition-colors duration-200 hover:text-slate-900"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors duration-200 group-hover:bg-slate-50">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </Link>
                    ) : (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    )
                  )}
                </address>
              </div>
            </div>

            <div className="ps-callout relative overflow-hidden p-6 sm:p-8">
              <div className="absolute right-6 top-6 hidden sm:block">
                <div className="flex items-center gap-1.5 rounded-full border border-purple-200 bg-white/80 px-3 py-1 text-[10px] font-medium tracking-[0.06em] text-purple-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                  {language === "pt"
                    ? "ao vivo"
                    : language === "fr"
                      ? "en direct"
                      : "live"}
                </div>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {language === "pt"
                    ? "Quer validar na sua operação?"
                    : language === "en"
                      ? "Want to validate in your operation?"
                      : "Voulez-vous valider dans votre operation ?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {language === "pt"
                    ? "Veja o produto em uso ou fale com alguém para entender se ele encaixa no seu fluxo de estoque antes de assumir um projeto maior."
                    : language === "en"
                      ? "Watch the product in use or talk to a specialist before committing to a larger systems project."
                      : "Voyez le produit en usage ou parlez avec un specialiste avant de lancer un projet plus lourd."}
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="ps-btn-primary px-6 py-3 text-sm">
                  <Link
                    href="https://www.youtube.com/watch?v=fD4amz78t8c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    {language === "pt"
                      ? "Ver demonstração"
                      : language === "en"
                        ? "Watch demo"
                        : "Voir la demonstration"}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-lg border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <Link
                    href={buildWhatsAppUrl(
                      "Olá! Quero entender se o Purple Stock serve para minha operação."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {language === "pt"
                      ? "Falar no WhatsApp"
                      : language === "en"
                        ? "Talk on WhatsApp"
                        : "Parler sur WhatsApp"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="ps-panel-chrome flex items-center justify-between border-t border-brand-border-soft px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-3">
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              <span className="text-[11px] font-medium tracking-[0.04em] text-slate-600">
                Purple Stock
              </span>
              <span className="text-[9px] text-slate-400">v2.0</span>
            </div>
            <span className="text-[10px] text-slate-500">
              {language === "pt"
                ? "Operação, produto e atendimento a partir de São Paulo, Brasil"
                : language === "en"
                  ? "Operations, product, and support based in Sao Paulo, Brazil"
                  : "Operation, produit et support bases a Sao Paulo, Bresil"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
