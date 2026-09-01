export type ConstructionClusterPost = {
  slug: string;
  href: string;
  label: string;
};

/** Construction SEO cluster — industry page, glossary and resource links. */
export const CONSTRUCTION_CLUSTER_POSTS: ConstructionClusterPost[] = [
  {
    slug: "almoxarifado-de-obra-controle-materiais-canteiro",
    href: "/blog/almoxarifado-de-obra-controle-materiais-canteiro",
    label: "Almoxarifado de obra: materiais no canteiro",
  },
  {
    slug: "controle-ferramentas-obra-check-in-canteiro",
    href: "/blog/controle-ferramentas-obra-check-in-canteiro",
    label: "Controle de ferramentas de obra com check-in",
  },
  {
    slug: "transferencia-materiais-entre-canteiros",
    href: "/blog/transferencia-materiais-entre-canteiros",
    label: "Transferência de materiais entre canteiros",
  },
];

export const CONSTRUCTION_INDUSTRY_HREF = "/industrias/construction";
