import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About NestMemory | Cognitive Wellness Education",
  description:
    "Learn about NestMemory’s mission to support brain health awareness, educational wellness tools, and early conversations with healthcare professionals.",
  openGraph: {
    title: "About NestMemory | Cognitive Wellness Education",
    description:
      "Learn about NestMemory’s mission to support brain health awareness, educational wellness tools, and early conversations with healthcare professionals.",
    type: "website",
    url: "https://your-domain.com/about",
    images: [
      {
        url: "/hero_1280.webp",
        width: 1280,
        height: 720,
        alt: "Elderly Asian woman reading in a bright library setting"
      }
    ]
  }
};

const highlights = [
  "Educational memory awareness tools",
  "Brain health resources",
  "Nutrition guidance",
  "Exercise recommendations",
  "Cognitive wellness tracking",
  "Support for proactive healthcare discussions"
];

const approachSteps = [
  {
    title: "Learn",
    description:
      "Understand cognitive wellness and healthy aging through accessible educational resources."
  },
  {
    title: "Track",
    description:
      "Monitor lifestyle habits and self-reported wellness metrics over time."
  },
  {
    title: "Discuss",
    description:
      "Encourage conversations with qualified healthcare professionals when concerns arise."
  }
];

const habits = [
  "Physical activity",
  "Healthy nutrition",
  "Cognitive engagement",
  "Quality sleep",
  "Social connection",
  "Stress management"
];

export default function AboutPage() {
  return (
    <div className="bg-white text-ink">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/hero_1280.webp"
            alt="Elderly Asian woman reading a book in a bright library setting"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              About NestMemory
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About NestMemory
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-100/90 sm:text-xl">
              Empowering individuals and families with educational tools, brain health resources,
              and cognitive wellness tracking.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/memory-check"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-teal/90"
              >
                Start Memory Check
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Explore Brain Health Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
              Our Mission
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Helping families feel informed and confident about cognitive wellness.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              NestMemory was created to help individuals become more informed about cognitive
              wellness, healthy aging, and potential early memory changes. Our goal is to provide
              accessible educational resources, encourage healthy lifestyle habits, and support
              informed conversations with healthcare professionals.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              NestMemory focuses on awareness, prevention, and wellness tracking—not diagnosis.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-mist p-8 shadow-soft">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
              <span aria-hidden="true" className="text-2xl">
                📘
              </span>
            </div>
            <h3 className="text-xl font-semibold text-ink">Lifelong learning for brain health</h3>
            <p className="mt-4 text-slate-700 leading-7">
              A trusted source of clear, compassionate guidance for people who want to learn more
              about memory, aging, and everyday wellness.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-lg font-semibold text-ink">{highlight}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                Why We Built NestMemory
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Supporting informed choices before concerns grow.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Many people notice occasional memory changes and are unsure when to seek professional
                guidance. NestMemory aims to provide reliable educational information, wellness
                tracking tools, and evidence-based lifestyle resources that help users better
                understand factors that may influence brain health.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Educational memory awareness tools",
                "Brain health resources",
                "Nutrition guidance",
                "Exercise recommendations"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-slate-200 bg-mist p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="rounded-[2rem] bg-slate-50 p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
              Our Approach
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Learn. Track. Discuss.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {approachSteps.map((step, index) => (
                <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-teal/10 text-teal font-bold">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-slate-700 leading-7">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="rounded-[2rem] border border-teal/20 bg-teal/10 p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">What NestMemory Does Not Do</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Clear boundaries for education and wellness.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Does not diagnose Alzheimer's disease",
                "Does not diagnose dementia",
                "Does not replace healthcare professionals",
                "Does not provide medical treatment",
                "Does not provide emergency medical advice",
                "Does not predict future disease development"
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-white/80 px-5 py-4 text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-700">
              All health concerns should be discussed with qualified medical professionals.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                Supporting Healthy Brain Habits
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Evidence-based habits for everyday wellness.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {habits.map((item) => (
                <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20 rounded-[2rem] border border-slate-200 bg-mist p-10 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">Our Vision</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                A future where families feel empowered about cognitive wellness.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                We envision a future where individuals and families have greater access to trustworthy
                information about cognitive wellness and feel empowered to take proactive steps toward
                supporting lifelong brain health.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="h-full rounded-[1.75rem] border border-slate-200 bg-skySoft p-8">
                <p className="text-xl font-semibold text-ink">Together, we make brain health easier to understand.</p>
                <p className="mt-4 text-slate-700 leading-7">
                  NestMemory is built for people who want to learn, track, and speak up with confidence.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                Start Your Brain Health Journey
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Explore educational resources, track habits, and learn more about cognitive wellness.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/memory-check"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-teal/90"
              >
                Start Memory Check
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-ink transition hover:bg-mist"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <section className="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-slate-700 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Disclaimer</h2>
          <p className="mt-4 leading-8">
            NestMemory is an educational and wellness resource only. Information provided on this
            website is not created by a licensed physician, does not constitute medical advice, and is
            not intended to replace consultation, diagnosis, or treatment from a qualified healthcare
            professional. If you are experiencing symptoms or have concerns about memory, cognition,
            or health, please consult a licensed medical professional.
          </p>
        </section>
      </main>
    </div>
  );
}
