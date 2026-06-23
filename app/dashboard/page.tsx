import { DashboardCharts } from "@/components/DashboardCharts";
import { PageHero } from "@/components/PageHero";

export default function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Symptom monitoring"
        title="Monitoring Dashboard"
        intro="Review your local check-in history, notes, and wellness trends. These charts are for personal awareness only."
      />
      <DashboardCharts />
    </>
  );
}
