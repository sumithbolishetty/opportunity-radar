"use client";

import { IndustryChart } from "@/components/Charts";
import { trendRows } from "@/services/mockData";
import { useI18n } from "@/lib/i18n";

export default function TrendsPage() {
  const { t, trendText } = useI18n();
  const statLabels = ["trends.tech", "trends.industries", "trends.markets", "trends.research"];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <p className="text-sm text-accent">{t("trends.eyebrow")}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{t("trends.title")}</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <IndustryChart />
        <section className="glass rounded-lg p-5">
          <h2 className="text-lg font-semibold">{t("trends.signals")}</h2>
          <div className="mt-4 space-y-3">
            {trendRows.map((row, index) => {
              const copy = trendText(index);
              return (
              <div className="rounded-md border border-white/10 bg-white/5 p-4" key={row.label}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">{copy.label}</p>
                    <p className="text-sm text-slate-400">{copy.category} {t("trends.growth")} {row.growth}</p>
                  </div>
                  <span className="text-accent">{row.signal}</span>
                </div>
              </div>
            )})}
          </div>
        </section>
      </div>
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        {statLabels.map((label) => (
          <div className="glass rounded-lg p-5" key={label}>
            <p className="text-sm text-slate-400">{t(label)}</p>
            <p className="mt-3 text-2xl font-semibold">{Math.floor(72 + label.length)}%</p>
          </div>
        ))}
      </section>
    </main>
  );
}
