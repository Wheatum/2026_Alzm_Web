"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart
} from "recharts";
import { useMemoryEntries } from "@/hooks/useMemoryEntries";
import { getAverage } from "@/lib/tracking";

export function DashboardCharts() {
  const { entries, clearEntries } = useMemoryEntries();
  const data = entries.map((entry) => ({
    ...entry,
    average: getAverage(entry)
  }));
  const latest = data[data.length - 1];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-4">
        {[
          ["Entries", data.length ? String(data.length) : "0"],
          ["Latest average", latest ? latest.average.toFixed(1) : "No data"],
          ["Latest sleep", latest ? `${latest.sleep}/5` : "No data"],
          ["Latest focus", latest ? `${latest.focus}/5` : "No data"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-slate-600">{label}</p>
            <p className="mt-2 text-3xl font-bold text-ink">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="contrast-panel rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold tracking-normal text-ink">Wellness trend</h2>
          <p className="mt-2 text-sm text-slate-600">Average of recall, focus, mood, and sleep.</p>
          <div className="mt-5 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ left: 0, right: 8, top: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#dbe7ee" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis domain={[1, 5]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="average"
                  stroke="#168b87"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  name="Average"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="contrast-panel rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold tracking-normal text-ink">Latest check-in</h2>
          <p className="mt-2 text-sm text-slate-600">Category scores from the most recent entry.</p>
          <div className="mt-5 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={
                  latest
                    ? [
                        { label: "Recall", score: latest.recall },
                        { label: "Focus", score: latest.focus },
                        { label: "Mood", score: latest.mood },
                        { label: "Sleep", score: latest.sleep }
                      ]
                    : []
                }
                margin={{ left: 0, right: 8, top: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#dbe7ee" />
                <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                <YAxis domain={[1, 5]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="score" fill="#1f7a9a" radius={[6, 6, 0, 0]} name="Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>

      <article className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-normal text-ink">Recent notes</h2>
            <p className="mt-1 text-sm text-slate-600">Private to this browser in this prototype.</p>
          </div>
          <button
            type="button"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-ink hover:bg-mist"
            onClick={clearEntries}
          >
            Clear local entries
          </button>
        </div>
        <div className="mt-5 space-y-3">
          {data
            .slice()
            .reverse()
            .map((entry) => (
              <div key={entry.id} className="rounded-md bg-mist p-4">
                <p className="font-semibold text-ink">
                  {entry.date} · Average {entry.average.toFixed(1)}
                </p>
                <p className="mt-2 text-slate-700">{entry.notes || "No note entered."}</p>
              </div>
            ))}
          {!data.length ? <p className="text-slate-700">No entries yet.</p> : null}
        </div>
      </article>
    </section>
  );
}
