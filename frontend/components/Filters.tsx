"use client";

import { SlidersHorizontal } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const filters = ["filters.industry", "filters.competition", "filters.demand", "filters.country", "filters.time"];

export function Filters() {
  const { t } = useI18n();

  return (
    <div className="glass flex flex-col gap-3 rounded-lg p-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <SlidersHorizontal size={18} />
        {t("filters.title")}
      </div>
      <div className="flex flex-1 flex-wrap gap-2">
        {filters.map((filter) => (
          <button className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10" key={filter}>
            {t(filter)}
          </button>
        ))}
      </div>
    </div>
  );
}
