# Handoff Analytics P0 - Landing Orgânica -> Pago

## Escopo
Padronização de eventos para rastrear aquisição orgânica e conversão de receita entre site (`new_lp`) e app transacional.

## Eventos oficiais (PRD)
1. `seo_landing_view`
2. `seo_cta_click`
3. `signup_started`
4. `trial_activated`
5. `checkout_started`
6. `paid_conversion`

## Payload mínimo padrão
- `page_path`
- `page_type`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `query_cluster`
- `locale`
- `device_type`

## Implementação no `new_lp`
- Biblioteca central: [lib/analytics.ts](/Users/matheuspuppe/Desktop/Projetos/PurpleStock/purple_stock_stack/new_lp/lib/analytics.ts)
- Tracker de rota: [components/route-view-tracker.tsx](/Users/matheuspuppe/Desktop/Projetos/PurpleStock/purple_stock_stack/new_lp/components/route-view-tracker.tsx)
- Compatibilidade por 1 sprint: dual-fire legado (`view_landing`, `click_cta`) ativo.

## Contrato para app transacional
No app (`app.purplestock.com.br`), ao receber tráfego do site:
1. Ao iniciar cadastro: disparar `signup_started`.
2. Ao ativar trial: disparar `trial_activated`.
3. Ao iniciar checkout: disparar `checkout_started`.
4. Ao confirmar pagamento: disparar `paid_conversion`.

Todos os eventos devem preservar contexto de origem quando disponível:
- UTMs (`utm_source`, `utm_medium`, `utm_campaign`)
- `page_path` de origem do site
- `query_cluster` quando enviado pelo CTA

## Recomendação de linkagem
Para CTAs do site -> app, usar parâmetro explícito de origem de campanha em páginas de recurso e manter UTMs quando houver campanha ativa.

## Critério de pronto do handoff
- Evento de topo (`seo_landing_view`) validado no site.
- Evento de meio (`seo_cta_click`) validado nos CTAs principais.
- Contrato de fundo de funil documentado para implementação no app.
