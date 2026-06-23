import { PageHero } from "@/components/PageHero";
import { resourceLinks } from "@/lib/content";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointment preparation"
        title="Resources"
        intro="Use these prompts to organize observations and prepare for informed conversations with healthcare professionals."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {resourceLinks.map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold tracking-normal text-ink">{item}</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Capture examples, dates, questions, and next steps so a licensed clinician can
                evaluate concerns in context.
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
