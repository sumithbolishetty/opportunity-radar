"use client";

import { Button } from "@/components/Button";
import { opportunities } from "@/services/mockData";
import { useI18n } from "@/lib/i18n";

export default function OpportunityDetailsPage({ params }: { params: { id: string } }) {
  const { opportunityText, t } = useI18n();
  const opportunity = opportunities.find((item) => item.id === params.id);

  if (!opportunity) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="text-slate-300">{t("details.notFound")}</p>
      </main>
    );
  }

  const copy = opportunityText(opportunity.id);
  const sections = [
    [t("details.problem"), copy.problem],
    [t("details.why"), copy.whyItExists],
    [t("details.marketDemand"), t("details.demandSentence").replace("{score}", String(opportunity.demandScore))],
    [t("details.revenueModel"), copy.revenueModel],
    [t("details.marketSize"), copy.marketSizeEstimate],
    [t("details.growth"), copy.growthForecast],
    [t("details.recommendation"), t("details.recommendationBody")]
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section>
          <p className="text-sm text-accent">{copy.industry}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{copy.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{copy.description}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sections.map(([title, body]) => (
              <article className="glass rounded-lg p-5" key={title}>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <List title={t("details.users")} items={copy.potentialUsers} />
            <List title={t("details.competitors")} items={copy.competitors} />
            <List title={t("details.risks")} items={copy.risks} />
          </div>
        </section>
        <aside className="glass h-fit rounded-lg p-5">
          <h2 className="text-lg font-semibold">{t("details.insights")}</h2>
          <div className="mt-4 space-y-3">
            {copy.aiInsights.map((insight) => (
              <p className="rounded-md bg-white/5 p-3 text-sm leading-6 text-slate-300" key={insight}>{insight}</p>
            ))}
          </div>
          <div className="mt-5 grid gap-3">
            <Button>{t("details.businessPlan")}</Button>
            <Button variant="ghost">{t("details.mvp")}</Button>
            <Button variant="ghost">{t("details.pitch")}</Button>
          </div>
        </aside>
      </div>
    </main>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="glass rounded-lg p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
