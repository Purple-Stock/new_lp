const VALID_PRIORITIES = [
  "0.0",
  "0.1",
  "0.2",
  "0.3",
  "0.4",
  "0.5",
  "0.6",
  "0.7",
  "0.8",
  "0.9",
  "1.0",
  "0",
  "1",
];

const VALID_CHANGE_FREQS = [
  "always",
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "never",
];

const REQUIRED_LLMS_SECTIONS = [
  "Sobre",
  "Funcionalidades Principais",
  "Indústrias Atendidas",
  "Recursos e Ferramentas",
  "Artigos e Conteúdo",
  "Informações Técnicas",
  "Tecnologias",
  "Suporte e Contato",
];

const REQUIRED_FEATURE_LINKS = [
  "inventory-control",
  "inventory-app",
  "qr-code-management",
  "barcoding",
  "equipment-management",
  "factory-management",
  "warehouse-control",
  "analytics-reporting",
  "purchase-sales",
];

const REQUIRED_INDUSTRY_LINKS = [
  "retail",
  "manufacturing",
  "logistics",
  "food",
  "pharmaceutical",
  "automotive",
  "construction",
  "technology",
  "audiovisual",
];

function unique(values) {
  return Array.from(new Set(values));
}

function analyzeSitemapXml(xml) {
  const urlMatches = xml.match(/<url>([\s\S]*?)<\/url>/g) || [];
  const urls = [];
  const priorities = [];
  const changeFreqs = [];
  const duplicates = [];

  for (const match of urlMatches) {
    const urlMatch = match.match(/<loc>(.*?)<\/loc>/);
    const priorityMatch = match.match(/<priority>(.*?)<\/priority>/);
    const changeFreqMatch = match.match(/<changefreq>(.*?)<\/changefreq>/);

    if (!urlMatch) {
      continue;
    }

    const url = urlMatch[1];
    if (urls.includes(url) && !duplicates.includes(url)) {
      duplicates.push(url);
    }

    urls.push(url);

    if (priorityMatch) {
      priorities.push(priorityMatch[1]);
    }

    if (changeFreqMatch) {
      changeFreqs.push(changeFreqMatch[1]);
    }
  }

  return {
    urls,
    priorities: unique(priorities),
    changeFreqs: unique(changeFreqs),
    duplicates,
    uniqueUrlCount: new Set(urls).size,
    invalidPriorities: unique(priorities).filter(
      (value) => !VALID_PRIORITIES.includes(value)
    ),
    invalidChangeFreqs: unique(changeFreqs).filter(
      (value) => !VALID_CHANGE_FREQS.includes(value)
    ),
  };
}

function analyzeLlmsContent(content) {
  const lines = content.split("\n");
  const links = Array.from(
    content.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g),
    (match) => match[2]
  );

  const missingSections = REQUIRED_LLMS_SECTIONS.filter(
    (section) => !content.includes(`## ${section}`)
  );
  const missingFeatures = REQUIRED_FEATURE_LINKS.filter(
    (feature) => !content.includes(`/features/${feature}`)
  );
  const missingIndustries = REQUIRED_INDUSTRY_LINKS.filter(
    (industry) => !content.includes(`/industrias/${industry}`)
  );

  return {
    totalLines: lines.length,
    headers: lines.filter((line) => line.startsWith("#")).length,
    sections: lines.filter((line) => line.startsWith("## ")).length,
    subsections: lines.filter((line) => line.startsWith("### ")).length,
    links,
    missingSections,
    missingFeatures,
    missingIndustries,
    hasDescription: content.includes(
      "Plataforma avançada de gestão de estoque"
    ),
    hasTechInfo: content.includes("Next.js") && content.includes("React"),
    hasIndustryContext: content.includes("Indústrias Atendidas"),
  };
}

module.exports = {
  REQUIRED_FEATURE_LINKS,
  REQUIRED_INDUSTRY_LINKS,
  REQUIRED_LLMS_SECTIONS,
  VALID_CHANGE_FREQS,
  VALID_PRIORITIES,
  analyzeLlmsContent,
  analyzeSitemapXml,
};
