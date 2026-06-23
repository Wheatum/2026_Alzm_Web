"use client";

import { FormEvent, useState } from "react";
import { useMemoryEntries } from "@/hooks/useMemoryEntries";
import { MemoryEntry } from "@/lib/tracking";

const sliders = [
  { key: "recall", label: "Recall confidence", help: "How steady did recall feel today?" },
  { key: "focus", label: "Focus", help: "How easy was it to stay with tasks?" },
  { key: "mood", label: "Mood", help: "How positive or settled did mood feel?" },
  { key: "sleep", label: "Sleep quality", help: "How restorative was sleep?" }
] as const;

type SliderKey = (typeof sliders)[number]["key"];

const initialScores: Record<SliderKey, number> = {
  recall: 3,
  focus: 3,
  mood: 3,
  sleep: 3
};

export function MemoryCheckForm() {
  const { addEntry } = useMemoryEntries();
  const [scores, setScores] = useState(initialScores);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  function updateScore(key: SliderKey, value: number) {
    setScores((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const entry: MemoryEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString().slice(0, 10),
      ...scores,
      notes
    };
    addEntry(entry);
    setNotes("");
    setSaved(true);
  }

  const average = (scores.recall + scores.focus + scores.mood + scores.sleep) / 4;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <form
          onSubmit={onSubmit}
          className="contrast-panel rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold tracking-normal text-ink">Daily memory check-in</h2>
          <p className="mt-2 text-slate-700">
            Rate how today felt. This is a personal wellness log, not a cognitive test or diagnosis.
          </p>
          <div className="mt-6 space-y-6">
            {sliders.map((slider) => (
              <div key={slider.key}>
                <div className="flex items-center justify-between gap-4">
                  <label htmlFor={slider.key} className="font-semibold text-ink">
                    {slider.label}
                  </label>
                  <span className="rounded-md bg-mist px-3 py-1 text-sm font-bold text-ink">
                    {scores[slider.key]} / 5
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{slider.help}</p>
                <input
                  id={slider.key}
                  name={slider.key}
                  type="range"
                  min="1"
                  max="5"
                  value={scores[slider.key]}
                  onChange={(event) => updateScore(slider.key, Number(event.target.value))}
                  className="mt-3 w-full accent-teal"
                  aria-valuetext={`${scores[slider.key]} out of 5`}
                />
              </div>
            ))}
            <div>
              <label htmlFor="notes" className="font-semibold text-ink">
                Notes for a future appointment
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={5}
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-ink"
                placeholder="Examples: missed appointments, word-finding, sleep changes, medication changes, stressors..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-md bg-teal px-5 py-3 font-bold text-white hover:bg-teal/90"
          >
            Save check-in
          </button>
          {saved ? (
            <p className="mt-4 rounded-md border border-teal/30 bg-mist p-3 text-sm text-ink" role="status">
              Saved in this browser. Bring recurring concerns to a licensed medical professional.
            </p>
          ) : null}
        </form>

        <aside className="contrast-panel rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-normal text-ink">How to read this</h2>
          <div className="mt-5 rounded-md bg-mist p-5">
            <p className="text-sm font-semibold text-slate-700">Current wellness average</p>
            <p className="mt-2 text-5xl font-bold text-ink">{average.toFixed(1)}</p>
            <p className="mt-2 text-sm text-slate-600">Out of 5 across today&apos;s self-ratings</p>
          </div>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Use the same time of day when possible.</li>
            <li>Record concrete examples, not just scores.</li>
            <li>Discuss sudden, worsening, or concerning changes with a licensed clinician.</li>
            <li>This tool does not predict disease or recommend treatment.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
