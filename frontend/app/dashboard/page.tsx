"use client";

import { Activity, BarChart3, Globe2, Target } from "lucide-react";
import { GrowthChart, IndustryChart } from "@/components/Charts";
import { MetricCard } from "@/components/MetricCard";
import { opportunities } from "@/services/mockData";
import { useI18n } from "@/lib/i18n";

export default function DashboardPage() {
  const { opportunityText, t } = useI18n();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <p className="text-sm text-accent">{t("dashboard.eyebrow")}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{t("dashboard.title")}</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard icon={Target} label={t("dashboard.total")} value="1,284" change="+18%" />
        <MetricCard icon={BarChart3} label={t("dashboard.industries")} value="42" change="+7" />
        <MetricCard icon={Globe2} label={t("dashboard.markets")} value="19" change="+5" />
        <MetricCard icon={Activity} label={t("dashboard.score")} value="87" change="+11%" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <GrowthChart />
        <IndustryChart />
      </div>
      <section className="mt-6 glass rounded-lg p-5">
        <h2 className="text-lg font-semibold">{t("dashboard.recent")}</h2>
        <div className="mt-4 divide-y divide-white/10">
          {opportunities.map((opportunity) => {
            const copy = opportunityText(opportunity.id);
            return (
            <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between" key={opportunity.id}>
              <div>
                <p className="font-medium">{copy.title}</p>
                <p className="text-sm text-slate-400">{copy.industry} {t("dashboard.detected")} {opportunity.dateDetected}</p>
              </div>
              <span className="rounded-md bg-accent/10 px-3 py-1 text-sm text-accent">{t("dashboard.scoreLabel")} {opportunity.demandScore}</span>
            </div>
          )})}
        </div>
      </section>
    </main>
  );
}
