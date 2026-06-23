import { medicalBoundary } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  intro
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-gradient-to-b from-mist to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">{intro}</p>
          <p className="mt-5 rounded-md border border-teal/30 bg-white p-4 text-sm leading-6 text-slate-700">
            {medicalBoundary}
          </p>
        </div>
      </div>
    </section>
  );
}
