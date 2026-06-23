export function ClinicalPrompt() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-normal">When concerns appear, bring notes.</h2>
            <p className="mt-2 max-w-3xl text-slate-100">
              Share timing, examples, medication changes, sleep patterns, mood shifts, and daily
              impacts with a licensed medical professional.
            </p>
          </div>
          <a
            href="/memory-check"
            className="inline-flex justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-ink"
          >
            Start a check-in
          </a>
        </div>
      </div>
    </section>
  );
}
