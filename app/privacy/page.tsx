import { PageHero } from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This prototype keeps wellness entries in your browser's local storage and does not transmit them to a server."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 leading-7 text-slate-700">
          Do not enter emergency information or sensitive medical records into this demo. Browser
          storage can be cleared by you or by browser settings.
        </div>
      </section>
    </>
  );
}
