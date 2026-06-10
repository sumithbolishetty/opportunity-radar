"use client";

import { useEffect, useState } from "react";

const storageKey = "opportunity-radar-saved";

export function useSavedOpportunities() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      setSavedIds(JSON.parse(raw) as string[]);
    }
  }, []);

  function toggle(id: string) {
    setSavedIds((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  return { savedIds, toggle };
}
