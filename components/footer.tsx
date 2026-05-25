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
      text:
        language === "pt"
          ? "+55 (11) 99559-7242"
          : language === "en"
            ? "+55 (11) 99559-7242"
            : "+55 (11) 99559-7242",
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
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[linear-gradient(180deg,#fafafc_0%,#f6f2ea_100%)] text-slate-800">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 left-0 h-64 w-64 rounded-full bg-violet-200/20 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-amber-100/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.18)]">
            <div className="space-y-6">
              <Link href="/" className="block group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-700 shadow-sm transition-transform duration-200 group-hover:scale-[1.03]">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">
                      Purple Stock
                    </div>
                    <div className="text-xs font-medium text-slate-600">
                      {language === "pt"
                        ? "Controle de estoque com QR Code"
                        : language === "en"
                          ? "Inventory control with QR code"
                          : "Controle de stock avec QR code"}
                    </div>
                  </div>
                </div>
              </Link>

              <p className="max-w-xs leading-relaxed text-slate-600">
                {language === "pt"
                  ? "Fluxo único para entrada, saída, transferência, ajuste e inventário, com rastreabilidade clara para a operação agir sem improviso."
                  : language === "en"
                    ? "One flow for inbound, outbound, transfers, adjustments, and counts, with clear traceability for operations teams."
                    : "Un seul flux pour entrees, sorties, transferts, ajustements et inventaires, avec une tracabilite claire pour l'equipe."}
              </p>

              <div className="flex gap-3">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:border-violet-200 hover:text-violet-700"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)]">
            <h3 className="mb-6 flex items-center text-base font-semibold text-slate-900">
              <div className="mr-3 h-2 w-2 rounded-full bg-violet-500" />
              {t.purpleStock}
            </h3>
            <ul className="space-y-3">
              {navigation.purplestock.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-slate-600 transition-colors duration-200 hover:text-violet-700"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 text-violet-400 transition-transform duration-200 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)]">
            <h3 className="mb-6 flex items-center text-base font-semibold text-slate-900">
              <div className="mr-3 h-2 w-2 rounded-full bg-slate-400" />
              {t.resources}
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-slate-600 transition-colors duration-200 hover:text-slate-900"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.16)]">
            <h3 className="mb-6 flex items-center text-base font-semibold text-slate-900">
              <div className="mr-3 h-2 w-2 rounded-full bg-emerald-500" />
              {language === "pt"
                ? "Contato"
                : language === "en"
                  ? "Contact"
                  : "Contact"}
            </h3>

            <address className="space-y-3 not-italic">
              {contactInfo.map((item, index) =>
                item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-center space-x-3 text-slate-600 transition-colors duration-200 hover:text-slate-900"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors duration-200 group-hover:bg-slate-50">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-slate-600"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                )
              )}
            </address>
          </div>
        </div>

        <div className="mb-14 mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              {language === "pt"
                ? "Quer validar na sua operação?"
                : language === "en"
                  ? "Want to validate in your operation?"
                  : "Voulez-vous valider dans votre operation ?"}
            </h3>
            <p className="mb-6 text-slate-600">
              {language === "pt"
                ? "Veja o produto em uso ou fale com alguém para entender se ele encaixa no seu fluxo de estoque antes de assumir um projeto maior."
                : language === "en"
                  ? "Watch the product in use or talk to a specialist before committing to a larger systems project."
                  : "Voyez le produit en usage ou parlez avec un specialiste avant de lancer un projet plus lourd."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="rounded-lg bg-violet-700 px-8 py-3 text-white transition-colors hover:bg-violet-800"
              >
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
                className="rounded-lg border-slate-300 bg-white px-8 py-3 text-slate-800 hover:bg-slate-50"
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

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center space-x-2 text-slate-700">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <p className="text-sm font-medium">Purple Stock</p>
            </div>
            <p className="mt-4 text-sm text-slate-700 md:mt-0">
              {language === "pt"
                ? "Operação, produto e atendimento a partir de São Paulo, Brasil"
                : language === "en"
                  ? "Operations, product, and support based in Sao Paulo, Brazil"
                  : "Operation, produit et support bases a Sao Paulo, Bresil"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
