import { PageHero } from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        intro="NestMemory is provided as an educational wellness resource and is not a substitute for medical care."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 leading-7 text-slate-700">
          By using this prototype, you agree that information shown here is general education only.
          Consult a licensed medical professional for evaluation, diagnosis, or treatment decisions.
        </div>
      </section>
    </>
  );
}
