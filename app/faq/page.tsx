import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/content";

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Clear expectations"
        title="FAQ"
        intro="Straight answers about what NestMemory is, what it is not, and how to use tracking notes responsibly."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer text-lg font-bold tracking-normal text-ink">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
