import { MemoryCheckForm } from "@/components/MemoryCheckForm";
import { PageHero } from "@/components/PageHero";

export default function MemoryCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal wellness log"
        title="Memory Check"
        intro="Create a structured, non-diagnostic check-in that can help you notice patterns and prepare for professional conversations."
      />
      <MemoryCheckForm />
    </>
  );
}
