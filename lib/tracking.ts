export type MemoryEntry = {
  id: string;
  date: string;
  recall: number;
  focus: number;
  mood: number;
  sleep: number;
  notes: string;
};

export const storageKey = "nestmemory.entries";

export const sampleEntries: MemoryEntry[] = [
  {
    id: "sample-1",
    date: "2026-06-07",
    recall: 3,
    focus: 3,
    mood: 4,
    sleep: 3,
    notes: "Felt steady after a morning walk."
  },
  {
    id: "sample-2",
    date: "2026-06-10",
    recall: 4,
    focus: 3,
    mood: 4,
    sleep: 4,
    notes: "Slept better and felt more organized."
  },
  {
    id: "sample-3",
    date: "2026-06-13",
    recall: 3,
    focus: 4,
    mood: 3,
    sleep: 4,
    notes: "A few word-finding moments during the afternoon."
  }
];

export function getAverage(entry: MemoryEntry) {
  return Number(((entry.recall + entry.focus + entry.mood + entry.sleep) / 4).toFixed(1));
}
