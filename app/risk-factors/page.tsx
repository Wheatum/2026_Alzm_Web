import { ClinicalPrompt } from "@/components/ClinicalPrompt";
import { InfoGrid } from "@/components/InfoGrid";
import { PageHero } from "@/components/PageHero";
import { pageContent } from "@/lib/content";

export default function RiskFactorsPage() {
  const page = pageContent.riskFactors;
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <InfoGrid items={page.sections} />
      <ClinicalPrompt />
    </>
  );
}
