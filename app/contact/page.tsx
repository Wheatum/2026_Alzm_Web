import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact"
        intro="For this prototype, contact details are placeholders. For medical questions, please contact a licensed healthcare professional."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="font-semibold text-ink">General inquiries</p>
          <p className="mt-2 text-slate-700">hello@nestmemory.example</p>
        </div>
      </section>
    </>
  );
}
