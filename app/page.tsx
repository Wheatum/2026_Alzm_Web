import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ClinicalPrompt } from "@/components/ClinicalPrompt";
import { medicalBoundary } from "@/lib/content";

const highlights = [
  {
    title: "Early awareness",
    body: "Learn common signs to document and discuss with a licensed medical professional."
  },
  {
    title: "Wellness tracking",
    body: "Record sleep, mood, focus, recall, and notes in your browser for personal reflection."
  },
  {
    title: "Prevention-oriented habits",
    body: "Explore brain health, nutrition, movement, and care planning topics in accessible language."
  }
];

const pathways = [
  "Track patterns over time without assigning a diagnosis",
  "Prepare better questions for appointments",
  "Support family conversations with clear, neutral language",
  "Understand lifestyle factors connected to cognitive wellness"
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-skySoft via-white to-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">
              Cognitive health awareness
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-ink sm:text-6xl">
              NestMemory
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-700">
              A calm education and wellness portal for memory awareness, brain health habits, and
              symptom monitoring notes you can bring to professional care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/memory-check"
                className="inline-flex justify-center rounded-md bg-teal px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-teal/90"
              >
                Start Memory Check
              </Link>
              <Link
                href="/resources"
                className="inline-flex justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-bold text-ink transition hover:bg-mist"
              >
                Explore Resources
              </Link>
            </div>
          </div>
          <div className="contrast-panel rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-md bg-mist p-5">
              <p className="text-sm font-bold text-ocean">Today&apos;s wellness snapshot</p>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["Sleep", "7h"],
                  ["Focus", "Steady"],
                  ["Mood", "Calm"],
                  ["Notes", "2"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md bg-white p-4">
                    <dt className="text-sm text-slate-600">{label}</dt>
                    <dd className="mt-1 text-2xl font-bold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-700">{medicalBoundary}</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold tracking-normal text-ink">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">
              Built for conversations
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink">
              Turn observations into organized notes.
            </h2>
          </div>
          <ul className="grid gap-3">
            {pathways.map((item) => (
              <li key={item} className="rounded-md border border-slate-200 bg-mist p-4 text-slate-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ClinicalPrompt />
    </>
  );
}
