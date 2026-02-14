"use client"

import { FileCode } from "lucide-react"
import { useMemo } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

export function ProductDocumentation() {
  const { language } = useLanguage()

  const documentationSection = useMemo(
    () =>
      ({
        pt: {
          badge: "Guia de uso",
          title: "Como interagir com o sistema Purple Stock",
          subtitle:
            "Passo a passo prático para sua equipe usar o sistema no dia a dia, sem linguagem técnica.",
          highlightsLabel: "Passo a passo",
          topics: [
            {
              id: "doc-acesso",
              title: "1. Fazer login e iniciar",
              description:
                "Primeiro acesso para você e sua equipe começarem a operar no mesmo dia.",
              highlights: [
                "Entrar na plataforma",
                "Acessar seu ambiente de trabalho",
                "Começar sem configuração complexa",
              ],
              steps: [
                "Abra a plataforma e faça login com seu e-mail.",
                "Selecione sua equipe de trabalho.",
                "Confira o painel inicial e siga para o módulo de estoque.",
              ],
            },
            {
              id: "doc-equipes",
              title: "2. Organizar equipes",
              description:
                "Separe sua operação por equipes para manter tudo organizado.",
              highlights: [
                "Menos confusão de dados",
                "Mais clareza de responsabilidade",
                "Operação mais controlada",
              ],
              steps: [
                "Acesse a área de equipes.",
                "Cadastre ou edite as equipes da empresa.",
                "Adicione as pessoas em cada equipe correta.",
              ],
            },
            {
              id: "doc-itens",
              title: "3. Cadastrar itens e locais",
              description:
                "Monte sua base de estoque para começar a controlar entradas e saídas.",
              highlights: [
                "Cadastro centralizado",
                "Saldo por item",
                "Localização dos materiais",
              ],
              steps: [
                "Vá em Itens e clique em Novo item.",
                "Preencha nome, categoria e informações principais.",
                "Cadastre os locais de estoque e vincule os itens aos locais.",
              ],
            },
            {
              id: "doc-movimentos",
              title: "4. Registrar movimentações",
              description:
                "Registre tudo o que acontece no estoque sem depender de planilha.",
              highlights: [
                "Histórico confiável",
                "Atualização rápida do saldo",
                "Menos erro manual",
              ],
              steps: [
                "Abra o módulo de movimentações.",
                "Escolha o tipo: entrada, saída, transferência, ajuste ou contagem.",
                "Informe item, quantidade e confirme para salvar no histórico.",
              ],
            },
            {
              id: "doc-relatorios",
              title: "5. Tomar decisão com relatórios",
              description:
                "Use os relatórios para saber onde agir primeiro.",
              highlights: [
                "Reposição mais inteligente",
                "Visão de perdas",
                "Apoio à decisão",
              ],
              steps: [
                "Acesse a seção de relatórios.",
                "Filtre por equipe e período.",
                "Analise perdas, itens críticos e necessidades de reposição.",
              ],
            },
            {
              id: "doc-qr",
              title: "6. Usar QR Code e etiquetas",
              description:
                "Acelere inventário e conferência com leitura pelo celular.",
              highlights: [
                "Conferência mais rápida",
                "Inventário mais preciso",
                "Menos digitação manual",
              ],
              steps: [
                "Gere e imprima as etiquetas dos itens.",
                "Use o celular para escanear durante a conferência.",
                "Confirme os lançamentos para atualizar o estoque na hora.",
              ],
            },
          ],
        },
        en: {
          badge: "Customer guide",
          title: "How Purple Stock supports your operations",
          subtitle: "A simple, non-technical view of what your team can do day to day.",
          highlightsLabel: "In daily operations, you can",
          topics: [
            {
              id: "doc-access",
              title: "1. Get started quickly",
              description:
                "Create access, log in, and start with your team without complex onboarding.",
              highlights: ["Quick team access", "Simple use on desktop and mobile", "Fast operational start"],
            },
            {
              id: "doc-teams",
              title: "2. Organize teams and responsibilities",
              description: "Each team works in its own context with clear visibility and less confusion.",
              highlights: ["Separate operations by team", "Role-based visibility", "Fewer organization mistakes"],
            },
            {
              id: "doc-items",
              title: "3. Control items and locations",
              description: "Register items and locations and track everything in one place.",
              highlights: ["Know where each item is", "See updated balances", "Standardize item records"],
            },
            {
              id: "doc-movements",
              title: "4. Register stock movements without spreadsheets",
              description: "Inbound, outbound, transfers, adjustments, and counts with clear history.",
              highlights: ["Post movements in a few steps", "Keep audit history", "Reduce manual rework"],
            },
            {
              id: "doc-reports",
              title: "5. Make decisions with reports",
              description: "Track losses, replenishment, and performance to act faster.",
              highlights: ["See what needs replenishment", "Spot operational bottlenecks", "Support purchasing decisions"],
            },
            {
              id: "doc-qr",
              title: "6. Use QR code and labels",
              description: "Mobile scanning and labels make inventory faster and more reliable.",
              highlights: ["Faster item checks", "Better inventory accuracy", "Higher data confidence"],
            },
          ],
        },
        fr: {
          badge: "Guide client",
          title: "Comment Purple Stock aide votre opération",
          subtitle: "Une vue simple et non technique de ce que votre équipe peut faire au quotidien.",
          highlightsLabel: "Au quotidien, vous pouvez",
          topics: [
            {
              id: "doc-access",
              title: "1. Démarrer rapidement",
              description: "Créer les accès, se connecter et commencer sans déploiement complexe.",
              highlights: ["Accès rapide pour l'équipe", "Usage simple web et mobile", "Démarrage opérationnel rapide"],
            },
            {
              id: "doc-teams",
              title: "2. Organiser équipes et responsabilités",
              description: "Chaque équipe travaille dans son contexte avec une visibilité claire.",
              highlights: ["Séparer les opérations par équipe", "Donner la bonne visibilité", "Réduire les erreurs d'organisation"],
            },
            {
              id: "doc-items",
              title: "3. Gérer articles et emplacements",
              description: "Enregistrer les articles et emplacements et tout suivre au même endroit.",
              highlights: ["Savoir où est chaque article", "Voir les soldes à jour", "Standardiser le catalogue"],
            },
            {
              id: "doc-movements",
              title: "4. Enregistrer les mouvements sans tableurs",
              description: "Entrées, sorties, transferts, ajustements et comptages avec historique clair.",
              highlights: ["Saisir en quelques étapes", "Garder l'historique", "Réduire le travail manuel"],
            },
            {
              id: "doc-reports",
              title: "5. Décider avec les rapports",
              description: "Suivre pertes, réassort et performance pour agir plus vite.",
              highlights: ["Voir les besoins de réassort", "Identifier les blocages", "Aider les décisions d'achat"],
            },
            {
              id: "doc-qr",
              title: "6. Utiliser QR code et étiquettes",
              description: "Le scan mobile et les étiquettes rendent le contrôle plus rapide et fiable.",
              highlights: ["Contrôles plus rapides", "Meilleure précision", "Plus de confiance dans les données"],
            },
          ],
        },
      })[language],
    [language],
  )

  return (
    <section className="rounded-3xl border border-violet-100 bg-violet-50/40 p-6 sm:p-8">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          <FileCode className="h-3.5 w-3.5" />
          {documentationSection.badge}
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{documentationSection.title}</h1>
        <p className="mt-2 text-slate-600">{documentationSection.subtitle}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav className="rounded-2xl border border-violet-200 bg-white p-3">
            <ul className="space-y-1">
              {documentationSection.topics.map((topic) => (
                <li key={topic.id}>
                  <a
                    href={`#${topic.id}`}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-700"
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="space-y-4">
          {documentationSection.topics.map((topic) => (
            <article id={topic.id} key={topic.id} className="rounded-2xl border border-violet-200 bg-white p-5 scroll-mt-28">
              <h2 className="text-lg font-semibold text-slate-900">{topic.title}</h2>
              <div className="mt-3 grid gap-4 md:grid-cols-[1fr,320px] md:items-start">
                <div>
                  <p className="text-sm leading-relaxed text-slate-600">{topic.description}</p>
                </div>
                {topic.id === "doc-acesso" || topic.id === "doc-access" ? (
                  <Image
                    src="/images/docs/app-home.png"
                    alt={topic.title}
                    width={640}
                    height={360}
                    className="w-full rounded-xl border border-slate-200"
                  />
                ) : topic.id === "doc-equipes" || topic.id === "doc-teams" ? (
                  <Image
                    src="/images/docs/app-team-selection.png"
                    alt={topic.title}
                    width={640}
                    height={360}
                    className="w-full rounded-xl border border-slate-200"
                  />
                ) : topic.id === "doc-itens" || topic.id === "doc-items" ? (
                  <Image
                    src="/images/docs/app-items.png"
                    alt={topic.title}
                    width={640}
                    height={360}
                    className="w-full rounded-xl border border-slate-200"
                  />
                ) : topic.id === "doc-movimentos" || topic.id === "doc-movements" ? (
                  <Image
                    src="/images/docs/app-movements.png"
                    alt={topic.title}
                    width={640}
                    height={360}
                    className="w-full rounded-xl border border-slate-200"
                  />
                ) : topic.id === "doc-relatorios" || topic.id === "doc-reports" ? (
                  <Image
                    src="/images/docs/app-reports.png"
                    alt={topic.title}
                    width={640}
                    height={360}
                    className="w-full rounded-xl border border-slate-200"
                  />
                ) : topic.id === "doc-qr" ? (
                  <Image
                    src="/images/docs/app-labels.png"
                    alt={topic.title}
                    width={640}
                    height={360}
                    className="w-full rounded-xl border border-slate-200"
                  />
                ) : null}
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">{documentationSection.highlightsLabel}</p>
                {"steps" in topic ? (
                  <ol className="mt-2 space-y-1">
                    {(topic.steps as string[]).map((step) => (
                      <li key={step} className="text-sm text-slate-600">
                        - {step}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-2 space-y-1">
                    {topic.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-slate-600">
                        - {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
