export function InfoGrid({
  items
}: {
  items: ReadonlyArray<{ title: string; body: string }>;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="contrast-panel rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold tracking-normal text-ink">{item.title}</h2>
            <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
