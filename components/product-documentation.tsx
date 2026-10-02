"use client";

import { FileCode, ZoomIn } from "lucide-react";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import {
  getProductDocumentation,
  type DocumentationLocale,
  type DocumentationShot,
  type DocumentationTopic,
} from "@/lib/product-documentation";

function isDocumentationLocale(value: string): value is DocumentationLocale {
  return value === "pt" || value === "en" || value === "fr";
}

function AppScreenshot({
  shot,
  enlargeLabel,
}: {
  shot: DocumentationShot;
  enlargeLabel: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#d9c9f0] bg-white shadow-[0_18px_40px_rgba(48,20,80,0.12)]">
      <div className="flex items-center gap-2 border-b border-black/10 bg-[#2a2a2a] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <p className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] text-white/75">
          app.purplestock.com.br{shot.appPath}
        </p>
      </div>
      <a
        href={shot.src}
        target="_blank"
        rel="noreferrer"
        className="group relative block w-full text-left"
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={1440}
          height={900}
          className="h-auto w-full bg-[#f6f2ff]"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white opacity-90 transition group-hover:opacity-100">
          <ZoomIn className="h-3 w-3" />
          {enlargeLabel}
        </span>
      </a>
      <figcaption className="border-t border-violet-100 bg-[#fbf8ff] px-4 py-3 text-sm leading-relaxed text-slate-600">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

function TopicLesson({
  topic,
  docs,
}: {
  topic: DocumentationTopic;
  docs: ReturnType<typeof getProductDocumentation>;
}) {
  return (
    <article id={topic.id} className="space-y-5">
      <div className="rounded-2xl border border-violet-200 bg-white p-6 lg:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
          {docs.badge}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
          {topic.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          {topic.description}
        </p>
        <div className="mt-5">
          <AppScreenshot shot={topic.image} enlargeLabel={docs.enlargeLabel} />
        </div>
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
            {docs.highlightsLabel}
          </p>
          <ol className="mt-3 space-y-3">
            {topic.steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 text-sm leading-relaxed text-slate-700"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6B21A8] text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {topic.image.extras && topic.image.extras.length > 0 ? (
        <section className="rounded-2xl border border-violet-200 bg-white p-6 lg:p-7">
          <h3 className="text-base font-semibold text-slate-900">
            {docs.extraShotsLabel}
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {topic.image.extras.map((extra) => (
              <AppScreenshot
                key={extra.src}
                shot={extra}
                enlargeLabel={docs.enlargeLabel}
              />
            ))}
          </div>
        </section>
      ) : null}
      <section className="rounded-2xl border border-violet-200 bg-white p-6 lg:p-7">
        <h3 className="text-lg font-semibold text-slate-900">
          {docs.actionsTitle}
        </h3>
        <ul className="mt-3 space-y-2">
          {topic.actions.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export function ProductDocumentation() {
  const { language } = useLanguage();
  const locale: DocumentationLocale = isDocumentationLocale(language)
    ? language
    : "pt";
  const docs = useMemo(() => getProductDocumentation(locale), [locale]);

  return (
    <section
      data-purple-docs
      className="rounded-3xl border border-violet-100 bg-violet-50/40 p-6 sm:p-8"
    >
      <nav className="fixed top-12 right-0 left-0 z-[110] border-b border-violet-200 bg-white shadow-sm md:top-10">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-1 px-4 py-2 sm:px-8">
          {docs.topics.map((topic) => (
            <li key={topic.id}>
              <a
                href={`#${topic.id}`}
                className="block rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700"
              >
                {topic.navLabel}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-16" />
      <div className="mb-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          <FileCode className="h-3.5 w-3.5" />
          {docs.badge}
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {docs.title}
        </h1>
        <p className="mt-2 text-slate-600">{docs.subtitle}</p>
      </div>
      <div className="space-y-10">
        {docs.topics.map((topic) => (
          <TopicLesson key={topic.id} topic={topic} docs={docs} />
        ))}
      </div>
    </section>
  );
}
