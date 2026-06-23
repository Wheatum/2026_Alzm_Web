"use client";

import { useEffect, useMemo, useState } from "react";
import { MemoryEntry, sampleEntries, storageKey } from "@/lib/tracking";

export function useMemoryEntries() {
  const [entries, setEntries] = useState<MemoryEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      setEntries(sampleEntries);
      setLoaded(true);
      return;
    }

    try {
      setEntries(JSON.parse(raw) as MemoryEntry[]);
    } catch {
      setEntries(sampleEntries);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem(storageKey, JSON.stringify(entries));
    }
  }, [entries, loaded]);

  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => a.date.localeCompare(b.date)),
    [entries]
  );

  return {
    entries: sortedEntries,
    loaded,
    addEntry: (entry: MemoryEntry) => setEntries((current) => [...current, entry]),
    clearEntries: () => setEntries([])
  };
}
