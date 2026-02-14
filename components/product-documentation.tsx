"use client"

import { FileCode } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

export function ProductDocumentation() {
  const { language } = useLanguage()
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0)
  const [previewOpen, setPreviewOpen] = useState(false)

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
                "Este é o ponto de partida: entrar no sistema e abrir o ambiente correto da sua operação.",
              highlights: [
                "Entrada rápida e sem fricção",
                "Time no mesmo ambiente de trabalho",
                "Início de operação no mesmo dia",
              ],
              steps: [
                "Acesse a plataforma e faça login com seu e-mail e senha.",
                "Escolha a equipe que você vai operar naquele momento.",
                "No painel inicial, confirme os atalhos principais e siga para Estoque.",
              ],
            },
            {
              id: "doc-equipes",
              title: "2. Organizar equipes",
              description:
                "Organizar equipes evita mistura de informações e deixa cada pessoa responsável pelo que realmente precisa acompanhar.",
              highlights: [
                "Separação clara por operação",
                "Responsabilidades bem definidas",
                "Menos erro por acesso indevido",
              ],
              steps: [
                "Entre em Equipes e revise as equipes já existentes.",
                "Crie novas equipes quando necessário (filial, setor ou operação).",
                "Adicione os usuários em cada equipe para manter o contexto correto.",
              ],
            },
            {
              id: "doc-itens",
              title: "3. Cadastrar itens e locais",
              description:
                "Com itens e locais bem cadastrados, o controle do estoque fica confiável e fácil de consultar.",
              highlights: [
                "Base única de inventário",
                "Visibilidade de saldo por item",
                "Localização rápida dos materiais",
              ],
              steps: [
                "Abra Itens e clique em Novo item para cadastrar o material.",
                "Preencha nome, categoria e dados essenciais para identificação.",
                "Depois, cadastre os locais de estoque e organize onde cada item fica.",
              ],
            },
            {
              id: "doc-movimentos",
              title: "4. Registrar movimentações",
              description:
                "Toda entrada, saída e ajuste deve ser registrada aqui para manter saldo e histórico sempre corretos.",
              highlights: [
                "Histórico completo da operação",
                "Saldo atualizado em tempo real",
                "Rastreabilidade para conferência",
              ],
              steps: [
                "Acesse o módulo de Movimentações.",
                "Escolha o tipo da ação: entrada, saída, transferência, ajuste ou contagem.",
                "Selecione item, informe quantidade, revise e confirme para salvar no histórico.",
              ],
            },
            {
              id: "doc-relatorios",
              title: "5. Tomar decisão com relatórios",
              description:
                "Os relatórios mostram onde agir primeiro: o que repor, onde há perda e quais itens exigem atenção imediata.",
              highlights: [
                "Prioridade de reposição",
                "Leitura rápida de perdas",
                "Decisão baseada em dados reais",
              ],
              steps: [
                "Abra a área de Relatórios no menu principal.",
                "Filtre por equipe e período para analisar o cenário correto.",
                "Use os indicadores para decidir reposição, ajustes e próximos passos.",
              ],
            },
            {
              id: "doc-qr",
              title: "6. Usar QR Code e etiquetas",
              description:
                "Com etiquetas e leitura por celular, sua conferência fica mais rápida e com menos digitação manual.",
              highlights: [
                "Inventário ágil em campo",
                "Maior precisão na conferência",
                "Menos retrabalho operacional",
              ],
              steps: [
                "Gere e imprima as etiquetas dos itens no módulo de etiquetas.",
                "Durante a conferência, escaneie os códigos com o celular.",
                "Confirme os lançamentos para atualizar o estoque imediatamente.",
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

  useEffect(() => {
    setSelectedTopicIndex(0)
  }, [language])

  const selectedTopic = documentationSection.topics[selectedTopicIndex]
  const topicImage =
    selectedTopic.id === "doc-acesso" || selectedTopic.id === "doc-access"
      ? "/images/docs/app-home.png"
      : selectedTopic.id === "doc-equipes" || selectedTopic.id === "doc-teams"
        ? "/images/docs/app-team-selection.png"
        : selectedTopic.id === "doc-itens" || selectedTopic.id === "doc-items"
          ? "/images/docs/app-items.png"
          : selectedTopic.id === "doc-movimentos" || selectedTopic.id === "doc-movements"
            ? "/images/docs/app-movements.png"
            : selectedTopic.id === "doc-relatorios" || selectedTopic.id === "doc-reports"
              ? "/images/docs/app-reports.png"
              : selectedTopic.id === "doc-qr"
                ? "/images/docs/app-labels.png"
                : null

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
      <div className="grid gap-6 lg:grid-cols-[220px,minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav className="rounded-2xl border border-violet-200 bg-white p-3">
            <ul className="space-y-1">
              {documentationSection.topics.map((topic, index) => (
                <li key={topic.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedTopicIndex(index)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      selectedTopicIndex === index
                        ? "bg-violet-100 text-violet-800"
                        : "text-slate-700 hover:bg-violet-50 hover:text-violet-700"
                    }`}
                  >
                    {topic.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="space-y-4">
          <article id={selectedTopic.id} key={selectedTopic.id} className="rounded-2xl border border-violet-200 bg-white p-6 lg:p-7 scroll-mt-28">
            <h2 className="text-lg font-semibold text-slate-900">{selectedTopic.title}</h2>
            <div className="mt-3 grid gap-5 md:grid-cols-[minmax(0,1fr),440px] md:items-start">
              <div>
                <p className="text-sm leading-relaxed text-slate-600">{selectedTopic.description}</p>
              </div>
              {topicImage ? (
                <button type="button" onClick={() => setPreviewOpen(true)} className="block text-left">
                  <Image
                    src={topicImage}
                    alt={selectedTopic.title}
                    width={640}
                    height={360}
                    className="w-full rounded-xl border border-slate-200 transition-transform hover:scale-[1.01]"
                  />
                  <span className="mt-2 block text-xs text-slate-500">
                    {language === "pt" ? "Clique para ampliar" : language === "en" ? "Click to enlarge" : "Cliquez pour agrandir"}
                  </span>
                </button>
              ) : null}
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">{documentationSection.highlightsLabel}</p>
              {"steps" in selectedTopic ? (
                <ol className="mt-2 space-y-1">
                  {(selectedTopic.steps as string[]).map((step) => (
                    <li key={step} className="text-sm text-slate-600">
                      - {step}
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="mt-2 space-y-1">
                  {selectedTopic.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-slate-600">
                      - {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        </div>
      </div>
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-2 bg-white">
          <DialogTitle className="sr-only">{selectedTopic.title}</DialogTitle>
          {topicImage ? (
            <Image
              src={topicImage}
              alt={selectedTopic.title}
              width={1920}
              height={1080}
              className="w-full h-auto rounded-md"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
