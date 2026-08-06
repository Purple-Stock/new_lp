import {
  getRelatedIndustries,
  industryStats,
  type IndustryRecord,
} from "@/lib/industries-data";
import { getIndustrySocialProof } from "@/data/industry-social-proof";
import { INDUSTRY_DETAIL_DEFAULT_STAT } from "@/lib/industry-detail-helpers";
import { IndustryDetailHero } from "@/components/industry-detail-hero";
import { IndustryDetailBody } from "@/components/industry-detail-body";
import { IndustryDetailFooter } from "@/components/industry-detail-footer";

type IndustryDetailViewProps = {
  industry: IndustryRecord;
};

export function IndustryDetailView({ industry }: IndustryDetailViewProps) {
  const heroStat = industryStats[industry.slug] ?? INDUSTRY_DETAIL_DEFAULT_STAT;
  const relatedIndustries = getRelatedIndustries(industry.slug);
  const proof = getIndustrySocialProof(industry.slug);

  return (
    <main className="relative pb-20">
      <IndustryDetailHero industry={industry} heroStat={heroStat} />
      <IndustryDetailBody industry={industry} proof={proof} />
      <IndustryDetailFooter
        industry={industry}
        relatedIndustries={relatedIndustries}
      />
    </main>
  );
}
